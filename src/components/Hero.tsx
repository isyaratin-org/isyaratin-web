"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import DownloadButton from "./DownloadButton";
import PhoneMockup from "./PhoneMockup";

export default function Hero({
  onOpenUnavailableModal,
}: {
  onOpenUnavailableModal: () => void;
}) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#156669] via-[#105659] to-[#0A383A] text-white">
      {/* Background Soft Wave & Grid Patterns */}
      <div className="absolute inset-0 bg-grid-teal opacity-20 pointer-events-none" />

      {/* Background Atmospheric AI Gesture & Soundwave Imagery */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A383A] via-transparent to-[#156669]/50 pointer-events-none" />

      {/* Gelombang Kurva Organik Sesuai Mockup */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E8E93]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0E4648]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Ilustrasi Origami Pesawat Kertas & Jejak Titik-Titik Sesuai Mockup */}
      <div className="absolute top-16 right-6 md:top-20 md:right-16 lg:right-28 pointer-events-none select-none z-10 animate-plane hidden sm:block" aria-hidden="true">
        <svg
          className="w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 text-white drop-shadow-md"
          viewBox="0 0 160 100"
          fill="none"
        >
          {/* Jejak Titik-Titik Garis Terbang (Dotted Trails) */}
          <path
            d="M5 85C30 82 55 70 80 52"
            stroke="white"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M18 95C42 90 65 78 92 60"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Pesawat Kertas Origami */}
          <g transform="translate(65, 5) scale(0.9)">
            {/* Sayap Kiri */}
            <polygon points="10,40 85,10 50,75" fill="#E8F8F7" opacity="0.95" />
            {/* Sayap Kanan / Lipatan Atas */}
            <polygon points="85,10 50,75 55,42" fill="#C2EFEA" />
            {/* Garis Lipatan Tengah */}
            <polygon points="10,40 55,42 50,75" fill="#9CE7E3" opacity="0.8" />
            {/* Garis Kontur */}
            <path
              d="M10 40L85 10L50 75L55 42L10 40Z"
              stroke="#0D4B4E"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M55 42L85 10" stroke="#0D4B4E" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Teks & CTA (7 Kolom) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Tagline / AI Assistant Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs text-xs font-semibold text-teal-100">
              <span className="flex h-2 w-2 rounded-full bg-[#9CE7E3] animate-pulse" />
              <span className="flex items-center gap-1.5 tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#9CE7E3]" />
                {appConfig.tagline}
              </span>
            </div>

            {/* Judul Utama Sesuai Mockup */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.25]">
              <span className="text-[#9CE7E3] block text-xl sm:text-2xl font-bold tracking-[0.2em] mb-3">
                ISYARATIN
              </span>
              Asisten Komunikasi Bahasa Isyarat Dua Arah Berbasis AI dengan Avatar 3D
            </h1>

            {/* Deskripsi Singkat */}
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {appConfig.shortDescription}
            </p>

            {/* Fitur Inti Cepat */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white pt-1">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/25">
                <Smartphone className="w-4 h-4 text-[#9CE7E3]" aria-hidden="true" />
                <span>Khusus Perangkat Android</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/25">
                <ShieldCheck className="w-4 h-4 text-[#9CE7E3]" aria-hidden="true" />
                <span>Installer APK Resmi Bebas Iklan</span>
              </div>
            </div>

            {/* Tombol Aksi (CTA) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <DownloadButton
                variant="white"
                size="lg"
                showMeta={true}
                onOpenUnavailableModal={onOpenUnavailableModal}
                id="hero-download-button"
              />

              <a
                href="#fitur"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Pelajari Fitur AI</span>
                <ArrowRight className="w-4 h-4 text-teal-200" />
              </a>
            </div>

            {/* Catatan Transparan */}
            <p className="text-sm text-teal-100 pt-1 max-w-xl mx-auto lg:mx-0">
              * Aplikasi memerlukan izin akses kamera dan mikrofon pada ponsel Android Anda untuk penerjemahan dua arah secara real-time.
            </p>
          </div>

          {/* Kolom Mockup Visual HP (5 Kolom) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
