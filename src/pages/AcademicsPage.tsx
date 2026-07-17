import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { BookOpen, GraduationCap, Laptop, Calendar, Award, Briefcase, ExternalLink, ChevronRight, Clock, Users, FileText, CheckCircle } from "lucide-react";

export default function AcademicsPage() {

  const quickLinks = [
    { icon: <BookOpen className="w-6 h-6" />, title: "B.Tech Syllabus & Regulations", description: "Curriculum, credits, and rules for UG programs.", targetId: "btech" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "PG Regulations", description: "M.Tech, MBA, MCA, and M.Arch guidelines.", targetId: "pg" },
    { icon: <Laptop className="w-6 h-6" />, title: "MOOC Courses", description: "Approved online courses for credit transfer.", targetId: "mooc" },
    { icon: <Calendar className="w-6 h-6" />, title: "Academic Calendar", description: "Important dates, holidays, and exam schedules.", targetId: "calendar" },
    { icon: <Award className="w-6 h-6" />, title: "Honours & Minors", description: "Guidelines for earning additional degrees.", targetId: "honours" },
    { icon: <Briefcase className="w-6 h-6" />, title: "CGPC (Placements)", description: "Career guidance and placement cell.", targetId: "cgpc" },
  ];

  const btechSchemes = [
    { title: "B.Tech S1-S2 Syllabus (2024 Scheme)", date: "01-Jun-2024", fileSize: "4.2 MB" },
    { title: "B.Tech S3-S4 Syllabus (2024 Scheme)", date: "15-Jun-2024", fileSize: "5.1 MB" },
    { title: "B.Tech S5-S6 Syllabus (2019 Scheme)", date: "10-Mar-2023", fileSize: "6.8 MB" },
    { title: "B.Tech S7-S8 Syllabus (2019 Scheme)", date: "20-Jul-2023", fileSize: "5.5 MB" },
    { title: "B.Tech Academic Regulations 2024", date: "01-Jun-2024", fileSize: "1.2 MB" },
    { title: "B.Tech Academic Regulations 2019", date: "15-Jul-2019", fileSize: "980 KB" },
  ];

  const pgDocuments = [
    { title: "M.Tech Regulations & Syllabus 2024", date: "01-Aug-2024", fileSize: "3.4 MB" },
    { title: "MBA Regulations & Syllabus 2024", date: "15-Jul-2024", fileSize: "2.8 MB" },
    { title: "MCA Regulations & Syllabus 2024", date: "01-Jul-2024", fileSize: "2.5 MB" },
    { title: "M.Arch Regulations & Syllabus 2023", date: "10-Sep-2023", fileSize: "1.9 MB" },
    { title: "PG Academic Regulations (General)", date: "01-Jun-2024", fileSize: "1.1 MB" },
    { title: "Ph.D. Course Work Syllabus", date: "20-Mar-2024", fileSize: "900 KB" },
  ];

  const moocCourses = [
    { platform: "NPTEL", courses: 156, description: "IIT/IISc courses across all engineering disciplines" },
    { platform: "Swayam", courses: 89, description: "UGC-approved courses for credit transfer" },
    { platform: "Coursera", courses: 42, description: "Selected courses approved by the university" },
    { platform: "edX", courses: 28, description: "MIT and Harvard courses in core engineering" },
  ];

  const calendarEvents = [
    { event: "Odd Semester Classes Begin", date: "August 12, 2024", type: "Academic" },
    { event: "Last Date for Course Registration", date: "August 26, 2024", type: "Registration" },
    { event: "First Internal Examination", date: "September 23–28, 2024", type: "Exam" },
    { event: "Onam Holiday", date: "September 14–16, 2024", type: "Holiday" },
    { event: "Second Internal Examination", date: "November 11–16, 2024", type: "Exam" },
    { event: "Christmas & New Year Break", date: "December 21, 2024 – January 1, 2025", type: "Holiday" },
    { event: "End Semester Examination Begins", date: "January 6, 2025", type: "Exam" },
    { event: "Republic Day", date: "January 26, 2025", type: "Holiday" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <HeroSection 
        title="Academics Portal"
        description="Access syllabus, academic regulations, calendars, and MOOC course details. Our curriculum is constantly updated to meet industry demands, ensuring our graduates are equipped with the skills and theoretical foundation needed to excel in modern technological landscapes."
        gradient="maroon"
      />

      {/* Quick Links */}
      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Academic Resources" inverse={true} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <button 
                key={link.targetId}
                onClick={() => scrollToSection(link.targetId)}
                className="block group p-5 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/30 dark:border-slate-700 hover:border-kerala-gold hover:shadow-lg transition-all text-left cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-heritage-maroon text-white flex items-center justify-center flex-shrink-0 group-hover:bg-institutional-navy transition-colors shadow-sm">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline-sm text-lg font-semibold text-on-surface dark:text-white mb-1 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                      {link.title}
                    </h4>
                    <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">
                      {link.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-gray/50 group-hover:text-heritage-maroon transition-colors mt-1 flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* B.Tech Syllabus & Regulations */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950" id="btech">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="B.Tech Syllabus & Regulations" 
            subtitle="Comprehensive curriculum framework for undergraduate engineering programs under KTU."
          />
          
          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "4 Years (8 Semesters)" },
              { icon: <FileText className="w-5 h-5" />, label: "Total Credits", value: "160–170 Credits" },
              { icon: <Users className="w-5 h-5" />, label: "Programs", value: "40+ Branches" },
              { icon: <CheckCircle className="w-5 h-5" />, label: "Latest Scheme", value: "2024 Scheme" },
            ].map((info, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-surface-container-lowest dark:bg-slate-900 rounded-xl border border-outline-variant/20">
                <div className="w-10 h-10 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="font-label-md text-xs text-slate-gray dark:text-slate-400">{info.label}</p>
                  <p className="font-headline-sm text-sm font-bold text-on-surface dark:text-white">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 p-6 md:p-8 mb-10">
            <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-4">Key Highlights of 2024 Scheme</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Outcome-Based Education (OBE) framework aligned with NBA standards",
                "Mandatory internship component in S6 and S7",
                "Integrated project-based learning across all semesters",
                "Industry-relevant electives curated with corporate partners",
                "MOOC credit transfer facility for up to 12 credits",
                "Minor degree option in allied engineering disciplines",
                "Comprehensive assessment: Continuous + End Semester (50:50)",
                "Flexible credit system with honors pathway"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 py-1">
                  <CheckCircle className="w-4 h-4 text-success-green mt-0.5 flex-shrink-0" />
                  <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Grid */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Download Syllabus & Regulations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {btechSchemes.map((doc, idx) => (
              <DocumentCard key={idx} title={doc.title} date={doc.date} fileSize={doc.fileSize} />
            ))}
          </div>
        </div>
      </section>

      {/* PG Regulations */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="pg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="PG Regulations" 
            subtitle="Academic guidelines for M.Tech, MBA, MCA, M.Arch, and Ph.D. programs."
          />

          {/* PG Program Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { program: "M.Tech", duration: "2 Years", specializations: "25+ Specializations", seats: "2000+" },
              { program: "MBA", duration: "2 Years", specializations: "Finance, Marketing, HR, Systems", seats: "500+" },
              { program: "MCA", duration: "2 Years", specializations: "Computer Applications", seats: "800+" },
              { program: "M.Arch", duration: "2 Years", specializations: "Urban Design, Sustainability", seats: "100+" },
            ].map((prog, idx) => (
              <div key={idx} className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20 hover:border-kerala-gold transition-colors group">
                <h4 className="font-headline-sm text-xl font-bold text-heritage-maroon dark:text-primary-fixed mb-3">{prog.program}</h4>
                <div className="space-y-2 font-body-md text-sm text-slate-gray dark:text-slate-400">
                  <p><span className="font-semibold text-on-surface dark:text-white">Duration:</span> {prog.duration}</p>
                  <p><span className="font-semibold text-on-surface dark:text-white">Areas:</span> {prog.specializations}</p>
                  <p><span className="font-semibold text-on-surface dark:text-white">Seats:</span> {prog.seats}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Documents */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Download PG Regulations & Syllabus</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgDocuments.map((doc, idx) => (
              <DocumentCard key={idx} title={doc.title} date={doc.date} fileSize={doc.fileSize} />
            ))}
          </div>
        </div>
      </section>

      {/* MOOC Courses */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-outline/10" id="mooc">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="MOOC Courses" 
            subtitle="Earn academic credits through approved Massive Open Online Courses from leading platforms."
          />

          {/* MOOC Platforms */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {moocCourses.map((platform, idx) => (
              <div key={idx} className="p-6 bg-surface-container-lowest dark:bg-slate-900 rounded-xl border border-outline-variant/20 hover:border-kerala-gold hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white">{platform.platform}</h4>
                  <ExternalLink className="w-4 h-4 text-slate-gray/50 group-hover:text-heritage-maroon transition-colors" />
                </div>
                <p className="font-headline-sm text-3xl font-bold text-heritage-maroon dark:text-primary-fixed mb-2">{platform.courses}</p>
                <p className="font-label-md text-xs text-slate-gray dark:text-slate-400 uppercase tracking-wide mb-3">Approved Courses</p>
                <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">{platform.description}</p>
              </div>
            ))}
          </div>

          {/* MOOC Guidelines */}
          <div className="bg-heritage-maroon/5 dark:bg-heritage-maroon/10 border border-heritage-maroon/20 rounded-2xl p-6 md:p-8">
            <h3 className="font-headline-sm text-xl font-bold text-heritage-maroon dark:text-primary-fixed mb-4">MOOC Credit Transfer Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Maximum of 12 credits can be earned through MOOC courses",
                "Only courses from approved platforms listed by KTU are eligible",
                "Certificate of completion must be submitted to the college",
                "Credits are mapped to equivalent courses in the KTU curriculum",
                "Students must register the MOOC course during course registration",
                "Internal assessment is waived for MOOC-completed courses",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 py-1">
                  <CheckCircle className="w-4 h-4 text-heritage-maroon dark:text-primary-fixed mt-0.5 flex-shrink-0" />
                  <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="calendar">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Academic Calendar" 
            subtitle="Key dates, examination schedules, and holidays for the academic year 2024–25."
          />

          {/* Calendar Table */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-institutional-navy text-white">
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Event</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Date</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarEvents.map((item, idx) => (
                    <tr key={idx} className="border-t border-outline-variant/20 hover:bg-surface-container-lowest dark:hover:bg-slate-700/50 transition-colors">
                      <td className="font-body-md text-sm text-on-surface dark:text-white px-6 py-4">{item.event}</td>
                      <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-4">{item.date}</td>
                      <td className="px-6 py-4">
                        <span className={`font-label-md text-xs px-3 py-1 rounded-full font-semibold ${
                          item.type === "Exam" ? "bg-error/10 text-error" :
                          item.type === "Holiday" ? "bg-success-green/10 text-success-green" :
                          item.type === "Registration" ? "bg-kerala-gold/10 text-kerala-gold" :
                          "bg-institutional-navy/10 text-institutional-navy dark:bg-primary-fixed/10 dark:text-primary-fixed"
                        }`}>
                          {item.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Downloadable Calendars */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Download Academic Calendars</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="Academic Calendar - Odd Semester 2024-25" date="20-Jul-2024" fileSize="1.2 MB" />
            <DocumentCard title="Academic Calendar - Even Semester 2024-25" date="15-Dec-2024" fileSize="1.1 MB" />
            <DocumentCard title="Holiday List 2024-25" date="01-Jan-2024" fileSize="450 KB" />
          </div>
        </div>
      </section>

      {/* Honours & Minors */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-outline/10" id="honours">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Honours & Minor Degree Programs" 
            subtitle="Earn additional credentials alongside your primary degree to enhance your academic profile."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {/* Honours */}
            <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-kerala-gold/10 text-kerala-gold flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Honours Degree</h3>
                  <p className="font-label-md text-sm text-slate-gray dark:text-slate-400">B.Tech (Hons)</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Requires 20 additional credits beyond the regular program",
                  "Advanced courses in the student's own discipline",
                  "Minimum CGPA of 7.5 required to enroll",
                  "Must complete a capstone research project",
                  "Industry mentorship component included",
                  "Degree awarded: B.Tech (Honours) in [Branch]"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-kerala-gold mt-0.5 flex-shrink-0" />
                    <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minors */}
            <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Minor Degree</h3>
                  <p className="font-label-md text-sm text-slate-gray dark:text-slate-400">B.Tech with Minor</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Requires 20 additional credits from a different discipline",
                  "Choose from approved minor streams (AI, Data Science, IoT, etc.)",
                  "Minimum CGPA of 7.0 required to enroll",
                  "Courses taken alongside regular semester coursework",
                  "Minor project in the chosen discipline",
                  "Degree awarded: B.Tech in [Branch] with Minor in [Stream]"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-heritage-maroon dark:text-primary-fixed mt-0.5 flex-shrink-0" />
                    <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Minor Streams */}
          <div className="bg-institutional-navy rounded-2xl p-6 md:p-8">
            <h3 className="font-headline-sm text-xl font-bold text-white mb-6">Available Minor Streams</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Artificial Intelligence", "Data Science", "Cyber Security", "IoT & Embedded Systems",
                "Robotics", "Renewable Energy", "Financial Engineering", "Digital Marketing"
              ].map((stream, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg border border-white/10 text-white">
                  <ChevronRight className="w-4 h-4 text-kerala-gold flex-shrink-0" />
                  <span className="font-label-md text-sm">{stream}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CGPC (Placements) */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="cgpc">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="CGPC – Career Guidance & Placement Cell" 
            subtitle="Bridging the gap between academia and industry through structured placement and career development programs."
          />

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { stat: "500+", label: "Recruiting Companies" },
              { stat: "85%", label: "Placement Rate" },
              { stat: "₹24 LPA", label: "Highest Package (2024)" },
              { stat: "₹6.5 LPA", label: "Average Package" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20 text-center hover:border-kerala-gold transition-colors">
                <p className="font-headline-sm text-3xl md:text-4xl font-bold text-heritage-maroon dark:text-primary-fixed mb-1">{item.stat}</p>
                <p className="font-label-md text-sm text-slate-gray dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-5">Services Offered</h3>
              <div className="space-y-3">
                {[
                  "Campus recruitment drives with top-tier companies",
                  "Pre-placement training: Aptitude, GD, and Interview prep",
                  "Internship facilitation for S6 and S7 students",
                  "Industry mentorship and career counseling programs",
                  "Resume building and LinkedIn profile workshops",
                  "Mock interview sessions with industry professionals",
                  "Entrepreneurship and startup incubation support",
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-5">Top Recruiters</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "TCS", "Infosys", "Wipro", "HCL Technologies",
                  "Cognizant", "UST Global", "IBS Software", "Travancore Analytics",
                  "TechMahindra", "Mphasis", "EY (Ernst & Young)", "Deloitte"
                ].map((company, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2.5 bg-surface-container-lowest dark:bg-slate-700 rounded-lg">
                    <Briefcase className="w-3.5 h-3.5 text-institutional-navy dark:text-primary-fixed flex-shrink-0" />
                    <span className="font-label-md text-sm text-on-surface dark:text-white">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Downloads */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Downloads & Reports</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="CGPC Annual Report 2023-24" date="15-Mar-2024" fileSize="2.1 MB" />
            <DocumentCard title="Placement Statistics 2023-24" date="10-Apr-2024" fileSize="800 KB" fileType="XLSX" />
            <DocumentCard title="Internship Guidelines & Forms" date="01-Jun-2024" fileSize="650 KB" fileType="DOCX" />
          </div>
        </div>
      </section>
    </div>
  );
}
