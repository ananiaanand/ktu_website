import { useState } from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { 
  Search, GraduationCap, CheckCircle, XCircle, 
  Download, Printer, TrendingUp, Award, BookOpen, 
  ChevronDown, ChevronUp, AlertCircle, BarChart3
} from "lucide-react";

interface SubjectResult {
  code: string;
  name: string;
  credits: number;
  internal: number;
  external: number;
  total: number;
  grade: string;
  gradePoint: number;
  status: "Pass" | "Fail";
}

interface SemesterResult {
  semester: string;
  sgpa: number;
  totalCredits: number;
  earnedCredits: number;
  subjects: SubjectResult[];
}

interface StudentResult {
  name: string;
  registerNo: string;
  program: string;
  branch: string;
  college: string;
  collegeCode: string;
  examSession: string;
  cgpa: number;
  semesters: SemesterResult[];
}

// Mock result data
const mockResults: Record<string, StudentResult> = {
  "KTU2021001": {
    name: "AMAL KRISHNA S",
    registerNo: "KTU2021001",
    program: "B.Tech",
    branch: "Computer Science & Engineering",
    college: "College of Engineering Trivandrum (CET)",
    collegeCode: "TCR",
    examSession: "April 2024 (Regular)",
    cgpa: 8.45,
    semesters: [
      {
        semester: "S6",
        sgpa: 8.72,
        totalCredits: 23,
        earnedCredits: 23,
        subjects: [
          { code: "CST302", name: "Compiler Design", credits: 4, internal: 40, external: 52, total: 92, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "CST304", name: "Computer Networks", credits: 4, internal: 38, external: 48, total: 86, grade: "A+", gradePoint: 9, status: "Pass" },
          { code: "CST306", name: "Algorithm Analysis & Design", credits: 4, internal: 35, external: 42, total: 77, grade: "A", gradePoint: 8, status: "Pass" },
          { code: "CST308", name: "Comprehensive Exam", credits: 2, internal: 0, external: 78, total: 78, grade: "A", gradePoint: 8, status: "Pass" },
          { code: "CSL332", name: "System Software Lab", credits: 2, internal: 42, external: 45, total: 87, grade: "A+", gradePoint: 9, status: "Pass" },
          { code: "CSL334", name: "Network Programming Lab", credits: 2, internal: 44, external: 48, total: 92, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "CST362", name: "Elective – Cloud Computing", credits: 3, internal: 36, external: 44, total: 80, grade: "A", gradePoint: 8, status: "Pass" },
          { code: "CSP392", name: "Mini Project", credits: 2, internal: 48, external: 46, total: 94, grade: "O", gradePoint: 10, status: "Pass" },
        ]
      },
      {
        semester: "S5",
        sgpa: 8.35,
        totalCredits: 24,
        earnedCredits: 24,
        subjects: [
          { code: "CST301", name: "Formal Languages & Automata Theory", credits: 4, internal: 37, external: 45, total: 82, grade: "A", gradePoint: 8, status: "Pass" },
          { code: "CST303", name: "Database Management Systems", credits: 4, internal: 42, external: 50, total: 92, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "CST305", name: "System Software", credits: 4, internal: 33, external: 40, total: 73, grade: "B+", gradePoint: 7, status: "Pass" },
          { code: "CST307", name: "Microprocessors & Microcontrollers", credits: 4, internal: 38, external: 46, total: 84, grade: "A+", gradePoint: 9, status: "Pass" },
          { code: "CSL331", name: "DBMS Lab", credits: 2, internal: 44, external: 47, total: 91, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "CSL333", name: "Application Development Lab", credits: 2, internal: 40, external: 42, total: 82, grade: "A", gradePoint: 8, status: "Pass" },
          { code: "CST361", name: "Elective – Machine Learning", credits: 3, internal: 35, external: 40, total: 75, grade: "B+", gradePoint: 7, status: "Pass" },
          { code: "MBT391", name: "Constitution of India", credits: 1, internal: 0, external: 68, total: 68, grade: "B", gradePoint: 6, status: "Pass" },
        ]
      }
    ]
  },
  "KTU2021042": {
    name: "SNEHA SURESH",
    registerNo: "KTU2021042",
    program: "B.Tech",
    branch: "Electronics & Communication Engineering",
    college: "Government Engineering College Thrissur (GECT)",
    collegeCode: "TSR",
    examSession: "April 2024 (Regular)",
    cgpa: 9.12,
    semesters: [
      {
        semester: "S6",
        sgpa: 9.35,
        totalCredits: 23,
        earnedCredits: 23,
        subjects: [
          { code: "ECT302", name: "Digital Communication", credits: 4, internal: 45, external: 55, total: 100, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "ECT304", name: "VLSI Design", credits: 4, internal: 42, external: 50, total: 92, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "ECT306", name: "Digital Signal Processing", credits: 4, internal: 40, external: 48, total: 88, grade: "A+", gradePoint: 9, status: "Pass" },
          { code: "ECT308", name: "Comprehensive Exam", credits: 2, internal: 0, external: 85, total: 85, grade: "A+", gradePoint: 9, status: "Pass" },
          { code: "ECL332", name: "Communication Systems Lab", credits: 2, internal: 46, external: 48, total: 94, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "ECL334", name: "DSP Lab", credits: 2, internal: 44, external: 46, total: 90, grade: "O", gradePoint: 10, status: "Pass" },
          { code: "ECT362", name: "Elective – Embedded Systems", credits: 3, internal: 38, external: 42, total: 80, grade: "A", gradePoint: 8, status: "Pass" },
          { code: "ECP392", name: "Mini Project", credits: 2, internal: 47, external: 48, total: 95, grade: "O", gradePoint: 10, status: "Pass" },
        ]
      }
    ]
  }
};

const gradeScale = [
  { grade: "O (Outstanding)", range: "90–100", point: 10 },
  { grade: "A+ (Excellent)", range: "85–89", point: 9 },
  { grade: "A (Very Good)", range: "75–84", point: 8 },
  { grade: "B+ (Good)", range: "65–74", point: 7 },
  { grade: "B (Above Average)", range: "55–64", point: 6 },
  { grade: "C (Average)", range: "50–54", point: 5 },
  { grade: "P (Pass)", range: "45–49", point: 4 },
  { grade: "F (Fail)", range: "Below 45", point: 0 },
];

export default function ResultsPage() {
  const [registerNo, setRegisterNo] = useState("");
  const [searchedResult, setSearchedResult] = useState<StudentResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerNo.trim()) return;

    setIsLoading(true);
    setHasSearched(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = mockResults[registerNo.trim().toUpperCase()];
    setSearchedResult(result || null);
    setHasSearched(true);
    setIsLoading(false);

    // Auto-expand first semester
    if (result && result.semesters.length > 0) {
      setExpandedSemester(result.semesters[0].semester);
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade === "O") return "text-success-green bg-success-green/10";
    if (grade === "A+" || grade === "A") return "text-institutional-navy dark:text-primary-fixed bg-institutional-navy/10 dark:bg-primary-fixed/10";
    if (grade === "B+" || grade === "B") return "text-kerala-gold bg-kerala-gold/10";
    if (grade === "C" || grade === "P") return "text-slate-gray bg-slate-gray/10";
    return "text-error bg-error/10";
  };

  const getCGPAColor = (cgpa: number) => {
    if (cgpa >= 9) return "text-success-green";
    if (cgpa >= 8) return "text-institutional-navy dark:text-primary-fixed";
    if (cgpa >= 7) return "text-kerala-gold";
    return "text-error";
  };

  return (
    <div>
      <HeroSection 
        title="Result Portal"
        subtitle="KTU Examination Results"
        description="Check your university examination results by entering your register number below. Our transparent and swift evaluation process ensures that you receive your academic standing promptly, helping you plan your next steps with confidence."
        gradient="maroon"
      />

      {/* Search Section */}
      <section className="bg-institutional-navy py-16 relative z-20 -mt-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  value={registerNo}
                  onChange={(e) => setRegisterNo(e.target.value)}
                  placeholder="Enter Register Number (e.g. KTU2021001)"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-body-md text-base focus:outline-none focus:ring-2 focus:ring-kerala-gold focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !registerNo.trim()}
                className="px-8 py-4 bg-kerala-gold text-institutional-navy font-label-lg font-bold rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-institutional-navy"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" /> Check Result
                  </>
                )}
              </button>
            </form>
            <p className="font-label-md text-sm text-white/50 mt-3 text-center">
              Try: <button type="button" onClick={() => setRegisterNo("KTU2021001")} className="text-kerala-gold hover:underline">KTU2021001</button> or <button type="button" onClick={() => setRegisterNo("KTU2021042")} className="text-kerala-gold hover:underline">KTU2021042</button>
            </p>
          </div>
        </div>
      </section>

      {/* Results Display */}
      {isLoading && (
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heritage-maroon dark:border-primary-fixed"></div>
            <p className="font-body-md text-slate-gray dark:text-slate-400">Fetching results...</p>
          </div>
        </section>
      )}

      {hasSearched && !searchedResult && !isLoading && (
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto text-center px-6">
            <div className="w-16 h-16 rounded-full bg-error/10 text-error flex items-center justify-center">
              <XCircle className="w-8 h-8" />
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">No Results Found</h3>
            <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">
              No results found for register number <span className="font-bold text-on-surface dark:text-white">{registerNo.toUpperCase()}</span>. Please check the register number and try again.
            </p>
          </div>
        </section>
      )}

      {searchedResult && !isLoading && (
        <>
          {/* Student Info Card */}
          <section className="py-10 md:py-16 bg-white dark:bg-slate-950">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              
              {/* Student Profile Card */}
              <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/20 p-6 md:p-8 mb-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-heritage-maroon text-white flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-2xl font-bold text-on-surface dark:text-white mb-1">{searchedResult.name}</h2>
                      <p className="font-label-md text-sm text-heritage-maroon dark:text-primary-fixed font-semibold mb-2">{searchedResult.registerNo}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 font-body-md text-sm text-slate-gray dark:text-slate-400">
                        <p><span className="font-semibold text-on-surface dark:text-white">Program:</span> {searchedResult.program}</p>
                        <p><span className="font-semibold text-on-surface dark:text-white">Branch:</span> {searchedResult.branch}</p>
                        <p><span className="font-semibold text-on-surface dark:text-white">College:</span> {searchedResult.college}</p>
                        <p><span className="font-semibold text-on-surface dark:text-white">Exam:</span> {searchedResult.examSession}</p>
                      </div>
                    </div>
                  </div>

                  {/* CGPA Display */}
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 min-w-[160px]">
                    <p className="font-label-md text-xs text-slate-gray dark:text-slate-400 uppercase tracking-wider mb-1">Cumulative CGPA</p>
                    <p className={`font-headline-sm text-5xl font-bold ${getCGPAColor(searchedResult.cgpa)}`}>
                      {searchedResult.cgpa.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className="w-4 h-4 text-success-green" />
                      <span className="font-label-md text-xs text-success-green font-semibold">Out of 10.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Semester Results */}
              <SectionHeading title="Semester-wise Results" />

              <div className="space-y-4">
                {searchedResult.semesters.map((sem) => (
                  <div key={sem.semester} className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Semester Header — Clickable */}
                    <button
                      onClick={() => setExpandedSemester(expandedSemester === sem.semester ? null : sem.semester)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-lowest dark:hover:bg-slate-700/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-institutional-navy text-white flex items-center justify-center font-headline-sm text-lg font-bold">
                          {sem.semester}
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white">
                            Semester {sem.semester.replace("S", "")} Results
                          </h3>
                          <div className="flex items-center gap-4 font-label-md text-sm text-slate-gray dark:text-slate-400">
                            <span>SGPA: <span className={`font-bold ${getCGPAColor(sem.sgpa)}`}>{sem.sgpa.toFixed(2)}</span></span>
                            <span>Credits: {sem.earnedCredits}/{sem.totalCredits}</span>
                            <span className="flex items-center gap-1">
                              {sem.earnedCredits === sem.totalCredits ? (
                                <><CheckCircle className="w-3.5 h-3.5 text-success-green" /> All Clear</>
                              ) : (
                                <><AlertCircle className="w-3.5 h-3.5 text-error" /> Backlogs</>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      {expandedSemester === sem.semester ? (
                        <ChevronUp className="w-6 h-6 text-slate-gray" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-slate-gray" />
                      )}
                    </button>

                    {/* Expanded Subject Table */}
                    {expandedSemester === sem.semester && (
                      <div className="border-t border-outline-variant/20">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-surface-container-low dark:bg-slate-700/50">
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider">Code</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider">Subject</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider text-center">Credits</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider text-center">Internal</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider text-center">External</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider text-center">Total</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider text-center">Grade</th>
                                <th className="font-label-md text-xs font-bold text-slate-gray dark:text-slate-400 px-6 py-3 uppercase tracking-wider text-center">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sem.subjects.map((sub, idx) => (
                                <tr key={idx} className="border-t border-outline-variant/10 hover:bg-surface-container-lowest dark:hover:bg-slate-700/20 transition-colors">
                                  <td className="font-label-md text-sm text-institutional-navy dark:text-primary-fixed font-semibold px-6 py-3.5">{sub.code}</td>
                                  <td className="font-body-md text-sm text-on-surface dark:text-white px-6 py-3.5">{sub.name}</td>
                                  <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-3.5 text-center">{sub.credits}</td>
                                  <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-3.5 text-center">{sub.internal}</td>
                                  <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-3.5 text-center">{sub.external}</td>
                                  <td className="font-headline-sm text-sm font-bold text-on-surface dark:text-white px-6 py-3.5 text-center">{sub.total}</td>
                                  <td className="px-6 py-3.5 text-center">
                                    <span className={`font-label-md text-xs px-3 py-1 rounded-full font-bold ${getGradeColor(sub.grade)}`}>
                                      {sub.grade}
                                    </span>
                                  </td>
                                  <td className="px-6 py-3.5 text-center">
                                    {sub.status === "Pass" ? (
                                      <CheckCircle className="w-5 h-5 text-success-green mx-auto" />
                                    ) : (
                                      <XCircle className="w-5 h-5 text-error mx-auto" />
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Semester Summary Footer */}
                        <div className="px-6 py-4 bg-surface-container-low dark:bg-slate-700/30 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/10">
                          <div className="flex items-center gap-6 font-label-md text-sm">
                            <span className="text-slate-gray dark:text-slate-400">
                              Total Credits: <span className="font-bold text-on-surface dark:text-white">{sem.totalCredits}</span>
                            </span>
                            <span className="text-slate-gray dark:text-slate-400">
                              Earned: <span className="font-bold text-success-green">{sem.earnedCredits}</span>
                            </span>
                            <span className="text-slate-gray dark:text-slate-400">
                              SGPA: <span className={`font-bold ${getCGPAColor(sem.sgpa)}`}>{sem.sgpa.toFixed(2)}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="flex items-center gap-1.5 px-4 py-2 bg-heritage-maroon text-white font-label-md text-xs rounded-lg hover:bg-opacity-90 transition-colors">
                              <Download className="w-3.5 h-3.5" /> Download PDF
                            </button>
                            <button className="flex items-center gap-1.5 px-4 py-2 bg-institutional-navy text-white font-label-md text-xs rounded-lg hover:bg-opacity-90 transition-colors">
                              <Printer className="w-3.5 h-3.5" /> Print
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Grade Scale Reference — Always visible */}
      <section className="py-16 md:py-20 bg-surface-container-lowest dark:bg-slate-900 border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading 
            title="KTU Grading System" 
            subtitle="Grade points and corresponding marks range as per KTU academic regulations."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Grade Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-institutional-navy text-white">
                      <th className="font-headline-sm text-sm font-bold px-6 py-4">Grade</th>
                      <th className="font-headline-sm text-sm font-bold px-6 py-4">Marks Range</th>
                      <th className="font-headline-sm text-sm font-bold px-6 py-4 text-center">Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeScale.map((g, idx) => (
                      <tr key={idx} className="border-t border-outline-variant/20 hover:bg-surface-container-lowest dark:hover:bg-slate-700/50 transition-colors">
                        <td className="font-headline-sm text-sm font-semibold text-on-surface dark:text-white px-6 py-3">{g.grade}</td>
                        <td className="font-body-md text-sm text-slate-gray dark:text-slate-400 px-6 py-3">{g.range}</td>
                        <td className="px-6 py-3 text-center">
                          <span className={`font-headline-sm text-sm font-bold ${g.point >= 8 ? "text-success-green" : g.point >= 6 ? "text-kerala-gold" : g.point > 0 ? "text-slate-gray" : "text-error"}`}>
                            {g.point}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SGPA/CGPA Formulas */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-heritage-maroon/10 text-heritage-maroon dark:text-primary-fixed flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white">SGPA Calculation</h3>
                </div>
                <div className="bg-surface-container-lowest dark:bg-slate-700/50 rounded-xl p-4 mb-4 font-mono text-center">
                  <p className="text-on-surface dark:text-white font-bold text-lg">
                    SGPA = Σ(Ci × GPi) / ΣCi
                  </p>
                </div>
                <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">
                  Where <strong>Ci</strong> = Credits of the i-th course and <strong>GPi</strong> = Grade Point obtained in the i-th course for a given semester.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-outline-variant/20 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-kerala-gold/10 text-kerala-gold flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface dark:text-white">CGPA Calculation</h3>
                </div>
                <div className="bg-surface-container-lowest dark:bg-slate-700/50 rounded-xl p-4 mb-4 font-mono text-center">
                  <p className="text-on-surface dark:text-white font-bold text-lg">
                    CGPA = Σ(Ci × GPi) / ΣCi
                  </p>
                </div>
                <p className="font-body-md text-sm text-slate-gray dark:text-slate-400">
                  Calculated across <strong>all semesters</strong> completed. Only the best grade obtained in a course (after improvement/supplementary) is considered.
                </p>
              </div>

              <div className="bg-heritage-maroon/5 dark:bg-heritage-maroon/10 border border-heritage-maroon/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-heritage-maroon dark:text-primary-fixed" />
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface dark:text-white">Pass Criteria</h4>
                </div>
                <ul className="space-y-1 font-body-md text-sm text-slate-gray dark:text-slate-400">
                  <li>• Minimum <strong>45%</strong> in each course (internal + external combined)</li>
                  <li>• Minimum <strong>Grade P</strong> (Grade Point 4) required in each course</li>
                  <li>• No minimum marks for internal assessment alone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
