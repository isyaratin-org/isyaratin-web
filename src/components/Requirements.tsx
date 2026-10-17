"use client";

import React from "react";
import { Smartphone, Camera, HardDrive, ShieldAlert, AlertTriangle, Sparkles } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import { motion } from "framer-motion";

export default function Requirements() {
  const getItemIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-5 h-5 text-[#2DD4BF]" />;
      case 1:
        return <Camera className="w-5 h-5 text-[#2DD4BF]" />;
      case 2:
        return <HardDrive className="w-5 h-5 text-[#2DD4BF]" />;
      case 3:
        return <ShieldAlert className="w-5 h-5 text-[#2DD4BF]" />;
      default:
        return <Smartphone className="w-5 h-5 text-[#2DD4BF]" />;
    }
  };

  return (
    <section id="prasyarat" className="py-24 relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#0E7490]/15 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Kesesuaian Perangkat</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Prasyarat Sistem di{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3]">
              Perangkat Android
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed">
            Pastikan smartphone Android Anda memenuhi hal-hal berikut agar fitur AI penerjemah dan respon avatar 3D dapat beroperasi secara optimal dan lancar.
          </p>
        </motion.div>

        {/* Daftar Kartu Prasyarat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {appConfig.requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-6 rounded-3xl border transition-all duration-300 backdrop-blur-xl ${
                req.isImportant
                  ? "bg-gradient-to-b from-[#0E3E42]/80 via-[#092B2E]/90 to-[#061D20] border-teal-400/50 shadow-[0_0_30px_rgba(45,212,191,0.2)]"
                  : "bg-gradient-to-b from-[#0E3E42]/50 via-[#092B2E]/70 to-[#061D20]/80 border-teal-500/20 shadow-lg"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#115E59]/80 to-[#0A383A]/90 border border-teal-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                  {getItemIcon(index)}
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {req.title}
                    </h3>
                    {req.isImportant && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#2DD4BF]/15 text-[#9CE7E3] border border-[#2DD4BF]/30">
                        Wajib
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-bold text-[#2DD4BF]">
                    {req.detail}
                  </div>

                  <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed pt-1">
                    {req.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kotak Pengingat Izin Instalasi Holografik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#0E3E42]/70 via-[#0A2F33]/85 to-[#0E3E42]/70 border border-teal-400/40 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-teal-100/90">
            <h4 className="font-bold text-white text-base">
              Panduan Izin &quot;Instal dari Sumber Ini&quot; di Android
            </h4>
            <p className="leading-relaxed">
              Karena berkas installer diunduh langsung dari website resmi dan bukan melalui Google Play Store, sistem Android akan menampilkan dialog keamanan standar. Silakan pilih <strong>Setelan (Settings) &gt; Aktifkan &apos;Izinkan dari sumber ini&apos;</strong>, lalu kembali untuk melanjutkan instalasi. Berkas APK resmi Isyaratin dijamin 100% aman dan bebas dari malware.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
