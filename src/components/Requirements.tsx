"use client";

import React from "react";
import { Smartphone, Camera, HardDrive, ShieldAlert, AlertTriangle } from "lucide-react";
import { appConfig } from "@/config/appConfig";

export default function Requirements() {
  const getItemIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-5 h-5 text-[#156669]" />;
      case 1:
        return <Camera className="w-5 h-5 text-[#156669]" />;
      case 2:
        return <HardDrive className="w-5 h-5 text-teal-600" />;
      case 3:
        return <ShieldAlert className="w-5 h-5 text-[#156669]" />;
      default:
        return <Smartphone className="w-5 h-5 text-[#156669]" />;
    }
  };

  return (
    <section id="prasyarat" className="py-20 bg-white border-t border-teal-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F3F3] border border-teal-200 text-xs font-bold text-[#156669]">
            <span>Kesesuaian Perangkat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E30] tracking-tight">
            Prasyarat Sistem di Perangkat Android
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pastikan smartphone Android Anda memenuhi hal-hal berikut untuk memastikan fitur AI penerjemah dan avatar 3D berjalan optimal.
          </p>
        </div>

        {/* Daftar Kartu Prasyarat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {appConfig.requirements.map((req, index) => (
            <div
              key={req.title}
              className={`p-6 rounded-2xl border transition-all ${
                req.isImportant
                  ? "bg-[#F8FCFC] border-[#156669]/40 shadow-xs"
                  : "bg-white border-teal-100"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-teal-200 flex items-center justify-center shrink-0 shadow-xs">
                  {getItemIcon(index)}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0D2E30]">
                      {req.title}
                    </h3>
                    {req.isImportant && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E6F3F3] text-[#156669]">
                        Diperlukan
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-[#156669]">
                    {req.detail}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {req.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kotak Pengingat Izin Instalasi */}
        <div className="mt-10 max-w-4xl mx-auto bg-[#F8FCFC] border border-[#156669]/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#E6F3F3] text-[#156669] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            <h4 className="font-bold text-[#0D2E30]">
              Panduan Izin &quot;Instal dari Sumber Ini&quot; di Android
            </h4>
            <p className="leading-relaxed">
              Karena berkas installer diunduh langsung dari web dan bukan melalui Google Play Store, Android akan memunculkan dialog verifikasi keamanan. Silakan pilih <strong>Setelan (Settings) &gt; Aktifkan &apos;Izinkan dari sumber ini&apos;</strong>, lalu kembali untuk melanjutkan instalasi. Berkas APK resmi Isyaratin terjamin aman dan bebas dari malware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
