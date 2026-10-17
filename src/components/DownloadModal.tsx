"use client";

import React, { useEffect, useRef } from "react";
import { AlertCircle, X, Clock, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031315]/80 backdrop-blur-md transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-gradient-to-b from-[#0E3E42]/95 via-[#092B2E]/95 to-[#061D20]/95 rounded-3xl shadow-[0_0_50px_rgba(45,212,191,0.25)] border border-teal-500/40 p-6 sm:p-8 overflow-hidden text-white"
          >
            {/* Top Glowing Neon Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent" />

            {/* Tombol Tutup */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup jendela informasi unduhan"
              className="absolute top-5 right-5 p-2 text-teal-300 hover:text-white hover:bg-teal-900/50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Ikon & Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#115E59] to-[#0A383A] border border-teal-400/40 text-[#2DD4BF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#9CE7E3] bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 rounded-full mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#2DD4BF]" />
                  Status Berkas Rilis
                </span>
                <h2 id="modal-title" className="text-xl sm:text-2xl font-black text-white">
                  Installer Segera Tersedia
                </h2>
              </div>
            </div>

            {/* Konten Penjelasan */}
            <div id="modal-description" className="space-y-4 text-teal-100/85 text-sm leading-relaxed">
              <p>
                Paket instalasi resmi APK untuk <strong className="text-white font-bold">{appConfig.name}</strong> saat ini sedang dipersiapkan dan dioptimalkan agar memberikan performa terbaik untuk komunikasi dua arah dan avatar 3D di ponsel Android Anda.
              </p>

              <div className="bg-[#072427]/80 border border-teal-500/30 rounded-2xl p-4 space-y-2.5 shadow-inner">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">
                  Informasi Rilis Mendatang:
                </h3>
                <ul className="space-y-2 text-xs text-teal-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Format berkas: <strong className="font-bold text-white">APK (Android Package)</strong></span>
                  </li>
                  {appConfig.version && (
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                      <span>Target versi: <strong className="font-bold text-white">{appConfig.version}</strong></span>
                    </li>
                  )}
                  {appConfig.fileSize && (
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                      <span>Estimasi ukuran: <strong className="font-bold text-white">{appConfig.fileSize}</strong></span>
                    </li>
                  )}
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Bebas dari iklan dan tautan pihak ketiga</span>
                  </li>
                </ul>
              </div>

              <div className="text-xs text-teal-300/80 bg-teal-950/60 border border-teal-500/25 rounded-xl p-3 flex gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <p>
                  <strong>Bagi Pengembang:</strong> Tautan unduhan dapat diatur melalui variabel lingkungan <code className="bg-[#0A2F33] text-[#9CE7E3] px-1 py-0.5 rounded font-mono text-[11px] border border-teal-500/30">NEXT_PUBLIC_APK_DOWNLOAD_URL</code> di file <code className="bg-[#0A2F33] text-[#9CE7E3] px-1 py-0.5 rounded font-mono text-[11px] border border-teal-500/30">.env.local</code>.
                </p>
              </div>
            </div>

            {/* Footer Tombol */}
            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm text-[#031B1D] bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3] hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                Mengerti &amp; Tutup
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
