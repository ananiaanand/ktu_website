import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";
import { GraduationCap, BookOpen, Building, PiggyBank, Users, Beaker } from "lucide-react";

export default function ResearchPage() {
  return (
    <div>
      <HeroSection 
        title="Research Portal"
        description="Fostering innovation and advanced studies through our Ph.D. programs and research centers."
        gradient="maroon"
      />

      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Research Opportunities" inverse={true} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLinkCard 
              icon={<GraduationCap className="w-6 h-6" />} 
              title="Ph.D. Admissions" 
              description="Apply for doctoral programs." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<BookOpen className="w-6 h-6" />} 
              title="Research Regulations" 
              description="Guidelines for scholars and supervisors." 
              href="#regulations" 
            />
            <QuickLinkCard 
              icon={<Building className="w-6 h-6" />} 
              title="Approved Centers" 
              description="List of recognized research places." 
              href="#centers" 
            />
            <QuickLinkCard 
              icon={<PiggyBank className="w-6 h-6" />} 
              title="Fellowships" 
              description="CERD and other funding opportunities." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<Users className="w-6 h-6" />} 
              title="Supervisors" 
              description="Directory of approved research guides." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<Beaker className="w-6 h-6" />} 
              title="CERD" 
              description="Centre for Engineering Research and Development." 
              href="#" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
