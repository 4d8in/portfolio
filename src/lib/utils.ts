import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilitaires d'accessibilité
export function getAriaLabel(text: string, context?: string) {
  return context ? `${text} ${context}` : text
}

export function getFocusableElements(container: HTMLElement) {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
}

// Utilitaires de performance
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Utilitaires de détection de contexte
export function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

export function detectConnectionSpeed(): 'slow' | 'fast' {
  if (typeof navigator === 'undefined') return 'fast'
  
  // Type assertion pour navigator.connection (API expérimentale)
  const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
  if (!connection) return 'fast'
  
  const effectiveType = connection.effectiveType || '4g'
  
  return ['slow-2g', '2g', '3g'].includes(effectiveType) ? 'slow' : 'fast'
}

// Utilitaires d'émotion et d'UX
export function getEmotionalColor(emotion: 'trust' | 'energy' | 'comfort' | 'success' | 'focus' | 'alert') {
  const colors = {
    trust: 'trust-navy',
    energy: 'energy-orange',
    comfort: 'comfort-warm',
    success: 'success-green',
    focus: 'focus-blue',
    alert: 'alert-amber'
  }
  return colors[emotion]
}

export function getEmotionalGradient(emotion: 'welcome' | 'confidence' | 'success' | 'focus' | 'comfort') {
  const gradients = {
    welcome: 'bg-welcome',
    confidence: 'bg-confidence',
    success: 'bg-success',
    focus: 'bg-focus',
    comfort: 'bg-comfort'
  }
  return gradients[emotion]
}
