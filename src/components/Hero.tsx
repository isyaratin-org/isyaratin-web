"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import DownloadButton from "./DownloadButton";
import PhoneMockup from "./PhoneMockup";
import { motion } from "framer-motion";

export default function Hero({
  onOpenUnavailableModal,
}: {
  onOpenUnavailableModal: () => void;
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-white">
      {/* Background Soft Atmospheric Ambient Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0E7490]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#14B8A6]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Teks & CTA (7 Kolom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Judul Utama */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15]"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#9CE7E3] to-[#5EEAD4] text-xl sm:text-3xl font-extrabold tracking-[0.25em] mb-2 sm:mb-3">
                ISYARATIN
              </span>
              <span className="text-white">
                Asisten Komunikasi Bahasa Isyarat Dua Arah{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#0D9488]">
                Berbasis AI & Avatar 3D
              </span>
            </motion.h1>

            {/* Deskripsi Singkat */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {appConfig.shortDescription}
            </motion.p>

            {/* Tombol Aksi (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <DownloadButton
                variant="white"
                size="lg"
                showMeta={true}
                className="w-full sm:w-auto text-center"
                onOpenUnavailableModal={onOpenUnavailableModal}
                id="hero-download-button"
              />

              <a
                href="#fitur"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-teal-100 hover:text-white bg-[#0A383A]/80 hover:bg-[#0E4B4E] border border-teal-500/30 hover:border-teal-400/60 backdrop-blur-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <span>Pelajari Fitur AI</span>
                <ArrowRight className="w-4 h-4 text-[#2DD4BF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Kolom Mockup Visual HP (5 Kolom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
