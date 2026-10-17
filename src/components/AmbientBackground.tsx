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
      <div className="absolute inset-0 bg-grid-cyber opacity-35" />

      {/* Floating Glowing Aurora Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#156669]/35 via-[#0E7490]/25 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#0D9488]/30 via-[#115E59]/20 to-transparent blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-2/3 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#0F766E]/25 via-[#042F2E]/30 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#14B8A6]/20 via-[#0D4B4E]/30 to-transparent blur-[110px]"
      />

      {/* Floating Sparkle Dots / Constellation Effect */}
      <div className="absolute inset-0">
        {[
          { top: "12%", left: "15%", delay: 0, dur: 4 },
          { top: "22%", left: "82%", delay: 1.2, dur: 5 },
          { top: "38%", left: "8%", delay: 2.1, dur: 4.5 },
          { top: "45%", left: "92%", delay: 0.8, dur: 6 },
          { top: "58%", left: "22%", delay: 2.7, dur: 5.2 },
          { top: "72%", left: "78%", delay: 1.5, dur: 4.8 },
          { top: "85%", left: "14%", delay: 3.1, dur: 5.5 },
          { top: "90%", left: "65%", delay: 0.5, dur: 4.2 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#9CE7E3]"
            style={{ top: star.top, left: star.left }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: star.dur,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
