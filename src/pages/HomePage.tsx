import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, GraduationCap, Library, Trophy, User, LogOut } from "lucide-react";
import { announcementsService } from "@/services/api";
import { HeroSection } from "@/components/shared/HeroSection";
import { NotificationCard } from "@/components/shared/NotificationCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/stores/useAuthStore";

export default function HomePage() {
  const { isLoggedIn, username, logout } = useAuthStore();
  const { data: announcements = [] } = useQuery({
    queryKey: ['announcements'],
    queryFn: announcementsService.getAnnouncements
  });

  const { data: events = [] } = useQuery({
    queryKey: ['events'],
    queryFn: announcementsService.getEvents
  });

  const priorityServices = [
    { icon: <BookOpen className="w-8 h-8"/>, title: "Academics", desc: "Syllabus, Regulations", href: "/academics" },
    { icon: <Calendar className="w-8 h-8"/>, title: "Examinations", desc: "Timetables, Results", href: "/examination" },
    { icon: <GraduationCap className="w-8 h-8"/>, title: "Admissions", desc: "UG, PG, Ph.D.", href: "/affiliation" },
    { icon: <Library className="w-8 h-8"/>, title: "Library", desc: "E-Resources, Journals", href: "#" },
    { icon: <Trophy className="w-8 h-8"/>, title: "Sports & Arts", desc: "Activities, Festivals", href: "#" },
  ];

  return (
    <div>
      <HeroSection 
        title="Empowering the Next Generation of Innovators"
        subtitle="APJ Abdul Kalam Technological University"
        description="A premier technological university fostering excellence in engineering education and research across Kerala."
        gradient="maroon"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hidden lg:block">
          <h3 className="font-headline-sm text-xl font-bold mb-4">Quick Resources</h3>
          <ul className="space-y-3 font-label-md">
            {isLoggedIn ? (
              <>
                <li className="flex items-center gap-2 text-white"><User className="w-4 h-4"/> Welcome, <span className="font-bold text-kerala-gold">{username}</span></li>
                <li><button onClick={logout} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"><LogOut className="w-4 h-4"/> Logout</button></li>
              </>
            ) : (
              <li><Link to="/schools" className="flex items-center gap-2 hover:text-kerala-gold transition-colors"><ArrowRight className="w-4 h-4"/> Student Portal Login</Link></li>
            )}
            <li><Link to="/examination" className="flex items-center gap-2 hover:text-kerala-gold transition-colors"><ArrowRight className="w-4 h-4"/> Exam Notifications</Link></li>
            <li><Link to="/academics" className="flex items-center gap-2 hover:text-kerala-gold transition-colors"><ArrowRight className="w-4 h-4"/> Academic Calendar</Link></li>
            <li><Link to="/affiliation" className="flex items-center gap-2 hover:text-kerala-gold transition-colors"><ArrowRight className="w-4 h-4"/> Affiliated Colleges</Link></li>
          </ul>
        </div>
      </HeroSection>

      {/* Priority Services */}
      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {priorityServices.map((service, idx) => (
              <Link 
                key={idx} 
                to={service.href}
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-white/10 border border-white/10 hover:bg-kerala-gold hover:border-kerala-gold transition-all duration-200 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center mb-4 group-hover:bg-institutional-navy group-hover:text-kerala-gold transition-colors shadow-sm">
                  {service.icon}
                </div>
                <h4 className="font-headline-sm text-sm md:text-base font-bold text-white group-hover:text-institutional-navy transition-colors mb-1">
                  {service.title}
                </h4>
                <p className="font-label-md text-xs text-white/70 group-hover:text-institutional-navy/80 transition-colors hidden sm:block">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & Events */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8">
              <div className="flex justify-between items-end mb-8">
                <SectionHeading 
                  title="Announcements & Updates" 
                  className="mb-0"
                />
                <Link to="#" className="font-label-md text-sm text-heritage-maroon dark:text-primary-fixed hover:underline flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {announcements.map(announcement => (
                  <NotificationCard key={announcement.id} announcement={announcement} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="flex justify-between items-end mb-8">
                <SectionHeading 
                  title="Upcoming Events" 
                  className="mb-0"
                />
              </div>
              <div className="space-y-6">
                {events.map(event => (
                  <Card key={event.id} className="overflow-hidden group cursor-pointer border-outline-variant/30 hover:border-kerala-gold/50 transition-all shadow-sm hover:shadow-md">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-institutional-navy font-label-md text-xs px-2 py-1 rounded font-bold">
                        {event.category}
                      </div>
                    </div>
                    <CardContent className="p-4 bg-surface-container-lowest dark:bg-slate-900">
                      <h4 className="font-headline-sm text-base font-semibold group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors mb-2 line-clamp-2">
                        {event.title}
                      </h4>
                      <p className="font-label-md text-sm text-slate-gray dark:text-slate-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
