import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { BookOpen, GraduationCap, Laptop, Calendar, Award, Briefcase } from "lucide-react";

export default function AcademicsPage() {
  return (
    <div>
      <HeroSection 
        title="Academics Portal"
        description="Access syllabus, academic regulations, calendars, and MOOC course details."
        gradient="maroon"
      />

      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Academic Resources" inverse={true} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLinkCard 
              icon={<BookOpen className="w-6 h-6" />} 
              title="B.Tech Syllabus & Regulations" 
              description="Curriculum, credits, and rules for UG programs." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<GraduationCap className="w-6 h-6" />} 
              title="PG Regulations" 
              description="M.Tech, MBA, MCA, and M.Arch guidelines." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<Laptop className="w-6 h-6" />} 
              title="MOOC Courses" 
              description="Approved online courses for credit transfer." 
              href="#mooc" 
            />
            <QuickLinkCard 
              icon={<Calendar className="w-6 h-6" />} 
              title="Academic Calendar" 
              description="Important dates, holidays, and exam schedules." 
              href="#calendar" 
            />
            <QuickLinkCard 
              icon={<Award className="w-6 h-6" />} 
              title="Honours & Minors" 
              description="Guidelines for earning additional degrees." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<Briefcase className="w-6 h-6" />} 
              title="CGPC (Placements)" 
              description="Career guidance and placement cell." 
              href="#cgpc" 
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="calendar">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <SectionHeading title="Academic Calendar" />
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <DocumentCard title="Academic Calendar - Odd Semester 2024-25" date="20-Jul-2024" />
             <DocumentCard title="Academic Calendar - Even Semester 2023-24" date="15-Dec-2023" />
             <DocumentCard title="Holiday List 2024" date="01-Jan-2024" />
           </div>
        </div>
      </section>
    </div>
  );
}
