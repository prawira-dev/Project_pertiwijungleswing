"use client";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

import { useState } from "react";

export function FaqSection() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="faq" className="section-anchor section-space relative">
      <div className="container-shell grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
        <SectionReveal>
          <div className="space-y-2">
            <SectionHeading
              title={t("faq.title")}
              description={t("faq.subtitle")}
            />
            <div className="pt-4">
              <button
                onClick={() => {
                  if (openItems.length === faqItems.length) {
                    setOpenItems([]);
                  } else {
                    setOpenItems(faqItems.map(item => item.id));
                  }
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 gap-2 shadow-sm"
              >
                {openItems.length === faqItems.length ? "Collapse All" : "Expand All"}
              </button>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-0"
          >
            {faqItems.map((item, index) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="font-sans text-sm lg:text-base text-left">
                  {t(`faq.q${index + 1}` as any)}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm lg:text-base">
                  {t(`faq.a${index + 1}` as any)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  );
}
