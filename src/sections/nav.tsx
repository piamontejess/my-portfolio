"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Get navbar height for offset
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      // Get navbar height for offset
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
        {/* Navigation Links */}
        <div className="flex items-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-foreground font-semibold hover:text-primary transition-colors cursor-pointer ${
                index > 0 ? "ml-8" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Contact Me Button */}
          <Button
            variant="default"
            className="ml-10 rounded-full !bg-primary hover:!bg-transparent hover:!border-2 hover:!border-primary hover:!text-primary !text-white font-medium px-6 py-2.5 shadow-none"
            onClick={handleContactClick}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
