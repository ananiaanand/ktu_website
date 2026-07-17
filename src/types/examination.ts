export interface ExamTimetable {
  id: string;
  name: string;
  publishedDate: string;
  session: string;
  downloadUrl: string;
}

export interface ExamNotification {
  id: string;
  title: string;
  description: string;
  postedTime: string;
  priority: "Urgent" | "Updates" | "Info";
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
