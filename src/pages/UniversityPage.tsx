import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard } from "@/components/shared/StatCard";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { Eye, Rocket, School, Users, FlaskConical, BookOpen } from "lucide-react";

export default function UniversityPage() {
  return (
    <div>
      <HeroSection 
        title="About the University"
        subtitle="APJ Abdul Kalam Technological University"
        description="Established by the Government of Kerala in 2014, with the objective of directing, regulating, and controlling engineering education in Kerala. We aim to become a world-class institution by fostering academic excellence, high-end research, and socially relevant innovations."
        gradient="maroon"
      />

      <section className="py-16 bg-surface-container-lowest dark:bg-slate-950" id="vision">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Vision & Mission" align="center" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kerala-gold/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <Eye className="w-12 h-12 text-kerala-gold mb-6 block" />
                <h3 className="font-headline-lg text-2xl font-bold mb-4">Our Vision</h3>
                <p className="font-body-lg text-slate-gray dark:text-slate-400">
                  To become a globally recognized, premier technological university by fostering excellence in engineering education and research, and ensuring sustainable development through innovation.
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-maroon/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <Rocket className="w-12 h-12 text-heritage-maroon dark:text-primary-fixed mb-6 block" />
                <h3 className="font-headline-lg text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-3 font-body-lg text-slate-gray dark:text-slate-400 list-disc pl-5 marker:text-kerala-gold">
                  <li>To provide high-quality engineering education aligned with global standards.</li>
                  <li>To promote research and innovation in emerging technologies.</li>
                  <li>To foster industry-academia collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-institutional-navy py-16 relative z-20" id="acts">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Acts & Statutes" subtitle="Official documentation governing the university's operations." inverse={true} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="KTU Act 2015" fileSize="1.2 MB" date="2015-05-10" />
            <DocumentCard title="First Statutes" fileSize="3.4 MB" date="2020-08-15" />
            <DocumentCard title="Ordinances (Updated 2023)" fileSize="2.1 MB" date="2023-01-20" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container-lowest dark:bg-slate-950 border-t border-outline/10 dark:border-slate-800">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <StatCard icon={<School className="w-7 h-7" />} value="140+" label="Affiliated Colleges" variant="maroon" />
             <StatCard icon={<Users className="w-7 h-7" />} value="150k+" label="Students Enrolled" variant="navy" />
             <StatCard icon={<FlaskConical className="w-7 h-7" />} value="50+" label="Research Centers" variant="gold" />
             <StatCard icon={<BookOpen className="w-7 h-7" />} value="100+" label="Programs Offered" variant="white" />
           </div>
        </div>
      </section>
    </div>
  );
}
