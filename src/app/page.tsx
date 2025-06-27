import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </>
  );
}
