"use client";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSass, SiCss3, SiNodedotjs, SiMongodb, SiPostgresql, SiExpress, SiGit, SiVercel, SiVscodium, SiNpm, SiYarn, SiWebpack, SiOwasp, SiLinux, SiMetasploit, SiBurpsuite } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const frontend = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript ES6+", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "SASS", icon: SiSass },
  { name: "CSS3", icon: SiCss3 },
  { name: "Responsive Design", icon: FaLaptopCode },
];
const backend = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "API REST", icon: FaLaptopCode },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Express.js", icon: SiExpress },
];
const outils = [
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: SiVscodium },
  { name: "npm", icon: SiNpm },
  { name: "yarn", icon: SiYarn },
  { name: "Webpack", icon: SiWebpack },
  { name: "Vercel", icon: SiVercel },
];
const pentest = [
  { name: "Reconnaissance & énumération (en formation)", icon: FaLaptopCode },
  { name: "Vulnérabilités web (OWASP Top 10)", icon: SiOwasp },
  { name: "Nmap", icon: FaLaptopCode },
  { name: "Burp Suite", icon: SiBurpsuite },
  { name: "Metasploit (bases)", icon: SiMetasploit },
  { name: "Linux", icon: SiLinux },
  { name: "PTES, OWASP Testing Guide", icon: SiOwasp },
  { name: "Certification visée : eJPT", icon: FaLaptopCode },
];

export default function SkillsSection() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4" id="skills">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Compétences techniques
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold text-accent-green mb-2">Développement Web (Full Stack)</h3>
          <div className="mb-2">
            <span className="font-semibold">Frontend :</span>
            <ul className="grid grid-cols-4 gap-4 mt-3">
              {frontend.map(({ name, icon: Icon }) => (
                <li key={name} className="flex flex-col items-center" aria-label={name} title={name}>
                  <Icon size={36} className="mb-1 text-accent-green" />
                  <span className="text-xs text-foreground/80 font-semibold text-center">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Backend :</span>
            <ul className="grid grid-cols-3 gap-4 mt-3">
              {backend.map(({ name, icon: Icon }) => (
                <li key={name} className="flex flex-col items-center" aria-label={name} title={name}>
                  <Icon size={36} className="mb-1 text-accent-green" />
                  <span className="text-xs text-foreground/80 font-semibold text-center">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Outils :</span>
            <ul className="grid grid-cols-3 gap-4 mt-3">
              {outils.map(({ name, icon: Icon }) => (
                <li key={name} className="flex flex-col items-center" aria-label={name} title={name}>
                  <Icon size={36} className="mb-1 text-accent-green" />
                  <span className="text-xs text-foreground/80 font-semibold text-center">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-accent-orange mb-2">Pentesting (en formation)</h3>
          <ul className="grid grid-cols-2 gap-4 mt-3">
            {pentest.map(({ name, icon: Icon }) => (
              <li key={name} className="flex flex-col items-center" aria-label={name} title={name}>
                <Icon size={36} className="mb-1 text-accent-orange" />
                <span className="text-xs text-foreground/80 font-semibold text-center">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 