"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="ml-2 p-2 rounded transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
      aria-label="Basculer le mode sombre"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-accent-green animate-spin-slow" />
      ) : (
        <Moon size={20} className="text-accent-green animate-pulse" />
      )}
    </button>
  );
} 