# Rencana Penyederhanaan Visual Isyaratin

Tujuan: tampilan tetap **dark teal**, tapi dirapikan jadi **clean & informatif** ala arkavidia.com — kurangi ikon dekoratif, glow/shadow berlebih, animasi, dan teks redundan.

## Prinsip
- Kurangi "noise" visual: hapus ikon dekoratif yang tidak menambah informasi.
- Satu pesan per elemen, tanpa pengulangan (tagline muncul berulang di banyak tempat).
- Whitespace lebih lega, border lebih tipis, glow lebih halus.
- Pertahankan identitas teal + aksesibilitas (skip-link, focus ring, reduced-motion).

## Perubahan per File

### 1. `src/config/appConfig.ts` — pangkas teks
- `shortDescription`: ringkas jadi 1 kalimat (buang "teman Tuli (penyandang tunarungu)" yang bertele-tele).
- `features[].badge`: hapus field badge (atau kosongkan) — badge kategori di kartu dihapus.
- `howItWorks[].detail`: hapus field `detail` (tips box dihapus).
- `requirements[].description`: ringkas tiap deskripsi.
- `faqs[].highlight`: pertahankan hanya yang benar-benar penting, hapus sisanya.
- `contact.supportText` / `communityNote`: ringkas.

### 2. `src/components/Hero.tsx` — fokus judul + CTA
- Hapus: badge tagline (Sparkles + animate-ping), soundwave equalizer (Activity), 2 pill fitur (Smartphone/ShieldCheck), catatan transparan panjang.
- Hapus: paper airplane SVG + flight trails.
- Pertahankan: judul gradasi, deskripsi singkat, 2 tombol CTA, PhoneMockup.
- Kurangi floating chips di sekitar phone (opsional: hapus 1).

### 3. `src/components/Features.tsx` — kartu minimal
- Hapus: badge kategori (`feature.badge`), status tag "Tersedia di APK / Aktif" di footer kartu.
- Hapus: catatan inklusif holografik (Info box) — atau ringkas jadi 1 baris.
- Kurangi: shadow glow hover, highlight neon top border.
- Pertahankan: ikon fitur (fungsional), judul, deskripsi.

### 4. `src/components/HowItWorks.tsx`
- Hapus: tips box (`step.detail`), connector line glowing.
- Hapus: link "Butuh panduan lengkap..." (redundan dengan FAQ).

### 5. `src/components/Requirements.tsx`
- Hapus: kotak pengingat izin instalasi holografik (AlertTriangle) — atau ringkas.
- Kurangi: badge "Wajib" hanya untuk yang penting.

### 6. `src/components/Faq.tsx`
- Hapus: `highlight` box (CheckCircle2) bila tidak penting.
- Kurangi: shadow glow pada item terbuka.

### 7. `src/components/DownloadCta.tsx`
- Hapus: pulse rings (animate-ping), badge tagline (Sparkles), 2 info pill (Smartphone/ShieldCheck).
- Pertahankan: judul, deskripsi singkat, tombol unduh.

### 8. `src/components/Footer.tsx`
- Hapus: Sparkles di logo, Heart + "Dikembangkan dengan semangat inklusivitas".
- Ringkas: deskripsi (buang pengulangan tagline + shortDescription).
- Kurangi: kolom "Platform & Rilis" bila kosong (version/fileSize tidak di-set).

### 9. `src/components/Navbar.tsx`
- Hapus: animate-ping dot di logo, Sparkles di nama brand.
- Kurangi: shadow glow pada logo.

### 10. `src/components/DownloadButton.tsx`
- Hapus: Sparkles di dalam tombol, animated light sweep effect.
- Kurangi: shadow glow berlebih (0_0_25px → lebih halus).

### 11. `src/components/AmbientBackground.tsx`
- Kurangi: jumlah orb (4 → 2), hapus sparkle dots (constellation), turunkan opacity grid.
- Pertahankan: 1-2 orb lembut untuk kedalaman.

### 12. `src/app/globals.css`
- Kurangi: keyframe yang tidak terpakai (shimmer, aurora, orbit, plane) bila komponennya dihapus.
- Pertahankan: float, pulse-glow (bila masih dipakai), reduced-motion.

## Urutan Eksekusi
1. appConfig.ts (teks) → 2. Hero → 3. Features → 4. HowItWorks → 5. Requirements → 6. Faq → 7. DownloadCta → 8. Footer → 9. Navbar → 10. DownloadButton → 11. AmbientBackground → 12. globals.css → review.

## Catatan
- Semua perubahan bersifat visual/teks, tidak mengubah logika atau struktur data (kecuali field yang dihapus di appConfig harus disinkronkan dengan komponen pemakainya).
- Pastikan `npm run build` / `npm run lint` tetap lolos setelah perubahan.
