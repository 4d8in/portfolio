"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { detectDeviceType, detectConnectionSpeed } from './utils'

// Types pour le système de contexte UX
export interface UserContext {
  deviceType: 'mobile' | 'tablet' | 'desktop'
  connectionSpeed: 'slow' | 'fast'
  timeAvailable: 'quick' | 'explorer' | 'deep-dive'
  userType: 'recruiter' | 'client' | 'developer' | 'casual'
  accessibilityNeeds: string[]
  isFirstVisit: boolean
  preferredLanguage: string
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night'
}

export interface AdaptiveUI {
  contentDensity: 'minimal' | 'standard' | 'detailed'
  animationLevel: 'none' | 'subtle' | 'full'
  navigationStyle: 'simple' | 'advanced'
  interactionMode: 'touch' | 'mouse' | 'keyboard' | 'voice'
  colorScheme: 'light' | 'dark' | 'auto'
  fontSize: 'small' | 'medium' | 'large'
}

export interface UXContextType {
  userContext: UserContext
  adaptiveUI: AdaptiveUI
  updateUserContext: (updates: Partial<UserContext>) => void
  updateAdaptiveUI: (updates: Partial<AdaptiveUI>) => void
  detectUserType: () => void
  optimizeForAccessibility: () => void
}

// Contexte par défaut
const defaultUserContext: UserContext = {
  deviceType: 'desktop',
  connectionSpeed: 'fast',
  timeAvailable: 'explorer',
  userType: 'casual',
  accessibilityNeeds: [],
  isFirstVisit: true,
  preferredLanguage: 'fr',
  timeOfDay: 'afternoon'
}

const defaultAdaptiveUI: AdaptiveUI = {
  contentDensity: 'standard',
  animationLevel: 'full',
  navigationStyle: 'advanced',
  interactionMode: 'mouse',
  colorScheme: 'auto',
  fontSize: 'medium'
}

// Création du contexte
const UXContext = createContext<UXContextType | undefined>(undefined)

// Hook personnalisé pour utiliser le contexte
export function useUX() {
  const context = useContext(UXContext)
  if (context === undefined) {
    throw new Error('useUX must be used within a UXProvider')
  }
  return context
}

// Provider du contexte UX
interface UXProviderProps {
  children: ReactNode
}

export function UXProvider({ children }: UXProviderProps) {
  const [userContext, setUserContext] = useState<UserContext>(defaultUserContext)
  const [adaptiveUI, setAdaptiveUI] = useState<AdaptiveUI>(defaultAdaptiveUI)

  // Détection automatique du contexte utilisateur
  useEffect(() => {
    const detectContext = () => {
      const deviceType = detectDeviceType()
      const connectionSpeed = detectConnectionSpeed()
      const timeOfDay = getTimeOfDay()
      const isFirstVisit = !localStorage.getItem('portfolio-visited')
      
      if (isFirstVisit) {
        localStorage.setItem('portfolio-visited', 'true')
      }

      setUserContext(prev => ({
        ...prev,
        deviceType,
        connectionSpeed,
        timeOfDay,
        isFirstVisit
      }))
    }

    detectContext()
    
    // Réécouter les changements de taille d'écran
    const handleResize = () => {
      const deviceType = detectDeviceType()
      setUserContext(prev => ({ ...prev, deviceType }))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Adaptation automatique de l'interface
  useEffect(() => {
    const adaptUI = () => {
      const newAdaptiveUI: Partial<AdaptiveUI> = {}

      // Adaptation selon le type d'appareil
      if (userContext.deviceType === 'mobile') {
        newAdaptiveUI.contentDensity = 'minimal'
        newAdaptiveUI.navigationStyle = 'simple'
        newAdaptiveUI.interactionMode = 'touch'
        newAdaptiveUI.animationLevel = userContext.connectionSpeed === 'slow' ? 'none' : 'subtle'
      } else if (userContext.deviceType === 'tablet') {
        newAdaptiveUI.contentDensity = 'standard'
        newAdaptiveUI.navigationStyle = 'simple'
        newAdaptiveUI.interactionMode = 'touch'
        newAdaptiveUI.animationLevel = 'subtle'
      }

      // Adaptation selon la vitesse de connexion
      if (userContext.connectionSpeed === 'slow') {
        newAdaptiveUI.animationLevel = 'none'
        newAdaptiveUI.contentDensity = 'minimal'
      }

      // Adaptation selon les besoins d'accessibilité
      if (userContext.accessibilityNeeds.includes('reduced-motion')) {
        newAdaptiveUI.animationLevel = 'none'
      }
      if (userContext.accessibilityNeeds.includes('high-contrast')) {
        newAdaptiveUI.colorScheme = 'dark'
      }
      if (userContext.accessibilityNeeds.includes('large-text')) {
        newAdaptiveUI.fontSize = 'large'
      }

      setAdaptiveUI(prev => ({ ...prev, ...newAdaptiveUI }))
    }

    adaptUI()
  }, [userContext])

  // Fonctions de mise à jour
  const updateUserContext = (updates: Partial<UserContext>) => {
    setUserContext(prev => ({ ...prev, ...updates }))
  }

  const updateAdaptiveUI = (updates: Partial<AdaptiveUI>) => {
    setAdaptiveUI(prev => ({ ...prev, ...updates }))
  }

  // Détection du type d'utilisateur basée sur le referrer et les patterns
  const detectUserType = () => {
    if (typeof window === 'undefined') return

    const referrer = document.referrer
    const urlParams = new URLSearchParams(window.location.search)

    let userType: UserContext['userType'] = 'casual'

    // Détection basée sur le referrer
    if (referrer.includes('linkedin.com')) {
      userType = 'recruiter'
    } else if (referrer.includes('github.com')) {
      userType = 'developer'
    } else if (referrer.includes('google.com') && urlParams.get('q')?.includes('développeur')) {
      userType = 'client'
    }

    // Détection basée sur l'URL
    if (urlParams.get('utm_source') === 'linkedin') {
      userType = 'recruiter'
    } else if (urlParams.get('utm_source') === 'github') {
      userType = 'developer'
    }

    // Détection basée sur le user agent (mobile = plus probablement casual)
    if (userContext.deviceType === 'mobile' && !referrer) {
      userType = 'casual'
    }

    updateUserContext({ userType })
  }

  // Optimisation pour l'accessibilité
  const optimizeForAccessibility = () => {
    const needs: string[] = []

    // Détection automatique des préférences système
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      needs.push('reduced-motion')
    }
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      needs.push('high-contrast')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      needs.push('dark-mode')
    }

    updateUserContext({ accessibilityNeeds: needs })
  }

  // Détection du type d'utilisateur au montage
  useEffect(() => {
    detectUserType()
    optimizeForAccessibility()
  }, [detectUserType, optimizeForAccessibility])

  const value: UXContextType = {
    userContext,
    adaptiveUI,
    updateUserContext,
    updateAdaptiveUI,
    detectUserType,
    optimizeForAccessibility
  }

  return (
    <UXContext.Provider value={value}>
      {children}
    </UXContext.Provider>
  )
}

// Fonction utilitaire pour déterminer l'heure de la journée
function getTimeOfDay(): UserContext['timeOfDay'] {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 17) return 'afternoon'
  if (hour >= 17 && hour < 21) return 'evening'
  return 'night'
} 