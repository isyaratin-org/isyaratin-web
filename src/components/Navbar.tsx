"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import DownloadButton from "./DownloadButton";
import HandshakeLogo from "./HandshakeLogo";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenUnavailableModal: () => void;
  onOpenDownloadModal?: () => void;
}

export default function Navbar({
  onOpenUnavailableModal,
  onOpenDownloadModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenModal = onOpenDownloadModal || onOpenUnavailableModal;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#061D20]/90 backdrop-blur-xl border-b border-teal-500/20 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded-xl p-1 z-10"
            aria-label={`${appConfig.name} - Beranda`}
          >
            <div className="relative">
              <HandshakeLogo
                size={38}
                variant="white-on-teal"
                className="transition-transform duration-300 group-hover:scale-105 shrink-0"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-[#9CE7E3] transition-colors leading-none">
                {appConfig.name}
              </span>
              <span className="text-[10px] font-medium text-teal-300/80 hidden sm:inline tracking-wider mt-1">
                {appConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Perfectly Centered */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 lg:gap-2 p-1.5 rounded-full shadow-lg backdrop-blur-xl bg-[#0A2F33]/80 border border-teal-500/25"
          >
            {appConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold rounded-full text-teal-100 hover:text-white transition-all duration-200 hover:bg-[#145C60]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <DownloadButton
              variant="header"
              size="sm"
              onOpenModal={handleOpenModal}
              onOpenUnavailableModal={handleOpenModal}
              id="navbar-download-button"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden z-10">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#061D20]/95 backdrop-blur-2xl border-b border-teal-500/30 shadow-2xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-4">
              <nav className="flex flex-col space-y-1">
                {appConfig.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-teal-100 hover:text-white hover:bg-[#0E4B4E]/60 border border-transparent hover:border-teal-500/30 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-teal-800/60">
                <DownloadButton
                  variant="primary"
                  size="md"
                  showMeta={true}
                  className="w-full text-center"
                  onOpenModal={() => {
                    setMobileMenuOpen(false);
                    handleOpenModal();
                  }}
                  onOpenUnavailableModal={() => {
                    setMobileMenuOpen(false);
                    handleOpenModal();
                  }}
                  id="mobile-navbar-download-button"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
