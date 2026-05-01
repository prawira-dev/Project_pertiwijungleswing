"use client";

import { Mail, Phone, Clock, MapPin, Facebook, Instagram, ExternalLink, MoveRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

// Custom SVG Icons for TikTok and TripAdvisor
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.31-2.34-.25-3.41.33-.71.38-1.27 1.03-1.6 1.81-.45.96-.52 2.05-.29 3.07.21 1.18.91 2.23 1.88 2.97.96.73 2.15 1.06 3.35 1.03 1.07-.03 2.1-.44 2.91-1.14.9-.74 1.43-1.84 1.54-3 .11-1.56.04-3.12.04-4.68V0.02z" />
  </svg>
);

const TripAdvisorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.333 18c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm6.666 0c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm1.667-6h-10v-2h10v2zm0-4h-10v-2h10v2z" />
  </svg>
);

const socialGroups = [
  {
    title: "Pertiwi Jungle Swing",
    links: [
      { id: "fb-pjs", icon: Facebook, href: "https://facebook.com/pertiwijungleswing" },
      { id: "ig-pjs", icon: Instagram, href: "https://instagram.com/pertiwijungleswing" },
    ]
  },
  {
    title: "Pertiwi Adventure",
    links: [
      { id: "fb-pa", icon: Facebook, href: "https://facebook.com/pertiwiadventure" },
      { id: "ig-pa", icon: Instagram, href: "https://instagram.com/pertiwiadventure" },
      { id: "tt-pa", icon: TikTokIcon, href: "https://www.tiktok.com/@pertiwiadventure" },
      { id: "ta-pa", icon: TripAdvisorIcon, href: "https://www.tripadvisor.com/Attraction_Review-g6940266-d6894416-Reviews-Pertiwi_Quad_Adventure-Abiansemal_Bali.html" },
    ]
  }
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary border-t border-white/10 pt-20 pb-10 text-white/70">
      <div className="container-shell">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Column 1: Info & Socials */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-normal text-white font-heading tracking-tight">
                Pertiwi Jungle Swing
              </h3>
              <p className="text-sm leading-relaxed max-w-md">
                {t("footer.description")}
              </p>
            </div>

            <div className="space-y-2">
              {socialGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">{group.title}</p>
                  <div className="flex gap-3">
                    {group.links.map((social) => (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                      >
                        <social.icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm pt-4 border-t border-white/5">
              <div className="flex gap-3">
                <MapPin className="size-5 text-orange-500 shrink-0" />
                <p>Pertiwi Adventure: {t("footer.address")}</p>
              </div>
              <div className="flex gap-3">
                <Mail className="size-5 text-orange-500 shrink-0" />
                <a href="mailto:pertiwiadventure@gmail.com" className="hover:text-white transition-colors">
                  pertiwiadventure@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="size-5 text-orange-500 shrink-0" />
                <div className="space-y-1">
                  <p>Admin One: +62 813 3859 7825</p>
                  <p>Admin Two: +62 813 3979 9975</p>
                </div>
              </div>
              <div className="flex gap-3 italic text-white/50">
                <Clock className="size-5 text-orange-500 shrink-0" />
                <p>{t("footer.opening")}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Highlights */}
          <div className="space-y-8">
            <h3 className="text-xl font-normal text-white font-heading tracking-tight">
              {t("footer.highlights.title")}
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "Scenic Jungle Views",
                "Beautiful Photo Spots",
                "Featured Experiences",
                "Authentic Nature",
                "Beautiful Natural Surroundings"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-default">
                  <span className="size-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-8">
            <h3 className="text-xl font-normal text-white font-heading tracking-tight">
              {t("footer.products.title")}
            </h3>
            <ul className="grid grid-cols-1 gap-4 text-sm">
              {[
                "ATV Quad Bike",
                "UTV Jungle Buggy",
                "White Water Rafting",
                "Paintball Game",
                "Pertiwi Jungle Swing",
                "Majestic VW Tours",
                "Team Building"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                  <MoveRight className="size-4 text-orange-500 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-2 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          <p>© {new Date().getFullYear()} PERTIWI JUNGLE SWING. {t("footer.rights")}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
