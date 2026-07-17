import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";
import { CheckSquare, Award, BarChart4 } from "lucide-react";

export default function IQACPage() {
  return (
    <div>
      <HeroSection 
        title="Internal Quality Assurance Cell"
        description="Ensuring and enhancing the quality of academic and administrative performance. The Internal Quality Assurance Cell works tirelessly to develop systems for conscious, consistent, and catalytic action to improve the academic and administrative performance of the university."
        gradient="audit"
      />

      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Quality Initiatives" inverse={true} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLinkCard 
              icon={<CheckSquare className="w-6 h-6" />} 
              title="Academic Audit" 
              description="Guidelines and proforma for audits." 
              href="#audit" 
            />
            <QuickLinkCard 
              icon={<Award className="w-6 h-6" />} 
              title="NAAC Accreditation" 
              description="University accreditation details." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<BarChart4 className="w-6 h-6" />} 
              title="Quality Reports" 
              description="Annual quality assurance reports (AQAR)." 
              href="#" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
