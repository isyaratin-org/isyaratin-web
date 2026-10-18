"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import HandshakeLogo from "./HandshakeLogo";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#041618] text-teal-100/90 pt-16 pb-12 border-t border-teal-500/20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-teal-900/60">
          {/* Identitas Isyaratin */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded-xl group"
              aria-label={`${appConfig.name} - Beranda`}
            >
              <HandshakeLogo
                size={38}
                variant="white-on-teal"
                className="shrink-0 transition-transform group-hover:scale-105"
              />
              <span className="font-black text-2xl text-white tracking-wider group-hover:text-[#9CE7E3] transition-colors">
                {appConfig.name}
              </span>
            </Link>

            <p className="text-sm text-teal-200/80 leading-relaxed max-w-sm">
              {appConfig.shortDescription}
            </p>
          </div>

          {/* Tautan Navigasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              {appConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-teal-200/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded px-1 -mx-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi Berkas & Platform */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">
              Platform & Rilis
            </h3>
            <ul className="space-y-2 text-sm text-teal-200/80">
              <li>Platform: <span className="text-white font-semibold">Android OS</span></li>
              <li>Format: <span className="text-white font-semibold">APK Package</span></li>
              {appConfig.version && (
                <li>Versi: <span className="text-white font-semibold">{appConfig.version}</span></li>
              )}
              {appConfig.fileSize && (
                <li>Ukuran: <span className="text-white font-semibold">{appConfig.fileSize}</span></li>
              )}
            </ul>
          </div>

          {/* Kontak & Komunitas */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">
              Kontak Tim
            </h3>
            <p className="text-xs text-teal-200/80 leading-relaxed">
              {appConfig.contact.supportText}
            </p>
            <div className="space-y-2 pt-1 text-sm">
              <a
                href={`mailto:${appConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-[#9CE7E3] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{appConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Baris Hak Cipta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300/60">
          <p>
            &copy; {currentYear} {appConfig.name}. {appConfig.tagline}.
          </p>
          <p className="text-teal-300/60 text-center sm:text-right">
            Asisten Komunikasi Dua Arah Bahasa Isyarat Berbasis AI dengan Avatar 3D.
          </p>
        </div>
      </div>
    </footer>
  );
}
