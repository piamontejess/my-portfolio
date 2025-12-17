export type ProjectCategory = "Web" | "Mobile" | "IoT";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  role: string;
  category: ProjectCategory;
  link?: string; 
}

export const projects: Project[] = [
  {
    id: "barangmi",
    title: "BarangMI",
    description:
      "An AI-powered Barangay Management Information System designed to automate administrative tasks, enhance transparency, and deliver efficient, citizen-centric services.",
    image: "/assets/Add a heading.png",
    techStack: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn",
      "Laravel",
      "JWT",
      "Spatie",
      "PHP",
      "React Native",
      "Expo",
      "Python",
      "Flask",
      "NX Monorepo",
      "Vite",
      "Node.js",
      "SMTP",
    ],
    role: "Capstone Project ",
    category: "Web",
    link: "https://www.facebook.com/reel/1849048193488320",
  },
  {
    id: "codiphy",
    title: "Codiphy",
    description:
      "Codiphy is an AI-driven learning platform that automatically generates programming quizzes to strengthen your coding skills. Focus on learning while Codiphy handles the quizzes, making practice more engaging and effective.",
    image: "/assets/29.png",
    techStack: ["ReactJS", "Tailwind CSS", "NodeJS", "Vite", "Flask","OpenAI","Firebase"],
    role: "January 2024",
    category: "Web",
    link: "https://codiphy.onrender.com/"
  },
  {
    id: "ktmovers",
    title: "Kt Movers",
    description:
      "A comprehensive moving service platform offering truck booking, real-time rate estimation, and seamless truck and driver management.",
    image: "/assets/33.png",
    techStack: ["ReactJS", "TypeScript","Tailwind CSS","Vite","Supabase","Mapbox"],
    role: "October 2024",
    category: "Web",
  },
  {
    id: "libratech",
    title: "Libratech",
    description:
      "LibraTech is a smart, modern library management system designed to simplify operations, enhance patron satisfaction, and foster stronger library engagement.",
    image: "/assets/28.png",
    techStack: ["Java", "Firebase","SMTP"],
    role: "June 2023",
    category: "Web",
  },

  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    description:
      "My first-ever portfolio built with HTML, JavaScript, and CSS. A small beginning, but a big step in showcasing my skills, creativity, and a little bit about me.",
    image: "/assets/27.png",
    techStack: ["HTML", "CSS", "JavaScript"],
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
    techStack: ["Django", "SQlite", "Python", "Tailwind CSS"],
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
      "MyRealm is a social app where you connect, post, and express your interests—your world, your rules.",
    image: "/assets/36.png",
    techStack: ["React Native", "TypeScript", "Expo", "Tailwind CSS"],
    role: "April 2025",
    category: "Mobile",
  },
  {
    id: "trashbin-iot",
    title: "Smart Trashbin",
    description:
      "A Smart Trash Bin project equipped with sensors and three waste separators—biodegradable, non-biodegradable, and recyclable—aimed at improving waste management through smart technology.",
    image: "/assets/37.png",
    techStack: ["Arduino", "C++"],
    role: "March 2024",
    category: "IoT",
  },
  {
    id: "moneyvault-iot",
    title: "Money Vault",
    description:
      "A Smart Money Vault featuring core banking functions—deposit, withdraw, and balance inquiry—built to demonstrate secure transaction handling.",
    image: "/assets/Screenshot 2025-12-17 194245.png",
    techStack: ["Arduino", "C++"],
    role: "April 2025",
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

