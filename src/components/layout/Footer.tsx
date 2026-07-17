import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

// Inline SVG social icons (lucide-react doesn't include brand icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-institutional-navy text-on-tertiary pt-16 pb-8 border-t-4 border-kerala-gold mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Address */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/new-logo.png" alt="KTU Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="font-body-md text-sm text-on-tertiary/80 mb-4 leading-relaxed">
              State Government University.<br/>
              MBA Campus, CET Campus, Thiruvananthapuram, Kerala - 695016, India
            </p>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-kerala-gold shrink-0" />
              <a href="tel:04712785699" className="font-label-md text-sm hover:text-kerala-gold transition-colors">0471-2785699</a>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Mail className="w-4 h-4 text-kerala-gold shrink-0" />
              <a href="mailto:university@ktu.edu.in" className="font-label-md text-sm hover:text-kerala-gold transition-colors">university@ktu.edu.in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline-sm text-lg font-semibold text-kerala-gold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-heritage-maroon">Quick Links</h3>
            <ul className="space-y-3 font-label-md">
              <li><Link to="/university" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> About University</Link></li>
              <li><Link to="/academics" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Academics &amp; Syllabus</Link></li>
              <li><Link to="/examination" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Examination</Link></li>
              <li><Link to="/research" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Research Portal</Link></li>
              <li><Link to="/affiliation" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Affiliated Colleges</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="font-headline-sm text-lg font-semibold text-kerala-gold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-heritage-maroon">Portals</h3>
            <ul className="space-y-3 font-label-md">
              <li><Link to="/schools" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Student Portal</Link></li>
              <li><a href="#" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Faculty Portal</a></li>
              <li><a href="#" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> College Login</a></li>
              <li><a href="#" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> Alumni Network</a></li>
              <li><Link to="/iqac" className="hover:text-kerala-gold transition-colors flex items-center gap-2"><span className="text-white/50 text-xs">›</span> IQAC</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-headline-sm text-lg font-semibold text-kerala-gold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-heritage-maroon">Connect With Us</h3>
            <p className="font-body-md text-sm text-on-tertiary/80 mb-4 leading-relaxed">
              Subscribe to university newsletters and updates.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 font-label-md w-full focus:outline-none focus:border-kerala-gold"
              />
              <button className="bg-heritage-maroon hover:bg-heritage-maroon/90 text-white px-4 py-2 rounded-md font-label-md font-semibold transition-colors w-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-kerala-gold hover:text-institutional-navy hover:border-kerala-gold transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-kerala-gold hover:text-institutional-navy hover:border-kerala-gold transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-kerala-gold hover:text-institutional-navy hover:border-kerala-gold transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 font-label-md text-sm text-on-tertiary/70">
          <p>© {new Date().getFullYear()} APJ Abdul Kalam Technological University. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
