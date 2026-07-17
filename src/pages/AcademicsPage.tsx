import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { BookOpen, GraduationCap, Laptop, Calendar, Award, Briefcase, ExternalLink, ArrowRight } from "lucide-react";

export default function AcademicsPage() {
  const quickLinks = [
    { icon: <BookOpen className="w-6 h-6" />, title: "B.Tech Syllabus & Regulations", description: "Curriculum, credits, and rules for UG programs.", href: "#btech" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "PG Regulations", description: "M.Tech, MBA, MCA, and M.Arch guidelines.", href: "#pg" },
    { icon: <Laptop className="w-6 h-6" />, title: "MOOC Courses", description: "Approved online courses for credit transfer.", href: "#mooc" },
    { icon: <Calendar className="w-6 h-6" />, title: "Academic Calendar", description: "Important dates, holidays, and exam schedules.", href: "#calendar" },
    { icon: <Award className="w-6 h-6" />, title: "Honours & Minors", description: "Guidelines for earning additional degrees.", href: "#honours" },
    { icon: <Briefcase className="w-6 h-6" />, title: "CGPC (Placements)", description: "Career guidance and placement cell.", href: "#cgpc" },
  ];

  return (
    <div>
      <HeroSection
        title="Academics Portal"
        description="Access syllabus, academic regulations, calendars, and MOOC course details."
        gradient="maroon"
      />

      {/* Quick Links */}
      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Academic Resources" inverse={true} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, i) => (
              <QuickLinkCard key={i} icon={link.icon} title={link.title} description={link.description} href={link.href} />
            ))}
          </div>
        </div>
      </section>

      {/* B.Tech Syllabus */}
      <section className="py-16 bg-background dark:bg-slate-950" id="btech">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="B.Tech Syllabus & Regulations" subtitle="Curriculum, credits, and academic rules for undergraduate engineering programs." />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/30">
              <h4 className="font-headline-sm text-lg font-bold mb-2 text-on-surface dark:text-white">2019 Scheme</h4>
              <p className="text-sm text-slate-gray dark:text-slate-400 mb-4">Current scheme for B.Tech programs with CBCS (Choice Based Credit System).</p>
              <div className="grid grid-cols-2 gap-3">
                <DocumentCard title="B.Tech Regulations 2019" fileSize="2.1 MB" date="2019-08-01" />
                <DocumentCard title="Curriculum & Syllabus – CSE" fileSize="1.5 MB" date="2022-06-10" />
                <DocumentCard title="Curriculum & Syllabus – ECE" fileSize="1.8 MB" date="2022-06-10" />
                <DocumentCard title="Curriculum & Syllabus – ME" fileSize="1.6 MB" date="2022-06-10" />
              </div>
            </div>
            <div className="p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/30">
              <h4 className="font-headline-sm text-lg font-bold mb-2 text-on-surface dark:text-white">2024 Scheme (New)</h4>
              <p className="text-sm text-slate-gray dark:text-slate-400 mb-4">Updated scheme implementing NEP 2020 guidelines and outcome-based education.</p>
              <div className="grid grid-cols-2 gap-3">
                <DocumentCard title="B.Tech Regulations 2024" fileSize="2.3 MB" date="2024-06-01" />
                <DocumentCard title="Curriculum Framework 2024" fileSize="1.9 MB" date="2024-06-01" />
                <DocumentCard title="Common Courses Syllabus" fileSize="1.2 MB" date="2024-07-01" />
                <DocumentCard title="Credit Distribution Table" fileSize="0.8 MB" date="2024-07-01" />
              </div>
            </div>
          </div>
          <div className="bg-heritage-maroon/5 dark:bg-slate-800 border border-heritage-maroon/20 dark:border-slate-700 rounded-xl p-5 flex items-center justify-between">
            <p className="text-sm font-body-md text-slate-gray dark:text-slate-400">For older schemes (2015, 2017), visit the documents archive.</p>
            <a href="#" className="flex items-center gap-2 text-sm font-label-md text-heritage-maroon dark:text-primary-fixed hover:underline">
              View Archive <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PG Regulations */}
      <section className="py-16 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="pg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="PG Regulations" subtitle="Guidelines for M.Tech, MBA, MCA, and M.Arch postgraduate programs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { program: "M.Tech", desc: "2-year postgraduate engineering programs", docs: ["M.Tech Regulations 2019", "Curriculum & Syllabus"] },
              { program: "MBA", desc: "Master of Business Administration", docs: ["MBA Regulations", "Course Structure"] },
              { program: "MCA", desc: "Master of Computer Applications", docs: ["MCA Regulations", "Syllabus 2022"] },
              { program: "M.Arch", desc: "Master of Architecture", docs: ["M.Arch Regulations", "Design Studio Guidelines"] },
            ].map((pg, i) => (
              <div key={i} className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/30 hover:border-kerala-gold transition-all hover:shadow-md group">
                <div className="w-10 h-10 rounded-lg bg-institutional-navy text-kerala-gold flex items-center justify-center font-bold text-sm mb-4">
                  {pg.program.charAt(0)}
                </div>
                <h4 className="font-headline-sm font-bold text-lg mb-1 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">{pg.program}</h4>
                <p className="text-xs text-slate-gray dark:text-slate-400 mb-4">{pg.desc}</p>
                <div className="space-y-2">
                  {pg.docs.map((doc, j) => (
                    <a key={j} href="#" className="flex items-center gap-2 text-xs text-heritage-maroon dark:text-primary-fixed hover:underline">
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" /> {doc}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOOC Courses */}
      <section className="py-16 bg-background dark:bg-slate-950 border-t border-outline/10" id="mooc">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="MOOC Courses" subtitle="List of approved online courses eligible for credit transfer under KTU regulations." />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { platform: "NPTEL", color: "bg-blue-600", courses: ["Data Structures & Algorithms", "Machine Learning", "Digital Signal Processing", "Thermodynamics"], credits: "2 Credits per course" },
              { platform: "Coursera", color: "bg-indigo-600", courses: ["Deep Learning Specialization", "Cloud Computing", "Project Management", "Python for Everybody"], credits: "2 Credits per course" },
              { platform: "Swayam", color: "bg-green-600", courses: ["Discrete Mathematics", "Environmental Science", "Constitution of India", "Engineering Mathematics"], credits: "2 Credits per course" },
            ].map((plat, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/30 hover:shadow-md transition-all">
                <div className={`inline-flex items-center gap-2 ${plat.color} text-white px-3 py-1.5 rounded-lg text-sm font-bold mb-4`}>
                  <Laptop className="w-4 h-4" /> {plat.platform}
                </div>
                <p className="text-xs text-slate-gray dark:text-slate-400 mb-3 font-label-md">{plat.credits}</p>
                <ul className="space-y-2">
                  {plat.courses.map((c, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-on-surface dark:text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-kerala-gold shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-4 flex items-center gap-1 text-xs text-heritage-maroon dark:text-primary-fixed hover:underline font-label-md">
                  View all approved courses <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
          <div className="p-5 bg-kerala-gold/10 border border-kerala-gold/30 rounded-xl">
            <p className="text-sm font-body-md text-on-surface dark:text-white"><strong>Note:</strong> Students must complete the course with a minimum score as per the regulation and submit the certificate to the college for credit transfer. Maximum 2 MOOC credits per semester.</p>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="calendar">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Academic Calendar" subtitle="Semester schedules, holidays, and key dates for the current academic year." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="Academic Calendar – Odd Semester 2024-25" date="20-Jul-2024" fileSize="0.5 MB" />
            <DocumentCard title="Academic Calendar – Even Semester 2023-24" date="15-Dec-2023" fileSize="0.4 MB" />
            <DocumentCard title="Holiday List 2024" date="01-Jan-2024" fileSize="0.2 MB" />
            <DocumentCard title="Exam Schedule – S5 & S7 Nov 2024" date="01-Oct-2024" fileSize="1.1 MB" />
            <DocumentCard title="Project Submission Timeline 2024" date="05-Aug-2024" fileSize="0.3 MB" />
            <DocumentCard title="Internship & Industrial Visit Guidelines" date="10-Jun-2024" fileSize="0.6 MB" />
          </div>
        </div>
      </section>

      {/* Honours & Minors */}
      <section className="py-16 bg-background dark:bg-slate-950 border-t border-outline/10" id="honours">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Honours & Minors" subtitle="Earn additional academic credentials alongside your primary degree." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-kerala-gold/10 rounded-bl-full" />
              <Award className="w-10 h-10 text-kerala-gold mb-4" />
              <h3 className="font-headline-sm text-xl font-bold mb-3">B.Tech with Honours</h3>
              <p className="text-sm text-slate-gray dark:text-slate-400 mb-4">Students with CGPA ≥ 8.0 can pursue additional 20 credits in their branch for an Honours degree.</p>
              <ul className="space-y-2 text-sm mb-5">
                {["20 additional credits required", "Specialisation in core domain", "Research project or advanced courses", "Transcript notation: B.Tech (Hons)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-on-surface dark:text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-kerala-gold shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center gap-2 text-sm text-heritage-maroon dark:text-primary-fixed hover:underline font-label-md">
                Download Honours Guidelines <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="p-8 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-heritage-maroon/10 rounded-bl-full" />
              <BookOpen className="w-10 h-10 text-heritage-maroon dark:text-primary-fixed mb-4" />
              <h3 className="font-headline-sm text-xl font-bold mb-3">B.Tech with Minor</h3>
              <p className="text-sm text-slate-gray dark:text-slate-400 mb-4">Students can pursue a Minor in a discipline other than their primary branch by completing 20 credits from that domain.</p>
              <ul className="space-y-2 text-sm mb-5">
                {["20 credits from another discipline", "Popular minors: AI/ML, IoT, Finance, Design", "Available from S5 onwards", "Transcript notation: Minor in [Domain]"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-on-surface dark:text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-heritage-maroon/70 dark:bg-primary-fixed/70 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center gap-2 text-sm text-heritage-maroon dark:text-primary-fixed hover:underline font-label-md">
                Download Minor Guidelines <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CGPC Placements */}
      <section className="py-16 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="cgpc">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="CGPC – Career Guidance & Placement Cell" subtitle="Bridging the gap between students and industry through training, internships, and placements." />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { stat: "500+", label: "Recruiting Companies", icon: <Briefcase className="w-6 h-6" /> },
              { stat: "85%", label: "Placement Rate (2024)", icon: <GraduationCap className="w-6 h-6" /> },
              { stat: "₹12 LPA", label: "Average Package", icon: <Award className="w-6 h-6" /> },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-institutional-navy text-white rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-kerala-gold/20 text-kerala-gold flex items-center justify-center mx-auto mb-3">{s.icon}</div>
                <div className="text-3xl font-bold text-kerala-gold mb-1">{s.stat}</div>
                <div className="text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="CGPC Guidelines & Norms" date="01-Jun-2024" fileSize="0.9 MB" />
            <DocumentCard title="Internship Registration Form" date="15-Jul-2024" fileSize="0.2 MB" />
            <DocumentCard title="List of Approved Internship Firms" date="20-Jun-2024" fileSize="1.0 MB" />
            <DocumentCard title="Campus Recruitment Policy" date="01-Aug-2024" fileSize="0.7 MB" />
            <DocumentCard title="Placement Report 2023-24" date="30-Sep-2024" fileSize="2.5 MB" />
            <DocumentCard title="Training Calendar 2024-25" date="01-Jul-2024" fileSize="0.4 MB" />
          </div>
        </div>
      </section>
    </div>
  );
}
