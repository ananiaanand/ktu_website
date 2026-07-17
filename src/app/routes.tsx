import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MainLayout } from "@/components/layout/MainLayout";

// Lazy loading pages for better performance
const HomePage = lazy(() => import("@/pages/HomePage"));
const UniversityPage = lazy(() => import("@/pages/UniversityPage"));
const PeoplePage = lazy(() => import("@/pages/PeoplePage"));
const AffiliationPage = lazy(() => import("@/pages/AffiliationPage"));
const AcademicsPage = lazy(() => import("@/pages/AcademicsPage"));
const ExaminationPage = lazy(() => import("@/pages/ExaminationPage"));
const ResearchPage = lazy(() => import("@/pages/ResearchPage"));
const IQACPage = lazy(() => import("@/pages/IQACPage"));
const HRDCPage = lazy(() => import("@/pages/HRDCPage"));
const SchoolsPortalPage = lazy(() => import("@/pages/SchoolsPortalPage"));
const ResultsPage = lazy(() => import("@/pages/ResultsPage"));
const AnnouncementsPage = lazy(() => import("@/pages/AnnouncementsPage"));
const EventsPage = lazy(() => import("@/pages/EventsPage"));
const LibraryPage = lazy(() => import("@/pages/LibraryPage"));
const SportsArtsPage = lazy(() => import("@/pages/SportsArtsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

// Global loading fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heritage-maroon dark:border-primary-fixed"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><HomePage /></Suspense>,
      },
      {
        path: "university",
        element: <Suspense fallback={<PageLoader />}><UniversityPage /></Suspense>,
      },
      {
        path: "people",
        element: <Suspense fallback={<PageLoader />}><PeoplePage /></Suspense>,
      },
      {
        path: "affiliation",
        element: <Suspense fallback={<PageLoader />}><AffiliationPage /></Suspense>,
      },
      {
        path: "academics",
        element: <Suspense fallback={<PageLoader />}><AcademicsPage /></Suspense>,
      },
      {
        path: "examination",
        element: <Suspense fallback={<PageLoader />}><ExaminationPage /></Suspense>,
      },
      {
        path: "results",
        element: <Suspense fallback={<PageLoader />}><ResultsPage /></Suspense>,
      },
      {
        path: "announcements",
        element: <Suspense fallback={<PageLoader />}><AnnouncementsPage /></Suspense>,
      },
      {
        path: "events",
        element: <Suspense fallback={<PageLoader />}><EventsPage /></Suspense>,
      },
      {
        path: "research",
        element: <Suspense fallback={<PageLoader />}><ResearchPage /></Suspense>,
      },
      {
        path: "iqac",
        element: <Suspense fallback={<PageLoader />}><IQACPage /></Suspense>,
      },
      {
        path: "hrdc",
        element: <Suspense fallback={<PageLoader />}><HRDCPage /></Suspense>,
      },
      {
        path: "library",
        element: <Suspense fallback={<PageLoader />}><LibraryPage /></Suspense>,
      },
      {
        path: "sports",
        element: <Suspense fallback={<PageLoader />}><SportsArtsPage /></Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>,
      }
    ],
  },
  {
    path: "/schools",
    element: <Suspense fallback={<PageLoader />}><SchoolsPortalPage /></Suspense>,
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
