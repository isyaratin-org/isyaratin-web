"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Requirements from "@/components/Requirements";
import Faq from "@/components/Faq";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#061D20] text-teal-50 selection:bg-[#156669] selection:text-[#9CE7E3]">
      <a href="#konten-utama" className="skip-link">
        Lewati ke konten utama
      </a>

      {/* Dynamic Animated Ambient Background */}
      <AmbientBackground />

      {/* Navigasi Utama */}
      <Navbar onOpenUnavailableModal={handleOpenModal} />

      {/* Konten Halaman */}
      <main id="konten-utama" className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero onOpenUnavailableModal={handleOpenModal} />

        <div className="section-divider max-w-5xl mx-auto" />

        {/* Fitur Utama Aplikasi */}
        <Features />

        <div className="section-divider max-w-5xl mx-auto" />

        {/* 3 Langkah Cara Kerja */}
        <HowItWorks />

        <div className="section-divider max-w-5xl mx-auto" />

        {/* Prasyarat Instalasi Android */}
        <Requirements />

        <div className="section-divider max-w-5xl mx-auto" />

        {/* Pertanyaan yang Sering Diajukan (FAQ) */}
        <Faq />

        <div className="section-divider max-w-5xl mx-auto" />

        {/* Call to Action Unduhan */}
        <DownloadCta onOpenUnavailableModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialog Status Unduhan (Aktif bila URL APK belum disetel) */}
      <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
