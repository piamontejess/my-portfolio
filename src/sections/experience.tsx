"use client";

interface ExperienceItem {
  title: string;
  subtitle: string;
  period?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "BS Information Technology",
    subtitle: "Cebu Technological University – currently in 4th Year.",
    period: "Present",
  },
  {
    title: "Capstone Project",
    subtitle:
      "BarangMI – an AI-powered Barangay Management Information System designed to automate administrative tasks, enhance transparency, and deliver efficient, citizen-centric services.",
    period: "2025",
  },
  {
    title: "UI/UX Design & Learning",
    subtitle:
      "Gained experience in UI/UX design through online courses, creating wireframes and interactive prototypes, and refining app concepts to optimize usability and user experience.",
    period: "2025",
  },
  {
    title: "Student Projects",
    subtitle:
      "Built web and mobile apps including a library system, quiz application, student account system, moving service, and sleeping mobile app using React, Laravel, TypeScript, PostgreSQL, and more.",
    period: "2023–2024",
  },
  {
    title: "Hello World!",
    subtitle: "My first line of code.",
    period: "2022",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            My Journey
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A timeline of how I grew in technology, design, and development.
          </p>
        </div>

        <div className="relative pl-8 sm:pl-10">
          {/* Vertical line for stepper */}
          <div
            className="pointer-events-none absolute left-3 sm:left-4 top-3 bottom-6 w-px bg-gradient-to-b from-primary/50 via-border to-border"
            aria-hidden="true"
          />

          <div className="space-y-5">
            {experiences.map((item, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={item.title + index}
                  className="relative flex gap-4 sm:gap-6 items-stretch"
                >
                  {/* Step indicator */}
                  <div className="relative flex flex-col items-center mt-1">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                        isFirst
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background"
                      }`}
                    >
                      <span
                        className={`block h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                          isFirst ? "bg-primary" : "bg-border"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <div className="group rounded-xl bg-card/95 border border-border/80 shadow-sm px-4 py-3 sm:px-6 sm:py-4 flex items-start justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>
                      {item.period && (
                        <span
                          className={`ml-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap border ${
                            isFirst
                              ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                              : "bg-muted text-foreground/80 border-muted"
                          }`}
                        >
                          {item.period}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Joined Organization */}
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              Joined Organization
            </h3>
            <div className="rounded-xl bg-card/95 border border-border/80 shadow-sm px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Google Developer Groups on Campus – Cebu Technological University – Main Campus
                </p>
                <p className="text-xs text-muted-foreground mt-1">Photography Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
