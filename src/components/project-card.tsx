import Image from "next/image";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import Disclosure from "./disclosure";
import type { Project } from "../lib/projects-data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const visibleTags = project.techStack.slice(0, project.featured ? 6 : 4);
  const extraTags = project.techStack.length - visibleTags.length;
  const mobile = project.category === "Mobile";
  const titleId = `project-${project.id}`;

  return (
    <article className={`project-card ${project.featured ? "featured-project" : "archive-project"}`} aria-labelledby={titleId}>
      <div className={`project-visual ${project.image ? "image-cover" : mobile ? "puntos-cover" : "ubango-cover"}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes={project.featured ? "(max-width: 767px) 90vw, 440px" : "(max-width: 767px) 90vw, (max-width: 1100px) 45vw, 360px"}
            className="project-image"
          />
        ) : (
          <div className="type-cover" aria-hidden="true">
            <div className="cover-top">
              <span>{mobile ? "MOBILE APPLICATION" : "WEB APPLICATION"}</span>
              {mobile ? <Smartphone size={26} strokeWidth={1.5} /> : <Globe size={26} strokeWidth={1.5} />}
            </div>
            <div>
              <span className="cover-name">{project.title}<span>.</span></span>
              <span className="cover-bottom">{project.subtitle}</span>
            </div>
            <div className="cover-ring" /><div className="cover-ring second-ring" />
          </div>
        )}
        <span className="project-index">{String(index + 1).padStart(2, "0")} / {project.year ?? project.category}</span>
      </div>

      <div className="project-copy">
        <div className="project-meta">
          <p className="project-role">{project.role}</p>
          <span className="project-platform">{project.category}</span>
        </div>
        <h3 id={titleId}>{project.title}</h3>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        <p className="project-description">{project.description}</p>
        <div className="tags" aria-label="Key technologies">
          {visibleTags.map(tech => <span key={tech}>{tech}</span>)}
          {extraTags > 0 && <span className="tag-more">+{extraTags} in details</span>}
        </div>

        {project.highlights && (
          <div className="project-highlights">
            <h4>My contribution</h4>
            <ul className="contribution-list">
              {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        )}

        <div className="project-actions">
          <Disclosure label="View project details" closeLabel="Hide project details" context={project.title}>
            <div className="project-details">
              {project.contributions && (
                <>
                  <h4 className="detail-heading">More about my work</h4>
                  <ul className="contribution-list">
                    {project.contributions.map(text => <li key={text}>{text}</li>)}
                  </ul>
                </>
              )}
              <h4 className="detail-heading">Full technology stack</h4>
              <div className="tags">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div>
            </div>
          </Disclosure>
          {project.link && (
            <a className="external-project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              {project.linkLabel ?? "Visit project"}<ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">: {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
