import Image from "next/image";
import Link from "next/link";
import { webProjects, type Project } from "../lib/projects-data";

export default function ProjectsSection() {
  const capstone = webProjects.find((p) => p.id === "barangmi");
  const featured = webProjects.filter((p) => p.id !== "barangmi").slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="mb-10 text-center space-y-3">
          
          <h2 className="text-3xl sm:text-4xl mt-4 font-bold tracking-tight text-foreground">
             Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A snapshot of some of my favorite web projects. Explore clean
            layouts, thoughtful interactions, and modern technology choices.
          </p>
        </div>

        {/* Capstone highlight */}
        {capstone && (
          <article className="mb-10 grid gap-6 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-card/95 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-background/40">
              <Image
                src={capstone.image}
                alt={capstone.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover mt-10transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-4 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 border border-emerald-500/30">
                  Capstone Project
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/30">
                  BarangMI
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {capstone.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {capstone.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {capstone.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-foreground/80 border border-border/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <p className="text-[11px] font-medium text-muted-foreground">
                  {capstone.role}
                </p>
                {capstone.link && (
                  <Link
                    href={capstone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                  >
                    View Project
                    <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Other featured web projects */}
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project: Project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden bg-background/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover mt-10transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground/80 border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between pt-1">
                  <p className="text-[11px] font-medium text-muted-foreground">
                    {project.role}
                  </p>
                  {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <span aria-hidden="true">↗</span>
                  </Link>
                )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            View All Projects
            <span aria-hidden="true" className="text-base">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
