"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello, I'm Jessel";
  const [showCursor, setShowCursor] = useState(true);
  const currentIndexRef = useRef(0);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTyping = () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }

      currentIndexRef.current = 0;

      typingIntervalRef.current = setInterval(() => {
        if (currentIndexRef.current === 0) {
          setDisplayedText(fullText[0]);
          currentIndexRef.current = 1;
        } else if (currentIndexRef.current < fullText.length) {
          currentIndexRef.current++;
          setDisplayedText(fullText.slice(0, currentIndexRef.current));
        } else {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          pauseTimeoutRef.current = setTimeout(() => {
            startTyping();
          }, 2000);
        }
      }, 100);
    };

    startTyping();

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 py-20 font-sans relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Professional blob decorations */}
        <div 
          className="absolute -top-[15%] -left-[10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] opacity-40 sm:opacity-50 animate-blob-float pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <Image
              src="/blob.svg"
              alt=""
              fill
              className="object-contain"
              style={{ filter: 'blur(0.5px)' }}
              priority
              sizes="(max-width: 640px) 500px, (max-width: 768px) 600px, 700px"
            />
          </div>
        </div>
        
        <div 
          className="absolute -bottom-[15%] -right-[10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] opacity-40 sm:opacity-50 animate-blob-float-delayed pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-full h-full" style={{ transform: 'scaleX(-1)' }}>
            <Image
              src="/blob.svg"
              alt=""
              fill
              className="object-contain"
              style={{ filter: 'blur(0.5px)' }}
              priority
              sizes="(max-width: 640px) 500px, (max-width: 768px) 600px, 700px"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        {/* Greeting */}
        <div className="mb-6 opacity-0 animate-fade-in-up">
          <p className="text-sm sm:text-base font-medium text-muted-foreground tracking-wide uppercase">
            Welcome to my portfolio
          </p>
        </div>

        {/* Name with typing animation */}
        <div className="opacity-0 animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="whitespace-nowrap block">
              {displayedText}
              {showCursor && (
                <span className="inline-block w-0.5 h-[0.9em] bg-primary ml-1 align-middle animate-pulse" />
              )}
            </span>
          </h1>
        </div>

        {/* Short intro */}
        <div className="opacity-0 animate-fade-in-up animation-delay-500">
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground mb-12">
            I craft beautiful, functional, and user-friendly digital experiences
            that make a meaningful difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 opacity-0 animate-fade-in-up animation-delay-700">
          <Button
            size="lg"
            className="min-w-[160px] rounded-full bg-primary text-primary-foreground font-medium tracking-wide px-8 py-6 text-base hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            View My Work
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="min-w-[160px] rounded-full border-2 border-primary/30 text-primary font-medium tracking-wide px-8 py-6 text-base hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
