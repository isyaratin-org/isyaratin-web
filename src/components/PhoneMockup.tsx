"use client";

import React, { useState } from "react";
import {
  Wifi,
  Battery,
  Camera,
  Mic,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Smartphone,
  Send,
  User,
  Clock,
} from "lucide-react";
import HandshakeLogo from "./HandshakeLogo";

export default function PhoneMockup() {
  // Mode tampilan pada mockup layar ponsel: "home" (Dashboard) atau "avatar" (Respon Avatar 3D)
  const [activeScreen, setActiveScreen] = useState<"home" | "avatar">("home");

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none">
      {/* Efek Cahaya Latar Belakang (Teal & Cyan Glow) */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#156669]/30 via-[#1E8E93]/20 to-[#9CE7E3]/25 rounded-[52px] blur-2xl -z-10 animate-pulse-subtle" />

      {/* Frame Ponsel Android Modern */}
      <div className="relative bg-slate-900 p-3 sm:p-3.5 rounded-[48px] shadow-2xl ring-1 ring-slate-800/80 border-4 border-slate-700/60">
        {/* Tombol Fisik Samping */}
        <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-md" />
        <div className="absolute -left-[7px] top-42 w-[3px] h-14 bg-slate-600 rounded-l-md" />
        <div className="absolute -right-[7px] top-32 w-[3px] h-14 bg-slate-600 rounded-r-md" />

        {/* Layar Dalam Ponsel */}
        <div className="relative bg-[#F3F8F8] rounded-[38px] overflow-hidden border border-slate-200/90 flex flex-col aspect-[9/18.8]">
          {/* Status Bar */}
          <div className="pt-2 px-6 pb-1 bg-[#156669] text-white flex items-center justify-between text-[11px] font-semibold">
            <span>09.41</span>
            {/* Dynamic Camera Notch */}
            <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-end pr-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
            <div className="flex items-center gap-1.5 text-white/90">
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Navigasi Layar Mockup Mini (Tab Switcher) */}
          <div className="bg-[#0F4C4F] px-4 py-1.5 flex items-center justify-between border-b border-[#1A777B]/40">
            <span className="text-[10px] text-teal-200/90 font-medium">Pratinjau Aplikasi:</span>
            <div className="flex items-center gap-1 bg-[#093537] p-0.5 rounded-lg text-[9px] font-bold">
              <button
                type="button"
                onClick={() => setActiveScreen("home")}
                className={`px-2 py-0.5 rounded transition-all ${
                  activeScreen === "home"
                    ? "bg-[#156669] text-white shadow-xs"
                    : "text-teal-200 hover:text-white"
                }`}
              >
                Beranda
              </button>
              <button
                type="button"
                onClick={() => setActiveScreen("avatar")}
                className={`px-2 py-0.5 rounded transition-all ${
                  activeScreen === "avatar"
                    ? "bg-[#156669] text-white shadow-xs"
                    : "text-teal-200 hover:text-white"
                }`}
              >
                Avatar 3D
              </button>
            </div>
          </div>

          {/* ================= SCREEN 1: BERANDA / DASHBOARD ================= */}
          {activeScreen === "home" && (
            <div className="flex-1 flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
              {/* Bagian Atas Hijau Teal dengan Kurva Wave */}
              <div className="bg-[#156669] text-white px-4 pt-3 pb-5 relative overflow-hidden rounded-b-[28px] shadow-sm">
                {/* Efek gelombang organik lembut */}
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#1A777B]/50 rounded-full blur-xl pointer-events-none" />

                {/* Logo & Brand Isyaratin */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <HandshakeLogo size={32} variant="teal-on-white" className="shrink-0" />
                  <div>
                    <span className="font-extrabold text-base tracking-wider block text-white">
                      ISYARATIN
                    </span>
                  </div>
                </div>

                {/* Kartu Sapaan: Halo, John Dower! */}
                <div className="bg-white rounded-2xl p-3 text-[#0D2E30] shadow-sm">
                  <h4 className="font-bold text-xs sm:text-sm text-[#0D2E30]">
                    Halo, John Dower!
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                    Ada yang bisa dibantu hari ini?
                  </p>
                </div>

                {/* 2 Tombol Aksi Utama: Mulai Isyarat & Voice Note */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {/* Card Mulai Isyarat (Dark Teal) */}
                  <div className="bg-[#0F4C4F] p-2.5 rounded-2xl text-white shadow-xs border border-[#1A777B]/50 flex flex-col justify-between">
                    <div className="w-7 h-7 rounded-xl bg-white text-[#156669] flex items-center justify-center mb-2">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold block leading-tight">Mulai Isyarat</span>
                      <span className="text-[8px] text-teal-200/90 block mt-0.5">Terjemahkan ke teks</span>
                    </div>
                  </div>

                  {/* Card Voice Note (White) */}
                  <div className="bg-white p-2.5 rounded-2xl text-[#0D2E30] shadow-xs border border-slate-100 flex flex-col justify-between">
                    <div className="w-7 h-7 rounded-xl bg-[#E6F3F3] text-[#156669] flex items-center justify-center mb-2">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold block leading-tight text-[#0D2E30]">Voice Note</span>
                      <span className="text-[8px] text-slate-500 block mt-0.5">Ucapan ke isyarat</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Riwayat Terbaru */}
              <div className="p-3.5 space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0D2E30]">Riwayat Terbaru</span>
                  <span className="text-[9px] font-bold text-[#156669] flex items-center">
                    Lihat Semua &gt;
                  </span>
                </div>

                {/* Riwayat Item 1 */}
                <div className="bg-[#156669] text-white p-2.5 rounded-2xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white text-[#156669] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold block leading-tight text-white">
                        Percakapan 28 Sep, 09.32
                      </span>
                      <span className="text-[8px] text-teal-200/80 block mt-0.5">
                        📍 09.32 · Lokasi belum diisi
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-teal-200" />
                </div>

                {/* Riwayat Item 2 */}
                <div className="bg-[#156669] text-white p-2.5 rounded-2xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white text-[#156669] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold block leading-tight text-white">
                        Konsultasi jadwal vaksin
                      </span>
                      <span className="text-[8px] text-teal-200/80 block mt-0.5">
                        📍 08.10 · Puskesmas Dago
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-teal-200" />
                </div>
              </div>

              {/* Bottom Navigation Bar (5 Item Sesuai Mockup) */}
              <div className="bg-white border-t border-slate-200/80 px-2 py-1.5 flex items-center justify-around text-[8px] font-semibold">
                <div className="flex flex-col items-center gap-0.5 bg-[#156669] text-white px-2.5 py-1 rounded-xl">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                  <span>Beranda</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Kamera</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Voice Note</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Riwayat</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <User className="w-3.5 h-3.5" />
                  <span>Profil</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= SCREEN 2: RESPON AVATAR ISYARAT 3D ================= */}
          {activeScreen === "avatar" && (
            <div className="flex-1 flex flex-col justify-between overflow-hidden animate-in fade-in duration-200 bg-white">
              {/* Header Avatar Screen */}
              <div className="bg-white px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#156669]">
                  <ChevronLeft className="w-4 h-4 cursor-pointer" onClick={() => setActiveScreen("home")} />
                  <span className="font-bold text-xs text-[#0D2E30]">Respon Avatar Isyarat</span>
                </div>
                <span className="text-[9px] bg-[#E6F3F3] text-[#156669] font-bold px-2 py-0.5 rounded-full">
                  Avatar 3D
                </span>
              </div>

              {/* Area Visual 3D Avatar */}
              <div className="p-3 flex-1 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#F3F8F8] to-white">
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#156669]/20 to-[#9CE7E3]/30 border border-[#156669]/30 flex items-center justify-center overflow-hidden shadow-inner">
                  {/* Karakter Avatar 3D SVG Ilustratif */}
                  <svg className="w-20 h-20 text-[#156669]" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="35" r="18" fill="#156669" opacity="0.9" />
                    <circle cx="50" cy="35" r="14" fill="#F7D4B6" />
                    <path d="M42 32C42 30 45 30 45 32" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                    <path d="M55 32C55 30 58 30 58 32" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                    <path d="M47 40C49 42 51 42 53 40" stroke="#C84B31" strokeWidth="2" strokeLinecap="round" />
                    {/* Rambut */}
                    <path d="M34 32C34 22 42 16 50 16C58 16 66 22 66 32C66 28 62 20 50 20C38 20 34 28 34 32Z" fill="#2D2D2D" />
                    {/* Baju / Badan */}
                    <path d="M30 65C30 52 38 48 50 48C62 48 70 52 70 65V85H30V65Z" fill="#156669" />
                    {/* Tangan Isyarat 3D */}
                    <rect x="42" y="58" width="16" height="12" rx="4" fill="#F7D4B6" stroke="#156669" strokeWidth="1.5" />
                    <path d="M44 58V53M47 58V51M50 58V51M53 58V53" stroke="#156669" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[8px] bg-white/90 text-[#156669] font-bold px-1.5 rounded shadow-xs">
                    Gerakan 3D
                  </span>
                </div>

                {/* Kotak Teks Balasan */}
                <div className="mt-3 w-full bg-slate-50 border border-slate-200/90 rounded-xl p-2.5 text-left">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                    Teks Balasan:
                  </span>
                  <p className="text-[10px] text-[#0D2E30] font-medium leading-relaxed mt-0.5">
                    &quot;Baik, silakan siapkan surat bukti kepolisian dan Kartu Keluarga.&quot;
                  </p>
                </div>
              </div>

              {/* Tombol Aksi Layar Avatar */}
              <div className="p-3 border-t border-slate-100 space-y-1.5">
                <button
                  type="button"
                  className="w-full py-1.5 rounded-xl border border-[#156669] text-[#156669] font-bold text-[10px] flex items-center justify-center gap-1.5 hover:bg-[#E6F3F3]"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Putar Ulang</span>
                </button>
                <button
                  type="button"
                  className="w-full py-1.5 rounded-xl bg-[#156669] text-white font-bold text-[10px] flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>Lanjutkan Percakapan</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Badge 1 (Kanan Atas) */}
      <div className="absolute -top-3 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-teal-100 shadow-xl rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 animate-float">
        <div className="w-9 h-9 rounded-xl bg-[#E6F3F3] text-[#156669] flex items-center justify-center shrink-0 font-bold">
          <Sparkles className="w-4 h-4 text-[#156669]" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#156669] uppercase tracking-wider block">
            Komunikasi AI
          </span>
          <span className="text-xs font-bold text-slate-800">
            Dua Arah &amp; Avatar 3D
          </span>
        </div>
      </div>

      {/* Floating Badge 2 (Kiri Bawah) */}
      <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-teal-100 shadow-xl rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 animate-float [animation-delay:2s]">
        <div className="w-9 h-9 rounded-xl bg-[#156669] text-white flex items-center justify-center shrink-0">
          <Smartphone className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider block">
            Installer Resmi
          </span>
          <span className="text-xs font-bold text-slate-800">
            Android APK
          </span>
        </div>
      </div>
    </div>
  );
}
