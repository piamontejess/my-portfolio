import {
  Boxes, Container, CreditCard, Database, FlaskConical, Globe,
  Layers, MapPinned, Network, Radio, Code2, Coffee, Palette,
  Workflow, type LucideIcon,
} from "lucide-react";

export interface Technology {
  name: string;
  image?: string;
  symbol?: LucideIcon;
}

// Existing portfolio skills and icons, including the original 5da433d marquee.
// Generic symbols identify tools without a bundled logo; they are not brand marks.
export const technologyRows: { label: string; items: Technology[] }[] = [
  {
    label: "Frontend, mobile, and interface tools",
    items: [
      { name: "React.js", image: "atom.png" },
      { name: "React Native", image: "atom.png" },
      { name: "Expo", image: "icons8-expo-50.png" },
      { name: "TypeScript", image: "icons8-typescript-48.png" },
      { name: "JavaScript", image: "icons8-javascript-48.png" },
      { name: "HTML5", image: "icons8-html5-48.png" },
      { name: "Tailwind CSS", image: "icons8-tailwind-css-48.png" },
      { name: "Next.js", symbol: Globe },
      { name: "CSS3", symbol: Palette },
      { name: "Material UI", symbol: Layers },
      { name: "Inertia", symbol: Layers },
      { name: "TanStack Query", symbol: Database },
      { name: "Vite", image: "icons8-vite-48.png" },
      { name: "shadcn/ui", image: "shadcn-ui-logo-png_seeklogo-519786.png" },
      { name: "Bootstrap 4", image: "icons8-bootstrap-48.png" },
      { name: "Figma", image: "icons8-figma-48.png" },
      { name: "Mapbox", symbol: MapPinned },
      { name: "Python", image: "icons8-python-48.png" },
      { name: "Node.js", image: "icons8-node-js-48.png" },
      { name: "npm", image: "icons8-npm-48.png" },
      { name: "VS Code", image: "icons8-visual-studio-30.png" },
      { name: "Notion", image: "icons8-notion-50.png" },
      { name: "Miro", image: "icons8-miro-64.png" },
    ],
  },
  {
    label: "Backend, data, and delivery tools",
    items: [
      { name: "PHP", image: "icons8-php-64.png" },
      { name: "Laravel", image: "icons8-laravel-64.png" },
      { name: "PostgreSQL", image: "icons8-postgresql-48.png" },
      { name: "REST APIs", symbol: Network },
      { name: "Git", image: "icons8-git-48.png" },
      { name: "GitHub", image: "icons8-github-logo-50.png" },
      { name: "Docker", symbol: Container },
      { name: "WebSockets", symbol: Radio },
      { name: "Laravel Reverb", symbol: Radio },
      { name: "Supabase", symbol: Database },
      { name: "Postman", image: "postman-icon-svgrepo-com.svg" },
      { name: "CI/CD", symbol: Workflow },
      { name: "E2E testing", symbol: FlaskConical },
      { name: "NX Monorepo", symbol: Boxes },
      { name: "PayMongo", symbol: CreditCard },
      { name: "MySQL", symbol: Database },
      { name: "Java", symbol: Coffee },
      { name: "C#", symbol: Code2 },
      { name: "ASP.NET MVC", symbol: Layers },
    ],
  },
];
