"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { appConfig } from "@/config/appConfig";

export default function Faq() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-cara-pasang"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-[#F3F8F8] border-t border-teal-100/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-teal-200 text-xs font-bold text-[#156669] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#156669]" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D2E30] tracking-tight">
            Panduan &amp; Informasi Unduhan APK
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Jawaban seputar proses instalasi berkas APK di Android, fitur komunikasi dua arah, dan status rilis.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="space-y-3 sm:space-y-4">
          {appConfig.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-teal-100 shadow-xs overflow-hidden transition-all duration-200 hover:border-teal-300"
              >
                <button
                  type="button"
                  id={`button-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faq.id}`}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-[#0D2E30] hover:text-[#156669] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#156669]"
                >
                  <span className="text-sm sm:text-base md:text-lg leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E6F3F3] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#156669] text-white" : "text-[#156669]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`button-${faq.id}`}
                    className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed border-t border-teal-50 animate-in fade-in duration-200"
                  >
                    <p className="whitespace-pre-line">{faq.answer}</p>

                    {faq.highlight && (
                      <div className="mt-4 p-3.5 rounded-xl bg-[#E6F3F3] border border-teal-200 flex items-start gap-2.5 text-xs text-[#0D2E30] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#156669] shrink-0 mt-0.5" />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Kontak Bantuan */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Masih ada pertanyaan yang belum terjawab? Hubungi tim melalui{" "}
          <a
            href={`mailto:${appConfig.contact.email}`}
            className="text-[#156669] font-bold hover:underline"
          >
            {appConfig.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
