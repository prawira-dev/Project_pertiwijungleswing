"use client";

import { MessageCircle, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const csList = [
    { name: "Customer Service 1", phone: "6281338597825" },
    { name: "Customer Service 2", phone: "6281339799975" }
  ];

  const handleChat = (phone: string) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#25D366] p-4 text-white">
            <h3 className="font-semibold text-lg">Chat with us!</h3>
            <p className="text-sm opacity-90">Hi there! How can we help you today?</p>
          </div>
          <div className="p-4 space-y-3 bg-gray-50/50">
            {csList.map((cs, idx) => (
              <button
                key={idx}
                onClick={() => handleChat(cs.phone)}
                className="flex w-full items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-border/50 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <Phone className="size-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-medium text-sm text-foreground">{cs.name}</span>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
          isOpen ? "rotate-90 bg-gray-800" : "hover:bg-[#20bd5a]"
        )}
      >
        {isOpen ? <X className="size-6 -rotate-90" /> : <img src="/static/images/whatsapp.svg" alt="WhatsApp" className="size-8 object-contain" />}
      </button>
    </div>
  );
}
