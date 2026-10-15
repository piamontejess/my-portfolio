export interface ExperienceItem { id: string; title: string; company: string; period: string; summary: string; contributions: string[]; technologies: string[]; }
export const experiences: ExperienceItem[] = [
  {
    id: "sprobe-probationary", title: "Software Engineer", company: "Sprobe Inc. · Probationary", period: "Jul – Sep 2026",
    summary: "Contributed to Puntos, a multi-role loyalty and rewards platform, across web, mobile, backend integration, and delivery workflows.",
    technologies: ["React.js", "React Native", "TypeScript", "Laravel", "PostgreSQL"],
    contributions: [
      "Developed and maintained web and mobile applications, including Front Desk, Store Manager, Super Admin, and customer-facing modules.",
      "Migrated authentication, rewards, transactions, store management, and support services from Supabase to Laravel REST APIs.",
      "Improved real-time customer support with Laravel Reverb/WebSockets, including messaging, image attachments, synchronization, and reliability handling.",
      "Built responsive interfaces, reusable components, localization support, and mobile-friendly workflows.",
      "Implemented and tested the Puntos marketing landing page with English/Japanese localization and backend-integrated Book a Demo functionality.",
      "Performed end-to-end and regression testing, resolving frontend/backend integration issues across critical workflows.",
      "Assisted with Android builds, staging releases, deployment verification, Docker environments, and CI/CD workflows.",
      "Collaborated with developers and project managers through reviews, task tracking, testing, and iterative delivery.",
    ],
  },
  {
    id: "sprobe-intern", title: "Software Engineer", company: "Sprobe Inc. · Intern", period: "Feb – May 2026",
    summary: "Contributed to UbanGo, a collaborative travel planning platform for creating and organizing Philippine trip itineraries.",
    technologies: ["React.js", "TypeScript", "Inertia", "WebSockets", "Laravel"],
    contributions: [
      "Developed interactive trip-planning and itinerary features using React, TypeScript, and Inertia.",
      "Worked with WebSockets to support real-time collaborative itinerary experiences.",
      "Contributed to AI-assisted planning using Ollama and Serper for travel plans and destination information.",
      "Assisted with debugging, testing, UI improvements, feature implementation, and frontend/backend integration.",
      "Collaborated through Git workflows, feature branches, pull requests, code reviews, and Agile practices.",
    ],
  },
  {
    id: "student", title: "Student Developer Projects", company: "Academic & personal projects", period: "2023 – 2025",
    summary: "Built academic and personal projects for local services, learning, and everyday tasks.",
    technologies: ["React.js", "React Native", "Laravel", "TypeScript"],
    contributions: ["Developed projects spanning barangay management, moving-service bookings, learning platforms, library management, and mobile applications.", "Built interactive interfaces, integrated APIs, and explored payments, role-based access, maps, and IoT systems."],
  },
];
