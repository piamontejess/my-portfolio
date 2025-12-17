import Hero from "../sections/hero";
import Navbar from "../sections/nav";
import AboutMe from "../sections/aboutme";
import Experience from "../sections/experience";
import TechStack from "../sections/techstack";
import Contact from "../sections/contact";
import ProjectsSection from "../sections/projects";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <TechStack />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
