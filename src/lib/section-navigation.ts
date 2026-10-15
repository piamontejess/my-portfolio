export const sectionPaths: Record<string, string> = {
  "/": "home", "/about": "about", "/experience": "experience",
  "/skills": "skills", "/projects": "projects", "/contact": "contact",
};

export function scrollToSection(id: string, smooth: boolean, focus = false) {
  const target = document.getElementById(id);
  if (!target) return;
  window.dispatchEvent(new CustomEvent("portfolio:section-selected", { detail: id }));
  const offset = (document.querySelector(".site-header")?.getBoundingClientRect().height ?? 82) + 20;
  const top = id === "home" ? 0 : target.getBoundingClientRect().top + window.scrollY - offset;
  if (focus) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduceMotion ? "smooth" : "instant" });
}
