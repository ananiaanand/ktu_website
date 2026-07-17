import { useState } from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { 
  GraduationCap, BookOpen, Building, PiggyBank, Users, Beaker,
  ArrowRight, CheckCircle, MapPin, Mail, Phone,
  Microscope, Globe, Lightbulb, Target, TrendingUp, Clock,
  FileText, IndianRupee, Sparkles, FlaskConical
} from "lucide-react";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("phd");

  const navItems = [
    { id: "phd", label: "Ph.D. Admissions", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "regulations", label: "Regulations", icon: <BookOpen className="w-5 h-5" /> },
    { id: "centers", label: "Research Centers", icon: <Building className="w-5 h-5" /> },
    { id: "fellowships", label: "Fellowships & Funding", icon: <PiggyBank className="w-5 h-5" /> },
    { id: "supervisors", label: "Supervisors", icon: <Users className="w-5 h-5" /> },
    { id: "cerd", label: "CERD", icon: <Beaker className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const researchAreas = [
    { area: "Artificial Intelligence & ML", scholars: 124, icon: <Sparkles className="w-5 h-5" /> },
    { area: "VLSI & Embedded Systems", scholars: 89, icon: <Microscope className="w-5 h-5" /> },
    { area: "Renewable Energy", scholars: 67, icon: <Lightbulb className="w-5 h-5" /> },
    { area: "Signal Processing", scholars: 56, icon: <TrendingUp className="w-5 h-5" /> },
    { area: "Structural Engineering", scholars: 48, icon: <Building className="w-5 h-5" /> },
    { area: "Computer Networks & Security", scholars: 72, icon: <Globe className="w-5 h-5" /> },
    { area: "Nanotechnology", scholars: 34, icon: <FlaskConical className="w-5 h-5" /> },
    { area: "Environmental Engineering", scholars: 41, icon: <Target className="w-5 h-5" /> },
  ];

  const approvedCenters = [
    { name: "College of Engineering Trivandrum (CET)", location: "Thiruvananthapuram", departments: 12, scholars: 210, code: "TCR" },
    { name: "Government Engineering College Thrissur (GECT)", location: "Thrissur", departments: 8, scholars: 125, code: "TSR" },
    { name: "TKM College of Engineering", location: "Kollam", departments: 10, scholars: 165, code: "KLM" },
    { name: "NSS College of Engineering", location: "Palakkad", departments: 7, scholars: 98, code: "PKD" },
    { name: "Rajiv Gandhi Institute of Technology", location: "Kottayam", departments: 9, scholars: 140, code: "KTM" },
    { name: "College of Engineering Kidangoor", location: "Kottayam", departments: 6, scholars: 72, code: "CEK" },
    { name: "Government Engineering College Barton Hill", location: "Thiruvananthapuram", departments: 7, scholars: 88, code: "BHT" },
    { name: "Model Engineering College", location: "Ernakulam", departments: 8, scholars: 110, code: "MEC" },
  ];

  const supervisors = [
    { name: "Dr. Rajesh Kumar V", department: "Computer Science & Engineering", college: "CET", specialization: "Machine Learning, NLP", scholars: 5, publications: 48 },
    { name: "Dr. Priya Nair S", department: "Electronics & Communication", college: "GECT", specialization: "VLSI Design, IoT", scholars: 4, publications: 35 },
    { name: "Dr. Anil Kumar M", department: "Civil Engineering", college: "TKM", specialization: "Structural Dynamics", scholars: 3, publications: 42 },
    { name: "Dr. Lakshmi Devi K", department: "Electrical Engineering", college: "CET", specialization: "Power Systems, Smart Grid", scholars: 6, publications: 55 },
    { name: "Dr. Suresh Babu P", department: "Mechanical Engineering", college: "RIT", specialization: "Thermal Engineering", scholars: 4, publications: 38 },
    { name: "Dr. Meera Thomas", department: "Computer Science & Engineering", college: "MEC", specialization: "Cyber Security, Blockchain", scholars: 3, publications: 29 },
  ];

  const fellowships = [
    { name: "KTU Research Fellowship", amount: "₹31,000/month (JRF) | ₹35,000/month (SRF)", eligibility: "Full-time Ph.D. scholars with valid NET/GATE", duration: "5 years (max)", status: "Open" },
    { name: "CERD Research Grant", amount: "Up to ₹5,00,000 per project", eligibility: "Faculty & scholars of affiliated colleges", duration: "2 years", status: "Open" },
    { name: "UGC-NET Junior Research Fellowship", amount: "₹31,000/month + HRA", eligibility: "NET qualified candidates", duration: "2 years (JRF) + 3 years (SRF)", status: "Apply via UGC" },
    { name: "CSIR Research Fellowship", amount: "₹31,000/month (JRF) | ₹35,000/month (SRF)", eligibility: "CSIR-NET qualified in Science/Engineering", duration: "5 years", status: "Apply via CSIR" },
    { name: "INSPIRE Fellowship (DST)", amount: "₹25,000–₹31,000/month", eligibility: "Top 1% academic performers", duration: "5 years", status: "Apply via DST" },
    { name: "State Government Merit Scholarship", amount: "₹10,000/month", eligibility: "Kerala domicile, economically weaker section", duration: "3 years", status: "Open" },
  ];

  return (
    <div>
      <HeroSection 
        title="Research Portal"
        description="Fostering innovation and advanced studies through our Ph.D. programs, research centers, and collaboration with industry. We provide a thriving ecosystem for scholars to push the boundaries of knowledge, address global challenges, and create sustainable technologies for the future."
        gradient="maroon"
      />

      {/* Sticky Tab Navigation — different UI from previous pages */}
      <nav className="sticky top-[52px] md:top-[56px] z-30 bg-institutional-navy border-b border-white/10 shadow-lg">
        <div className="max-w-container-max mx-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex items-center min-w-max">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-6 py-4 font-label-md text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeTab === item.id 
                    ? "text-kerala-gold border-kerala-gold bg-white/5" 
                    : "text-white/60 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Key Stats Banner */}
      <section className="bg-gradient-to-r from-heritage-maroon to-[#600018] py-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "1,200+", label: "Active Research Scholars" },
              { value: "450+", label: "Approved Supervisors" },
              { value: "85+", label: "Research Centers" },
              { value: "3,500+", label: "Publications (2020–24)" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="font-headline-sm text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="font-label-md text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ph.D. Admissions */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950" id="phd">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Main Content */}
            <div className="flex-1">
              <SectionHeading 
                title="Ph.D. Admissions" 
                subtitle="Join KTU's doctoral program and contribute to cutting-edge research."
              />

              {/* Admission Timeline */}
              <div className="relative pl-8 space-y-8 mb-12">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-heritage-maroon via-kerala-gold to-institutional-navy"></div>
                {[
                  { step: "Notification", desc: "KTU publishes Ph.D. admission notification (twice a year — June & December)", color: "bg-heritage-maroon" },
                  { step: "Application", desc: "Apply online through the KTU portal with required documents and research proposal", color: "bg-heritage-maroon/80" },
                  { step: "Entrance Exam", desc: "Appear for KTU Research Entrance Test (exemption for NET/GATE qualified)", color: "bg-kerala-gold" },
                  { step: "Interview", desc: "Shortlisted candidates appear for a research aptitude interview", color: "bg-kerala-gold/80" },
                  { step: "Admission", desc: "Allotment based on entrance + interview score; register at the research center", color: "bg-institutional-navy" },
                  { step: "Course Work", desc: "Complete mandatory course work within the first two semesters", color: "bg-institutional-navy/80" },
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className={`absolute -left-8 w-6 h-6 rounded-full ${item.color} border-4 border-white dark:border-slate-950 flex items-center justify-center`}>
                      <span className="font-label-md text-[10px] text-white font-bold">{idx + 1}</span>
                    </div>
                    <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-xl p-5 border border-outline-variant/20 flex-1 hover:border-kerala-gold/40 transition-colors">
                      <h4 className="font-headline-sm text-base font-bold text-on-surface dark:text-white mb-1">{item.step}</h4>
                      <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Eligibility */}
              <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
                <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-5">Eligibility Criteria</h3>
                <div className="space-y-3">
                  {[
                    "Master's degree in relevant discipline with minimum 60% marks (55% for SC/ST)",
                    "Valid GATE / NET / SLET score (exemption criteria apply)",
                    "B.Tech graduates with minimum 75% and valid GATE can apply directly",
                    "Working professionals with minimum 2 years experience are eligible for part-time Ph.D.",
                    "Foreign nationals may apply under sponsored/self-financing category",
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                      <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar — Popular Research Areas */}
            <div className="lg:w-[380px] shrink-0">
              <div className="sticky top-[120px]">
                <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-heritage-maroon dark:text-primary-fixed" />
                  Popular Research Areas
                </h3>
                <div className="space-y-3">
                  {researchAreas.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-surface-container-lowest dark:bg-slate-900 rounded-xl border border-outline-variant/20 hover:border-heritage-maroon/30 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center group-hover:bg-heritage-maroon group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-label-md text-sm text-on-surface dark:text-white">{item.area}</span>
                      </div>
                      <span className="font-label-md text-xs text-slate-gray dark:text-slate-400 bg-surface-container-low dark:bg-slate-800 px-2.5 py-1 rounded-full">{item.scholars} scholars</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations — Accordion-style */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="regulations">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Research Regulations" 
            subtitle="Academic and procedural guidelines governing the Ph.D. program at KTU."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Key Milestones */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 overflow-hidden">
              <div className="bg-institutional-navy p-5">
                <h3 className="font-headline-sm text-lg font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-kerala-gold" />
                  Ph.D. Milestones & Timelines
                </h3>
              </div>
              <div className="divide-y divide-outline-variant/20">
                {[
                  { milestone: "Course Work Completion", timeline: "Within 12 months of admission", note: "Minimum 2 courses, 12 credits" },
                  { milestone: "Comprehensive Viva", timeline: "Within 18 months", note: "Presentation before Doctoral Committee" },
                  { milestone: "Research Proposal Submission", timeline: "Within 18 months", note: "Detailed research plan with methodology" },
                  { milestone: "Progress Review", timeline: "Every 6 months", note: "Mandatory progress presentation to DC" },
                  { milestone: "Pre-submission Seminar", timeline: "Before thesis submission", note: "Open seminar at the research center" },
                  { milestone: "Thesis Submission", timeline: "Min 3 years / Max 6 years", note: "2 publications mandatory for submission" },
                  { milestone: "Viva Voce", timeline: "Within 6 months of submission", note: "Evaluation by external examiner" },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 hover:bg-surface-container-lowest dark:hover:bg-slate-700/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-headline-sm text-sm font-bold text-on-surface dark:text-white mb-1">{item.milestone}</h4>
                        <p className="font-body-md text-xs text-slate-gray dark:text-slate-400">{item.note}</p>
                      </div>
                      <span className="font-label-md text-xs bg-kerala-gold/10 text-kerala-gold px-3 py-1 rounded-full whitespace-nowrap font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.timeline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Requirements & Downloads */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
                <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white mb-5 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-heritage-maroon dark:text-primary-fixed" />
                  Publication Requirements
                </h3>
                <div className="space-y-4">
                  {[
                    { type: "Mandatory", desc: "Minimum 2 papers in Scopus/WoS indexed journals before thesis submission" },
                    { type: "Recommended", desc: "At least 1 paper in Q1/Q2 ranked journals (as per SJR)" },
                    { type: "Conference", desc: "Presentation at minimum 1 national/international conference" },
                    { type: "Plagiarism", desc: "Thesis similarity index must be below 10% (excluding bibliography)" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest dark:bg-slate-700/30">
                      <span className={`font-label-md text-xs px-2 py-0.5 rounded font-bold mt-0.5 ${
                        item.type === "Mandatory" ? "bg-error/10 text-error" :
                        item.type === "Recommended" ? "bg-success-green/10 text-success-green" :
                        item.type === "Plagiarism" ? "bg-kerala-gold/10 text-kerala-gold" :
                        "bg-institutional-navy/10 text-institutional-navy dark:bg-primary-fixed/10 dark:text-primary-fixed"
                      }`}>{item.type}</span>
                      <span className="font-body-md text-sm text-slate-gray dark:text-slate-400">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Regulations */}
              <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white">Download Regulations</h3>
              <div className="space-y-4">
                <DocumentCard title="Ph.D. Regulations 2024 (Revised)" date="01-Mar-2024" fileSize="1.8 MB" />
                <DocumentCard title="Guidelines for Doctoral Committee" date="15-Feb-2024" fileSize="650 KB" />
                <DocumentCard title="Thesis Format & Submission Guidelines" date="01-Jan-2024" fileSize="1.2 MB" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approved Research Centers — Map-like card layout */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-outline/10" id="centers">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Approved Research Centers" 
            subtitle="Recognized institutions across Kerala where Ph.D. research can be carried out."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approvedCenters.map((center, idx) => (
              <div key={idx} className="relative bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 p-6 hover:border-heritage-maroon/40 hover:shadow-xl transition-all group overflow-hidden">
                {/* Accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-heritage-maroon to-kerala-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-12 h-12 rounded-xl bg-institutional-navy text-white flex items-center justify-center font-headline-sm text-sm font-bold mb-4">
                  {center.code}
                </div>
                <h4 className="font-headline-sm text-base font-bold text-on-surface dark:text-white mb-2 line-clamp-2 min-h-[3rem] group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                  {center.name}
                </h4>
                <div className="flex items-center gap-1 font-label-md text-xs text-slate-gray dark:text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5" /> {center.location}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline/10">
                  <div className="text-center">
                    <p className="font-headline-sm text-lg font-bold text-heritage-maroon dark:text-primary-fixed">{center.departments}</p>
                    <p className="font-label-md text-[10px] text-slate-gray dark:text-slate-400 uppercase">Depts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-headline-sm text-lg font-bold text-institutional-navy dark:text-white">{center.scholars}</p>
                    <p className="font-label-md text-[10px] text-slate-gray dark:text-slate-400 uppercase">Scholars</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-gray/30 group-hover:text-heritage-maroon group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowships & Funding — Full-width cards */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="fellowships">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Fellowships & Funding" 
            subtitle="Financial support opportunities available for doctoral researchers."
          />

          <div className="space-y-5">
            {fellowships.map((fellowship, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 hover:border-kerala-gold/40 transition-all overflow-hidden group">
                <div className="flex flex-col md:flex-row">
                  {/* Left accent */}
                  <div className="w-full md:w-2 bg-gradient-to-b from-heritage-maroon to-kerala-gold shrink-0 hidden md:block"></div>
                  <div className="h-1 md:h-auto bg-gradient-to-r from-heritage-maroon to-kerala-gold md:hidden"></div>
                  
                  <div className="flex-1 p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                          {fellowship.name}
                        </h4>
                        <span className={`font-label-md text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                          fellowship.status === "Open" ? "bg-success-green/10 text-success-green" : "bg-institutional-navy/10 text-institutional-navy dark:bg-primary-fixed/10 dark:text-primary-fixed"
                        }`}>{fellowship.status}</span>
                      </div>
                      <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mb-3">{fellowship.eligibility}</p>
                      <div className="flex flex-wrap items-center gap-4 font-label-md text-xs text-slate-gray dark:text-slate-400">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {fellowship.duration}</span>
                      </div>
                    </div>
                    <div className="md:text-right shrink-0">
                      <p className="font-label-md text-xs text-slate-gray dark:text-slate-400 mb-1">Amount</p>
                      <p className="font-headline-sm text-base font-bold text-heritage-maroon dark:text-primary-fixed">{fellowship.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisors Directory — Table-card hybrid */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-outline/10" id="supervisors">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="Approved Research Supervisors" 
            subtitle="Directory of recognized Ph.D. supervisors across KTU-affiliated institutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {supervisors.map((sup, idx) => (
              <div key={idx} className="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 hover:border-heritage-maroon/30 hover:shadow-lg transition-all p-6 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-heritage-maroon to-institutional-navy text-white flex items-center justify-center font-headline-sm text-lg font-bold shrink-0">
                    {sup.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-base font-bold text-on-surface dark:text-white group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">{sup.name}</h4>
                    <p className="font-label-md text-xs text-heritage-maroon dark:text-primary-fixed font-semibold">{sup.department}</p>
                    <p className="font-label-md text-xs text-slate-gray dark:text-slate-400">{sup.college}</p>
                  </div>
                </div>
                <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mb-4">
                  <span className="font-semibold text-on-surface dark:text-white">Specialization:</span> {sup.specialization}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-outline/10">
                  <div className="flex items-center gap-1.5 font-label-md text-sm">
                    <Users className="w-4 h-4 text-institutional-navy dark:text-primary-fixed" />
                    <span className="text-on-surface dark:text-white font-bold">{sup.scholars}</span>
                    <span className="text-slate-gray dark:text-slate-400 text-xs">Scholars</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-label-md text-sm">
                    <FileText className="w-4 h-4 text-kerala-gold" />
                    <span className="text-on-surface dark:text-white font-bold">{sup.publications}</span>
                    <span className="text-slate-gray dark:text-slate-400 text-xs">Publications</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-institutional-navy text-white font-label-lg font-bold rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
              View All Supervisors <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CERD Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10" id="cerd">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left content — 3 cols */}
            <div className="lg:col-span-3">
              <SectionHeading 
                title="CERD – Centre for Engineering Research & Development" 
                subtitle="The research arm of KTU dedicated to promoting innovation, industry collaboration, and technology transfer."
              />

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="font-body-md text-base text-slate-gray dark:text-slate-400 leading-relaxed">
                  CERD is the premier research wing of APJ Abdul Kalam Technological University, established to facilitate 
                  cutting-edge research across engineering disciplines. It serves as a bridge between academia and industry, 
                  providing funding, infrastructure, and mentorship to researchers and innovators across Kerala.
                </p>
              </div>

              {/* CERD Initiatives */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Research Grants", desc: "Funding up to ₹5 lakhs for innovative research projects", icon: <IndianRupee className="w-5 h-5" /> },
                  { title: "Industry Collaboration", desc: "Partnerships with 50+ companies for joint R&D", icon: <Globe className="w-5 h-5" /> },
                  { title: "Patent Support", desc: "Free patent filing assistance for faculty & students", icon: <Lightbulb className="w-5 h-5" /> },
                  { title: "Startup Incubation", desc: "Support for tech startups from university ecosystem", icon: <TrendingUp className="w-5 h-5" /> },
                  { title: "Workshops & Training", desc: "Regular skill development and research methodology sessions", icon: <BookOpen className="w-5 h-5" /> },
                  { title: "Publication Support", desc: "Assistance with journal selection and manuscript preparation", icon: <FileText className="w-5 h-5" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-outline-variant/20 hover:border-kerala-gold/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-surface dark:text-white mb-0.5">{item.title}</h4>
                      <p className="font-body-md text-xs text-slate-gray dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar — 2 cols */}
            <div className="lg:col-span-2">
              {/* Contact Card */}
              <div className="bg-institutional-navy rounded-2xl p-6 md:p-8 mb-6 text-white">
                <h3 className="font-headline-sm text-xl font-bold mb-6">Contact CERD</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-kerala-gold mt-0.5" />
                    <div>
                      <p className="font-label-md text-sm font-semibold">Address</p>
                      <p className="font-body-md text-sm text-white/70">CERD, KTU Headquarters, CET Campus, Thiruvananthapuram, Kerala – 695016</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-kerala-gold" />
                    <div>
                      <p className="font-label-md text-sm font-semibold">Email</p>
                      <a href="mailto:cerd@ktu.edu.in" className="font-body-md text-sm text-kerala-gold hover:underline">cerd@ktu.edu.in</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-kerala-gold" />
                    <div>
                      <p className="font-label-md text-sm font-semibold">Phone</p>
                      <p className="font-body-md text-sm text-white/70">+91 471 2598 700</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CERD Downloads */}
              <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white mb-4">CERD Downloads</h3>
              <div className="space-y-4">
                <DocumentCard title="CERD Research Grant Application Form" date="01-Apr-2024" fileSize="350 KB" />
                <DocumentCard title="CERD Annual Report 2023-24" date="15-May-2024" fileSize="4.5 MB" />
                <DocumentCard title="Patent Filing Guidelines" date="10-Jan-2024" fileSize="800 KB" />
                <DocumentCard title="Industry Collaboration MoU Template" date="01-Jun-2024" fileSize="250 KB" fileType="DOCX" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
