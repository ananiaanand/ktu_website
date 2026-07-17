import { useQuery } from "@tanstack/react-query";
import { examinationService } from "@/services/api";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";
import { CalendarClock, BellRing, ClipboardList, ScrollText, Download } from "lucide-react";

export default function ExaminationPage() {
  const { data: timetables = [], isLoading } = useQuery({
    queryKey: ['timetables'],
    queryFn: examinationService.getTimetables
  });

  return (
    <div>
      <HeroSection 
        title="Examination Portal"
        description="Timetables, notifications, results, and student services related to university examinations."
        gradient="maroon"
      />

      {/* Quick Links Section */}
      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickLinkCard icon={<CalendarClock className="w-6 h-6" />} title="Timetables" description="Latest exam schedules" href="#timetables" />
            <QuickLinkCard icon={<BellRing className="w-6 h-6" />} title="Notifications" description="Exam related updates" href="#notifications" />
            <QuickLinkCard icon={<ClipboardList className="w-6 h-6" />} title="Results" description="View exam results" href="#" />
            <QuickLinkCard icon={<ScrollText className="w-6 h-6" />} title="Certificates" description="Degree & provisional requests" href="#" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Latest Timetables" id="timetables" />
          
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm">
             <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low dark:bg-slate-800 text-institutional-navy dark:text-white font-label-lg">
                    <th className="p-4 border-b border-outline/10">Exam Name</th>
                    <th className="p-4 border-b border-outline/10">Session</th>
                    <th className="p-4 border-b border-outline/10">Published On</th>
                    <th className="p-4 border-b border-outline/10 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-sm text-slate-gray dark:text-slate-300">
                  {isLoading ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center">Loading timetables...</td>
                    </tr>
                  ) : timetables.length > 0 ? (
                    timetables.map(tt => (
                      <tr key={tt.id} className="border-b border-outline/10 hover:bg-surface dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4 font-semibold text-institutional-navy dark:text-slate-200">{tt.name}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-surface-variant dark:bg-slate-700 rounded text-xs">{tt.session}</span>
                        </td>
                        <td className="p-4">{tt.publishedDate}</td>
                        <td className="p-4 text-right">
                           <a href={tt.downloadUrl} className="text-heritage-maroon dark:text-primary-fixed hover:underline flex items-center justify-end gap-1">
                             <Download className="w-4 h-4" /> Download
                           </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-gray">No timetables available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
          </div>
        </div>
      </section>
    </div>
  );
}
