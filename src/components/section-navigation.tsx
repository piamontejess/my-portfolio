"use client";

import { useEffect } from "react";
import { scrollToSection, sectionPaths } from "../lib/section-navigation";



/** Real, reloadable paths with in-page scrolling and browser history support. */
export default function SectionNavigation() {
  useEffect(() => {
    let cancelled = false;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const navigateToLocation = () => {
      // Retain compatibility with old shared hash links, but show a clean path.
      const legacyId = window.location.hash.slice(1);
      const legacyPath = Object.keys(sectionPaths).find(path => sectionPaths[path] === legacyId);
      if (legacyPath) window.history.replaceState(null, "", legacyPath);
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      scrollToSection(sectionPaths[path] ?? "home", false);
    };
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin) return;
      if (url.hash === "#main-content") {
        event.preventDefault();
        scrollToSection("main-content", false, true);
        return;
      }

    };
    document.addEventListener("click", click);
    window.addEventListener("popstate", navigateToLocation);
    // Local fonts can change section positions on a direct visit.
    void document.fonts.ready.then(() => { if (!cancelled) navigateToLocation(); });
    return () => {
      cancelled = true;
      window.history.scrollRestoration = previousRestoration;
      document.removeEventListener("click", click);
      window.removeEventListener("popstate", navigateToLocation);
    };
  }, []);
  return null;
}
