import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const SLIDESHOW_IMAGES = [
  "/hero-slides/images1.jpg",
  "/hero-slides/images2.jpg",
  "/hero-slides/images3.jpg",
  "/hero-slides/images4.jpg",
  "/hero-slides/images5.jpg",
  "/hero-slides/university_pic.jpg"
];

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  gradient?: "maroon" | "navy" | "audit";
  children?: ReactNode;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  gradient = "maroon",
  children,
  className
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const gradientStyles = {
    maroon: "bg-gradient-to-br from-[#570013]/85 to-[#800020]/85",
    navy: "bg-gradient-to-br from-[#1B365D]/85 to-[#002c36]/85",
    audit: "bg-gradient-to-br from-institutional-navy/90 to-slate-900/90"
  };

  return (
    <section className={cn("relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden", className)}>
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {SLIDESHOW_IMAGES.map((src, idx) => (
          <img 
            key={src}
            src={src} 
            alt="Background" 
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-center md:object-[50%_20%] transition-opacity duration-1000",
              idx === currentSlide ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        {/* Color Overlay */}
        <div className={cn("absolute inset-0", gradientStyles[gradient], "opacity-60")}></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            {subtitle && (
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white font-label-md mb-4 text-sm tracking-wide">
                {subtitle}
              </span>
            )}
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-4 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="font-body-lg text-lg text-white/90 max-w-2xl">
                {description}
              </p>
            )}
          </div>
          <div className="lg:col-span-4">
             {children}
          </div>
        </div>
      </div>
    </section>
  );
}
