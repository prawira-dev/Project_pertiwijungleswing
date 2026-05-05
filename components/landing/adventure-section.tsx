"use client";

import { MoveRight, Car, Zap, Bike, Waves, Target, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const activities = [
  { id: "vw", icon: Car },
  { id: "utv", icon: Zap },
  { id: "atv", icon: Bike },
  { id: "rafting", icon: Waves },
  { id: "paintball", icon: Target }
];

export function AdventureSection() {
  const { t } = useLanguage();

  return (
    <section id="adventure" className="py-8 text-center">
      <div className="container-shell relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-black font-heading leading-[1.1]">
                  {t("adventure.title").split(" in ")[0]} <br />
                  <span className="text-orange-500 italic">
                    {t("adventure.title").includes(" in ")
                      ? "in " + t("adventure.title").split(" in ")[1]
                      : t("adventure.title").split(" di ")[0] && t("adventure.title").includes(" di ")
                        ? "di " + t("adventure.title").split(" di ")[1]
                        : t("adventure.title")
                    }
                  </span>
                </h2>

                <p className="text-sm lg:text-base text-black/70 leading-relaxed max-w-2xl mx-auto">
                  {t("adventure.subtitle")}
                </p>
              </div>

              {/* Activities List */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-3xl mx-auto">
                {activities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-center gap-4 group cursor-default">
                      <div className="size-10 rounded-xl bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110">
                        <Icon className="size-5 text-black" />
                      </div>
                      <span className="text-sm lg:text-base text-black font-medium group-hover:text-orange-500 transition-colors">
                        {t(`adventure.item.${activity.id}` as any)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-2 py-4">
                <Button
                  asChild
                  className="rounded-full px-10 h-16 bg-orange-500 hover:bg-orange-600 text-white text-lg shadow-2xl shadow-orange-500/20 transition-all duration-300 group"
                >
                  <a href="https://pertiwiadventure.com/" target="_blank" rel="noreferrer">
                    {t("adventure.button")}
                    <MoveRight className="ml-3 size-6 transition-transform group-hover:translate-x-2" />
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
