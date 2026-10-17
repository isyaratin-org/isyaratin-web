"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import DownloadButton from "./DownloadButton";
import HandshakeLogo from "./HandshakeLogo";

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

  const isWhiteNav = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isWhiteNav
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-100 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl p-1"
            aria-label={`${appConfig.name} - Beranda`}
          >
            <HandshakeLogo
              size={36}
              variant={isWhiteNav ? "white-on-teal" : "teal-on-white"}
              className="transition-transform group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-xl tracking-wider transition-colors ${
                  isWhiteNav
                    ? "text-[#0D2E30] group-hover:text-[#156669]"
                    : "text-white group-hover:text-teal-200"
                }`}
              >
                {appConfig.name}
              </span>
              <span
                className={`text-[10px] font-medium -mt-1 hidden sm:inline ${
                  isWhiteNav ? "text-teal-700" : "text-teal-200"
                }`}
              >
                {appConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className={`hidden md:flex items-center gap-1 lg:gap-2 p-1.5 rounded-full shadow-xs backdrop-blur-md transition-all ${
              isWhiteNav
                ? "bg-white/80 border border-teal-100/80"
                : "bg-white/10 border border-white/20"
            }`}
          >
            {appConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 ${
                  isWhiteNav
                    ? "text-[#0D2E30] hover:text-[#156669] hover:bg-[#E6F3F3] focus-visible:ring-[#156669]"
                    : "text-white hover:text-white hover:bg-white/20 focus-visible:ring-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <DownloadButton
              variant={isWhiteNav ? "header" : "white"}
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
              className={`p-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 ${
                isWhiteNav
                  ? "text-[#0D2E30] hover:bg-[#E6F3F3] focus-visible:ring-[#156669]"
                  : "text-white hover:bg-white/15 focus-visible:ring-white"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-teal-100 px-4 pt-3 pb-6 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1 mb-4">
            {appConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#0D2E30] hover:bg-[#E6F3F3] hover:text-[#156669] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-teal-100 flex flex-col gap-2">
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
        </div>
      )}
    </header>
  );
}
