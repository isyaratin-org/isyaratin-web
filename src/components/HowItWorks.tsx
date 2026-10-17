"use client";

import React from "react";
import { Download, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import { appConfig } from "@/config/appConfig";

export default function HowItWorks() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Download className="w-6 h-6 text-[#156669]" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-[#156669]" />;
      case 2:
        return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      default:
        return <Download className="w-6 h-6 text-[#156669]" />;
    }
  };

  return (
    <section id="cara-kerja" className="py-20 bg-[#F3F8F8] border-t border-teal-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-teal-200 text-xs font-bold text-[#156669] shadow-xs">
            <span>Alur Cepat &amp; Praktis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D2E30] tracking-tight">
            Tiga Langkah Memulai Percakapan Inklusif
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pasang Isyaratin di smartphone Android Anda dan nikmati kemudahan komunikasi dua arah tanpa hambatan.
          </p>
        </div>

        {/* 3 Langkah Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative">
          {appConfig.howItWorks.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-5 sm:p-7 border border-teal-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header Langkah & Nomor */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F3F3] border border-teal-200 flex items-center justify-center shadow-xs">
                    {getStepIcon(index)}
                  </div>
                  <span className="text-3xl font-black text-teal-200/70 font-mono tracking-tighter">
                    {step.number}
                  </span>
                </div>

                {/* Judul Langkah */}
                <h3 className="text-xl font-bold text-[#0D2E30] mb-3">
                  {step.title}
                </h3>

                {/* Deskripsi Langkah */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Detail Praktis */}
              <div className="pt-4 border-t border-teal-50 flex items-start gap-2 text-xs text-slate-600 bg-[#F3F8F8] p-3 rounded-xl border border-teal-100/60">
                <span className="font-bold text-[#156669] shrink-0">Tips:</span>
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bantuan Cepat */}
        <div className="mt-12 text-center">
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#156669] hover:text-[#0E4B4E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#156669] rounded-md p-1"
          >
            <span>Butuh panduan lengkap tentang izin instalasi Android? Lihat FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
