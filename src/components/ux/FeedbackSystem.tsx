'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUX } from '@/lib/context'
import { CheckCircle, AlertCircle, Info, X, Star } from 'lucide-react'

interface FeedbackMessage {
  id: string
  type: 'success' | 'error' | 'info' | 'achievement'
  title: string
  message: string
  duration?: number
  icon?: React.ComponentType<{ className?: string }>
}

export default function FeedbackSystem() {
  const { adaptiveUI } = useUX()
  const [messages, setMessages] = useState<FeedbackMessage[]>([])

  // Fonction pour supprimer un message
  const removeFeedback = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id))
  }

  // Fonction pour ajouter un message de feedback
  const addFeedback = (feedback: Omit<FeedbackMessage, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newMessage = { ...feedback, id }
    
    setMessages(prev => [...prev, newMessage])

    // Auto-suppression après la durée spécifiée
    if (feedback.duration !== 0) {
      setTimeout(() => {
        removeFeedback(id)
      }, feedback.duration || 5000)
    }
  }

  // Exposer les fonctions globalement pour les tests
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as Window & typeof globalThis & {
        addFeedback?: (feedback: Omit<FeedbackMessage, 'id'>) => void
      }).addFeedback = addFeedback
    }
  }, [addFeedback])

  // Configuration des icônes par type
  const getIcon = (type: FeedbackMessage['type']) => {
    switch (type) {
      case 'success':
        return CheckCircle
      case 'error':
        return AlertCircle
      case 'info':
        return Info
      case 'achievement':
        return Star
      default:
        return Info
    }
  }

  // Configuration des couleurs par type
  const getColors = (type: FeedbackMessage['type']) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-success-green/10',
          border: 'border-success-green/20',
          text: 'text-success-green',
          icon: 'text-success-green'
        }
      case 'error':
        return {
          bg: 'bg-alert-amber/10',
          border: 'border-alert-amber/20',
          text: 'text-alert-amber',
          icon: 'text-alert-amber'
        }
      case 'info':
        return {
          bg: 'bg-focus-blue/10',
          border: 'border-focus-blue/20',
          text: 'text-focus-blue',
          icon: 'text-focus-blue'
        }
      case 'achievement':
        return {
          bg: 'bg-energy-orange/10',
          border: 'border-energy-orange/20',
          text: 'text-energy-orange',
          icon: 'text-energy-orange'
        }
      default:
        return {
          bg: 'bg-neutral-100',
          border: 'border-neutral-200',
          text: 'text-neutral-700',
          icon: 'text-neutral-600'
        }
    }
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {messages.map((message, index) => {
          const IconComponent = message.icon || getIcon(message.type)
          const colors = getColors(message.type)

          return (
            <motion.div
              key={message.id}
              className={`${colors.bg} ${colors.border} border rounded-lg p-4 shadow-empathic backdrop-blur-sm max-w-sm`}
              initial={{ 
                opacity: 0, 
                x: 300,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                x: 300,
                scale: 0.8
              }}
              transition={{ 
                duration: adaptiveUI.animationLevel === 'none' ? 0 : 0.3,
                ease: "easeOut"
              }}
              style={{ zIndex: 1000 - index }}
            >
              <div className="flex items-start gap-3">
                <IconComponent className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm ${colors.text} mb-1`}>
                    {message.title}
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {message.message}
                  </p>
                </div>

                <button
                  onClick={() => removeFeedback(message.id)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Barre de progression pour les messages temporaires */}
              {message.duration !== 0 && (
                <motion.div
                  className={`h-1 ${colors.bg} rounded-full mt-3 overflow-hidden`}
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ 
                    duration: (message.duration || 5000) / 1000,
                    ease: "linear"
                  }}
                >
                  <div className={`h-full ${colors.text.replace('text-', 'bg-')} rounded-full`} />
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

// Hook personnalisé pour utiliser le système de feedback
export function useFeedback() {
  const addFeedback = (feedback: Omit<FeedbackMessage, 'id'>) => {
    if (typeof window !== 'undefined' && (window as Window & typeof globalThis & { addFeedback?: (feedback: Omit<FeedbackMessage, 'id'>) => void }).addFeedback) {
      (window as Window & typeof globalThis & { addFeedback?: (feedback: Omit<FeedbackMessage, 'id'>) => void }).addFeedback!(feedback)
    }
  }

  const showSuccess = (title: string, message: string, duration = 5000) => {
    addFeedback({ type: 'success', title, message, duration })
  }

  const showError = (title: string, message: string, duration = 7000) => {
    addFeedback({ type: 'error', title, message, duration })
  }

  const showInfo = (title: string, message: string, duration = 5000) => {
    addFeedback({ type: 'info', title, message, duration })
  }

  const showAchievement = (title: string, message: string, duration = 0) => {
    addFeedback({ type: 'achievement', title, message, duration, icon: Star })
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showAchievement,
    addFeedback
  }
} 