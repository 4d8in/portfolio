"use client";
import { motion } from "framer-motion";

const webProjects = [
  {
    title: "Portfolio Next.js",
    description: "Portfolio moderne avec Next.js, Tailwind, animations avancées et SEO.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/4d8in/portfolio",
    demo: "#",
  },
  {
    title: "Dashboard Admin",
    description: "Interface admin responsive, dark mode, gestion utilisateurs.",
    stack: ["React", "Tailwind", "Node.js"],
    github: "https://github.com/4d8in/dashboard",
    demo: "#",
  },
];

const pentestProjects = [
  {
    title: "TryHackMe - Basic Pentesting",
    description: "Lab d'initiation à la reconnaissance et exploitation de failles web.",
    stack: ["Nmap", "Burp Suite", "Linux"],
    writeup: "#",
  },
  {
    title: "HackTheBox - Writeup Vulnérabilité XSS",
    description: "Analyse et exploitation d'une faille XSS sur un lab HTB.",
    stack: ["OWASP", "Burp Suite"],
    writeup: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Projets Web
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {webProjects.map((proj) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.04, boxShadow: "0 4px 32px #00FF8899" }}
            className="rounded-xl bg-background/80 border border-accent-green/30 shadow-lg p-6 flex flex-col gap-3 transition-all hover:shadow-accent-green/40"
          >
            <h3 className="text-xl font-bold text-accent-green mb-1">{proj.title}</h3>
            <p className="text-foreground/80 mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {proj.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-accent-green/10 text-accent-green rounded text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={proj.github} target="_blank" rel="noopener" className="text-sm underline hover:text-accent-green">GitHub</a>
              <a href={proj.demo} target="_blank" rel="noopener" className="text-sm underline hover:text-accent-orange">Démo</a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Labs & Pentesting
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pentestProjects.map((proj) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.04, boxShadow: "0 4px 32px #FF6B3599" }}
            className="rounded-xl bg-background/80 border border-accent-orange/30 shadow-lg p-6 flex flex-col gap-3 transition-all hover:shadow-accent-orange/40"
          >
            <h3 className="text-xl font-bold text-accent-orange mb-1">{proj.title}</h3>
            <p className="text-foreground/80 mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {proj.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-accent-orange/10 text-accent-orange rounded text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={proj.writeup} target="_blank" rel="noopener" className="text-sm underline hover:text-accent-orange">Writeup</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 