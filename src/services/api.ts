import axios from "axios";
import { mockAnnouncements, mockEvents } from "@/data/announcements";
import { mockInstitutions, mockAffiliationNotifications } from "@/data/institutions";
import { mockTimetables, mockExamNotifications } from "@/data/examinations";
import { universityFaqs, affiliationFaqs } from "@/data/faq";

// In a real app, this would be an Axios instance pointing to the backend
export const api = axios.create({
  baseURL: "/api",
});

// Mock service functions that simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const announcementsService = {
  getAnnouncements: async () => {
    await delay(500);
    return mockAnnouncements;
  },
  getEvents: async () => {
    await delay(500);
    return mockEvents;
  }
};

export const institutionsService = {
  getInstitutions: async (search?: string) => {
    await delay(600);
    if (!search) return mockInstitutions;
    const lower = search.toLowerCase();
    return mockInstitutions.filter(i => 
      i.name.toLowerCase().includes(lower) || 
      i.code.toLowerCase().includes(lower)
    );
  },
  getNotifications: async () => {
    await delay(400);
    return mockAffiliationNotifications;
  }
};

export const examinationService = {
  getTimetables: async () => {
    await delay(500);
    return mockTimetables;
  },
  getNotifications: async () => {
    await delay(400);
    return mockExamNotifications;
  }
};

export const faqService = {
  getUniversityFaqs: async () => {
    await delay(300);
    return universityFaqs;
  },
  getAffiliationFaqs: async () => {
    await delay(300);
    return affiliationFaqs;
  }
};
