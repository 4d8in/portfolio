'use client'

import { motion } from 'framer-motion'
import { useUX } from '@/lib/context'
import { cn, getEmotionalGradient } from '@/lib/utils'
import { ArrowRight, Sparkles, Clock, User, Code, Briefcase } from 'lucide-react'

// Contenu adaptatif selon le type d'utilisateur
const personaContent = {
  recruiter: {
    title: "Développeur Senior Full Stack",
    subtitle: "5+ ans d'expérience • Architecture scalable • Performance optimale",
    description: "Spécialisé dans les technologies modernes avec une approche centrée sur la qualité et la maintenabilité du code.",
    cta: "Voir mes projets",
    ctaSecondary: "Télécharger CV",
    timeIndicator: "Lecture 2 min",
    icon: Briefcase,
    features: [
      "React/Next.js • TypeScript",
      "Node.js • PostgreSQL",
      "Architecture microservices",
      "Tests automatisés"
    ]
  },
  client: {
    title: "Transformez vos idées en solutions digitales",
    subtitle: "Développement sur mesure • ROI mesurable • Livraison dans les délais",
    description: "Je vous accompagne de l'idée à la mise en production avec une approche business-first et des résultats concrets.",
    cta: "Discuter de votre projet",
    ctaSecondary: "Voir mes réalisations",
    timeIndicator: "Tour rapide 30 sec",
    icon: Sparkles,
    features: [
      "Solutions sur mesure",
      "Impact business mesurable",
      "Process transparent",
      "Support post-livraison"
    ]
  },
  developer: {
    title: "Passionné d'architecture clean & performance",
    subtitle: "Open source • Clean code • Innovation technique",
    description: "Développeur curieux qui aime explorer les nouvelles technologies et partager ses découvertes avec la communauté.",
    cta: "Explorer le code",
    ctaSecondary: "Voir GitHub",
    timeIndicator: "Deep dive 5 min",
    icon: Code,
    features: [
      "Architecture hexagonale",
      "Performance optimization",
      "Open source contributor",
      "Tech blogging"
    ]
  },
  casual: {
    title: "Développeur créatif qui aime résoudre des problèmes",
    subtitle: "Solutions innovantes • Design thinking • Expérience utilisateur",
    description: "Je crée des applications web et mobiles qui offrent une expérience exceptionnelle et résolvent de vrais problèmes.",
    cta: "Découvrir mes projets",
    ctaSecondary: "En savoir plus",
    timeIndicator: "Visite guidée 1 min",
    icon: User,
    features: [
      "UX/UI Design",
      "Développement mobile",
      "Innovation produit",
      "Design thinking"
    ]
  }
}

export default function Hero() {
  const { userContext, adaptiveUI } = useUX()
  const content = personaContent[userContext.userType]
  const IconComponent = content.icon

  // Animations adaptatives selon les préférences
  const animationConfig = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: adaptiveUI.animationLevel === 'none' ? 0 : 0.6,
      ease: "easeOut" as const
    }
  }

  const breathingAnimation = adaptiveUI.animationLevel === 'full' ? {
    animate: { scale: [1, 1.02, 1] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
  } : {}

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background avec gradient émotionnel */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-trust-navy via-energy-orange to-comfort-warm opacity-10",
        getEmotionalGradient('welcome')
      )} />
      
      {/* Particules décoratives (seulement si animations activées) */}
      {adaptiveUI.animationLevel !== 'none' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-energy-orange rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Indicateur de temps et skip option */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8 text-sm text-neutral-600"
            {...animationConfig}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{content.timeIndicator}</span>
            </div>
            <div className="flex gap-2">
              <button className="hover:text-energy-orange transition-colors">
                Skip to projects
              </button>
              <span>•</span>
              <button className="hover:text-energy-orange transition-colors">
                Skip to contact
              </button>
            </div>
          </motion.div>

          {/* Titre principal avec animation breathing */}
          <motion.div
            className="mb-6"
            {...breathingAnimation}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-on-light mb-4"
              initial={animationConfig.initial}
              animate={animationConfig.animate}
              transition={{ ...animationConfig.transition, delay: 0.1 }}
            >
              {content.title}
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-neutral-600 mb-6"
              initial={animationConfig.initial}
              animate={animationConfig.animate}
              transition={{ ...animationConfig.transition, delay: 0.2 }}
            >
              {content.subtitle}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            transition={{ ...animationConfig.transition, delay: 0.3 }}
          >
            {content.description}
          </motion.p>

          {/* Features en grille */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            transition={{ ...animationConfig.transition, delay: 0.4 }}
          >
            {content.features.map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-gentle border border-neutral-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.5 + index * 0.1,
                  duration: adaptiveUI.animationLevel === 'none' ? 0 : 0.3
                }}
                whileHover={adaptiveUI.animationLevel !== 'none' ? { 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(249, 115, 22, 0.15)"
                } : {}}
              >
                <p className="text-sm font-medium text-text-on-light">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA principal et secondaire */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            transition={{ ...animationConfig.transition, delay: 0.6 }}
          >
            <motion.button
              className="group bg-energy-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-empathic transition-all duration-300 flex items-center gap-2"
              whileHover={adaptiveUI.animationLevel !== 'none' ? { 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)"
              } : {}}
              whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
            >
              {content.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="group border-2 border-energy-orange text-energy-orange hover:bg-energy-orange hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              whileHover={adaptiveUI.animationLevel !== 'none' ? { scale: 1.05 } : {}}
              whileTap={adaptiveUI.animationLevel !== 'none' ? { scale: 0.95 } : {}}
            >
              {content.ctaSecondary}
              <IconComponent className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Indicateur de scroll */}
          {adaptiveUI.animationLevel !== 'none' && (
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
                <motion.div 
                  className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
} 