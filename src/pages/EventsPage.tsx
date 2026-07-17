import { useState } from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { 
  Calendar, MapPin, Clock, Users, Tag,
  Ticket, Star, Share2
} from "lucide-react";

interface EventDetail {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  organizer: string;
  registrationOpen: boolean;
  featured: boolean;
  attendees?: number;
  tags: string[];
}

const allEvents: EventDetail[] = [
  {
    id: "1",
    title: "International Conference on AI & Machine Learning (ICAIML 2024)",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Conference",
    date: "August 15–17, 2024",
    time: "9:00 AM – 5:00 PM",
    venue: "CET Auditorium, Thiruvananthapuram",
    description: "A premier international conference bringing together researchers, academicians, and industry professionals to discuss the latest advances in Artificial Intelligence and Machine Learning. Keynote speakers include experts from IIT Bombay, MIT, and Google Research. Paper submissions are welcomed across tracks including Deep Learning, NLP, Computer Vision, and AI Ethics.",
    organizer: "Dept. of CSE, CET & KTU Research Cell",
    registrationOpen: true,
    featured: true,
    attendees: 500,
    tags: ["AI", "Machine Learning", "Research", "International"]
  },
  {
    id: "2",
    title: "TechFest 2024 — State Level Technical Festival",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Student Event",
    date: "September 5–7, 2024",
    time: "10:00 AM – 8:00 PM",
    venue: "KTU Main Campus, CET",
    description: "The flagship technical festival of KTU featuring coding competitions, hackathons, robotics challenges, project exhibitions, and workshops. Open to all engineering students across Kerala. Cash prizes worth ₹5,00,000. Events include CodeStorm (competitive programming), RoboWars, Ideathon, and Circuit Debugging.",
    organizer: "KTU Student Council & IEEE KTU SB",
    registrationOpen: true,
    featured: true,
    attendees: 2000,
    tags: ["Tech Fest", "Hackathon", "Coding", "Robotics"]
  },
  {
    id: "3",
    title: "National Workshop on Cyber Security & Ethical Hacking",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Workshop",
    date: "August 22–23, 2024",
    time: "9:30 AM – 4:30 PM",
    venue: "GECT, Thrissur",
    description: "A hands-on workshop covering network security, penetration testing, malware analysis, and ethical hacking methodologies. Participants will receive certificates from KTU and EC-Council. Bring your own laptop with Kali Linux installed.",
    organizer: "Dept. of CSE, GECT",
    registrationOpen: true,
    featured: false,
    attendees: 150,
    tags: ["Cyber Security", "Workshop", "Hands-on"]
  },
  {
    id: "4",
    title: "KTU Annual Sports Meet 2024",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-bd45ba688ca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    date: "October 10–14, 2024",
    time: "7:00 AM – 6:00 PM",
    venue: "University Stadium, CET Campus",
    description: "The inter-college sports championship featuring athletics, cricket, football, basketball, volleyball, badminton, table tennis, and chess. College teams from all KTU affiliated institutions participate. Winners qualify for university-level representation at national competitions.",
    organizer: "KTU Sports Council",
    registrationOpen: false,
    featured: false,
    attendees: 3000,
    tags: ["Sports", "Athletics", "Inter-college"]
  },
  {
    id: "5",
    title: "Faculty Development Program — Outcome Based Education",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "FDP",
    date: "August 5–9, 2024",
    time: "10:00 AM – 4:00 PM",
    venue: "Online (Zoom/Google Meet)",
    description: "A 5-day intensive FDP on implementing Outcome Based Education (OBE) in engineering curriculum. Topics include defining course outcomes, rubric design, assessment mapping, and attainment calculation. Mandatory for at least 2 faculty per department.",
    organizer: "KTU Academic Cell & IQAC",
    registrationOpen: true,
    featured: false,
    tags: ["FDP", "OBE", "Faculty", "Online"]
  },
  {
    id: "6",
    title: "KTU Innovation & Startup Summit 2024",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Summit",
    date: "September 20–21, 2024",
    time: "9:00 AM – 6:00 PM",
    venue: "Kerala Startup Mission, Kochi",
    description: "An entrepreneurship summit featuring startup pitches, investor panels, innovation showcases, and networking sessions. Student startups from KTU colleges get exclusive pitching slots. Featured speakers include founders from successful Kerala-based startups and venture capitalists.",
    organizer: "KTU IEDC & Kerala Startup Mission",
    registrationOpen: true,
    featured: false,
    attendees: 800,
    tags: ["Startup", "Innovation", "Entrepreneurship"]
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);

  const eventCategories = ["All", "Conference", "Student Event", "Workshop", "Sports", "FDP", "Summit"];

  const filteredEvents = allEvents.filter(e => 
    selectedCategory === "All" || e.category === selectedCategory
  );

  const featuredEvents = allEvents.filter(e => e.featured);

  return (
    <div>
      <HeroSection 
        title="Events & Activities"
        subtitle="What's Happening at KTU"
        description="Conferences, workshops, technical festivals, and sports events across the university. Discover opportunities to network, showcase your talents, and participate in vibrant extracurricular activities that enrich campus life and foster holistic development."
        gradient="navy"
      />

      {/* Featured Events — Full-width hero carousel cards */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-kerala-gold" />
            <h2 className="font-headline-sm text-2xl font-bold text-on-surface dark:text-white">Featured Events</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <div 
                key={event.id} 
                className="relative rounded-3xl overflow-hidden group cursor-pointer h-[380px]"
                onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
              >
                {/* Background Image */}
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-kerala-gold text-institutional-navy font-label-md text-xs font-bold rounded-full">
                      {event.category}
                    </span>
                    {event.registrationOpen && (
                      <span className="px-3 py-1 bg-success-green/20 text-success-green font-label-md text-xs font-bold rounded-full border border-success-green/30 backdrop-blur-sm">
                        Registration Open
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-white mb-3 leading-tight group-hover:text-kerala-gold transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 font-label-md text-sm text-white/80">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.venue}</span>
                    {event.attendees && (
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {event.attendees}+ expected</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal — Slide down panel */}
      {selectedEvent && (
        <section className="bg-heritage-maroon/5 dark:bg-heritage-maroon/10 border-y border-heritage-maroon/20">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Event Image */}
              <div className="lg:w-[400px] shrink-0">
                <img 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title} 
                  className="w-full h-64 lg:h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-heritage-maroon text-white font-label-md text-xs font-bold rounded-full mb-3">
                      {selectedEvent.category}
                    </span>
                    <h2 className="font-headline-sm text-2xl font-bold text-on-surface dark:text-white leading-tight">
                      {selectedEvent.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelectedEvent(null)} 
                    className="p-2 hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-full transition-colors text-slate-gray shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <p className="font-body-md text-base text-slate-gray dark:text-slate-400 mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Info Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: <Calendar className="w-5 h-5" />, label: "Date", value: selectedEvent.date },
                    { icon: <Clock className="w-5 h-5" />, label: "Time", value: selectedEvent.time },
                    { icon: <MapPin className="w-5 h-5" />, label: "Venue", value: selectedEvent.venue },
                    { icon: <Users className="w-5 h-5" />, label: "Organizer", value: selectedEvent.organizer },
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20">
                      <div className="w-10 h-10 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-label-md text-xs text-slate-gray dark:text-slate-400">{info.label}</p>
                        <p className="font-headline-sm text-sm font-semibold text-on-surface dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <Tag className="w-4 h-4 text-slate-gray" />
                  {selectedEvent.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-institutional-navy/5 dark:bg-slate-700 text-institutional-navy dark:text-primary-fixed font-label-md text-xs rounded-full border border-institutional-navy/10 dark:border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {selectedEvent.registrationOpen && (
                    <button className="px-6 py-3 bg-heritage-maroon text-white font-label-lg font-bold rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
                      <Ticket className="w-5 h-5" /> Register Now
                    </button>
                  )}
                  <button className="px-6 py-3 border border-outline-variant/30 text-on-surface dark:text-white font-label-lg font-semibold rounded-full hover:bg-surface-container-lowest dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Events — Masonry/magazine layout */}
      <section className="py-12 md:py-16 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="font-headline-sm text-2xl font-bold text-on-surface dark:text-white">All Events</h2>
            
            {/* Category Tabs — pill style */}
            <div className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-label-md text-xs whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                      ? "bg-institutional-navy text-white shadow-sm" 
                      : "bg-white dark:bg-slate-800 text-slate-gray border border-outline-variant/30 hover:border-institutional-navy/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid — Alternating sizes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
              <div 
                key={event.id} 
                className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-heritage-maroon/30 hover:shadow-xl transition-all group cursor-pointer ${
                  idx === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
              >
                <div className={`relative overflow-hidden ${idx === 0 ? "h-64 lg:h-80" : "h-48"}`}>
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-institutional-navy dark:text-white font-label-md text-xs font-bold rounded-full">
                      {event.category}
                    </span>
                    {event.registrationOpen && (
                      <span className="px-2 py-1 bg-success-green text-white font-label-md text-[10px] font-bold rounded-full uppercase tracking-wide">
                        Open
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className={`font-headline-sm font-bold text-on-surface dark:text-white mb-3 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors leading-snug ${
                    idx === 0 ? "text-xl" : "text-base line-clamp-2"
                  }`}>
                    {event.title}
                  </h3>
                  
                  {idx === 0 && (
                    <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label-md text-xs text-slate-gray dark:text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {event.venue.split(",")[0]}</span>
                    {event.attendees && (
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {event.attendees}+</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
