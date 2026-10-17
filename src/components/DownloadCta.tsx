"use client";

import React from "react";
import { Sparkles, Smartphone, ShieldCheck } from "lucide-react";
import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";

interface DownloadCtaProps {
  onOpenUnavailableModal: () => void;
}

export default function DownloadCta({ onOpenUnavailableModal }: DownloadCtaProps) {
  return (
    <section
      id="unduh"
      aria-label="Unduh Aplikasi Isyaratin"
      className="py-24 relative overflow-hidden text-white"
    >
      {/* Background Radiating Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-teal-500/15 pointer-events-none animate-ping opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-teal-500/10 pointer-events-none" />

      {/* Radiant Glowing Background Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-[#0D9488]/30 via-[#14B8A6]/25 to-[#2DD4BF]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E3E42]/80 backdrop-blur-xl border border-teal-400/40 text-xs font-bold text-[#9CE7E3] shadow-[0_0_20px_rgba(45,212,191,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-[#2DD4BF] animate-pulse" />
          <span>Menjembatani Komunikasi, Mewujudkan Inklusi</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          Siap Merasakan Kemudahan Komunikasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#9CE7E3]">
            Dua Arah Bahasa Isyarat?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto leading-relaxed"
        >
          Unduh installer resmi APK Isyaratin ke ponsel Android Anda sekarang dan mulailah berinteraksi tanpa batas bahasa.
        </motion.p>

        {/* Tombol Unduh & Informasi Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 pt-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <DownloadButton
            variant="white"
            size="lg"
            showMeta={true}
            className="w-full sm:w-auto text-center"
            onOpenUnavailableModal={onOpenUnavailableModal}
            id="cta-download-button"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-teal-300/80 pt-2">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#2DD4BF]" />
              Format Berkas APK Android
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
              Installer Mandiri &amp; Bebas Iklan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
