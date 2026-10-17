"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Smartphone, Sparkles, Activity } from "lucide-react";
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
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0E7490]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#14B8A6]/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Origami Paper Airplane & Dotted Flight Trails */}
      <div
        className="absolute top-20 right-6 md:top-24 md:right-16 lg:right-28 pointer-events-none select-none z-10 animate-plane hidden sm:block"
        aria-hidden="true"
      >
        <svg
          className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 drop-shadow-[0_0_20px_rgba(45,212,191,0.4)]"
          viewBox="0 0 160 100"
          fill="none"
        >
          {/* Glowing flight trails */}
          <path
            d="M5 85C30 82 55 70 80 52"
            stroke="#2DD4BF"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M18 95C42 90 65 78 92 60"
            stroke="#9CE7E3"
            strokeWidth="1.8"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Paper Airplane */}
          <g transform="translate(65, 5) scale(0.95)">
            <polygon points="10,40 85,10 50,75" fill="#E8F8F7" opacity="0.95" />
            <polygon points="85,10 50,75 55,42" fill="#5EEAD4" />
            <polygon points="10,40 55,42 50,75" fill="#2DD4BF" opacity="0.8" />
            <path
              d="M10 40L85 10L50 75L55 42L10 40Z"
              stroke="#042F2E"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M55 42L85 10" stroke="#042F2E" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Teks & CTA (7 Kolom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-7"
          >
            {/* Tagline / AI Assistant Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D3B3E]/80 backdrop-blur-xl border border-teal-400/40 shadow-[0_0_20px_rgba(45,212,191,0.25)] text-xs font-bold text-teal-200"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#2DD4BF] animate-ping" />
              <span className="flex items-center gap-1.5 tracking-wider uppercase text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
                {appConfig.tagline}
              </span>
            </motion.div>

            {/* Judul Utama dengan Animasi Gradasi */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.18]"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#9CE7E3] to-[#5EEAD4] text-xl sm:text-3xl font-extrabold tracking-[0.25em] mb-2 sm:mb-3">
                ISYARATIN
              </span>
              <span className="text-white">
                Asisten Komunikasi Bahasa Isyarat Dua Arah{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#0D9488]">
                Berbasis AI &amp; Avatar 3D
              </span>
            </motion.h1>

            {/* Soundwave Interactive Equalizer Visualizer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-teal-950/50 border border-teal-500/20 backdrop-blur-md"
            >
              <Activity className="w-4 h-4 text-[#2DD4BF] animate-pulse" />
              <span className="text-xs font-semibold text-teal-200">
                Penerjemahan Dua Arah Real-Time:
              </span>
              <div className="flex items-center gap-1 h-5">
                {[4, 14, 8, 20, 12, 18, 6, 16, 10].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-1 bg-gradient-to-t from-[#0D9488] to-[#2DD4BF] rounded-full"
                    animate={{
                      height: [h * 0.5, h * 1.2, h * 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.12,
                      ease: "easeInOut",
                    }}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#9CE7E3] px-1.5 py-0.5 rounded bg-teal-800/40">
                Kamera ⇆ Suara
              </span>
            </motion.div>

            {/* Deskripsi Singkat */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {appConfig.shortDescription}
            </motion.p>

            {/* Fitur Inti Cepat Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-teal-100 pt-1"
            >
              <div className="flex items-center gap-2 bg-[#0E3E42]/80 px-4 py-2 rounded-xl border border-teal-500/30 shadow-md">
                <Smartphone className="w-4 h-4 text-[#2DD4BF]" aria-hidden="true" />
                <span className="font-medium">Khusus Perangkat Android</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0E3E42]/80 px-4 py-2 rounded-xl border border-teal-500/30 shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" aria-hidden="true" />
                <span className="font-medium">Installer APK Resmi Bebas Iklan</span>
              </div>
            </motion.div>

            {/* Tombol Aksi (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-teal-100 hover:text-white bg-[#0A383A]/80 hover:bg-[#0E4B4E] border border-teal-500/30 hover:border-teal-400/60 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <span>Pelajari Fitur AI</span>
                <ArrowRight className="w-4 h-4 text-[#2DD4BF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Catatan Transparan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs sm:text-sm text-teal-300/70 pt-1 max-w-xl mx-auto lg:mx-0"
            >
              * Aplikasi memerlukan izin akses kamera dan mikrofon pada ponsel Android Anda untuk penerjemahan dua arah secara real-time.
            </motion.p>
          </motion.div>

          {/* Kolom Mockup Visual HP dengan Floating Badges (5 Kolom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Floating Floating Chips around phone */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 sm:-left-8 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#092B2E]/90 backdrop-blur-xl border border-teal-400/50 shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-xs font-bold text-teal-100"
            >
              <span className="text-base">🤟</span>
              <div>
                <span className="block text-[10px] text-teal-300 font-normal">Deteksi Kamera</span>
                <span className="text-[#9CE7E3]">BISINDO Real-Time</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 sm:-right-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#092B2E]/90 backdrop-blur-xl border border-teal-400/50 shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-xs font-bold text-teal-100"
            >
              <span className="text-base">🤖</span>
              <div>
                <span className="block text-[10px] text-teal-300 font-normal">Ucapan ke Gerakan</span>
                <span className="text-[#9CE7E3]">Avatar 3D Responsif</span>
              </div>
            </motion.div>

            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
