export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "Page" | "Section" | "Portal" | "Feature";
}

export const SEARCH_INDEX: SearchItem[] = [
  // Core Pages
  { id: "home", title: "Home", description: "APJ Abdul Kalam Technological University Official Homepage", href: "/", category: "Page" },
  { id: "university", title: "University", description: "About KTU, VC's Message, Statutory Officers", href: "/university", category: "Page" },
  { id: "academics", title: "Academics", description: "Syllabus, Regulations, Academic Calendar, MOOC Courses", href: "/academics", category: "Portal" },
  { id: "examination", title: "Examinations", description: "Exam Timetables, Notifications, Result Links", href: "/examination", category: "Portal" },
  { id: "research", title: "Research", description: "Ph.D. Admissions, CERD, Approved Centers", href: "/research", category: "Portal" },
  { id: "people", title: "People", description: "Board of Governors, Syndicate, Academic Council", href: "/people", category: "Page" },
  { id: "affiliation", title: "Affiliation", description: "Affiliated Colleges, NBA Accreditation, Norms", href: "/affiliation", category: "Portal" },
  { id: "events", title: "Events", description: "University Conferences, Workshops, Festivals", href: "/events", category: "Page" },
  { id: "announcements", title: "Announcements", description: "Official notifications, Circulars, News", href: "/announcements", category: "Page" },
  { id: "results", title: "Results", description: "Check Examination Results", href: "/results", category: "Feature" },
  { id: "iqac", title: "IQAC", description: "Internal Quality Assurance Cell", href: "/iqac", category: "Portal" },
  { id: "hrdc", title: "HRDC", description: "Human Resource Development Center", href: "/hrdc", category: "Portal" },
  { id: "library", title: "Central Library", description: "E-Journals, Books, Digital Repository", href: "/library", category: "Page" },
  { id: "sports", title: "Sports & Arts", description: "Youth Festival, Sports Meets, Arts", href: "/sports", category: "Page" },
  { id: "schools", title: "Schools Portal", description: "KTU Schools, Centers of Excellence", href: "/schools", category: "Portal" },

  // Key Sub-Sections - University
  { id: "vcs-message", title: "Vice Chancellor's Message", description: "Message from the Honorable VC", href: "/university#vc", category: "Section" },
  { id: "statutory-officers", title: "Statutory Officers", description: "Registrar, Controller of Examinations, Finance Officer", href: "/university#officers", category: "Section" },
  { id: "rti", title: "Right To Information (RTI)", description: "RTI act, PIO and Appellate Authority details", href: "/university#rti", category: "Section" },
  
  // Key Sub-Sections - Academics
  { id: "syllabus", title: "Syllabus & Regulations", description: "B.Tech, M.Tech, MCA, MBA Syllabus", href: "/academics#syllabus", category: "Section" },
  { id: "academic-calendar", title: "Academic Calendar", description: "Important dates for the academic year", href: "/academics#calendar", category: "Section" },
  { id: "mooc", title: "MOOC Courses", description: "Approved Massive Open Online Courses", href: "/academics#mooc", category: "Section" },

  // Key Sub-Sections - Examination
  { id: "timetables", title: "Exam Timetables", description: "Schedule for upcoming university exams", href: "/examination#timetables", category: "Section" },
  { id: "exam-notifications", title: "Exam Notifications", description: "Urgent updates and circulars regarding exams", href: "/examination#notifications", category: "Section" },

  // Key Sub-Sections - Research
  { id: "phd-admissions", title: "Ph.D. Admissions", description: "Guidelines, timelines, and application process for doctoral programs", href: "/research#phd", category: "Section" },
  { id: "research-regulations", title: "Research Regulations", description: "Rules, milestones, and thesis submission guidelines", href: "/research#regulations", category: "Section" },
  { id: "research-centers", title: "Approved Research Centers", description: "Directory of recognized Ph.D. research centers", href: "/research#centers", category: "Section" },
  { id: "cerd", title: "CERD", description: "Centre for Engineering Research & Development", href: "/research#cerd", category: "Section" },
  { id: "fellowships", title: "Fellowships & Funding", description: "JRF, SRF, and CERD grants", href: "/research#fellowships", category: "Section" },
  { id: "supervisors", title: "Research Supervisors", description: "Approved Ph.D. guides and mentors", href: "/research#supervisors", category: "Section" },

  // Key Sub-Sections - Affiliation
  { id: "affiliated-colleges", title: "Directory of Affiliated Colleges", description: "Search engineering and management colleges under KTU", href: "/affiliation#colleges", category: "Section" },
  { id: "nba", title: "NBA Accreditation", description: "Colleges and programs with NBA accreditation", href: "/affiliation#nba", category: "Section" },
  { id: "affiliation-norms", title: "Affiliation Norms & Rules", description: "Guidelines for new institutions and program extension", href: "/affiliation#norms", category: "Section" }
];
