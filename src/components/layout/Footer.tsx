import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/80 py-6 text-sm text-center text-foreground/70">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <div className="flex gap-4">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/4d8in" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-accent-green transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-accent-green transition-colors">LinkedIn</a>
        </div>
        <div>
          &copy; {year} ZR. Sécurisé par des pratiques modernes.
        </div>
      </div>
    </footer>
  );
} 