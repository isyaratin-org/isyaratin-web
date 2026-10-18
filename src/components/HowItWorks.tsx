"use client";

import React from "react";
import { Download, ShieldCheck, HeartHandshake } from "lucide-react";
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
    <section id="cara-kerja" className="py-24 relative overflow-hidden text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
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

        {/* 3 Langkah Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appConfig.howItWorks.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative card-accent rounded-3xl p-7 flex flex-col"
            >
              {/* Header Langkah & Nomor */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#115E59]/60 border border-teal-400/30 flex items-center justify-center">
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
              <p className="text-sm text-teal-100/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
