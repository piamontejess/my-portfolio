"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let x = 0;
    let y = 0;
    const move = (event: PointerEvent) => {
      if (motion.matches || !pointer.matches) return;
      x = event.clientX; y = event.clientY;
      if (!frame) frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--pointer-x", `${x}px`);
        ref.current?.style.setProperty("--pointer-y", `${y}px`);
        frame = 0;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(frame); };
  }, []);
  return <div ref={ref} className="portfolio-background" aria-hidden="true"><div className="background-glow" /></div>;
}
