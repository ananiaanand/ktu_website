import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface QuickLinkCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function QuickLinkCard({ icon, title, description, href, className }: QuickLinkCardProps) {
  return (
    <Link 
      to={href}
      className={cn("block group p-5 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/30 dark:border-slate-700 hover:border-kerala-gold hover:shadow-lg transition-all", className)}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-heritage-maroon text-white flex items-center justify-center flex-shrink-0 group-hover:bg-institutional-navy transition-colors shadow-sm">
          {icon}
        </div>
        <div>
          <h4 className="font-headline-sm text-lg font-semibold text-on-surface dark:text-white mb-1 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
            {title}
          </h4>
          <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
