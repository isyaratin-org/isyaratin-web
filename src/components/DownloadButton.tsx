"use client";

import React from "react";
import { Download, Smartphone } from "lucide-react";
import { appConfig } from "@/config/appConfig";

interface DownloadButtonProps {
  variant?: "primary" | "secondary" | "header" | "white";
  size?: "sm" | "md" | "lg";
  showMeta?: boolean;
  className?: string;
  onOpenUnavailableModal?: () => void;
  id?: string;
}

export default function DownloadButton({
  variant = "primary",
  size = "md",
  showMeta = false,
  className = "",
  onOpenUnavailableModal,
  id = "download-apk-button",
}: DownloadButtonProps) {
  const isUrlAvailable = Boolean(appConfig.apkDownloadUrl && appConfig.apkDownloadUrl.trim().length > 0);
  const isFullWidth = className.includes("w-full");

  // Basis gaya tombol
  const baseStyles =
    "group inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  // Varian ukuran
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 shadow-lg shadow-black/20",
  }[size];

  // Varian warna & gaya visual (Deep Teal Theme)
  const variantStyles = {
    primary:
      "bg-[#156669] hover:bg-[#0E4B4E] text-white focus-visible:ring-[#156669] shadow-md hover:shadow-[#156669]/30 border border-[#1A777B]",
    secondary:
      "bg-white hover:bg-[#E6F3F3] text-[#156669] border border-[#156669]/30 hover:border-[#156669] focus-visible:ring-[#156669] shadow-xs",
    header:
      "bg-[#156669] hover:bg-[#0E4B4E] text-white focus-visible:ring-[#156669] shadow-xs text-xs md:text-sm px-4 py-2 border border-[#1A777B]",
    white:
      "bg-white hover:bg-teal-50 text-[#156669] border border-white font-extrabold focus-visible:ring-white shadow-xl shadow-black/25",
  }[variant];

  // Wrapper style
  const wrapperStyles = isFullWidth
    ? "flex flex-col items-center w-full gap-1"
    : "inline-flex flex-col items-center sm:items-start gap-1 w-full sm:w-auto";

  // Jika URL APK sudah dikonfigurasi, gunakan tautan unduhan langsung
  if (isUrlAvailable) {
    return (
      <div className={wrapperStyles}>
        <a
          id={id}
          href={appConfig.apkDownloadUrl}
          download
          className={`${baseStyles} ${sizeStyles} ${variantStyles} w-full sm:w-auto ${className}`}
          aria-label={`Unduh file instalasi APK ${appConfig.name} untuk Android`}
        >
          <Download className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
          <span>Download APK</span>
        </a>

        {showMeta && (appConfig.version || appConfig.fileSize) && (
          <div className="flex items-center gap-2 text-[11px] text-teal-800 font-medium pl-1">
            <Smartphone className="w-3.5 h-3.5 text-teal-700" />
            <span>Android</span>
            {appConfig.version && (
              <>
                <span>•</span>
                <span>{appConfig.version}</span>
              </>
            )}
            {appConfig.fileSize && (
              <>
                <span>•</span>
                <span>{appConfig.fileSize}</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // Jika URL APK belum diatur, tampilkan tombol pemicu modal "Installer segera tersedia"
  return (
    <div className={wrapperStyles}>
      <button
        id={id}
        type="button"
        onClick={() => {
          if (onOpenUnavailableModal) {
            onOpenUnavailableModal();
          }
        }}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} w-full sm:w-auto ${className}`}
        aria-haspopup="dialog"
        aria-label={`Informasi berkas unduhan APK ${appConfig.name} untuk Android`}
      >
        <Download className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
        <span>Download APK</span>
      </button>

      {showMeta && (appConfig.version || appConfig.fileSize) && (
        <div className="flex items-center gap-2 text-[11px] text-teal-800 font-medium pl-1">
          <Smartphone className="w-3.5 h-3.5 text-teal-700" />
          <span>Android</span>
          {appConfig.version && (
            <>
              <span>•</span>
              <span>{appConfig.version}</span>
            </>
          )}
          {appConfig.fileSize && (
            <>
              <span>•</span>
              <span>{appConfig.fileSize}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
