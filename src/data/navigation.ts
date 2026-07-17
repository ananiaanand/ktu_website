import type { NavSection } from "../types/navigation";

export const navigationData: NavSection[] = [
  {
    title: "University",
    items: [
      { label: "About KTU", href: "/university" },
      { label: "Vice Chancellor", href: "/people" },
      { label: "Vision & Mission", href: "/university#vision" },
      { label: "Acts & Statutes", href: "/university#acts" },
    ]
  },
  {
    title: "People",
    items: [
      { label: "Authorities", href: "/people" },
      { label: "Board of Governors", href: "/people#bog" },
      { label: "Syndicate", href: "/people#syndicate" },
    ]
  },
  {
    title: "Affiliation",
    items: [
      { label: "Affiliated Institutions", href: "/affiliation" },
      { label: "Norms & Rules", href: "/affiliation#norms" },
      { label: "NBA Accreditation", href: "/affiliation#nba" },
    ]
  },
  {
    title: "Academics",
    items: [
      { label: "Regulations & Syllabus", href: "/academics" },
      { label: "Academic Calendar", href: "/academics#calendar" },
      { label: "MOOC Courses", href: "/academics#mooc" },
      { label: "CGPC", href: "/academics#cgpc" },
    ]
  },
  {
    title: "Examination",
    items: [
      { label: "Timetables", href: "/examination" },
      { label: "Notifications", href: "/examination#notifications" },
      { label: "Result Portal", href: "#" },
    ]
  },
  {
    title: "Research",
    items: [
      { label: "PhD Fellowships", href: "/research" },
      { label: "Regulations", href: "/research#regulations" },
      { label: "Approved Centers", href: "/research#centers" },
    ]
  },
  {
    title: "Quality & Training",
    items: [
      { label: "IQAC", href: "/iqac" },
      { label: "Academic Audit", href: "/iqac#audit" },
      { label: "HRDC Centers", href: "/hrdc" },
      { label: "Training Programs", href: "/hrdc#programs" },
    ]
  }
];

export const topLevelNav = [
  { label: "Home", href: "/" },
  { label: "University", href: "/university" },
  { label: "People", href: "/people" },
  { label: "Affiliation", href: "/affiliation" },
  { label: "Academics", href: "/academics" },
  { label: "Examination", href: "/examination" },
  { label: "Research", href: "/research" },
];
