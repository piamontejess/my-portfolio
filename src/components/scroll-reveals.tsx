"use client";

import { useEffect } from "react";

/** Enhance server-rendered content without hiding it when JavaScript is unavailable. */
export default function ScrollReveals() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      ".hero-copy > *, .portrait-composition, .scroll-cue, .section-heading, .about-copy, .approach-row, .education, .experience-item, .marquee-row, .project-card, .contact-inner, .archive-heading"
    ));
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove("reveal-ready", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
      if (motion.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
      elements.forEach(element => {
        const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
        const index = siblings.indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.max(0, index % 3) * 80}ms`);
        const rect = element.getBoundingClientRect();
        element.classList.toggle("is-visible", rect.top < window.innerHeight && rect.bottom > 0);
        element.classList.add("reveal-ready");
        observer?.observe(element);
      });
    };
    setup();
    motion.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", setup);
      elements.forEach(element => element.classList.remove("reveal-ready", "is-visible"));
    };
  }, []);
  return null;
}
