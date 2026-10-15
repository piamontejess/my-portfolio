"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "../components/project-card";
import { projects } from "../lib/projects-data";

const featured = projects.filter(project => project.featured);
const archiveOrder = ["ktmovers", "moneyvault-iot", "trashbin-iot"];
const archiveRank = (id: string) => {
  const index = archiveOrder.indexOf(id);
  return index === -1 ? archiveOrder.length : index;
};
const archived = projects
  .filter(project => !project.featured)
  .sort((a, b) => archiveRank(a.id) - archiveRank(b.id));

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleArchive = () => {
    if (expanded) toggleRef.current?.scrollIntoView({ block: "center", behavior: "instant" });
    setExpanded(value => !value);
  };

  return (
    <section id="projects" className="section-shell section-spacing" aria-labelledby="projects-title">
      <div className="section-heading heading-with-copy">
        <div>

          <h2 id="projects-title">Projects I’ve <span className="editorial">worked on.</span></h2>
        </div>
        <p>Team projects and personal builds, with a closer look at the features I contributed.</p>
      </div>

      <div className="featured-projects">
        {featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>

      <div className="archive-toggle">
        <button
          ref={toggleRef}
          className="archive-button"
          type="button"
          aria-expanded={expanded}
          aria-controls="project-archive"
          onClick={toggleArchive}
        >
          {expanded ? "Show fewer projects" : "Explore more projects"}
          <span className="archive-count">{archived.length}</span>
          <ChevronDown size={17} className={expanded ? "rotate-180" : ""} aria-hidden="true" />
        </button>
      </div>

      <div id="project-archive" hidden={!expanded}>
        <div className="archive-heading">
          <h3>More projects</h3>
          <p>Earlier explorations in web, mobile, and IoT.</p>
        </div>
        <div className="projects-grid archive-grid">
          {archived.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + featured.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
