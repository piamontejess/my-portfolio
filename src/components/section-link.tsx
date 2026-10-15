"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { scrollToSection, sectionPaths } from "../lib/section-navigation";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href" | "onNavigate"> & { href: string };

/** Keep native modified-click behavior without remounting the portfolio. */
export default function SectionLink({ href, ...props }: SectionLinkProps) {
  return <Link {...props} href={href} prefetch={false} scroll={false} onNavigate={event => {
    const id = sectionPaths[href];
    if (!id || !document.getElementById(id)) return;
    event.preventDefault();
    if (window.location.pathname !== href || window.location.hash) {
      window.history.pushState(null, "", href);
    }
    scrollToSection(id, true, true);
  }} />;
}
