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

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section-anchor section-space relative">
      <div className="container-shell grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("faq.eyebrow" as any)}
            title={t("faq.title")}
            description={t("faq.subtitle")}
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  {t(`faq.q${index + 1}` as any)}
                </AccordionTrigger>
                <AccordionContent>
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
