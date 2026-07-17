import { useState } from "react";

import { HeroSection } from "@/components/shared/HeroSection";
import { 
  Filter, Search, Clock, ArrowRight, 
  ExternalLink, Megaphone,
  BookOpen, GraduationCap, AlertTriangle, Info, Newspaper
} from "lucide-react";

const categoryConfig: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  Examination: { icon: <GraduationCap className="w-4 h-4" />, color: "text-error", bg: "bg-error/10 border-error/20" },
  Academics: { icon: <BookOpen className="w-4 h-4" />, color: "text-institutional-navy dark:text-primary-fixed", bg: "bg-institutional-navy/10 dark:bg-primary-fixed/10 border-institutional-navy/20 dark:border-primary-fixed/20" },
  Research: { icon: <Info className="w-4 h-4" />, color: "text-success-green", bg: "bg-success-green/10 border-success-green/20" },
  Urgent: { icon: <AlertTriangle className="w-4 h-4" />, color: "text-error", bg: "bg-error/10 border-error/20" },
  General: { icon: <Newspaper className="w-4 h-4" />, color: "text-slate-gray", bg: "bg-slate-gray/10 border-slate-gray/20" },
  Updates: { icon: <Megaphone className="w-4 h-4" />, color: "text-kerala-gold", bg: "bg-kerala-gold/10 border-kerala-gold/20" },
};

// Extended announcements for the dedicated page
const allAnnouncements = [
  {
    id: "1", title: "Ph.D. Admission 2024-25 Even Semester - Online Application Portal Opened",
    description: "The online application portal for Ph.D. admission 2024-25 even semester is now open. Last date to apply is 15th August 2024. Candidates who have qualified UGC-NET/CSIR-NET/GATE are eligible. Detailed instructions and required documents are available on the KTU research portal.",
    date: "2024-07-25", day: "25", month: "JUL", category: "Academics" as const, link: "#", isNew: true
  },
  {
    id: "2", title: "B.Tech S8 (R,S) Exam June 2024 - Revaluation and Answer Script Copy Registration",
    description: "Students can now register for revaluation and request copies of answer scripts for B.Tech S8 exams conducted in June 2024. The revaluation window is open until August 5, 2024. Apply through the student portal.",
    date: "2024-07-24", day: "24", month: "JUL", category: "Examination" as const, link: "#", isNew: true
  },
  {
    id: "3", title: "Revised Academic Calendar for Odd Semester 2024-25",
    description: "The revised academic calendar for all odd semesters of UG and PG programs is published. All affiliated colleges are required to follow the revised schedule. Key changes include extended registration period and revised internal examination dates.",
    date: "2024-07-20", day: "20", month: "JUL", category: "Urgent" as const, link: "#", isNew: true
  },
  {
    id: "4", title: "MOOC Credit Transfer — Approved Courses List for 2024-25 Published",
    description: "The updated list of MOOC courses approved for credit transfer in the academic year 2024-25 has been published. Students are advised to check the eligibility of their chosen courses before registration.",
    date: "2024-07-18", day: "18", month: "JUL", category: "Academics" as const, link: "#", isNew: false
  },
  {
    id: "5", title: "B.Tech S6 (R) Exam Results Published",
    description: "Results of B.Tech S6 Regular Examination conducted in April 2024 have been published. Students can check their results through the KTU results portal using their register number.",
    date: "2024-07-15", day: "15", month: "JUL", category: "Examination" as const, link: "#", isNew: false
  },
  {
    id: "6", title: "CERD Research Grant 2024-25 - Call for Proposals",
    description: "CERD invites research proposals from faculty members and research scholars of KTU affiliated colleges. Maximum grant amount is ₹5,00,000. Last date for submission: September 30, 2024.",
    date: "2024-07-12", day: "12", month: "JUL", category: "Research" as const, link: "#", isNew: false
  },
  {
    id: "7", title: "Honours and Minor Degree Registration — S5 Students",
    description: "S5 B.Tech students who wish to register for Honours or Minor degree programs can do so through the student portal. Registration deadline is August 10, 2024. Minimum CGPA requirements apply.",
    date: "2024-07-10", day: "10", month: "JUL", category: "Academics" as const, link: "#", isNew: false
  },
  {
    id: "8", title: "KTU Convocation 2024 — Registration Open",
    description: "The 5th Annual Convocation of APJ Abdul Kalam Technological University will be held on September 28, 2024. Graduates of 2022 and 2023 batches are eligible. Register through the convocation portal.",
    date: "2024-07-08", day: "08", month: "JUL", category: "General" as const, link: "#", isNew: false
  },
  {
    id: "9", title: "Anti-Ragging Awareness Week — July 15-21, 2024",
    description: "All affiliated institutions are directed to conduct Anti-Ragging Awareness activities during the week of July 15-21, 2024. Reports must be submitted to KTU by July 31.",
    date: "2024-07-05", day: "05", month: "JUL", category: "Urgent" as const, link: "#", isNew: false
  },
  {
    id: "10", title: "Faculty Development Program on Outcome Based Education",
    description: "KTU is organizing a 5-day FDP on OBE for faculty members across all affiliated colleges. Registration is free and mandatory for at least 2 faculty per department.",
    date: "2024-07-01", day: "01", month: "JUL", category: "Updates" as const, link: "#", isNew: false
  },
];

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["All", "Academics", "Examination", "Research", "Urgent", "General", "Updates"];

  const filtered = allAnnouncements.filter(a => {
    const matchCategory = selectedCategory === "All" || a.category === selectedCategory;
    const matchSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <HeroSection 
        title="Announcements & Updates"
        subtitle="Stay Informed"
        description="Official notifications, circulars, and updates from APJ Abdul Kalam Technological University. Stay informed about the latest academic schedules, administrative decisions, exam circulars, and university-wide news in real-time."
        gradient="navy"
      />

      {/* Search & Filter Bar — Glassmorphism style */}
      <section className="relative z-20 -mt-8">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-outline-variant/20 p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-gray/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search announcements..."
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/30 rounded-xl font-body-md text-sm text-on-surface dark:text-white placeholder-slate-gray/50 focus:outline-none focus:ring-2 focus:ring-heritage-maroon/30 focus:border-heritage-maroon transition-all"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <Filter className="w-4 h-4 text-slate-gray shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-label-md text-xs whitespace-nowrap transition-all border ${
                      selectedCategory === cat 
                        ? "bg-heritage-maroon text-white border-heritage-maroon shadow-sm" 
                        : "bg-transparent text-slate-gray border-outline-variant/30 hover:border-heritage-maroon/50 hover:text-heritage-maroon dark:text-slate-400"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-label-md text-xs text-slate-gray dark:text-slate-400 mt-3">
              Showing {filtered.length} of {allAnnouncements.length} announcements
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Feed — Newspaper/blog style */}
      <section className="py-12 md:py-16 bg-surface-container-lowest dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Megaphone className="w-16 h-16 text-slate-gray/30 mx-auto mb-4" />
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-2">No announcements found</h3>
              <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="space-y-0 divide-y divide-outline-variant/20">
              {filtered.map((announcement) => {
                const config = categoryConfig[announcement.category] || categoryConfig.General;
                const isExpanded = expandedId === announcement.id;

                return (
                  <article 
                    key={announcement.id} 
                    className="group py-8 first:pt-0 last:pb-0"
                  >
                    <div className="flex gap-6 md:gap-8">
                      {/* Date Block — Magazine style */}
                      <div className="hidden sm:flex flex-col items-center shrink-0 w-20">
                        <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-heritage-maroon to-[#600018] text-white flex flex-col items-center justify-center shadow-md relative overflow-hidden">
                          <span className="font-headline-sm text-3xl font-bold leading-none">{announcement.day}</span>
                          <span className="font-label-md text-xs tracking-widest uppercase opacity-80">{announcement.month}</span>
                          {announcement.isNew && (
                            <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-kerala-gold animate-pulse"></div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Category + Date (mobile) */}
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-md text-xs font-semibold border ${config.bg} ${config.color}`}>
                            {config.icon} {announcement.category}
                          </span>
                          <span className="sm:hidden flex items-center gap-1 font-label-md text-xs text-slate-gray dark:text-slate-400">
                            <Clock className="w-3 h-3" /> {announcement.day} {announcement.month} 2024
                          </span>
                          {announcement.isNew && (
                            <span className="font-label-md text-[10px] bg-kerala-gold text-institutional-navy px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">New</span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 
                          className="font-headline-sm text-lg md:text-xl font-bold text-on-surface dark:text-white mb-2 cursor-pointer hover:text-heritage-maroon dark:hover:text-primary-fixed transition-colors leading-snug"
                          onClick={() => setExpandedId(isExpanded ? null : announcement.id)}
                        >
                          {announcement.title}
                        </h2>

                        {/* Description — expands on click */}
                        <p className={`font-body-md text-sm text-slate-gray dark:text-slate-400 leading-relaxed transition-all duration-300 ${
                          isExpanded ? "" : "line-clamp-2"
                        }`}>
                          {announcement.description}
                        </p>

                        {/* Action Row */}
                        <div className="flex items-center gap-4 mt-4">
                          <button 
                            onClick={() => setExpandedId(isExpanded ? null : announcement.id)}
                            className="font-label-md text-sm text-heritage-maroon dark:text-primary-fixed font-semibold hover:underline flex items-center gap-1 transition-colors"
                          >
                            {isExpanded ? "Show less" : "Read more"} 
                            <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                          </button>
                          {announcement.link && announcement.link !== "#" && (
                            <a href={announcement.link} className="font-label-md text-sm text-institutional-navy dark:text-primary-fixed hover:underline flex items-center gap-1">
                              View Document <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
