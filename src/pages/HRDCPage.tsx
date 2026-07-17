import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";
import { GraduationCap, MapPin, ClipboardCopy } from "lucide-react";

export default function HRDCPage() {
  return (
    <div>
      <HeroSection 
        title="HRDC Centers"
        description="Human Resource Development Centers for training and faculty empowerment."
        gradient="navy"
      />

      <section className="py-16 bg-background dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Training & Development" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLinkCard 
              icon={<GraduationCap className="w-6 h-6" />} 
              title="Training Programs" 
              description="Upcoming FDPs and workshops." 
              href="#programs" 
            />
            <QuickLinkCard 
              icon={<MapPin className="w-6 h-6" />} 
              title="HRDC Centers" 
              description="List of approved centers." 
              href="#" 
            />
            <QuickLinkCard 
              icon={<ClipboardCopy className="w-6 h-6" />} 
              title="Registration" 
              description="Apply for training programs online." 
              href="#" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
