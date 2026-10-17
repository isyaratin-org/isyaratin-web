"use client";

import React from "react";
import { Sparkles, Smartphone, ShieldCheck } from "lucide-react";
import DownloadButton from "./DownloadButton";

interface DownloadCtaProps {
  onOpenUnavailableModal: () => void;
}

export default function DownloadCta({ onOpenUnavailableModal }: DownloadCtaProps) {
  return (
    <section
      id="unduh"
      aria-label="Unduh Aplikasi Isyaratin"
      className="py-20 bg-gradient-to-br from-[#156669] via-[#0F4C4F] to-[#0A3638] text-white relative overflow-hidden"
    >
      {/* Background Ambient Imagery */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        aria-hidden="true"
      />

      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E8E93]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#9CE7E3]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-teal-100">
          <Sparkles className="w-3.5 h-3.5 text-[#9CE7E3]" />
          <span>Menjembatani Komunikasi, Mewujudkan Inklusi</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Siap Merasakan Kemudahan Komunikasi Dua Arah Bahasa Isyarat?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
          Unduh installer resmi APK Isyaratin ke ponsel Android Anda sekarang dan mulailah berinteraksi tanpa batas.
        </p>

        {/* Tombol Unduh & Informasi Tambahan */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
          <DownloadButton
            variant="white"
            size="lg"
            showMeta={true}
            className="w-full sm:w-auto text-center"
            onOpenUnavailableModal={onOpenUnavailableModal}
            id="cta-download-button"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-teal-200/85 pt-2">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#9CE7E3]" />
              Format Berkas APK Android
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9CE7E3]" />
              Installer Mandiri &amp; Bebas Iklan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
