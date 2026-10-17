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
    "group relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2DD4BF] active:scale-[0.97] overflow-hidden";

  // Varian ukuran
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-5 py-2.5 text-sm gap-2.5",
    lg: "px-7 py-3.5 text-base gap-3",
  }[size];

  // Varian warna & gaya visual (Glow Cyber Teal Identity)
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#0D9488] via-[#14B8A6] to-[#2DD4BF] text-[#041F21] font-extrabold border border-[#9CE7E3]/40",
    secondary:
      "bg-[#0A383A]/80 hover:bg-[#0E4B4E] text-[#9CE7E3] border border-[#2DD4BF]/40 hover:border-[#2DD4BF]",
    header:
      "bg-gradient-to-r from-[#0D9488] to-[#2DD4BF] text-[#041F21] font-extrabold text-xs md:text-sm px-4 py-2 border border-[#9CE7E3]/50",
    white:
      "bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#9CE7E3] text-[#031B1D] font-extrabold border border-white/60",
  }[variant];

  // Wrapper style
  const wrapperStyles = isFullWidth
    ? "flex flex-col items-center w-full gap-1.5"
    : "inline-flex flex-col items-center sm:items-start gap-1.5 w-full sm:w-auto";

  const buttonContent = (
    <>
      <Download className="w-4 h-4 shrink-0" />
      <span className="tracking-wide">Download APK</span>
    </>
  );

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
          {buttonContent}
        </a>

        {showMeta && (appConfig.version || appConfig.fileSize) && (
          <div className="flex items-center gap-2 text-[11px] text-teal-200/90 font-medium pl-1">
            <Smartphone className="w-3.5 h-3.5 text-[#2DD4BF]" />
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
        {buttonContent}
      </button>

      {showMeta && (appConfig.version || appConfig.fileSize) && (
        <div className="flex items-center gap-2 text-[11px] text-teal-200/90 font-medium pl-1">
          <Smartphone className="w-3.5 h-3.5 text-[#2DD4BF]" />
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
