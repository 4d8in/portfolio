"use client";
import { motion } from "framer-motion";

const timeline = [
  { year: "2023", label: "Début du développement web professionnel" },
  { year: "2024", label: "Projets freelance & montée en compétences" },
  { year: "2025", label: "Formation Pentesting & Sécurité" },
];

export default function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-10 items-center" id="about">
      {/* Avatar stylisé */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-accent-green bg-gradient-to-br from-accent-green/30 to-accent-orange/20 hover:scale-105 transition-transform flex items-center justify-center"
      >
        <span className="text-6xl font-bold text-accent-green select-none">ZR</span>
      </motion.div>
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          À propos de moi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-foreground/80 mb-4"
        >
          Développeur web passionné avec 2 ans d&apos;expérience, actuellement en transition vers la cybersécurité. Je combine ma solide expertise en développement frontend/backend avec une approche sécuritaire, acquise lors de ma formation en pentesting.
        </motion.p>
        {/* Timeline de parcours */}
        <div className="mt-6">
          <ol className="relative border-l-2 border-accent-green/60">
            {timeline.map((item) => (
              <li key={item.year} className="mb-6 ml-4">
                <div className="absolute w-3 h-3 bg-accent-green rounded-full -left-1.5 border-2 border-background"></div>
                <span className="text-accent-green font-bold">{item.year}</span>
                <span className="block text-foreground/80 ml-2">{item.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
} 