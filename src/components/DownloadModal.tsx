"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Download,
  ShieldCheck,
  Smartphone,
  Copy,
  Check,
  FileCode2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { appConfig } from "@/config/appConfig";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copiedSha, setCopiedSha] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const isUrlAvailable = Boolean(
    appConfig.apkDownloadUrl && appConfig.apkDownloadUrl.trim().length > 0
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setDownloadStarted(false);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopySha = () => {
    if (appConfig.sha256) {
      navigator.clipboard.writeText(appConfig.sha256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  const handleDownloadClick = () => {
    setDownloadStarted(true);
    // Tutup modal secara otomatis setelah 3 detik unduhan dimulai
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031315]/85 backdrop-blur-md transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-gradient-to-b from-[#0E3E42]/95 via-[#092B2E]/95 to-[#061D20]/95 rounded-3xl shadow-[0_0_60px_rgba(45,212,191,0.25)] border border-teal-500/40 p-6 sm:p-7 overflow-hidden text-white"
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

            {isUrlAvailable ? (
              /* =================== PANEL KONFIRMASI UNDUH APK =================== */
              <div className="space-y-5">
                {/* Header Panel */}
                <div className="flex items-start gap-3.5 pr-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#115E59] to-[#0A383A] border border-teal-400/40 text-[#2DD4BF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#9CE7E3] bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 rounded-full mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      Paket Rilis Resmi Android
                    </span>
                    <h2
                      id="modal-title"
                      className="text-xl sm:text-2xl font-black text-white leading-tight"
                    >
                      Konfirmasi Unduh APK
                    </h2>
                  </div>
                </div>

                <p
                  id="modal-description"
                  className="text-xs sm:text-sm text-teal-100/85 leading-relaxed"
                >
                  Anda akan mengunduh berkas installer resmi{" "}
                  <strong className="text-white font-bold">{appConfig.name}</strong>{" "}
                  langsung ke perangkat Anda.
                </p>

                {/* Spesifikasi Berkas Grid */}
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-[#072427]/90 border border-teal-500/25 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-teal-300/75 flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      Platform
                    </span>
                    <span className="font-bold text-white text-sm pt-0.5">
                      Android 7.0+
                    </span>
                  </div>

                  <div className="bg-[#072427]/90 border border-teal-500/25 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-teal-300/75 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      Versi Rilis
                    </span>
                    <span className="font-bold text-white text-sm pt-0.5">
                      {appConfig.version || "v1.0"}
                    </span>
                  </div>

                  <div className="bg-[#072427]/90 border border-teal-500/25 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-teal-300/75 flex items-center gap-1.5">
                      <FileCode2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      Format File
                    </span>
                    <span className="font-bold text-white text-sm pt-0.5">
                      APK Package
                    </span>
                  </div>

                  <div className="bg-[#072427]/90 border border-teal-500/25 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-teal-300/75 flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      Ukuran Berkas
                    </span>
                    <span className="font-bold text-white text-sm pt-0.5">
                      {appConfig.fileSize || "173 MB"}
                    </span>
                  </div>
                </div>

                {/* Checksum SHA-256 Panel Verifikasi */}
                {appConfig.sha256 && (
                  <div className="bg-[#072427]/80 border border-teal-500/30 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-200 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                        Checksum SHA-256 (Integritas Berkas)
                      </span>
                      <button
                        type="button"
                        onClick={handleCopySha}
                        title="Salin SHA-256"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2DD4BF] hover:text-[#9CE7E3] bg-[#0A383A]/70 hover:bg-[#0E4B4E] px-2 py-0.5 rounded-md border border-teal-500/30 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF]"
                      >
                        {copiedSha ? (
                          <>
                            <Check className="w-3 h-3 text-[#2DD4BF]" />
                            <span>Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-2 rounded-xl bg-teal-950/80 border border-teal-500/20 text-[10px] font-mono text-teal-200/90 break-all select-all leading-relaxed">
                      {appConfig.sha256}
                    </div>
                  </div>
                )}

                {/* Tips Instalasi Singkat */}
                <div className="text-xs text-teal-200/85 bg-teal-950/60 border border-teal-500/25 rounded-xl p-3 flex gap-2.5 items-start">
                  <AlertCircle className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Saat instalasi, aktifkan izin{" "}
                    <strong className="text-white">
                      &apos;Izinkan dari sumber ini&apos;
                    </strong>{" "}
                    di menu Setelan Android jika diminta oleh sistem.
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-teal-200 hover:text-white bg-transparent hover:bg-teal-900/40 border border-teal-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                  >
                    Batal
                  </button>

                  <a
                    href={appConfig.apkDownloadUrl}
                    download="app-release.apk"
                    onClick={handleDownloadClick}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm text-[#031B1D] bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#9CE7E3] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>
                      {downloadStarted ? "Unduhan Dimulai..." : "Mulai Unduh APK"}
                    </span>
                  </a>
                </div>
              </div>
            ) : (
              /* =================== FALLBACK (JIKA URL KOSONG) =================== */
              <div className="space-y-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#115E59] to-[#0A383A] border border-teal-400/40 text-[#2DD4BF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#9CE7E3] bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 rounded-full mb-1.5">
                      <Sparkles className="w-3 h-3 text-[#2DD4BF]" />
                      Status Berkas Rilis
                    </span>
                    <h2
                      id="modal-title"
                      className="text-xl sm:text-2xl font-black text-white"
                    >
                      Installer Segera Tersedia
                    </h2>
                  </div>
                </div>

                <div
                  id="modal-description"
                  className="space-y-4 text-teal-100/85 text-sm leading-relaxed"
                >
                  <p>
                    Paket instalasi resmi APK untuk{" "}
                    <strong className="text-white font-bold">
                      {appConfig.name}
                    </strong>{" "}
                    saat ini sedang dioptimalkan untuk perangkat Android Anda.
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm text-[#031B1D] bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3] hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                  >
                    Mengerti &amp; Tutup
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
