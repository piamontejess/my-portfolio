"use client";

const technologies = [
  { name: "Bootstrap 4", icon: "icons8-bootstrap-48.png" },
  { name: "Git", icon: "icons8-git-48.png" },
  { name: "Figma", icon: "icons8-figma-48.png" },
  { name: "HTML 5", icon: "icons8-html5-48.png" },
  { name: "JavaScript", icon: "icons8-javascript-48.png" },
  { name: "Laravel", icon: "icons8-laravel-64.png" },
  { name: "PHP", icon: "icons8-php-64.png" },
  { name: "PostgreSQL", icon: "icons8-postgresql-48.png" },
  { name: "Postman", icon: "postman-icon-svgrepo-com.svg" },
  { name: "ReactJS", icon: "atom.png" },
  { name: "Tailwind CSS", icon: "icons8-tailwind-css-48.png" },
  { name: "TypeScript", icon: "icons8-typescript-48.png" },
  { name: "Python", icon: "icons8-python-48.png" },
  { name: "Notion", icon: "icons8-notion-50.png" },
  { name: "shadcn/ui", icon: "shadcn-ui-logo-png_seeklogo-519786.png" },
  { name: "VS Code", icon: "icons8-visual-studio-30.png" },
  { name: "npm", icon: "icons8-npm-48.png" },
  { name: "Node.js", icon: "icons8-node-js-48.png" },
  { name: "Vite", icon: "icons8-vite-48.png" },
  { name: "Expo", icon: "icons8-expo-50.png" },
  { name: "Miro", icon: "icons8-miro-64.png" },
  { name: "GitHub", icon: "icons8-github-logo-50.png" },
];

export default function TechStack() {
  const firstRow = [...technologies, ...technologies];
  const secondRow = [...technologies].reverse();

  return (
    <section id="techstack" className="py-20 px-6 bg-background/80 relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Tools and technologies I enjoy using to design, build, and ship digital experiences.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative overflow-hidden py-6 space-y-6">
          {/* Gradient fades on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

          {/* Top row - normal direction */}
          <div className="flex gap-10 whitespace-nowrap tech-marquee">
            {firstRow.map((tech, index) => (
              <div
                key={tech.name + "-top-" + index}
                className="inline-flex items-center justify-center"
                title={tech.name}
              >
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-card shadow-md border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={`/assets/tech/${tech.icon}`}
                    alt={tech.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - reverse direction */}
          <div className="flex gap-10 whitespace-nowrap tech-marquee-reverse">
            {[...secondRow, ...secondRow].map((tech, index) => (
              <div
                key={tech.name + "-bottom-" + index}
                className="inline-flex items-center justify-center"
                title={tech.name}
              >
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-card shadow-md border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={`/assets/tech/${tech.icon}`}
                    alt={tech.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
