"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-background/80 border-b border-white/10 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-accent-green">
          ZR
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors px-2 py-1 rounded-md font-medium text-base ${
                  pathname === link.href
                    ? "bg-accent-green/10 text-accent-green"
                    : "hover:bg-white/5 hover:text-accent-green"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile menu */}
        {open && (
          <ul className="absolute top-14 right-4 bg-background/95 border border-white/10 rounded-lg shadow-lg flex flex-col gap-4 p-6 md:hidden animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-2 py-1 rounded-md font-medium text-base ${
                    pathname === link.href
                      ? "bg-accent-green/10 text-accent-green"
                      : "hover:bg-white/5 hover:text-accent-green"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
} 