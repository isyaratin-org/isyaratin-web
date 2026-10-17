"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20" />

      {/* Floating Glowing Aurora Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#156669]/25 via-[#0E7490]/15 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#0D9488]/20 via-[#115E59]/15 to-transparent blur-[130px]"
      />
    </div>
  );
}
