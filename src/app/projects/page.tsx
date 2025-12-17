import Image from "next/image";
import Link from "next/link";
import {
  webProjects,
  mobileProjects,
  iotProjects,
  type Project,
} from "@/src/lib/projects-data";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              All Projects
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              A closer look at the projects I&apos;ve designed and built across
              web, mobile, and IoT.
            </p>
          </div>

          <Link
            href="/#projects"
            className="inline-flex w-fit items-center justify-center rounded-full border border-border bg-card/70 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm transition-all hover:bg-muted"
          >
            ← Back 
          </Link>
        </div>

        <ProjectsGroup
          title="Web Projects"
          
          projects={webProjects}
        />

        <ProjectsGroup
          title="Mobile Projects"
         
          projects={mobileProjects}
        />

        <ProjectsGroup
          title="IoT Projects"
          
          projects={iotProjects}
        />
      </div>
    </main>
  );
}

interface ProjectsGroupProps {
  title: string;
 
  projects: Project[];
}

function ProjectsGroup({ title,  projects }: ProjectsGroupProps) {
  if (!projects.length) return null;

  return (
    <section className="mt-10 first:mt-0">
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            {title}
          </h2>
         
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {projects.length.toString().padStart(2, "0")}{" "}
          {projects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
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
                className="object-cover mt-10  transition-transform duration-500 hover:scale-110"
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
                {project.techStack.map((tech) => (
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
    </section>
  );
}
