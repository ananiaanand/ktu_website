import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Capitalize and format text
  const formatText = (text: string) => {
    const formatted = text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, " ");
    if (formatted.toLowerCase() === 'iqac') return 'IQAC';
    if (formatted.toLowerCase() === 'hrdc') return 'HRDC';
    return formatted;
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-surface-variant/50 dark:bg-slate-800/50 border-y border-outline/10 py-2">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ol className="flex items-center space-x-2 font-label-md text-sm text-slate-gray dark:text-slate-400 overflow-x-auto">
          <li>
            <Link to="/" className="flex items-center hover:text-heritage-maroon dark:hover:text-primary-fixed transition-colors">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
                {last ? (
                  <span className="text-heritage-maroon dark:text-primary-fixed font-semibold" aria-current="page">
                    {formatText(value)}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-heritage-maroon dark:hover:text-primary-fixed transition-colors">
                    {formatText(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
