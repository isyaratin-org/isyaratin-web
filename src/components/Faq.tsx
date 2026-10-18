"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-cara-pasang"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden text-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Panduan &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3]">
              Informasi Unduhan APK
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed">
            Jawaban lengkap seputar proses instalasi berkas APK di Android, komunikasi dua arah berbasis AI, dan keamanan data.
          </p>
        </motion.div>

        {/* Accordion FAQ */}
        <div className="space-y-4">
          {appConfig.faqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0A2F33]/80 border-teal-400/50"
                    : "bg-[#0A2F33]/50 border-teal-500/20 hover:border-teal-400/40"
                }`}
              >
                <button
                  type="button"
                  id={`button-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faq.id}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#9CE7E3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#2DD4BF] text-[#041F21]"
                        : "bg-teal-900/50 text-[#9CE7E3] border border-teal-500/30"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`button-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-teal-100/85 leading-relaxed border-t border-teal-800/40">
                        <p className="whitespace-pre-line">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Kontak Bantuan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center text-xs sm:text-sm text-teal-300/70"
        >
          Masih ada pertanyaan yang belum terjawab? Hubungi tim pengembang melalui{" "}
          <a
            href={`mailto:${appConfig.contact.email}`}
            className="text-[#2DD4BF] font-bold hover:underline"
          >
            {appConfig.contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
