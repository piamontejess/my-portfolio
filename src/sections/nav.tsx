"use client";
import SectionLink from "../components/section-link";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
const links = ["About", "Experience", "Skills", "Projects"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollTarget = useRef<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [dark, setDark] = useState<boolean | null>(null);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id]"));
    let frame = 0;
    let settleTimer: ReturnType<typeof setTimeout>;
    // One viewport boundary gives a single, stable selection even for tall sections.
    const update = () => {
      frame = 0;
      const headerHeight = headerRef.current?.offsetHeight ?? 82;
      document.documentElement.style.setProperty("--nav-offset", `${headerHeight + 20}px`);
      const boundary = headerHeight + Math.min(160, window.innerHeight * .2);
      let current = sections[0]?.id ?? "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= boundary) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = "contact";
      if (scrollTarget.current === current) scrollTarget.current = null;
      if (!scrollTarget.current) setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => { scrollTarget.current = null; update(); }, 160);
    };
    const cancelTarget = () => { scrollTarget.current = null; schedule(); };
    const sectionSelected = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (!sections.some(section => section.id === id)) return;
      scrollTarget.current = id;
      setActiveSection(id);
      setMenuOpen(false);
      schedule();
    };
    const resize = new ResizeObserver(schedule);
    sections.forEach(section => resize.observe(section));
    if (headerRef.current) resize.observe(headerRef.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", cancelTarget, { passive: true });
    window.addEventListener("touchstart", cancelTarget, { passive: true });
    window.addEventListener("keydown", cancelTarget);
    window.addEventListener("portfolio:section-selected", sectionSelected);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settleTimer);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", cancelTarget);
      window.removeEventListener("touchstart", cancelTarget);
      window.removeEventListener("keydown", cancelTarget);
      window.removeEventListener("portfolio:section-selected", sectionSelected);
    };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => setDark(root.classList.contains("dark")));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-theme"); } catch {}
      const isDark = saved === "dark" || (saved !== "light" && media.matches);
      root.classList.toggle("dark", isDark);
      root.style.colorScheme = isDark ? "dark" : "light";
    };
    const frame = requestAnimationFrame(() => setDark(root.classList.contains("dark")));
    media.addEventListener("change", sync); window.addEventListener("storage", sync);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); media.removeEventListener("change", sync); window.removeEventListener("storage", sync); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch {}
  };
  return <header ref={headerRef} className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <div className="desktop-links">{links.map(label => <SectionLink key={label} href={`/${label.toLowerCase()}`} aria-current={activeSection === label.toLowerCase() ? "location" : undefined}>{label}</SectionLink>)}</div>
    <div className="nav-actions"><button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label={dark === null ? "Toggle color theme" : dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button><SectionLink href="/contact" className="nav-contact" aria-current={!menuOpen && activeSection === "contact" ? "location" : undefined}>Let’s talk <ArrowUpRight size={15} /></SectionLink><button type="button" ref={menuButton} className="icon-button menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
    <div id="mobile-navigation" className="mobile-links" hidden={!menuOpen}>{[...links, "Contact"].map(label => <SectionLink key={label} href={`/${label.toLowerCase()}`} aria-current={activeSection === label.toLowerCase() ? "location" : undefined}>{label}<ArrowUpRight size={16} /></SectionLink>)}</div>
  </nav></header>;
}
