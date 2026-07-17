export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  day: string;
  month: string;
  category: "Examination" | "Academics" | "Research" | "General" | "Urgent" | "Updates";
  link?: string;
}

export interface Event {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date?: string;
}
