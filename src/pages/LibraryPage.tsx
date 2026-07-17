import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BookOpen, Laptop, Clock, Database, Globe } from "lucide-react";

export default function LibraryPage() {
  const libraryResources = [
    { icon: <Database className="w-8 h-8" />, title: "E-Journals & Databases", desc: "Access IEEE, ScienceDirect, SpringerLink, and ASCE.", link: "#" },
    { icon: <Laptop className="w-8 h-8" />, title: "Digital Repository", desc: "Previous year question papers, theses, and dissertations.", link: "#" },
    { icon: <Globe className="w-8 h-8" />, title: "Remote Access", desc: "Access library resources securely from anywhere off-campus.", link: "#" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Book Catalog", desc: "Search over 50,000 physical volumes in the central library.", link: "#" },
  ];

  return (
    <div>
      <HeroSection 
        title="Central Library"
        description="The heart of academic research and learning at APJ Abdul Kalam Technological University. Explore thousands of physical books, digital archives, and international journals."
        gradient="navy"
        slides={[{
          image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000",
          title: "Central Library",
          subtitle: "Knowledge Hub",
          description: "The heart of academic research and learning at APJ Abdul Kalam Technological University. Explore thousands of physical books, digital archives, and international journals."
        }]}
      />

      <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Library Resources" 
            subtitle="Explore our comprehensive collection of academic materials"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {libraryResources.map((resource, idx) => (
              <a 
                key={idx} 
                href={resource.link}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/20 hover:border-institutional-navy/40 dark:hover:border-primary-fixed/40 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-institutional-navy/5 text-institutional-navy dark:text-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <h4 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-2">{resource.title}</h4>
                <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-institutional-navy text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-sm text-3xl font-bold mb-6">Library Timings</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-kerala-gold" />
              <div className="text-left">
                <p className="font-label-md text-sm text-white/70">Weekdays</p>
                <p className="font-headline-sm text-xl font-bold">8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-kerala-gold" />
              <div className="text-left">
                <p className="font-label-md text-sm text-white/70">Weekends & Holidays</p>
                <p className="font-headline-sm text-xl font-bold">9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
