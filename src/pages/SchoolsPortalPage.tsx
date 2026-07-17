import { ShieldAlert, LogIn, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";

export default function SchoolsPortalPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Please enter a valid username/ID.");
      return;
    }
    if (password === "") {
      setError("Please enter your password.");
      return;
    }
    // Simulate API call and success
    setError("");
    login(username);
    navigate("/"); // Redirect to main page
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-outline-variant/30 p-8 text-center">
        <img 
          src="/new-logo.png" 
          alt="KTU Logo" 
          className="h-20 w-auto object-contain mx-auto mb-6" 
        />
        
        <h2 className="font-headline-lg text-2xl font-bold text-institutional-navy dark:text-white mb-2">
          University Schools Portal
        </h2>
        <p className="font-body-md text-slate-gray dark:text-slate-400 mb-8">
          Sign in to access your student dashboard, courses, and examination details.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-heritage-maroon/10 text-heritage-maroon border border-heritage-maroon/20 rounded-lg text-sm text-left flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" />
            {error}
          </div>
        )}

        <form className="space-y-4 text-left mb-6" onSubmit={handleLogin}>
          <div>
            <label className="block font-label-md text-sm mb-1 text-slate-700 dark:text-slate-300">Register Number / User ID</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-kerala-gold focus:border-transparent dark:bg-slate-800" 
              placeholder="Enter your ID"
            />
          </div>
          <div>
            <label className="block font-label-md text-sm mb-1 text-slate-700 dark:text-slate-300">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-kerala-gold focus:border-transparent dark:bg-slate-800" 
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
             <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
               <input type="checkbox" className="rounded text-heritage-maroon focus:ring-heritage-maroon" />
               Remember me
             </label>
             <a href="#" className="text-heritage-maroon dark:text-primary-fixed hover:underline font-label-md">Forgot password?</a>
          </div>
          
          <button type="submit" className="w-full bg-institutional-navy hover:bg-opacity-90 text-white font-label-lg font-bold py-3 rounded-lg transition-all mt-4 flex items-center justify-center gap-2">
            <LogIn className="w-5 h-5" /> Sign In
          </button>
        </form>

        <div className="bg-surface-container-low dark:bg-slate-800 p-4 rounded-lg flex items-start gap-3 text-left border border-outline/10">
          <ShieldAlert className="w-5 h-5 text-kerala-gold flex-shrink-0 mt-0.5" />
          <p className="font-label-md text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            This is a secure portal for authorized students and faculty only. Unauthorized access is prohibited.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-outline/10">
          <Link to="/" className="text-slate-gray hover:text-institutional-navy dark:hover:text-white font-label-md text-sm flex items-center justify-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return to Main Website
          </Link>
        </div>
      </div>
    </div>
  );
}
