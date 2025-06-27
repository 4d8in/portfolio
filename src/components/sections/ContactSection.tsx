"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section className="max-w-3xl mx-auto py-16 px-4" id="contact">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Me contacter
      </motion.h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=edwintchouateu54@gmail.com&su=Contact%20depuis%20portfolio&body=Nom:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0AMessage:%20${encodeURIComponent(form.message)}`);
        }}
        className="bg-background/80 border border-white/10 rounded-xl shadow-lg p-8 flex flex-col gap-4 mb-8"
      >
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
        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded-lg bg-accent-green text-black font-bold shadow-lg hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
        >
          Envoyer
        </button>
      </form>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="font-semibold">Email : <a href="mailto:edwintchouateu54@gmail.com" className="underline hover:text-accent-green">edwintchouateu54@gmail.com</a></div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/4d8in" target="_blank" rel="noopener" className="text-2xl hover:text-accent-green transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-2xl hover:text-accent-green transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
} 