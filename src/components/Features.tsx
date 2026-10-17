"use client";

import React from "react";
import { Camera, Mic, UserCheck, Clock, Info, Sparkles, ChevronRight } from "lucide-react";
import { appConfig, FeatureItem } from "@/config/appConfig";
import { motion } from "framer-motion";

export default function Features() {
  const getIcon = (iconName: FeatureItem["iconName"]) => {
    switch (iconName) {
      case "camera":
        return <Camera className="w-6 h-6 text-[#2DD4BF]" />;
      case "mic":
        return <Mic className="w-6 h-6 text-[#2DD4BF]" />;
      case "user":
        return <UserCheck className="w-6 h-6 text-[#2DD4BF]" />;
      case "history":
        return <Clock className="w-6 h-6 text-[#2DD4BF]" />;
      default:
        return <Camera className="w-6 h-6 text-[#2DD4BF]" />;
    }
  };

  return (
    <section
      id="fitur"
      aria-label="Fitur Unggulan Isyaratin"
      className="py-24 relative overflow-hidden text-white"
    >
      {/* Decorative seamless wave gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#092B2E]/40 to-transparent pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0E7490]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#14B8A6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E3E42]/80 border border-teal-500/40 text-xs font-bold text-[#9CE7E3] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>Kecerdasan Artifisial Dua Arah</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Fitur Canggih Berbasis AI &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3]">
              Avatar 3D Interaktif
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed">
            Menghilangkan batas komunikasi antara penyandang tunarungu dan masyarakat luas secara real-time, akurat, dan ekspresif di ponsel Android Anda.
          </p>
        </motion.div>

        {/* Grid Kartu Fitur dengan Glassmorphism & Framer Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {appConfig.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-gradient-to-b from-[#0E3E42]/70 via-[#092B2E]/80 to-[#061D20]/90 rounded-3xl p-6 sm:p-7 border border-teal-500/25 hover:border-teal-400/60 shadow-xl hover:shadow-[0_0_35px_rgba(45,212,191,0.25)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Highlight Neon Top Border on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Ikon Wadah dengan Glowing Backdrop */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#115E59]/80 to-[#0A383A]/90 border border-teal-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.2)] mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all duration-300">
                  {getIcon(feature.iconName)}
                </div>

                {/* Badge Kategori */}
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold tracking-wide bg-[#2DD4BF]/15 text-[#9CE7E3] border border-[#2DD4BF]/30 mb-3">
                  {feature.badge}
                </span>

                {/* Judul Fitur */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#9CE7E3] transition-colors">
                  {feature.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-sm text-teal-100/80 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Status / Keterangan Tag */}
              <div className="mt-6 pt-4 border-t border-teal-800/60 flex items-center justify-between text-xs text-teal-300/80">
                <span className="font-semibold text-teal-200">Tersedia di APK</span>
                <span className="flex items-center gap-1.5 text-[#2DD4BF] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                  Aktif
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catatan Inklusif Holografik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-gradient-to-r from-[#0E3E42]/60 via-[#0A2F33]/80 to-[#0E3E42]/60 border border-teal-500/30 rounded-2xl p-6 max-w-3xl mx-auto flex items-start gap-4 text-sm text-teal-100/90 shadow-xl backdrop-blur-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5 text-[#2DD4BF]" aria-hidden="true" />
          </div>
          <p className="leading-relaxed pt-1">
            <strong className="text-white font-bold">Dirancang Khusus untuk Aksesibilitas:</strong> Kamera deteksi isyarat, voice note lawan bicara, respon peragaan avatar 3D, dan riwayat transkrip terintegrasi langsung dalam satu aplikasi mandiri tanpa memerlukan perangkat keras tambahan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
