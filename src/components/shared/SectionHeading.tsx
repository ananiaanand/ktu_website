import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  id?: string;
  inverse?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  children,
  icon,
  id,
  inverse
}: SectionHeadingProps) {
  
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <div id={id} className={cn("mb-10 flex flex-col max-w-3xl", alignStyles[align], className)}>
      <div className="flex items-center gap-3 mb-2">
        {icon && <span className="text-kerala-gold flex items-center justify-center">{icon}</span>}
        <h2 className={cn(
          "font-headline-lg text-3xl font-bold leading-tight relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1.5 after:bg-kerala-gold",
          inverse ? "text-white" : "text-institutional-navy dark:text-white"
        )}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={cn(
          "font-body-lg text-lg mt-4 leading-relaxed",
          inverse ? "text-white/80" : "text-slate-gray dark:text-slate-400"
        )}>
          {subtitle}
        </p>
      )}
      {children && (
        <div className="mt-4 w-full">
          {children}
        </div>
      )}
    </div>
  );
}
