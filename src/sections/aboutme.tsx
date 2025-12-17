"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

export default function AboutMe() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Jessel Ann M. Piamonte";

  // refs for looping typing
  const nameIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const startTyping = () => {
      // clear any existing
      if (nameIntervalRef.current) {
        clearInterval(nameIntervalRef.current);
        nameIntervalRef.current = null;
      }
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }

      currentIndexRef.current = 0;

      nameIntervalRef.current = setInterval(() => {
        if (currentIndexRef.current === 0) {
          setTypedName(fullName[0]);
          currentIndexRef.current = 1;
        } else if (currentIndexRef.current < fullName.length) {
          currentIndexRef.current++;
          setTypedName(fullName.slice(0, currentIndexRef.current));
        } else {
          // pause then restart
          if (nameIntervalRef.current) {
            clearInterval(nameIntervalRef.current);
            nameIntervalRef.current = null;
          }
          resetTimeoutRef.current = setTimeout(() => {
            startTyping();
          }, 2000);
        }
      }, 80);
    };

    startTyping();

    return () => {
      if (nameIntervalRef.current) {
        clearInterval(nameIntervalRef.current);
        nameIntervalRef.current = null;
      }
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }
    };
  }, [fullName]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl border-0 bg-card/95 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column - Image */}
              <div className="lg:w-1/2 relative flex items-center justify-center p-8 lg:p-12">
                <div
                  className={`relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] overflow-hidden rounded-full shadow-2xl ring-4 ring-primary/10 bg-background transition-all duration-700 ${
                    isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                  }`}
                >
                  <Image
                    src="/assets/Untitled design.png"
                    alt="Jessel Ann - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                    priority
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div
                  className={`space-y-6 transition-all duration-700 delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Name with typing animation */}
                  <div className="flex items-center gap-1 text-xl sm:text-3xl font-semibold text-foreground whitespace-nowrap">
                    <span>{typedName}</span>
                    <span className={`w-0.5 h-6 bg-primary inline-block align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-5 text-muted-foreground leading-7 text-base sm:text-sg">
                    <p className="text-foreground/90">
                      I started my journey in tech with very little knowledge, but what I lacked in experience, I made up for with curiosity and an eagerness to learn.
                      I was always fascinated by how things work, from simple websites to complex devices, and this curiosity became the spark that fueled my growth as a developer and designer.
                      Over time, my fascination transformed into a true passion for creating digital experiences that are not only functional but also visually engaging and meaningful to users.
                    </p>

                    <p>
                      I specialize in frontend development, design, and IoT, focusing on crafting solutions that are both intuitive and impactful.
                      I take pride in combining aesthetics with functionality, ensuring every project I work on is polished, user-friendly, and aligned with the needs of those who interact with it.
                      Every challenge I encounter is an opportunity to learn, innovate, and push the boundaries of what I can create.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
