"use client";

import React from "react";

interface HandshakeLogoProps {
  className?: string;
  size?: number;
  variant?: "teal-on-white" | "white-on-teal" | "stroke-only";
  strokeColor?: string;
}

export default function HandshakeLogo({
  className = "",
  size = 36,
  variant = "white-on-teal",
  strokeColor,
}: HandshakeLogoProps) {
  if (variant === "teal-on-white") {
    return (
      <div
        className={`rounded-xl bg-white shadow-xs flex items-center justify-center p-1 border border-teal-100 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          stroke={strokeColor || "#156669"}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Top Horizontal Line & Right Wrist */}
          <path d="M68 62 H92 C104 58 118 61 133 59 L137 102" />

          {/* Left Wrist & Diagonal Back of Hand */}
          <path d="M68 62 L64 101 L93 126" />

          {/* Thumb Clasping Down & Around */}
          <path d="M92 62 C82 72 78 83 82 91 C85 97 93 98 98 92 C104 84 114 84 128 98" />

          {/* 3 Clasping Finger Knuckles */}
          <path d="M93 126 C100 132 108 128 110 120 C114 125 122 122 125 113 C128 117 136 112 136 102" />
        </svg>
      </div>
    );
  }

  if (variant === "white-on-teal") {
    return (
      <div
        className={`rounded-xl bg-[#156669] shadow-xs flex items-center justify-center p-1.5 border border-[#1A777B] ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M68 62 H92 C104 58 118 61 133 59 L137 102" />
          <path d="M68 62 L64 101 L93 126" />
          <path d="M92 62 C82 72 78 83 82 91 C85 97 93 98 98 92 C104 84 114 84 128 98" />
          <path d="M93 126 C100 132 108 128 110 120 C114 125 122 122 125 113 C128 117 136 112 136 102" />
        </svg>
      </div>
    );
  }

  // Stroke-only variant (transparent background)
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ width: size, height: size }}
      fill="none"
      stroke={strokeColor || "currentColor"}
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M68 62 H92 C104 58 118 61 133 59 L137 102" />
      <path d="M68 62 L64 101 L93 126" />
      <path d="M92 62 C82 72 78 83 82 91 C85 97 93 98 98 92 C104 84 114 84 128 98" />
      <path d="M93 126 C100 132 108 128 110 120 C114 125 122 122 125 113 C128 117 136 112 136 102" />
    </svg>
  );
}
