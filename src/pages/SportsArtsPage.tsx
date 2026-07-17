import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Trophy, Music, Palette, Activity, Medal } from "lucide-react";

export default function SportsArtsPage() {
  const activities = [
    { icon: <Trophy className="w-8 h-8" />, title: "Inter-Collegiate Sports", desc: "Annual sports meets featuring athletics, football, basketball, and more across all zones.", color: "text-kerala-gold" },
    { icon: <Music className="w-8 h-8" />, title: "Cultural Festivals", desc: "Showcase your talents at our vibrant annual youth festival, a celebration of arts and culture.", color: "text-heritage-maroon" },
    { icon: <Palette className="w-8 h-8" />, title: "Arts & Exhibitions", desc: "Participate in fine arts competitions, photography contests, and creative workshops.", color: "text-institutional-navy" },
    { icon: <Medal className="w-8 h-8" />, title: "National Level Competitions", desc: "Represent KTU in national university games and zonal youth festivals.", color: "text-kerala-gold" },
  ];

  return (
    <div>
      <HeroSection 
        title="Sports & Arts"
        description="Fostering a vibrant campus life. We believe in the holistic development of our students through active participation in sports, arts, and cultural events."
        gradient="maroon"
        slides={[{
          image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=2000",
          title: "Sports & Arts",
          subtitle: "Holistic Development",
          description: "Fostering a vibrant campus life. We believe in the holistic development of our students through active participation in sports, arts, and cultural events."
        }]}
      />

      <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Beyond Academics" 
            subtitle="Engage, compete, and excel in extracurricular activities"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {activities.map((activity, idx) => (
              <div 
                key={idx} 
                className="group flex items-start gap-6 p-8 rounded-2xl bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/20 hover:border-heritage-maroon/40 dark:hover:border-primary-fixed/40 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 ${activity.color} group-hover:scale-110 transition-transform`}>
                  {activity.icon}
                </div>
                <div>
                  <h4 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-2 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                    {activity.title}
                  </h4>
                  <p className="font-body-md text-slate-gray dark:text-slate-400 leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=2000" alt="Audience" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-institutional-navy/90 to-heritage-maroon/90"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <Activity className="w-12 h-12 text-kerala-gold mx-auto mb-6" />
          <h2 className="font-headline-sm text-3xl md:text-4xl font-bold mb-4">University Youth Festival</h2>
          <p className="font-body-lg text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The biggest cultural extravaganza of the year, bringing together talents from over 150 affiliated colleges. 
            Experience the thrill of competition and the joy of artistic expression.
          </p>
          <a href="#gallery-results" className="inline-block px-8 py-3 bg-kerala-gold text-slate-900 font-label-lg font-bold rounded-full hover:bg-white transition-colors">
            View Gallery & Results
          </a>
        </div>
      </section>

      {/* Gallery & Results Section */}
      <section id="gallery-results" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Gallery & Results" 
            subtitle="Highlights from recent university festivals and sports meets"
          />
          
          <div className="mt-12 space-y-16">
            {/* Gallery */}
            <div>
              <h3 className="font-headline-sm text-2xl font-bold mb-6 text-on-surface dark:text-white border-b border-outline-variant/20 pb-4">Event Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600" alt="Music" className="rounded-xl object-cover h-48 w-full hover:scale-105 transition-transform duration-300" />
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" alt="Photography" className="rounded-xl object-cover h-48 w-full hover:scale-105 transition-transform duration-300" />
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600" alt="Sports" className="rounded-xl object-cover h-48 w-full hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Results Table */}
            <div>
              <h3 className="font-headline-sm text-2xl font-bold mb-6 text-on-surface dark:text-white border-b border-outline-variant/20 pb-4">Latest Results</h3>
              <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body-md text-sm">
                    <thead className="bg-slate-100 dark:bg-slate-900 border-b border-outline-variant/20">
                      <tr>
                        <th className="px-6 py-4 font-bold text-slate-gray">Date</th>
                        <th className="px-6 py-4 font-bold text-slate-gray">Event Name</th>
                        <th className="px-6 py-4 font-bold text-slate-gray">Category</th>
                        <th className="px-6 py-4 font-bold text-slate-gray text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 text-slate-gray dark:text-slate-400">12 May 2024</td>
                        <td className="px-6 py-4 font-semibold text-on-surface dark:text-white">University Youth Festival 2024</td>
                        <td className="px-6 py-4"><span className="px-3 py-1 bg-heritage-maroon/10 text-heritage-maroon dark:bg-primary-fixed/10 dark:text-primary-fixed rounded-full text-xs font-bold">Arts</span></td>
                        <td className="px-6 py-4 text-right"><button className="text-institutional-navy dark:text-kerala-gold hover:underline font-semibold">Download PDF</button></td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 text-slate-gray dark:text-slate-400">05 Apr 2024</td>
                        <td className="px-6 py-4 font-semibold text-on-surface dark:text-white">Inter-Collegiate Athletics Meet</td>
                        <td className="px-6 py-4"><span className="px-3 py-1 bg-kerala-gold/10 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-bold">Sports</span></td>
                        <td className="px-6 py-4 text-right"><button className="text-institutional-navy dark:text-kerala-gold hover:underline font-semibold">Download PDF</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
