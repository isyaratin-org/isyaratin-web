"use client";

import React from "react";
import { Camera, Mic, UserCheck, Clock, Info, Sparkles } from "lucide-react";
import { appConfig, FeatureItem } from "@/config/appConfig";

export default function Features() {
  const getIcon = (iconName: FeatureItem["iconName"]) => {
    switch (iconName) {
      case "camera":
        return <Camera className="w-6 h-6 text-[#156669]" />;
      case "mic":
        return <Mic className="w-6 h-6 text-[#156669]" />;
      case "user":
        return <UserCheck className="w-6 h-6 text-[#156669]" />;
      case "history":
        return <Clock className="w-6 h-6 text-[#156669]" />;
      default:
        return <Camera className="w-6 h-6 text-[#156669]" />;
    }
  };

  return (
    <section id="fitur" aria-label="Fitur Unggulan Isyaratin" className="py-20 bg-white border-t border-teal-100/60 relative overflow-hidden">
      {/* Subtle organic ambient gradients */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-[#E6F3F3]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-teal opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F3F3] border border-teal-200 text-xs font-bold text-[#156669]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fitur Unggulan Isyaratin</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D2E30] tracking-tight">
            Komunikasi Dua Arah Berbasis AI &amp; Avatar 3D
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
            Menghilangkan batas komunikasi antara penyandang tunarungu dan masyarakat melalui penerjemahan cerdas yang cepat, akurat, dan ekspresif.
          </p>
        </div>

        {/* Grid Kartu Fitur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {appConfig.features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#F8FCFC] hover:bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-teal-100 hover:border-[#156669]/50 shadow-xs hover:shadow-xl hover:shadow-[#156669]/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Highlight Aksen Teal saat Hover */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#156669] to-[#9CE7E3] opacity-0 group-hover:opacity-100 rounded-b transition-opacity duration-300" />

              <div>
                {/* Ikon Wadah */}
                <div className="w-12 h-12 rounded-xl bg-white border border-teal-200/80 flex items-center justify-center shadow-xs mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(feature.iconName)}
                </div>

                {/* Badge Kategori */}
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide bg-[#E6F3F3] text-[#156669] mb-2.5">
                  {feature.badge}
                </span>

                {/* Judul Fitur */}
                <h3 className="text-xl font-bold text-[#0D2E30] mb-2 group-hover:text-[#156669] transition-colors">
                  {feature.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-base text-slate-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Status / Keterangan Tag */}
              <div className="mt-6 pt-4 border-t border-teal-100/70 flex items-center justify-between text-sm text-slate-700">
                <span className="font-semibold text-teal-800">Tersedia di APK</span>
                <span className="w-3 h-3 rounded-full bg-emerald-600 ring-2 ring-emerald-100" role="img" aria-label="Fitur aktif" />
              </div>
            </div>
          ))}
        </div>

        {/* Catatan */}
        <div className="mt-12 bg-[#F3F8F8] border-2 border-teal-200/80 rounded-2xl p-6 max-w-3xl mx-auto flex items-start gap-4 text-base text-slate-700">
          <Info className="w-6 h-6 text-[#156669] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong className="text-[#0D2E30]">Dirancang inklusif:</strong> Kamera isyarat, voice note, respon avatar 3D, dan transkrip riwayat tersedia langsung di aplikasi Isyaratin Android.
          </p>
        </div>
      </div>
    </section>
  );
}
