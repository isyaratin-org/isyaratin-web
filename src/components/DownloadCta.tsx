"use client";

import React from "react";
import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";

interface DownloadCtaProps {
  onOpenUnavailableModal: () => void;
}

export default function DownloadCta({ onOpenUnavailableModal }: DownloadCtaProps) {
  return (
    <section
      id="unduh"
      aria-label="Unduh Aplikasi Isyaratin"
      className="py-24 relative overflow-hidden text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          Siap Merasakan Kemudahan Komunikasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#9CE7E3]">
            Dua Arah Bahasa Isyarat?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto leading-relaxed"
        >
          Unduh installer resmi APK Isyaratin ke ponsel Android Anda sekarang dan mulailah berinteraksi tanpa batas bahasa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 pt-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <DownloadButton
            variant="white"
            size="lg"
            showMeta={true}
            className="w-full sm:w-auto text-center"
            onOpenUnavailableModal={onOpenUnavailableModal}
            id="cta-download-button"
          />
        </motion.div>
      </div>
    </section>
  );
}
