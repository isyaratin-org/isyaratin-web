"use client";

import React from "react";
import { Smartphone, Camera, HardDrive, ShieldAlert } from "lucide-react";
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
    <section id="prasyarat" className="py-24 relative overflow-hidden text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Prasyarat Sistem di{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3]">
              Perangkat Android
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed">
            Pastikan smartphone Android Anda memenuhi hal-hal berikut agar fitur AI penerjemah dan respon avatar 3D beroperasi optimal.
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
              className="p-6 rounded-3xl card-accent"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#115E59]/60 border border-teal-400/30 flex items-center justify-center shrink-0">
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
      </div>
    </section>
  );
}
