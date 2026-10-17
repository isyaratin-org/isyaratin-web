"use client";

import React from "react";
import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import HandshakeLogo from "./HandshakeLogo";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#093537] text-teal-100/90 pt-16 pb-12 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-teal-900/80">
          {/* Identitas Isyaratin (2 Kolom) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-xl"
              aria-label={`${appConfig.name} - Beranda`}
            >
            <HandshakeLogo size={36} variant="teal-on-white" className="shrink-0" />
              <span className="font-black text-2xl text-white tracking-wider">
                {appConfig.name}
              </span>
            </Link>

            <p className="text-sm text-teal-200/80 leading-relaxed max-w-sm">
              {appConfig.tagline}. {appConfig.shortDescription}
            </p>

            <div className="text-xs text-teal-300/70 pt-2 flex items-center gap-1.5">
              <span>Dikembangkan dengan semangat inklusivitas</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
              <span>untuk Indonesia.</span>
            </div>
          </div>

          {/* Tautan Navigasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              {appConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-teal-200/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1 -mx-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi Berkas & Platform */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Platform &amp; Rilis
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Kontak Tim (Placeholder)
            </h3>
            <p className="text-xs text-teal-200/80 leading-relaxed">
              {appConfig.contact.supportText}
            </p>
            <div className="space-y-2 pt-1 text-sm">
              <a
                href={`mailto:${appConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{appConfig.contact.email}</span>
              </a>

              {appConfig.contact.repoUrl && (
                <div className="pt-1">
                  <a
                    href={appConfig.contact.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-teal-300/80 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>Repositori Kode Sumber</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Baris Hak Cipta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300/60">
          <p>
            &copy; {currentYear} {appConfig.name}. Menjembatani Komunikasi, Mewujudkan Inklusi.
          </p>
          <p className="text-teal-300/60 text-center sm:text-right">
            Asisten Komunikasi Dua Arah Bahasa Isyarat Berbasis AI dengan Avatar 3D.
          </p>
        </div>
      </div>
    </footer>
  );
}
