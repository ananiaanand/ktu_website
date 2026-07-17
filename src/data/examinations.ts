import type { ExamTimetable, ExamNotification } from "../types/examination";

export const mockTimetables: ExamTimetable[] = [
  {
    id: "1",
    name: "B.Tech S8 (R,S) Exam June 2024",
    publishedDate: "20-Jun-2024",
    session: "FN",
    downloadUrl: "#"
  },
  {
    id: "2",
    name: "MBA T3 (R,S) Exam July 2024",
    publishedDate: "18-Jun-2024",
    session: "AN",
    downloadUrl: "#"
  },
  {
    id: "3",
    name: "B.Arch S2 (R) Exam August 2024",
    publishedDate: "15-Jun-2024",
    session: "FN",
    downloadUrl: "#"
  },
  {
    id: "4",
    name: "M.Tech S4 (R,S) Project Viva Voce 2024",
    publishedDate: "10-Jun-2024",
    session: "AN",
    downloadUrl: "#"
  }
];

export const mockExamNotifications: ExamNotification[] = [
  {
    id: "1",
    title: "B.Tech S8 (R,S) Exam June 2024 - Revaluation Registration",
    description: "Portal for revaluation registration is open until 30th July.",
    postedTime: "2 hours ago",
    priority: "Urgent"
  },
  {
    id: "2",
    title: "Postponement of B.Arch S4 Exams scheduled for 25th July",
    description: "Exams scheduled for 25th July are postponed to 5th August.",
    postedTime: "1 day ago",
    priority: "Urgent"
  },
  {
    id: "3",
    title: "Instructions for M.Tech project evaluation",
    description: "Detailed guidelines for conducting external project evaluation.",
    postedTime: "3 days ago",
    priority: "Info"
  }
];
