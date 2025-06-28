'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUX } from '@/lib/context'
import { cn } from '@/lib/utils'
import { Menu, X, User, Code, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react'

// Configuration de navigation adaptative
const navigationConfig = {
  recruiter: {
    primary: [
      { name: 'Projets', href: '#projects', icon: Briefcase },
      { name: 'Compétences', href: '#skills', icon: Code },
      { name: 'Contact', href: '#contact', icon: Mail }
    ],
    secondary: [
      { name: 'GitHub', href: 'https://github.com', icon: Github, external: true },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, external: true }
    ]
  },
  client: {
    primary: [
      { name: 'Réalisations', href: '#projects', icon: Briefcase },
      { name: 'Processus', href: '#process', icon: Code },
      { name: 'Contact', href: '#contact', icon: Mail }
    ],
    secondary: [
      { name: 'Témoignages', href: '#testimonials', icon: User },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, external: true }
    ]
  },
  developer: {
    primary: [
      { name: 'Code', href: '#code', icon: Code },
      { name: 'Architecture', href: '#architecture', icon: Briefcase },
      { name: 'Blog', href: '#blog', icon: User }
    ],
    secondary: [
      { name: 'GitHub', href: 'https://github.com', icon: Github, external: true },
      { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, external: true }
    ]
  },
  casual: {
    primary: [
      { name: 'Projets', href: '#projects', icon: Briefcase },
      { name: 'À propos', href: '#about', icon: User },
      { name: 'Contact', href: '#contact', icon: Mail }
    ],
    secondary: [
      { name: 'GitHub', href: 'https://github.com', icon: Github, external: true },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, external: true }
    ]
  }
}

export default function Navigation() {
  const { userContext, adaptiveUI } = useUX()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const config = navigationConfig[userContext.userType]

  // Détection du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermeture automatique du menu sur mobile
  useEffect(() => {
    if (isOpen && userContext.deviceType === 'mobile') {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsOpen(false)
        }
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, userContext.deviceType])

  // Navigation adaptative selon le type d'appareil
  const isMobile = userContext.deviceType === 'mobile'

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-gentle" 
          : "bg-transparent",
        adaptiveUI.navigationStyle === 'simple' && "bg-white/95 backdrop-blur-md"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: adaptiveUI.animationLevel === 'none' ? 0 : 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={adaptiveUI.animationLevel !== 'none' ? { scale: 1.05 } : {}}
          >
            <a href="#" className="text-2xl font-display font-bold text-energy-orange">
              Portfolio
            </a>
          </motion.div>

          {/* Navigation desktop */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation principale */}
              <div className="flex items-center space-x-6">
                {config.primary.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-neutral-700 hover:text-energy-orange transition-colors font-medium"
                    whileHover={adaptiveUI.animationLevel !== 'none' ? { y: -2 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Navigation secondaire */}
              <div className="flex items-center space-x-4">
                {config.secondary.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="p-2 text-neutral-600 hover:text-energy-orange hover:bg-neutral-100 rounded-lg transition-all duration-200"
                    whileHover={adaptiveUI.animationLevel !== 'none' ? { scale: 1.1 } : {}}
                    whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* CTA principal */}
              <motion.button
                className="bg-energy-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-empathic"
                whileHover={adaptiveUI.animationLevel !== 'none' ? { 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)"
                } : {}}
                whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
              >
                Contact
              </motion.button>
            </div>
          )}

          {/* Bouton menu mobile */}
          {isMobile && (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-700 hover:text-energy-orange transition-colors"
              whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          )}
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: adaptiveUI.animationLevel === 'none' ? 0 : 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-empathic border border-neutral-200 p-6 mt-4">
                {/* Navigation principale mobile */}
                <div className="space-y-4 mb-6">
                  {config.primary.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 text-neutral-700 hover:text-energy-orange transition-colors font-medium py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: adaptiveUI.animationLevel === 'none' ? 0 : 0.3
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Navigation secondaire mobile */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  {config.secondary.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="p-3 text-neutral-600 hover:text-energy-orange hover:bg-neutral-100 rounded-lg transition-all duration-200"
                      whileHover={adaptiveUI.animationLevel !== 'none' ? { scale: 1.1 } : {}}
                      whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>

                {/* CTA mobile */}
                <motion.button
                  className="w-full bg-energy-orange hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-empathic"
                  whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 