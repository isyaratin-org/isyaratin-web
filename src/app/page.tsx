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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <a href="#konten-utama" className="skip-link">
        Lewati ke konten utama
      </a>

      {/* Navigasi Utama */}
      <Navbar onOpenUnavailableModal={handleOpenModal} />

      {/* Konten Halaman */}
      <main id="konten-utama" className="flex-1">
        {/* Hero Section */}
        <Hero onOpenUnavailableModal={handleOpenModal} />

        {/* Fitur Utama Aplikasi */}
        <Features />

        {/* 3 Langkah Cara Kerja */}
        <HowItWorks />

        {/* Prasyarat Instalasi Android */}
        <Requirements />

        {/* Pertanyaan yang Sering Diajukan (FAQ) */}
        <Faq />

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
