"use client";

import React from "react";
import { Camera, Mic, UserCheck, Clock } from "lucide-react";
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
      className="py-24 relative overflow-hidden text-white scroll-mt-20"
    >
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
            Fitur Canggih Berbasis AI &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#9CE7E3]">
              Avatar 3D Interaktif
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed">
            Menghilangkan batas komunikasi antara penyandang tunarungu dan masyarakat luas secara real-time, akurat, dan ekspresif di ponsel Android Anda.
          </p>
        </motion.div>

        {/* Grid Kartu Fitur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {appConfig.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative card-accent rounded-3xl p-6 sm:p-7 flex flex-col"
            >
              {/* Ikon Wadah */}
              <div className="w-14 h-14 rounded-2xl bg-[#115E59]/60 border border-teal-400/30 flex items-center justify-center mb-6">
                {getIcon(feature.iconName)}
              </div>

              {/* Judul Fitur */}
              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#9CE7E3] transition-colors">
                {feature.title}
              </h3>

              {/* Deskripsi */}
              <p className="text-sm text-teal-100/80 leading-relaxed font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
