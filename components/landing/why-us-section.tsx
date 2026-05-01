"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/landing/section-reveal";
import { valuePoints } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

const svgIconMap: Record<string, string> = {
  views: "/static/images/svg/hill-view.svg",
  nature: "/static/images/svg/flower.svg",
  photo: "/static/images/svg/pictures.svg",
};

export function WhyUsSection() {
  const { t } = useLanguage();

  // Filter only the first 3 points as per the design
  const points = valuePoints.filter(p => svgIconMap[p.id]).slice(0, 3);

  return (
    <section id="whyus" className="section-space relative overflow-hidden">
      <div className="container-shell">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <SectionReveal>
              <div className="space-y-1">
                <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-normal tracking-[-3px] text-[#2c3591] font-heading">
                  {t("whyus.title")}
                </h2>
                <p className="text-[11px] md:text-[13px] lg:text-[15px] font-normal text-black leading-relaxed max-w-xl">
                  {t("whyus.subtitle")}
                </p>
              </div>
            </SectionReveal>

            <div className="space-y-2">
              {points.map((item, index) => (
                <SectionReveal key={item.id} delay={index * 0.1}>
                  <div className="flex gap-6 items-start group">
                    <div
                      className="flex-shrink-0 w-16 h-16 bg-[#F15A2D] transition-transform duration-300 group-hover:scale-110"
                      style={{
                        maskImage: `url(${svgIconMap[item.id]})`,
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        maskSize: 'contain',
                        WebkitMaskImage: `url(${svgIconMap[item.id]})`,
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        WebkitMaskSize: 'contain'
                      }}
                    />
                    <div className="space-y-0.2">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#2c3591]">
                        {t(`whyus.point.${item.id}.title` as any) || item.title}
                      </h3>
                      <p className="text-[12px] md:text-[13px] lg:text-[15px] font-normal text-black leading-relaxed max-w-xl">
                        {t(`whyus.point.${item.id}.description` as any) || item.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Right Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <SectionReveal delay={0.2} className="relative aspect-[9/13] rounded-xl overflow-hidden shadow-2xl mt-0 w-full">
                <Image
                  src="/static/images/bird_nest_3.jpg"
                  alt="Jungle Swing Experience"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </SectionReveal>
              <SectionReveal delay={0.4} className="relative aspect-[9/13] rounded-xl overflow-hidden shadow-2xl mt-12 lg:mt-20 max-w-[200%]">
                <Image
                  src="/static/images/woven_nest_4.jpg"
                  alt="Jungle Swing Photo Spot"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </SectionReveal>
            </div>

            {/* Background Accent */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
