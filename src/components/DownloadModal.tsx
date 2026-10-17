"use client";

import React, { useEffect, useRef } from "react";
import { AlertCircle, X, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import { appConfig } from "@/config/appConfig";

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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-teal-100 p-6 md:p-8 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Dekorasi Aksen Teal Sesuai Mockup */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#156669] via-[#1E8E93] to-[#9CE7E3]" />

        {/* Tombol Tutup */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup jendela informasi unduhan"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#156669]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ikon & Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#E6F3F3] border border-teal-200 text-[#156669] flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#156669] bg-[#E6F3F3] rounded-full mb-1">
              Status Berkas Rilis
            </span>
            <h2 id="modal-title" className="text-xl font-extrabold text-[#0D2E30]">
              Installer Segera Tersedia
            </h2>
          </div>
        </div>

        {/* Konten Penjelasan */}
        <div id="modal-description" className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            Paket instalasi resmi APK untuk <strong className="text-[#0D2E30] font-bold">{appConfig.name}</strong> saat ini sedang dipersiapkan dan dioptimalkan agar memberikan performa terbaik untuk komunikasi dua arah dan avatar 3D di ponsel Android Anda.
          </p>

          <div className="bg-[#F8FCFC] border border-teal-100 rounded-xl p-4 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Informasi Rilis Mendatang:
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#156669] shrink-0" />
                <span>Format berkas: <strong className="font-bold text-[#0D2E30]">APK (Android Package)</strong></span>
              </li>
              {appConfig.version && (
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#156669] shrink-0" />
                  <span>Target versi: <strong className="font-bold text-[#0D2E30]">{appConfig.version}</strong></span>
                </li>
              )}
              {appConfig.fileSize && (
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#156669] shrink-0" />
                  <span>Estimasi ukuran: <strong className="font-bold text-[#0D2E30]">{appConfig.fileSize}</strong></span>
                </li>
              )}
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bebas dari iklan dan tautan pihak ketiga</span>
              </li>
            </ul>
          </div>

          <div className="text-xs text-slate-600 bg-[#E6F3F3] border border-teal-200/80 rounded-lg p-3 flex gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#156669] shrink-0 mt-0.5" />
            <p>
              <strong>Bagi Pengembang:</strong> Tautan unduhan dapat diatur melalui variabel lingkungan <code className="bg-white text-[#156669] px-1 py-0.5 rounded font-mono text-[11px] border border-teal-200">NEXT_PUBLIC_APK_DOWNLOAD_URL</code> di file <code className="bg-white text-[#156669] px-1 py-0.5 rounded font-mono text-[11px] border border-teal-200">.env.local</code>.
            </p>
          </div>
        </div>

        {/* Footer Tombol */}
        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#156669] hover:bg-[#0E4B4E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#156669]"
          >
            Mengerti &amp; Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
