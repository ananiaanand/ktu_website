import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  className?: string;
  variant?: "maroon" | "navy" | "gold" | "white";
}

export function StatCard({ icon, value, label, className, variant = "white" }: StatCardProps) {
  
  const variants = {
    maroon: "bg-heritage-maroon text-white border-transparent",
    navy: "bg-institutional-navy text-white border-transparent",
    gold: "bg-kerala-gold text-institutional-navy border-transparent",
    white: "bg-surface-container-lowest dark:bg-slate-800 border-outline-variant/30 dark:border-slate-700 text-on-surface dark:text-white"
  };

  const iconColors = {
    maroon: "text-kerala-gold bg-white/10",
    navy: "text-kerala-gold bg-white/10",
    gold: "text-institutional-navy bg-white/20",
    white: "text-heritage-maroon dark:text-primary-fixed bg-surface-container-low dark:bg-slate-700"
  };

  const labelColors = {
    maroon: "text-white/80",
    navy: "text-white/80",
    gold: "text-institutional-navy/80",
    white: "text-slate-gray dark:text-slate-400"
  };

  return (
    <div className={cn("p-6 rounded-xl border flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-lg", variants[variant], className)}>
      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4", iconColors[variant])}>
        {icon}
      </div>
      <h3 className="font-headline-xl text-4xl font-bold mb-1 tracking-tight">{value}</h3>
      <p className={cn("font-label-lg font-medium", labelColors[variant])}>{label}</p>
    </div>
  );
}

