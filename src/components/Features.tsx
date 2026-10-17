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
    <section id="fitur" className="py-20 bg-white border-t border-teal-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F3F3] border border-teal-200 text-xs font-bold text-[#156669]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fitur Unggulan Isyaratin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E30] tracking-tight">
            Komunikasi Dua Arah Berbasis AI &amp; Avatar 3D
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Menghilangkan batas komunikasi antara penyandang tunarungu dan masyarakat melalui penerjemahan cerdas yang cepat, akurat, dan ekspresif.
          </p>
        </div>

        {/* Grid Kartu Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appConfig.features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#F8FCFC] hover:bg-white rounded-2xl p-6 border border-teal-100 hover:border-[#156669]/50 shadow-xs hover:shadow-xl hover:shadow-[#156669]/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Highlight Aksen Teal saat Hover */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#156669] to-[#9CE7E3] opacity-0 group-hover:opacity-100 rounded-b transition-opacity duration-300" />

              <div>
                {/* Ikon Wadah */}
                <div className="w-12 h-12 rounded-xl bg-white border border-teal-200/80 flex items-center justify-center shadow-xs mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(feature.iconName)}
                </div>

                {/* Badge Kategori */}
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#E6F3F3] text-[#156669] mb-2.5">
                  {feature.badge}
                </span>

                {/* Judul Fitur */}
                <h3 className="text-lg font-bold text-[#0D2E30] mb-2 group-hover:text-[#156669] transition-colors">
                  {feature.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Status / Keterangan Tag */}
              <div className="mt-6 pt-4 border-t border-teal-100/70 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-teal-800">Tersedia di APK</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-100" title="Fitur Aktif" />
              </div>
            </div>
          ))}
        </div>

        {/* Kotak Transparansi Konten */}
        <div className="mt-12 bg-[#F3F8F8] border border-teal-200/80 rounded-2xl p-5 max-w-3xl mx-auto flex items-start gap-3.5 text-xs text-slate-700">
          <Info className="w-5 h-5 text-[#156669] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#0D2E30]">Integrasi Nyata:</strong> Seluruh fitur di atas dirancang sesuai antarmuka resmi aplikasi Isyaratin Android yang tertera pada pratinjau mockup (Kamera Isyarat, Voice Note, Respon Avatar 3D, dan Transkrip Riwayat).
          </p>
        </div>
      </div>
    </section>
  );
}
