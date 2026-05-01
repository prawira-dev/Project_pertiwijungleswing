"use client";

import { MessageCircle, X, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const csList = [
    { name: "Customer Service 1", phone: "6281338597825" },
    { name: "Customer Service 2", phone: "6281339799975" }
  ];

  const { t } = useLanguage();

  const handleChat = (phone: string) => {
    const message = t("whatsapp.message" as any);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={cn(
          "mb-4 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl border border-border/50 transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] origin-bottom-right",
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-4 opacity-0 scale-90 pointer-events-none"
        )}
      >
        <div className="bg-[#25D366] p-5 text-white">
          <h3 className="font-bold text-lg leading-none">Chat with us!</h3>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">Hi there! How can we help you today?</p>
        </div>
        <div className="p-4 space-y-3 bg-gray-50/50">
          {csList.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => handleChat(cs.phone)}
              className="flex w-full items-center gap-4 rounded-xl bg-white p-3.5 shadow-sm border border-gray-100 transition-all duration-300 hover:border-[#25D366]/30 hover:shadow-md active:scale-[0.98] group"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                <Phone className="size-5" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-gray-900">{cs.name}</span>
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#25D366]">
                  <span className="size-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex size-14 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 focus:outline-none group",
          isOpen ? "bg-gray-900 rotate-0" : "bg-[#25D366] hover:bg-[#20bd5a]"
        )}
        aria-label="Toggle WhatsApp Chat"
      >
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        )}

        <div className="relative flex items-center justify-center h-full w-full">
          <X
            className={cn(
              "absolute size-6 transition-all duration-500 ease-out",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
            )}
          />
          <Image
            src="/static/images/svg/whatsapp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className={cn(
              "absolute size-8 object-contain transition-all duration-500 ease-out",
              isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            )}
          />
        </div>
      </button>
    </div>
  );
}
