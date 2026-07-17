import { cn } from "@/lib/utils";
import { FileText, FileSpreadsheet, FolderArchive, HardDrive, Calendar, Download } from "lucide-react";

interface DocumentCardProps {
  title: string;
  description?: string;
  fileSize?: string;
  fileType?: "PDF" | "DOCX" | "XLSX" | "ZIP";
  date?: string;
  downloadUrl?: string;
  className?: string;
}

export function DocumentCard({
  title,
  description,
  fileSize,
  fileType = "PDF",
  date,
  downloadUrl = "#",
  className
}: DocumentCardProps) {

  const typeColors = {
    PDF: "bg-error/10 text-error border-error/20",
    DOCX: "bg-institutional-navy/10 text-institutional-navy border-institutional-navy/20",
    XLSX: "bg-success-green/10 text-success-green border-success-green/20",
    ZIP: "bg-slate-gray/10 text-slate-gray border-slate-gray/20"
  };

  const typeIcons = {
    PDF: <FileText className="w-5 h-5" />,
    DOCX: <FileText className="w-5 h-5" />,
    XLSX: <FileSpreadsheet className="w-5 h-5" />,
    ZIP: <FolderArchive className="w-5 h-5" />
  };

  return (
    <div className={cn("p-5 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/30 dark:border-slate-700 hover:border-kerala-gold hover:shadow-md transition-all group flex flex-col h-full", className)}>
      <div className="flex items-start gap-4 mb-3">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border", typeColors[fileType])}>
          {typeIcons[fileType]}
        </div>
        <div className="flex-1">
          <h4 className="font-headline-sm text-base font-semibold text-on-surface dark:text-white line-clamp-2 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
            {title}
          </h4>
          {description && (
            <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-outline/10 flex items-center justify-between">
        <div className="flex items-center gap-3 font-label-md text-xs text-slate-gray dark:text-slate-400">
          {fileSize && (
            <span className="flex items-center gap-1">
              <HardDrive className="w-3.5 h-3.5" /> {fileSize}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {date}
            </span>
          )}
        </div>
        <a 
          href={downloadUrl}
          className="w-8 h-8 rounded-full bg-surface-container-low dark:bg-slate-800 text-institutional-navy dark:text-white flex items-center justify-center hover:bg-heritage-maroon hover:text-white transition-colors"
          aria-label="Download Document"
        >
          <Download className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
