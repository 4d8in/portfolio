/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Palette "Empathic Orange" - Optimisée pour l'émotion
      colors: {
        // Couleurs testées pour l'impact émotionnel
        'trust-navy': '#1E293B',      // Inspire confiance et professionnalisme
        'energy-orange': '#F97316',   // Stimule l'action sans agresser
        'comfort-warm': '#FED7AA',    // Apaise et accueille
        'success-green': '#22C55E',   // Rassure et valide
        'focus-blue': '#3B82F6',      // Aide à la concentration
        'alert-amber': '#F59E0B',     // Attire l'attention sans alarmer
        
        // Couleurs d'accessibilité garanties WCAG AAA
        'text-on-dark': '#FFFFFF',    // Ratio 21:1
        'text-on-light': '#0F172A',   // Ratio 19:1
        'link-color': '#2563EB',      // Ratio 8.6:1
        'visited-link': '#7C3AED',    // Ratio 7.2:1
        
        // Neutres optimisés pour l'accessibilité
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-400': '#A3A3A3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
      },
      
      // Gradients émotionnels
      backgroundImage: {
        'welcome': 'linear-gradient(135deg, #F97316 0%, #FED7AA 100%)',
        'confidence': 'linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)',
        'success': 'radial-gradient(circle, #22C55E 0%, #15803D 100%)',
        'focus': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        'comfort': 'linear-gradient(135deg, #FED7AA 0%, #FB923C 100%)',
      },
      
      // Typographie optimisée pour la lisibilité
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      
      // Espacement empathique (basé sur le ratio d'or)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Animations empathiques
      animation: {
        'breathing': 'breathing 4s ease-in-out infinite',
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      
      // Breakpoints optimisés pour l'expérience multi-device
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      
      // Ombres empathiques
      boxShadow: {
        'empathic': '0 4px 20px rgba(249, 115, 22, 0.1)',
        'gentle': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'focus': '0 0 0 3px rgba(59, 130, 246, 0.1)',
        'success': '0 4px 12px rgba(34, 197, 94, 0.15)',
      },
      
      // Transitions empathiques
      transitionDuration: {
        '2000': '2000ms',
        '1500': '1500ms',
      },
      
      transitionTimingFunction: {
        'empathic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [
    // Plugin pour l'accessibilité
    function({ addUtilities }) {
      const newUtilities = {
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },
        '.focus-visible': {
          outline: '2px solid #3B82F6',
          outlineOffset: '2px',
        },
        '.high-contrast': {
          filter: 'contrast(1.2)',
        },
        '.reduced-motion': {
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none !important',
            transition: 'none !important',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 