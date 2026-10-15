export type ProjectCategory = "Web" | "Mobile" | "IoT";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  year?: string;
  featured?: boolean;
  contributions?: string[];
  subtitle?: string;
  highlights?: string[];
  linkLabel?: string;
  techStack: string[];
  role: string;
  category: ProjectCategory;
  link?: string; 
}

export const projects: Project[] = [
  {
    id: "puntos", title: "Puntos", year: "2026", featured: true,
    subtitle: "Mobile loyalty & rewards application",
    description: "A mobile application where customers collect points and redeem rewards, supported by role-based tools for store staff and administrators.",
    techStack: ["React Native", "Expo", "TypeScript", "Laravel", "PostgreSQL", "Laravel Reverb", "React.js", "PayMongo", "Docker", "WebSockets"],
    role: "Software Engineer", category: "Mobile",
    highlights: [
      "Integrated Laravel REST APIs and authentication across customer, Front Desk, and Super Admin workflows.",
      "Implemented real-time chat support with Laravel Reverb, including attachments and message synchronization.",
    ],
    contributions: [
      "Contributed across Customer, Front Desk, Store Manager, Super Admin, and Chat Support modules.",
      "Migrated Supabase-backed functionality to Laravel REST APIs for rewards, transactions, store management, accounts, and support.",
      "Developed and improved reward redemption, points transactions, store management, and account workflows.",
      "Implemented real-time messaging and synchronization using Laravel Reverb/WebSockets.",
      "Contributed to Android builds, E2E testing, staging verification, deployment workflows, and production-related fixes.",
      "Developed marketing website features including English/Japanese localization and backend-integrated demo booking.",
    ],
  },
  {
    id: "ubango", title: "UbanGo", year: "2026", featured: true,
    subtitle: "Browser-based collaborative trip planner",
    description: "A browser-based platform for planning Philippine trips together, organizing itineraries, and sharing travel-related posts.",
    techStack: ["React.js", "TypeScript", "Inertia", "Laravel", "WebSockets", "Docker"],
    role: "Software Engineer Intern", category: "Web",
    highlights: [
      "Built travel post creation, nested comments, and threaded replies with reactions on posts and comments.",
      "Integrated real-time comment updates and supported UI improvements, testing, and debugging.",
    ],
    contributions: [
      "Implemented the Post feature for sharing travel-related content.",
      "Developed nested comments with threaded replies, real-time updates, and reactions for posts and comments.",
      "Contributed to collaborative itinerary features and AI-assisted travel planning with Ollama and Serper.",
      "Improved interactive interfaces and assisted with testing, debugging, and frontend/backend integration.",
    ],
  },
  {
    id: "barangmi",
    year: "2025", featured: true,
    subtitle: "Multi-tenant barangay management system",
    highlights: [
      "Implemented an NX monorepo with 14 React subsystems and a shared Laravel API.",
      "Built role-based access, PayMongo subscriptions, and Mapbox visualizations across web and mobile workflows.",
    ],
    contributions: [
      "Developed a multi-tenancy MIS allowing Cebu City barangays to operate independently within one unified system.",
      "Implemented an NX monorepo with 14 centralized React.js subsystems and one Laravel API server.",
      "Added PayMongo subscriptions and payments supporting e-wallets and online banking.",
      "Built feature-based, role-based access control for staff, administrators, and coordinators.",
      "Integrated React.js web and React Native mobile applications, designed for modularity and additional barangay onboarding.",
      "Used TanStack Query for API fetching and caching, and Mapbox for heatmaps, clustering, and polygon boundaries.",
      "Integrated an LLM-powered AI Booking Assistant.",
    ],
    title: "BarangMI",
    description:
      "A management information system that lets Cebu City barangays manage their own records and services within one shared web and mobile platform.",
    image: "/assets/Add a heading.png",
    techStack: [
      "React.js",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "NX Monorepo",
      "Tailwind CSS",
      "shadcn/ui",
      "JWT",
      "Spatie",
      "PHP",
      "React Native",
      "PayMongo",
      "TanStack Query",
      "Mapbox",
      "Expo",
      "Python",
      "Flask",
      "Vite",
      "Node.js",
      "SMTP",
    ],
    role: "Capstone Project ",
    category: "Web",
    link: "https://www.facebook.com/reel/1849048193488320",
    linkLabel: "Watch project demo",
  },
  {
    id: "codiphy",
    title: "Codiphy",
    description:
      "A learning platform that generates programming quizzes with AI, giving learners a way to practice coding concepts.",
    image: "/assets/29.png",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Vite", "Flask","OpenAI","Firebase"],
    role: "January 2024",
    category: "Web",
    link: "https://codiphy.onrender.com/"
  },
  {
    id: "ktmovers",
    year: "2024",
    contributions: ["Built booking interfaces with real-time rate calculation, truck assignment, and schedule coordination.", "Developed administrative dashboards for trucks, drivers, and service requests.", "Integrated Mapbox for pickup/drop-off selection and route visualization."],
    title: "Kt Movers",
    description:
      "A moving-service platform for booking trucks, estimating rates, and managing drivers and schedules.",
    image: "/assets/33.png",
    techStack: ["React.js", "TypeScript","Tailwind CSS","Vite","Supabase","Mapbox"],
    role: "October 2024",
    category: "Web",
  },
  {
    id: "libratech",
    title: "Libratech",
    description:
      "A library management system for organizing library operations and helping patrons access services.",
    image: "/assets/28.png",
    techStack: ["Java", "Firebase","SMTP"],
    role: "June 2023",
    category: "Web",
  },

  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    description:
      "My first portfolio, built with HTML, CSS, and JavaScript to share my projects and practice frontend development.",
    image: "/assets/27.png",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    role: "Nov 2023",
    category: "Web",
    link:"https://piamonte-portfolio.netlify.app/"
  },
  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    description:
      "A modern responsive portfolio that showcases my skills, experience, and projects with smooth scrolling and clean typography.",
    image: "/assets/30.png",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    role: "December 2025",
    category: "Web",
  },
  {
    id: "student-account",
    title: "Student Account System",
    description:
      "A student account system for managing student information, courses, and grades.",
    image: "/assets/32.png",
    techStack: ["Django", "SQLite", "Python", "Tailwind CSS"],
    role: "May 2024",
    category: "Web",
  },
  {
    id: "barangmi-mobile",
    title: "BarangMI",
    description:
      "A mobile app for the BarangMI project that allows users to manage their barangay information and services.",
    image: "/assets/34.png",
    techStack: ["React Native", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    role: "In Progress",
    category: "Mobile",
  },
  {
    id: "hagoc-mobile",
    title: "Hagoc",
    description:
      "A mobile app to track sleep, play calming sounds, listen to bedtime stories, and learn sleep facts.",
    image: "/assets/35.png",
    techStack: ["React Native", "TypeScript", "Supabase", "Tailwind CSS"],
    role: "April 2025",
    category: "Mobile",
  },
  {
    id: "myrealm-mobile",
    title: "MyRealm",
    description:
      "A social app for sharing posts, connecting with others, and expressing interests.",
    image: "/assets/36.png",
    techStack: ["React Native", "TypeScript", "Expo", "Tailwind CSS"],
    role: "April 2025",
    category: "Mobile",
  },
  {
    id: "trashbin-iot",
    year: "2024",
    title: "Smart Trashbin",
    description:
      "A sensor-based bin that separates biodegradable, non-biodegradable, and recyclable waste.",
    image: "/assets/37.png",
    techStack: ["Arduino UNO", "Servo Motor", "Sensors"],
    role: "Student Project · 2024",
    contributions: ["Developed an IoT waste segregation system that automatically classifies biodegradable, non-biodegradable, and recyclable waste."],
    category: "IoT",
  },
  {
    id: "moneyvault-iot",
    year: "2024",
    title: "Money Vault",
    description:
      "A secure vault system with PIN-based access control and sensors to detect unauthorized interaction.",
    image: "/assets/Screenshot 2025-12-17 194245.png",
    techStack: ["Arduino UNO", "Keypad", "LCD", "Ultrasonic Sensor", "Servo Motor", "Buzzer"],
    role: "Student Project · 2024",
    contributions: ["Implemented PIN-based vault access control.", "Used ultrasonic sensors to enhance security and detect unauthorized interaction."],
    category: "IoT",
  },
];

export const webProjects = projects.filter(
  (project) => project.category === "Web",
);

export const mobileProjects = projects.filter(
  (project) => project.category === "Mobile",
);

export const iotProjects = projects.filter(
  (project) => project.category === "IoT",
);

