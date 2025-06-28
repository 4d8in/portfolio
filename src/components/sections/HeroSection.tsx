"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-20 text-center">
      {/* Particules ou formes géométriques en arrière-plan (à venir) */}
      <div className="absolute inset-0 -z-10" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-accent-green via-cyan-400 to-accent-orange bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(0,255,136,0.25)]"
        style={{ textShadow: '0 0 32px #00FF88, 0 2px 8px #00FF88' }}
      >
        Développeur Web & Apprenti Pentester
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-xl mx-auto text-lg md:text-2xl text-foreground/80 mb-10"
      >
        Passionné par le développement web moderne et la cybersécurité, je conçois des applications robustes et sécurisées.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-6 justify-center"
      >
        <a
          href="#projects/page.tsx"
          className="px-8 py-4 rounded-xl bg-accent-green text-white font-extrabold text-lg shadow-2xl shadow-accent-green/30 hover:scale-105 hover:shadow-accent-green/60 transition-all duration-200 ring-2 ring-accent-green focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-green animate-glow"
          style={{ boxShadow: '0 0 24px #00FF88, 0 2px 8px #00FF88' }}
        >
          Voir mes projets
        </a>
        <a
          href="#contact/page.tsx"
          className="px-8 py-4 rounded-xl bg-accent-orange text-white font-extrabold text-lg shadow-2xl shadow-accent-orange/30 hover:scale-105 hover:shadow-accent-orange/60 transition-all duration-200 ring-2 ring-accent-orange focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-orange"
        >
          Me contacter
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection; 