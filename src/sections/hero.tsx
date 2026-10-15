import SectionLink from "../components/section-link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <h1>Useful apps.<br /><span className="editorial">One problem</span><br />at a time<span className="sage-period">.</span></h1>
        <p className="hero-intro">
          I’m <strong>Jessel Ann Piamonte</strong>, a software developer who enjoys
          figuring out how things work—and making them easier to use. I build web
          and mobile apps, from the interface to the API behind it.
        </p>
        <p className="hero-stack">React Native & TypeScript <span aria-hidden="true">/</span> Laravel & PostgreSQL</p>
        <div className="hero-buttons">
          <Button asChild size="lg" className="primary-button">
            <SectionLink href="/projects">Explore my work <ArrowUpRight /></SectionLink>
          </Button>
          <SectionLink href="/contact" className="secondary-link">Let’s connect <ArrowUpRight size={17} /></SectionLink>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/piamontejess" target="_blank" rel="noopener noreferrer" aria-label="Jessel on GitHub"><Github size={19} /></a>
          <a href="https://www.linkedin.com/in/jessel-ann-piamonte-080539263/" target="_blank" rel="noopener noreferrer" aria-label="Jessel on LinkedIn"><Linkedin size={19} /></a>
          <span>Web, mobile, and the details in between.</span>
        </div>
      </div>

      <div className="portrait-composition">
        <div className="portrait-outline" />
        <div className="portrait-frame">
          <Image
            src="/assets/jessel-portrait.jpg"
            alt="Jessel Ann Piamonte in her graduation gown"
            fill
            priority
            sizes="(max-width: 767px) 85vw, (max-width: 1200px) 40vw, 420px"
            className="portrait-image"
          />
        </div>
        <div className="portrait-note">
          <span className="note-mark" aria-hidden="true">✦</span>
          <div>Jessel Ann Piamonte<span>Software developer · Cebu, Philippines</span></div>
        </div>
      </div>
      <SectionLink href="/about" className="scroll-cue"><ArrowDown size={15} /> A little more about me</SectionLink>
    </section>
  );
}
