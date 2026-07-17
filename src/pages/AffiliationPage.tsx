import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, CheckCircle, XCircle } from "lucide-react";
import { institutionsService } from "@/services/api";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DocumentCard } from "@/components/shared/DocumentCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { faqService } from "@/services/api";

export default function AffiliationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: institutions = [], isLoading } = useQuery({
    queryKey: ['institutions', searchTerm],
    queryFn: () => institutionsService.getInstitutions(searchTerm)
  });

  const { data: faqs = [] } = useQuery({
    queryKey: ['affiliationFaqs'],
    queryFn: faqService.getAffiliationFaqs
  });

  return (
    <div>
      <HeroSection 
        title="Affiliation Portal"
        description="Directory of affiliated colleges, norms, rules, and NBA accreditation details."
        gradient="maroon"
      />

      <section className="py-16 bg-background dark:bg-slate-950">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading title="Affiliated Institutions" subtitle="Search and browse through colleges affiliated with KTU." />
          
          <div className="mb-8 relative max-w-2xl">
            <input 
              type="text" 
              placeholder="Search by college name, code, or district..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline dark:border-slate-600 focus:ring-2 focus:ring-kerala-gold focus:border-transparent dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            />
            <Search className="absolute left-4 top-3.5 text-slate-gray" />
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low dark:bg-slate-800 text-institutional-navy dark:text-white font-label-lg">
                    <th className="p-4 border-b border-outline/10">Code</th>
                    <th className="p-4 border-b border-outline/10">Institution Name</th>
                    <th className="p-4 border-b border-outline/10">District</th>
                    <th className="p-4 border-b border-outline/10">Type</th>
                    <th className="p-4 border-b border-outline/10 text-center">NBA</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-sm text-slate-gray dark:text-slate-300">
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center">Loading institutions...</td>
                    </tr>
                  ) : institutions.length > 0 ? (
                    institutions.map(inst => (
                      <tr key={inst.id} className="border-b border-outline/10 hover:bg-surface dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4 font-bold text-institutional-navy dark:text-slate-200">{inst.code}</td>
                        <td className="p-4">{inst.name}</td>
                        <td className="p-4">{inst.district}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-surface-variant dark:bg-slate-700 rounded text-xs">{inst.type}</span>
                        </td>
                        <td className="p-4 text-center">
                          {inst.isNBAAccredited ? (
                            <CheckCircle className="w-5 h-5 text-success-green mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-slate-gray/30 dark:text-slate-600 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-gray">No institutions found matching your search.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-institutional-navy py-16 relative z-20" id="norms">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Norms & Rules" inverse={true} />
            <div className="space-y-4">
               <DocumentCard title="Affiliation Manual 2024" description="Complete guide and rules for college affiliation." fileSize="4.5 MB" />
               <DocumentCard title="AICTE Approval Process Handbook" description="National guidelines for technical institutions." fileSize="12 MB" />
            </div>
          </div>
          <div>
            <SectionHeading title="Frequently Asked Questions" inverse={true} />
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
