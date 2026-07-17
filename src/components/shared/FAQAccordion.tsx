import type { FAQ } from "@/types/examination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={faq.id} 
          value={faq.id}
          className="border border-outline-variant/50 bg-white dark:bg-slate-900 rounded-lg mb-4 overflow-hidden px-2 data-[state=open]:border-kerala-gold/50 data-[state=open]:shadow-md transition-all"
        >
          <AccordionTrigger className="hover:no-underline font-headline-sm text-base md:text-lg text-left text-institutional-navy dark:text-white px-4 py-5 group">
            <span className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-surface-container-low dark:bg-slate-800 text-kerala-gold flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-kerala-gold group-hover:text-white transition-colors">
                {index + 1}
              </span>
              {faq.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="font-body-md text-slate-gray dark:text-slate-400 px-4 pb-5 pl-15 leading-relaxed">
            <div className="pl-11">
              {faq.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
