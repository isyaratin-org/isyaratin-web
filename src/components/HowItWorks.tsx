"use client";

import React from "react";
import { Download, ShieldCheck, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Download className="w-6 h-6 text-[#2DD4BF]" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-[#2DD4BF]" />;
      case 2:
        return <HeartHandshake className="w-6 h-6 text-[#2DD4BF]" />;
      default:
        return <Download className="w-6 h-6 text-[#2DD4BF]" />;
    }
  };

  return (
    <section id="cara-kerja" className="py-24 relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0F766E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E3E42]/80 border border-teal-500/40 text-xs font-bold text-[#9CE7E3] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>Alur Cepat &amp; Praktis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Tiga Langkah Memulai{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3]">
              Percakapan Inklusif
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed">
            Pasang Isyaratin di smartphone Android Anda dalam hitungan menit dan nikmati kemudahan komunikasi dua arah tanpa hambatan.
          </p>
        </motion.div>

        {/* 3 Langkah Grid dengan Garis Penghubung Glowing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-teal-500/40 to-transparent -translate-y-10 z-0 pointer-events-none" />

          {appConfig.howItWorks.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-gradient-to-b from-[#0E3E42]/70 via-[#092B2E]/80 to-[#061D20]/90 rounded-3xl p-7 border border-teal-500/25 hover:border-teal-400/60 shadow-xl hover:shadow-[0_0_35px_rgba(45,212,191,0.25)] backdrop-blur-xl flex flex-col justify-between z-10"
            >
              <div>
                {/* Header Langkah & Nomor Glowing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#115E59]/80 to-[#0A383A]/90 border border-teal-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                    {getStepIcon(index)}
                  </div>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#2DD4BF]/60 to-[#0F766E]/20 font-mono tracking-tighter">
                    {step.number}
                  </span>
                </div>

                {/* Judul Langkah */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Deskripsi Langkah */}
                <p className="text-sm text-teal-100/80 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Detail Praktis / Tips */}
              <div className="pt-4 border-t border-teal-800/60 flex items-start gap-2.5 text-xs text-teal-200/90 bg-[#072528]/80 p-3.5 rounded-xl border border-teal-500/20">
                <span className="font-bold text-[#2DD4BF] shrink-0">Tips:</span>
                <span className="leading-relaxed">{step.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bantuan Cepat */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#9CE7E3] hover:text-[#2DD4BF] transition-colors p-2 rounded-xl hover:bg-teal-900/30"
          >
            <span>Butuh panduan lengkap tentang izin instalasi Android? Lihat FAQ</span>
            <ArrowRight className="w-4 h-4 text-[#2DD4BF]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
