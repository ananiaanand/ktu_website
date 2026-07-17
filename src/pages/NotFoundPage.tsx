export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-heritage-maroon/20 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-institutional-navy dark:text-white mb-2">Page Not Found</h2>
      <p className="text-slate-gray dark:text-slate-400 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
    </div>
  );
}
