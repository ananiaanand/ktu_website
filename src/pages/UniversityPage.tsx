import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard } from "@/components/shared/StatCard";
import { DocumentCard } from "@/components/shared/DocumentCard";
import {
  Eye, Rocket, School, Users, FlaskConical, BookOpen,
  MapPin, Phone, Mail, Globe, Calendar, Award, Building2,
  GraduationCap, Lightbulb, ShieldCheck, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function UniversityPage() {
  const leadership = [
    { role: "Chancellor", name: "Sri. Rajendra Arlekar", note: "Hon'ble Governor of Kerala" },
    { role: "Pro Chancellor", name: "Sri Roji M. John", note: "Hon'ble Minister for Higher Education" },
    { role: "Vice Chancellor", name: "Dr. Ciza Thomas", note: "Head of Academic Administration" },
    { role: "Registrar", name: "Dr. Sreekumar K.", note: "Administrative Head" },
  ];

  const milestones = [
    { year: "2014", event: "KTU established by the Kerala Government under the KTU Act 2015." },
    { year: "2015", event: "First batch of B.Tech students admitted under KTU regulations." },
    { year: "2016", event: "PG programs (M.Tech, MBA, MCA) launched across affiliated colleges." },
    { year: "2019", event: "New 2019 scheme introduced with CBCS and outcome-based education." },
    { year: "2021", event: "Online examination system introduced during COVID-19 pandemic." },
    { year: "2024", event: "2024 scheme rolled out aligned with National Education Policy (NEP) 2020." },
  ];

  const campuses = [
    { name: "Main Campus – Thiruvananthapuram", address: "CET Campus, Thiruvananthapuram – 695016", phone: "+91-471-2598122", email: "info@ktu.edu.in" },
    { name: "Ernakulam Office", address: "CUSAT Campus, Kalamassery, Ernakulam – 682022", phone: "+91-484-2575396", email: "ek@ktu.edu.in" },
    { name: "Kozhikode Office", address: "NIT Campus, Kozhikode – 673601", phone: "+91-495-2287250", email: "kzd@ktu.edu.in" },
  ];

  return (
    <div>
      <HeroSection
        title="About the University"
        subtitle="APJ Abdul Kalam Technological University"
        description="Established by the Government of Kerala in 2014, with the objective of directing, regulating, and controlling engineering education in Kerala."
        gradient="maroon"
      />

      {/* Stats Strip */}
      <section className="bg-institutional-navy py-12 -mt-6 relative z-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={<School className="w-7 h-7" />} value="140+" label="Affiliated Colleges" variant="maroon" />
            <StatCard icon={<Users className="w-7 h-7" />} value="150k+" label="Students Enrolled" variant="navy" />
            <StatCard icon={<FlaskConical className="w-7 h-7" />} value="50+" label="Research Centers" variant="gold" />
            <StatCard icon={<BookOpen className="w-7 h-7" />} value="100+" label="Programs Offered" variant="white" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-background dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Who We Are" className="mb-6" />
              <div className="space-y-4 font-body-lg text-slate-gray dark:text-slate-400 text-base leading-relaxed">
                <p>
                  APJ Abdul Kalam Technological University (KTU), named after the former President and scientist Dr. A.P.J. Abdul Kalam, is a premier technological university in Kerala, India. It was established by the Government of Kerala on 21st May 2014 under the Kerala Technological University Act 2015.
                </p>
                <p>
                  The university oversees more than 140 affiliated engineering and technology colleges spread across Kerala, guiding over 1.5 lakh students in their pursuit of quality technical education.
                </p>
                <p>
                  KTU is committed to fostering a culture of innovation, research, and entrepreneurship. Through its robust academic framework, it prepares engineers and technologists to meet the dynamic challenges of the global industry.
                </p>
              </div>
              <Link to="/people" className="mt-6 inline-flex items-center gap-2 font-label-md text-sm text-heritage-maroon dark:text-primary-fixed hover:underline">
                Meet the Leadership <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: "Quality Education", desc: "Outcome-based curriculum aligned with global standards and NEP 2020." },
                { icon: <FlaskConical className="w-6 h-6" />, title: "Research & Innovation", desc: "50+ approved research centers driving cutting-edge technological advances." },
                { icon: <Lightbulb className="w-6 h-6" />, title: "Industry Linkage", desc: "Strong MoUs with leading tech companies for internships and placements." },
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Accreditation", desc: "Programs accredited by NBA; university recognized by UGC and AICTE." },
              ].map((card, i) => (
                <div key={i} className="p-5 bg-surface-container-low dark:bg-slate-800 rounded-xl border border-outline-variant/30">
                  <div className="w-10 h-10 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h4 className="font-headline-sm font-bold text-sm mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-gray dark:text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-surface-container-lowest dark:bg-slate-950 border-t border-outline/10" id="vision">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Vision & Mission" align="center" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kerala-gold/10 rounded-bl-full" />
              <div className="relative z-10">
                <Eye className="w-12 h-12 text-kerala-gold mb-6 block" />
                <h3 className="font-headline-lg text-2xl font-bold mb-4">Our Vision</h3>
                <p className="font-body-lg text-slate-gray dark:text-slate-400">
                  To become a globally recognized, premier technological university by fostering excellence in engineering education and research, and ensuring sustainable development through innovation.
                </p>
              </div>
            </div>
            <div className="p-8 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-maroon/10 rounded-bl-full" />
              <div className="relative z-10">
                <Rocket className="w-12 h-12 text-heritage-maroon dark:text-primary-fixed mb-6 block" />
                <h3 className="font-headline-lg text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-3 font-body-lg text-slate-gray dark:text-slate-400 list-disc pl-5 marker:text-kerala-gold">
                  <li>To provide high-quality engineering education aligned with global standards.</li>
                  <li>To promote research and innovation in emerging technologies.</li>
                  <li>To foster industry-academia collaboration for real-world problem solving.</li>
                  <li>To promote entrepreneurship and startups through dedicated incubation support.</li>
                  <li>To ensure equitable access to technical education across Kerala.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-institutional-navy">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="University Leadership" subtitle="The executive team steering KTU's academic and administrative functions." inverse={true} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l, i) => (
              <div key={i} className="p-6 bg-white/10 border border-white/20 rounded-2xl text-white text-center hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-full bg-kerala-gold/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-7 h-7 text-kerala-gold" />
                </div>
                <p className="text-xs font-label-md text-kerala-gold mb-1 uppercase tracking-wider">{l.role}</p>
                <h4 className="font-headline-sm font-bold text-base mb-1">{l.name}</h4>
                <p className="text-xs text-white/60">{l.note}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/people" className="inline-flex items-center gap-2 bg-kerala-gold text-institutional-navy px-6 py-3 rounded-lg font-label-md font-bold text-sm hover:bg-opacity-90 transition-colors">
              View All Authorities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-background dark:bg-slate-950 border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Key Milestones" subtitle="A journey of academic excellence and continuous growth since 2014." />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/50 dark:bg-slate-700 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`inline-block p-4 bg-surface-container-low dark:bg-slate-800 rounded-xl border border-outline-variant/30 hover:border-kerala-gold transition-colors ${i % 2 !== 0 ? "md:ml-auto" : ""}`}>
                      <span className="text-sm font-bold text-heritage-maroon dark:text-primary-fixed font-label-md">{m.year}</span>
                      <p className="text-sm text-on-surface dark:text-slate-200 mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-kerala-gold flex items-center justify-center text-institutional-navy font-bold text-xs shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-md hidden md:flex">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acts & Statutes */}
      <section className="bg-institutional-navy py-16" id="acts">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Acts & Statutes" subtitle="Official documentation governing the university's operations." inverse={true} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="KTU Act 2015" fileSize="1.2 MB" date="2015-05-10" />
            <DocumentCard title="First Statutes" fileSize="3.4 MB" date="2020-08-15" />
            <DocumentCard title="Ordinances (Updated 2023)" fileSize="2.1 MB" date="2023-01-20" />
            <DocumentCard title="Executive Council Regulations" fileSize="0.9 MB" date="2022-04-12" />
            <DocumentCard title="Finance Committee Rules" fileSize="0.7 MB" date="2021-11-05" />
            <DocumentCard title="Annual Report 2023-24" fileSize="5.2 MB" date="2024-09-01" />
          </div>
        </div>
      </section>

      {/* Contact / Offices */}
      <section className="py-16 bg-background dark:bg-slate-950 border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="University Offices" subtitle="Reach us at our administrative offices across Kerala." />
          <div className="grid md:grid-cols-3 gap-6">
            {campuses.map((c, i) => (
              <div key={i} className="p-6 bg-surface-container-low dark:bg-slate-800 rounded-xl border border-outline-variant/30 hover:border-kerala-gold transition-all hover:shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-heritage-maroon dark:text-primary-fixed mt-0.5 shrink-0" />
                  <h4 className="font-headline-sm font-bold text-base">{c.name}</h4>
                </div>
                <div className="space-y-2 text-sm text-slate-gray dark:text-slate-400">
                  <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-kerala-gold" /> {c.address}</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-kerala-gold" /> {c.phone}</p>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-2 hover:text-heritage-maroon dark:hover:text-primary-fixed transition-colors">
                    <Mail className="w-4 h-4 shrink-0 text-kerala-gold" /> {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-surface-container-low dark:bg-slate-800 rounded-xl border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-headline-sm font-bold text-base mb-1">University Website</h4>
              <p className="text-sm text-slate-gray dark:text-slate-400">Visit the official KTU portal for all notifications, circulars, and updates.</p>
            </div>
            <a href="https://ktu.edu.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-institutional-navy text-white px-4 py-2.5 rounded-lg text-sm font-label-md hover:bg-heritage-maroon transition-colors">
              <Globe className="w-4 h-4" /> ktu.edu.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
