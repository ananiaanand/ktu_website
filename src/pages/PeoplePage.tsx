import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Mail, Award } from "lucide-react";

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

  const boardOfGovernors = [
    {
      name: "Dr. Rakesh Sharma",
      title: "Eminent Academician",
      qualification: "B.Tech, M.Tech, Ph.D. (IIT Delhi)",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      description: "Former Director of Technical Education, with over 30 years of academic experience."
    },
    {
      name: "Dr. Sunitha Menon",
      title: "Industry Representative",
      qualification: "M.Sc., Ph.D. (IISc Bangalore)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      description: "VP of Engineering at TechSolutions, focusing on AI and ML innovations."
    },
    {
      name: "Dr. Vikram Reddy",
      title: "Research Scientist",
      qualification: "B.E., MBA, Ph.D. (Stanford University)",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      description: "Senior Scientist with 15+ patents in renewable energy."
    },
    {
      name: "Dr. Ananya Desai",
      title: "Educational Consultant",
      qualification: "M.Tech, Ph.D. (NIT Trichy)",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      description: "Advises state governments on technical education reforms."
    },
    {
      name: "Prof. S. K. Nair",
      title: "Professor of Emeritus",
      qualification: "M.A., Ph.D. (University of Kerala)",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      description: "Author of 5 textbooks on structural engineering."
    },
    {
      name: "Dr. Manoj Kumar",
      title: "Technology Entrepreneur",
      qualification: "B.Tech, MS, Ph.D. (MIT)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Founder of multiple successful startups in the ed-tech space."
    }
  ];

  return (
    <div>
      <HeroSection 
        title="People & Authorities"
        description="The leadership and governing bodies of the university working towards excellence in education. Our dedicated administrators and academicians ensure that APJ Abdul Kalam Technological University continues to uphold the highest standards of academic integrity and institutional governance."
        gradient="maroon"
      />

      <section className="py-16 bg-background dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="University Authorities" align="center" />
          
          <div className="flex flex-wrap justify-center gap-8">
            {authorities.map((person, idx) => (
              <div key={idx} className="w-full max-w-[280px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-slate-700 hover:border-kerala-gold transition-colors shadow-sm hover:shadow-lg group">
                <div className="h-64 overflow-hidden bg-surface-container-low dark:bg-slate-800">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 bg-white" 
                  />
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {boardOfGovernors.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/30 p-6 flex flex-col sm:flex-row gap-6 items-start hover:border-kerala-gold/50 transition-colors shadow-sm hover:shadow-md">
                {/* Image on the left */}
                <div className="shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover shadow-sm border border-outline-variant/20"
                  />
                </div>
                
                {/* Qualifications & Details on the right */}
                <div className="flex-1">
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-label-md text-sm text-institutional-navy dark:text-primary-fixed font-semibold mb-3">
                    {member.title}
                  </p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-kerala-gold mt-0.5 shrink-0" />
                      <p className="font-body-md text-sm text-slate-gray dark:text-slate-300">
                        <span className="font-semibold text-on-surface dark:text-slate-200">Qualification: </span> 
                        {member.qualification}
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 italic">
                    "{member.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
