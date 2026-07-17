import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Mail } from "lucide-react";

export default function PeoplePage() {
  
  const authorities = [
    {
      name: "Sri. Rajendra Arlekar",
      title: "Chancellor (The Hon'ble Governor of Kerala)",
      image: "/people/rajendra_arlekar.png",
    },
    {
      name: "Sri Roji M. John",
      title: "Pro Chancellor (Hon'ble Minister for Higher Education, Govt of Kerala)",
      image: "/people/roji_m_john.png",
    },
    {
      name: "Dr. Ciza Thomas",
      title: "Vice Chancellor (Hon’ble Vice Chancellor)",
      image: "/people/ciza_thomas.png",
      contact: "vc@ktu.edu.in"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="People & Authorities"
        description="The leadership and governing bodies of the university working towards excellence in education."
        gradient="maroon"
      />

      <section className="py-16 bg-background dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="University Authorities" align="center" />
          
          <div className="flex flex-wrap justify-center gap-8">
            {authorities.map((person, idx) => (
              <div key={idx} className="w-full max-w-[280px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-slate-700 hover:border-kerala-gold transition-colors shadow-sm hover:shadow-lg group">
                <div className="h-48 overflow-hidden bg-surface-container-low dark:bg-slate-800">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-1">{person.name}</h3>
                  <p className="font-label-md text-heritage-maroon dark:text-primary-fixed mb-4 text-sm">{person.title}</p>
                  {person.contact && (
                    <a href={`mailto:${person.contact}`} className="font-label-md text-sm text-slate-gray dark:text-slate-400 hover:text-institutional-navy transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" /> {person.contact}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="bog">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Board of Governors" subtitle="The supreme governing body of the university." />
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/30 p-8 shadow-sm text-center font-body-md text-slate-gray dark:text-slate-400">
            <p>Content for Board of Governors members list goes here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
