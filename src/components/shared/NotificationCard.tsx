import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Announcement } from "@/types/announcement";

interface NotificationCardProps {
  announcement: Announcement;
  className?: string;
}

export function NotificationCard({ announcement, className }: NotificationCardProps) {
  const isNew = new Date(announcement.date).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000;
  
  const categoryColors: Record<string, string> = {
    Examination: "bg-institutional-navy/10 text-institutional-navy dark:bg-institutional-navy/30 dark:text-secondary-fixed",
    Academics: "bg-kerala-gold/10 text-yellow-800 dark:bg-kerala-gold/20 dark:text-kerala-gold",
    Research: "bg-success-green/10 text-success-green dark:bg-success-green/20 dark:text-green-400",
    General: "bg-slate-gray/10 text-slate-gray dark:bg-slate-gray/30 dark:text-slate-300",
    Urgent: "bg-error/10 text-error dark:bg-error/20 dark:text-error-container",
    Updates: "bg-secondary/10 text-secondary dark:bg-secondary/30 dark:text-secondary-fixed"
  };

  return (
    <div className={cn("group p-4 bg-surface-container-lowest dark:bg-slate-800 rounded-xl border border-outline-variant/30 dark:border-slate-700 hover:border-kerala-gold/50 hover:shadow-lg transition-all flex gap-4 cursor-pointer", className)}>
      <div className="flex-shrink-0 w-16 h-16 bg-surface-container-low dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center border border-outline-variant/20 group-hover:bg-heritage-maroon group-hover:text-white transition-colors">
        <span className="font-headline-md text-xl font-bold leading-none">{announcement.day}</span>
        <span className="font-label-md text-xs font-medium uppercase tracking-wider">{announcement.month}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <Badge variant="secondary" className={cn("font-label-md text-[10px] px-2 py-0 border-0 rounded", categoryColors[announcement.category] || categoryColors.General)}>
            {announcement.category}
          </Badge>
          {isNew && (
            <Badge className="bg-error hover:bg-error/90 text-white font-label-md text-[10px] px-2 py-0 rounded animate-pulse">
              NEW
            </Badge>
          )}
        </div>
        <h4 className="font-headline-sm text-base text-on-surface dark:text-white font-semibold line-clamp-2 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors mb-1">
          {announcement.title}
        </h4>
        <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 line-clamp-1">
          {announcement.description}
        </p>
      </div>
    </div>
  );
}
