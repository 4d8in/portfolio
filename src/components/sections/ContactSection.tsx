"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    // Ici, tu pourrais envoyer le formulaire (API, email, etc.)
    setSent(true);
  }

  return (
    <section className="max-w-2xl mx-auto py-16 px-4" id="contact">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Me contacter
      </motion.h2>
      <form onSubmit={handleSubmit} className="bg-background/80 border border-white/10 rounded-xl shadow-lg p-8 flex flex-col gap-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="px-4 py-3 rounded bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-green"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="px-4 py-3 rounded bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-green"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="px-4 py-3 rounded bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-green min-h-[120px]"
          value={form.message}
          onChange={handleChange}
        />
        {error && <div className="text-accent-orange text-sm font-semibold">{error}</div>}
        {sent ? (
          <div className="text-accent-green font-bold">Merci pour votre message !</div>
        ) : (
          <button
            type="submit"
             className="px-8 py-4 rounded-xl bg-accent-green text-white font-extrabold text-lg shadow-2xl shadow-accent-green/30 hover:scale-105 hover:shadow-accent-green/60 transition-all duration-200 ring-2 ring-accent-green focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-green animate-glow"
          >
            Envoyers
          </button>
        )}
      </form>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="font-semibold">Email : <a href="edwintchouateu54@gmail.com" className="underline hover:text-accent-green">edwintchouateu54@gmail.com</a></div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/4d8in" target="_blank" rel="noopener" className="text-2xl hover:text-accent-green transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-2xl hover:text-accent-green transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
} 