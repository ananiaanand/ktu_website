import type { Announcement, Event } from "../types/announcement";

export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Ph.D. Admission 2024-25 Even Semester - Online Application Portal Opened",
    description: "The online application portal for Ph.D. admission 2024-25 even semester is now open. Last date to apply is 15th August 2024.",
    date: "2024-07-25",
    day: "25",
    month: "JUL",
    category: "Academics",
    link: "#"
  },
  {
    id: "2",
    title: "B.Tech S8 (R,S) Exam June 2024 - Revaluation and Answer Script Copy Registration",
    description: "Students can now register for revaluation and request copies of answer scripts for B.Tech S8 exams.",
    date: "2024-07-24",
    day: "24",
    month: "JUL",
    category: "Examination",
    link: "#"
  },
  {
    id: "3",
    title: "Revised Academic Calendar for Odd Semester 2024-25",
    description: "The revised academic calendar for all odd semesters of UG and PG programs is published.",
    date: "2024-07-20",
    day: "20",
    month: "JUL",
    category: "Urgent",
    link: "#"
  }
];

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "International Conference on AI & ML",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Conference",
    date: "Aug 15-17, 2024"
  },
  {
    id: "2",
    title: "TechFest 2024 - State Level Technical Fest",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Student Event",
    date: "Sep 05-07, 2024"
  }
];
