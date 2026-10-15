"use client";

import { type CSSProperties } from "react";
import Image from "next/image";
import { technologyRows, type Technology } from "../lib/technologies-data";

function TechnologyItem({ technology }: { technology: Technology }) {
  const Symbol = technology.symbol;

  return (
    <li className="technology-item">
      <span className={`technology-icon ${technology.image ? "technology-logo" : ""}`}>
        {technology.image ? (
          <Image src={`/assets/tech/${technology.image}`} alt="" width={32} height={32} />
        ) : Symbol ? <Symbol size={26} strokeWidth={1.6} aria-hidden="true" /> : null}
      </span>
      <span>{technology.name}</span>
    </li>
  );
}

export default function TechStack() {

  return (
    <section id="skills" className="section-shell section-spacing skills-section" aria-labelledby="skills-title">
      <span id="techstack" className="section-anchor" aria-hidden="true" />
      <div className="section-heading heading-with-copy">
        <div>

          <h2 id="skills-title">The tools behind <span className="editorial">the work.</span></h2>
        </div>
        <p>Technologies I’ve used across web, mobile, backend integration, and everyday development.</p>
      </div>

      <div className="marquee-toolbar">
        <p>Web & mobile <span aria-hidden="true">/</span> Backend & data <span aria-hidden="true">/</span> Delivery & tools</p>
      </div>

      <div id="technology-marquees" className="marquee-viewport" tabIndex={0} role="region" aria-label="Technology stack" aria-describedby="marquee-help">
        {technologyRows.map((row, index) => (
          <div className="marquee-row" key={row.label}>
            {/* Adapted from 5da433d: equal duplicated groups make -50% an exact loop. */}
            <div
              className={`tech-marquee ${index === 1 ? "tech-marquee-reverse" : ""}`}
              style={{ "--marquee-duration": `${row.items.length * 4.5}s` } as CSSProperties}
            >
              {[false, true].map(duplicate => (
                <ul
                  key={String(duplicate)}
                  className="marquee-group"
                  aria-label={duplicate ? undefined : row.label}
                  aria-hidden={duplicate || undefined}
                  role="list"
                >
                  {row.items.map(technology => <TechnologyItem key={technology.name} technology={technology} />)}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p id="marquee-help" className="marquee-footnote">Hover or use keyboard focus to pause.</p>
    </section>
  );
}
