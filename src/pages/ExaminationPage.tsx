import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { examinationService } from "@/services/api";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { 
  CalendarClock, BellRing, ClipboardList, ScrollText, Download, 
  ChevronRight, AlertCircle, CheckCircle, Clock, FileText, 
  HelpCircle, Shield, CreditCard, RefreshCw, Search, ExternalLink
} from "lucide-react";

export default function ExaminationPage() {
  const { data: timetables = [], isLoading } = useQuery({
    queryKey: ['timetables'],
    queryFn: examinationService.getTimetables
  });

  const { data: notifications = [] } = useQuery({
    queryKey: ['examNotifications'],
    queryFn: examinationService.getNotifications
  });

  const quickLinks = [
    { icon: <CalendarClock className="w-6 h-6" />, title: "Timetables", description: "Latest exam schedules", targetId: "timetables" },
    { icon: <BellRing className="w-6 h-6" />, title: "Notifications", description: "Exam related updates", targetId: "notifications" },
    { icon: <ClipboardList className="w-6 h-6" />, title: "Results", description: "View exam results", targetId: "results" },
    { icon: <ScrollText className="w-6 h-6" />, title: "Certificates", description: "Degree & provisional requests", targetId: "certificates" },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Revaluation", description: "Answer script scrutiny & revaluation", targetId: "revaluation" },
    { icon: <HelpCircle className="w-6 h-6" />, title: "Exam Guidelines", description: "Rules, hall tickets & malpractice info", targetId: "guidelines" },
  ];

  const examSchedule = [
    { exam: "B.Tech S1/S2 Regular Examination", semester: "S1/S2", startDate: "January 6, 2025", status: "Scheduled" },
    { exam: "B.Tech S3 Supplementary Examination", semester: "S3", startDate: "January 13, 2025", status: "Scheduled" },
    { exam: "M.Tech S1 Regular Examination", semester: "S1", startDate: "January 8, 2025", status: "Scheduled" },
    { exam: "B.Tech S5 Regular Examination", semester: "S5", startDate: "December 18, 2024", status: "Ongoing" },
    { exam: "B.Tech S7 Regular Examination", semester: "S7", startDate: "December 10, 2024", status: "Completed" },
    { exam: "MBA S3 Regular Examination", semester: "S3", startDate: "December 12, 2024", status: "Completed" },
  ];

  const recentResults = [
    { exam: "B.Tech S4 (R) Exam – April 2024", published: "July 15, 2024", semester: "S4", pass: "72%" },
    { exam: "B.Tech S6 (R) Exam – April 2024", published: "July 10, 2024", semester: "S6", pass: "78%" },
    { exam: "B.Tech S8 (R) Exam – April 2024", published: "July 5, 2024", semester: "S8", pass: "85%" },
    { exam: "M.Tech S2 (R) Exam – April 2024", published: "June 28, 2024", semester: "S2", pass: "91%" },
    { exam: "B.Tech S3 (S) Exam – May 2024", published: "July 18, 2024", semester: "S3", pass: "45%" },
    { exam: "MBA S4 (R) Exam – April 2024", published: "July 8, 2024", semester: "S4", pass: "88%" },
  ];

  const certificates = [
    { type: "Provisional Certificate", processing: "7–10 Working Days", fee: "₹500", description: "Issued after successful completion of all examinations" },
    { type: "Degree Certificate", processing: "30–45 Working Days", fee: "₹1,500", description: "Original degree certificate after convocation" },
    { type: "Consolidated Marksheet", processing: "15–20 Working Days", fee: "₹750", description: "Consolidated marks of all semesters" },
    { type: "Duplicate Certificate", processing: "30 Working Days", fee: "₹2,000", description: "Replacement for lost or damaged certificates" },
    { type: "Migration Certificate", processing: "10–15 Working Days", fee: "₹500", description: "Required for higher studies in other universities" },
    { type: "Transcript", processing: "7–10 Working Days", fee: "₹1,000", description: "Official academic transcript for abroad applications" },
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
        title="Examination Portal"
        description="Timetables, notifications, results, and student services related to university examinations. Access all necessary portals and guidelines here to ensure a smooth, transparent, and fair assessment of your academic journey across our affiliated institutions."
        gradient="maroon"
      />

      {/* Quick Links */}
      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
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

      {/* Timetables Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950" id="timetables">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Examination Timetables" 
            subtitle="Download the latest examination schedules for all programs and semesters."
          />

          {/* Exam Schedule Table */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-institutional-navy text-white">
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Examination</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Semester</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Start Date</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {examSchedule.map((item, idx) => (
                    <tr key={idx} className="border-t border-outline-variant/20 hover:bg-surface-container-lowest dark:hover:bg-slate-700/50 transition-colors">
                      <td className="font-body-md text-sm text-on-surface dark:text-white px-6 py-4 font-medium">{item.exam}</td>
                      <td className="px-6 py-4">
                        <span className="font-label-md text-xs px-3 py-1 bg-institutional-navy/10 dark:bg-slate-600 text-institutional-navy dark:text-white rounded-full font-semibold">
                          {item.semester}
                        </span>
                      </td>
                      <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-4">{item.startDate}</td>
                      <td className="px-6 py-4">
                        <span className={`font-label-md text-xs px-3 py-1 rounded-full font-semibold ${
                          item.status === "Ongoing" ? "bg-kerala-gold/10 text-kerala-gold" :
                          item.status === "Completed" ? "bg-success-green/10 text-success-green" :
                          "bg-institutional-navy/10 text-institutional-navy dark:bg-primary-fixed/10 dark:text-primary-fixed"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Downloadable Timetables from API */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Downloadable Timetables</h3>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low dark:bg-slate-800 text-institutional-navy dark:text-white font-label-lg">
                  <th className="p-4 border-b border-outline/10">Exam Name</th>
                  <th className="p-4 border-b border-outline/10">Session</th>
                  <th className="p-4 border-b border-outline/10">Published On</th>
                  <th className="p-4 border-b border-outline/10 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-sm text-slate-gray dark:text-slate-300">
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center">Loading timetables...</td>
                  </tr>
                ) : timetables.length > 0 ? (
                  timetables.map(tt => (
                    <tr key={tt.id} className="border-b border-outline/10 hover:bg-surface dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 font-semibold text-institutional-navy dark:text-slate-200">{tt.name}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-surface-variant dark:bg-slate-700 rounded text-xs">{tt.session}</span>
                      </td>
                      <td className="p-4">{tt.publishedDate}</td>
                      <td className="p-4 text-right">
                        <a href={tt.downloadUrl} className="text-heritage-maroon dark:text-primary-fixed hover:underline flex items-center justify-end gap-1">
                          <Download className="w-4 h-4" /> Download
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-gray">No timetables available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="notifications">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Exam Notifications & Circulars" 
            subtitle="Latest announcements, date changes, and important circulars from the examination branch."
          />

          {/* Notification List */}
          <div className="space-y-4 mb-10">
            {notifications.length > 0 ? notifications.map((notif, idx) => (
              <div key={idx} className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20 hover:border-kerala-gold/50 hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-error/10 text-error flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BellRing className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline-sm text-base font-semibold text-on-surface dark:text-white mb-1 group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                      {notif.title}
                    </h4>
                    <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mb-2">{notif.description || "Click to view the full notification details."}</p>
                    <div className="flex items-center gap-3 font-label-md text-xs text-slate-gray dark:text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {notif.postedTime}</span>
                      <span className={`px-2 py-0.5 rounded-full font-semibold ${
                        notif.priority === "Urgent" ? "bg-error/10 text-error" : "bg-institutional-navy/10 text-institutional-navy dark:bg-primary-fixed/10 dark:text-primary-fixed"
                      }`}>{notif.priority}</span>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20 text-center text-slate-gray">
                No notifications available at this time.
              </div>
            )}
          </div>

          {/* Important Notices */}
          <div className="bg-kerala-gold/5 border border-kerala-gold/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-kerala-gold" />
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Important Notices</h3>
            </div>
            <div className="space-y-3">
              {[
                "Students must carry valid hall tickets and college ID for all examinations",
                "Late fee applications will be accepted only up to 3 days before the examination",
                "Mobile phones and electronic devices are strictly prohibited inside examination halls",
                "Any malpractice will result in cancellation of the examination and disciplinary action",
                "Answer scripts will be available for scrutiny within 15 days of result publication",
              ].map((notice, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-kerala-gold mt-0.5 flex-shrink-0" />
                  <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{notice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-outline/10" id="results">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Examination Results" 
            subtitle="View recently published results and access the result portal."
          />

          {/* Result Portal Link */}
          <div className="bg-institutional-navy rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-kerala-gold/20 text-kerala-gold flex items-center justify-center">
                <Search className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-headline-sm text-xl font-bold text-white mb-1">Check Your Results Online</h3>
                <p className="font-body-md text-sm text-white/70">Enter your register number to view your latest examination results</p>
              </div>
            </div>
            <Link 
              to="/results"
              className="px-8 py-3 bg-kerala-gold text-institutional-navy font-label-lg font-bold rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Go to Result Portal <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Recent Results Table */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Recently Published Results</h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-institutional-navy text-white">
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Examination</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Semester</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Published Date</th>
                    <th className="font-headline-sm text-sm font-bold px-6 py-4">Pass %</th>
                  </tr>
                </thead>
                <tbody>
                  {recentResults.map((result, idx) => (
                    <tr key={idx} className="border-t border-outline-variant/20 hover:bg-surface-container-lowest dark:hover:bg-slate-700/50 transition-colors">
                      <td className="font-body-md text-sm text-on-surface dark:text-white px-6 py-4 font-medium">{result.exam}</td>
                      <td className="px-6 py-4">
                        <span className="font-label-md text-xs px-3 py-1 bg-institutional-navy/10 dark:bg-slate-600 text-institutional-navy dark:text-white rounded-full font-semibold">
                          {result.semester}
                        </span>
                      </td>
                      <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-4">{result.published}</td>
                      <td className="px-6 py-4">
                        <span className={`font-headline-sm text-sm font-bold ${
                          parseInt(result.pass) >= 75 ? "text-success-green" :
                          parseInt(result.pass) >= 50 ? "text-kerala-gold" :
                          "text-error"
                        }`}>
                          {result.pass}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="certificates">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Certificates & Documents" 
            subtitle="Apply for degree certificates, transcripts, and other academic documents."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {certificates.map((cert, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20 hover:border-kerala-gold hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface dark:text-white group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                    {cert.type}
                  </h4>
                </div>
                <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mb-4">{cert.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-outline/10">
                  <div className="flex items-center gap-1 font-label-md text-xs text-slate-gray dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {cert.processing}
                  </div>
                  <div className="flex items-center gap-1 font-label-md text-xs font-bold text-heritage-maroon dark:text-primary-fixed">
                    <CreditCard className="w-3.5 h-3.5" /> {cert.fee}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Application Process */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
            <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-6">How to Apply</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Login", desc: "Access the KTU student portal with your credentials" },
                { step: "2", title: "Select Certificate", desc: "Choose the type of certificate you require" },
                { step: "3", title: "Pay Fee", desc: "Complete the online payment via the portal" },
                { step: "4", title: "Collect", desc: "Collect from your college or receive by post" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-heritage-maroon text-white flex items-center justify-center mx-auto mb-3 font-headline-sm text-lg font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface dark:text-white mb-1">{item.title}</h4>
                  <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revaluation Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-outline/10" id="revaluation">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Revaluation & Scrutiny" 
            subtitle="Apply for answer script scrutiny, revaluation, or challenge valuation."
          />

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              { 
                title: "Answer Script Scrutiny", 
                fee: "₹300 per paper",
                timeline: "Within 15 days of result",
                icon: <Search className="w-6 h-6" />,
                details: [
                  "Verify that all answers have been evaluated",
                  "Check for totalling errors in marks",
                  "No re-evaluation of answers is done",
                  "Result: Marks may increase or remain same"
                ]
              },
              { 
                title: "Revaluation", 
                fee: "₹750 per paper",
                timeline: "Within 15 days of result",
                icon: <RefreshCw className="w-6 h-6" />,
                details: [
                  "Complete re-evaluation by a different examiner",
                  "Higher of the two marks will be awarded",
                  "Available for theory papers only",
                  "Result: Marks may increase or remain same"
                ]
              },
              { 
                title: "Challenge Valuation", 
                fee: "₹2,000 per paper",
                timeline: "Within 7 days of revaluation result",
                icon: <Shield className="w-6 h-6" />,
                details: [
                  "Student can view the evaluated answer script",
                  "Valuation done in presence of the student",
                  "Final and binding — no further appeal",
                  "Fee refunded if marks change by ≥15%"
                ]
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface-container-lowest dark:bg-slate-900 rounded-xl border border-outline-variant/20 hover:border-kerala-gold transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white">{item.title}</h4>
                    <p className="font-label-md text-sm text-heritage-maroon dark:text-primary-fixed font-semibold">{item.fee}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4 font-label-md text-xs text-slate-gray dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5" /> Apply: {item.timeline}
                </div>
                <div className="space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success-green mt-0.5 flex-shrink-0" />
                      <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Downloads */}
          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">Application Forms</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="Revaluation Application Form" date="01-Aug-2024" fileSize="120 KB" fileType="PDF" />
            <DocumentCard title="Scrutiny Application Form" date="01-Aug-2024" fileSize="95 KB" fileType="PDF" />
            <DocumentCard title="Challenge Valuation Guidelines" date="15-Jul-2024" fileSize="250 KB" fileType="PDF" />
          </div>
        </div>
      </section>

      {/* Exam Guidelines Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="guidelines">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Examination Guidelines & Rules" 
            subtitle="Important regulations every student must know before appearing for university examinations."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {/* Hall Ticket */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-institutional-navy/10 text-institutional-navy dark:text-primary-fixed flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Hall Ticket Instructions</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Download hall ticket from the KTU student portal before the exam",
                  "Hall ticket must be printed on A4 paper (color or B&W)",
                  "Keep the hall ticket safe — it is required for all exam sessions",
                  "Report any discrepancies to the college exam cell immediately",
                  "Hall ticket + College ID are mandatory for entry to exam hall",
                  "Lost hall tickets can be re-downloaded from the portal"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-institutional-navy dark:text-primary-fixed mt-0.5 flex-shrink-0" />
                    <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Malpractice */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-error/10 text-error flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Malpractice & Penalties</h3>
              </div>
              <div className="space-y-3">
                {[
                  { offense: "Possession of unauthorized material", penalty: "Cancellation of that paper" },
                  { offense: "Copying from another candidate", penalty: "Cancellation of all papers in that session" },
                  { offense: "Impersonation", penalty: "Debarment from all exams for 2 years" },
                  { offense: "Using electronic devices", penalty: "Cancellation of the examination" },
                  { offense: "Disorderly conduct in exam hall", penalty: "Removal from hall + paper cancelled" },
                  { offense: "Repeated malpractice", penalty: "Permanent debarment from the university" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-body-md text-sm text-on-surface dark:text-white font-medium">{item.offense}:</span>
                      <span className="font-body-md text-sm text-error ml-1">{item.penalty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exam Day Checklist */}
          <div className="bg-institutional-navy rounded-2xl p-6 md:p-8">
            <h3 className="font-headline-sm text-xl font-bold text-white mb-6">Exam Day Checklist</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Hall Ticket (printed)", "College ID Card", "Blue/Black ballpoint pens", 
                "Pencil & eraser (for diagrams)", "Calculator (if permitted)", "Drawing instruments (if needed)", 
                "Arrive 30 minutes early", "No mobile phones allowed"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg border border-white/10 text-white">
                  <CheckCircle className="w-4 h-4 text-kerala-gold flex-shrink-0" />
                  <span className="font-label-md text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
