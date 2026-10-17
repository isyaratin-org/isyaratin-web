"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import DownloadButton from "./DownloadButton";
import HandshakeLogo from "./HandshakeLogo";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenUnavailableModal: () => void;
}

export default function Navbar({ onOpenUnavailableModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#061D20]/80 backdrop-blur-xl border-b border-teal-500/20 py-3 shadow-xl shadow-black/30"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded-xl p-1"
            aria-label={`${appConfig.name} - Beranda`}
          >
            <div className="relative">
              <HandshakeLogo
                size={38}
                variant="white-on-teal"
                className="transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-ping opacity-75" />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-[#9CE7E3] transition-colors flex items-center gap-1.5">
                {appConfig.name}
                <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF] opacity-80" />
              </span>
              <span className="text-[10px] font-medium -mt-1 text-teal-300/80 hidden sm:inline tracking-wider">
                {appConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-1 lg:gap-2 p-1.5 rounded-full shadow-lg backdrop-blur-xl bg-[#0A2F33]/60 border border-teal-500/25"
          >
            {appConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-1.5 text-sm font-semibold rounded-full text-teal-100 hover:text-white transition-all duration-200 hover:bg-[#145C60]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <DownloadButton
              variant="header"
              size="sm"
              onOpenUnavailableModal={onOpenUnavailableModal}
              id="navbar-download-button"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-teal-100 hover:text-white hover:bg-teal-900/40 border border-teal-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#9CE7E3]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#061D20]/95 backdrop-blur-2xl border-b border-teal-500/30 px-5 pt-4 pb-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-2 mb-5">
              {appConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-teal-100 hover:text-white hover:bg-[#0E4B4E]/60 border border-transparent hover:border-teal-500/30 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-teal-800/60 flex flex-col gap-2">
              <DownloadButton
                variant="primary"
                size="md"
                showMeta={true}
                className="w-full text-center"
                onOpenUnavailableModal={() => {
                  setMobileMenuOpen(false);
                  onOpenUnavailableModal();
                }}
                id="mobile-navbar-download-button"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
