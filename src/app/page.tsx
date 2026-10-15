import Hero from "../sections/hero";
import Navbar from "../sections/nav";
import AboutMe from "../sections/aboutme";
import Experience from "../sections/experience";
import TechStack from "../sections/techstack";
import Contact from "../sections/contact";
import ProjectsSection from "../sections/projects";
import Background from "../components/background";
import ScrollReveals from "../components/scroll-reveals";
import SectionNavigation from "../components/section-navigation";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Background />
      <Navbar />
      <ScrollReveals />
      <SectionNavigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutMe />
        <Experience />
        <TechStack />
        <ProjectsSection />
        <Contact />
      </main>
    </>
  );
}
