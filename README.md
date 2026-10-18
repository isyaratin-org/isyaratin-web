# Isyaratin Web

Landing page modern, responsif, dan inklusif untuk **ISYARATIN** — *AI-Powered Two-Way Sign Language Communication Assistant for Inclusive Accessibility With 3D Avatar*.

Aplikasi berbasis AI yang menjembatani komunikasi dua arah antara penyandang tunarungu dan masyarakat melalui penerjemahan bahasa isyarat ke teks/suara serta teks/suara ke avatar bahasa isyarat 3D di perangkat Android.

---

## Fitur Utama Halaman

1. **Header & Navigasi**: Logo jabat tangan (handshake) resmi Isyaratin, tagline *"Menjembatani Komunikasi, Mewujudkan Inklusi"*, navigasi ke bagian Fitur AI, Cara Kerja, Prasyarat, FAQ, dan tombol pintas unduh APK.
2. **Hero Section & Multi-Screen Mockup**:
   - Header banner dengan warna utama deep teal `#156669` dan aksen kurva organik sesuai mockup.
   - Ilustrasi origami pesawat kertas dengan jejak garis terbang putus-putus (*dotted flight paths*).
   - Mockup smartphone Android interaktif yang menampilkan **Beranda Aplikasi** (Halo John Dower, tombol Mulai Isyarat, Voice Note, dan Riwayat Terbaru) serta switcher ke layar **Respon Avatar 3D**.
   - Tombol utama "Download APK" dan tombol sekunder "Pelajari Fitur AI".
3. **Fitur Unggulan**:
   - **Mulai Isyarat (Kamera)**: Deteksi gerakan tangan real-time ke teks dan suara.
   - **Voice Note Interaktif**: Menerjemahkan ucapan suara menjadi gerakan bahasa isyarat.
   - **Respon Avatar Isyarat 3D**: Visualisasi gestur avatar 3D yang ekspresif dengan kotak teks balasan.
   - **Riwayat & Catatan Sesi**: Penyimpanan riwayat konsultasi dan percakapan.
4. **Alur Kerja (3 Langkah)**: Panduan praktis mulai dari pengunduhan berkas APK, perizinan instalasi sistem Android, hingga mulai berkomunikasi dua arah.
5. **Prasyarat Instalasi**: Panduan khusus untuk smartphone Android, kebutuhan izin kamera & mikrofon, serta panduan izin *"Instal dari sumber ini"*.
6. **FAQ Interaktif**: Pertanyaan dan jawaban penting mengenai cara memasang berkas APK, cara kerja avatar 3D, alasan dialog keamanan standar Android, dan status ketersediaan installer.
7. **Banner CTA & Footer**: Ajakan unduh penutup, informasi rilis berkas, tautan cepat, dan kontak tim pengembang.
8. **Mekanisme Unduhan Cerdas**:
   - Jika `NEXT_PUBLIC_APK_DOWNLOAD_URL` sudah disetel: Tombol unduh langsung mengarahkan dan mengunduh berkas APK asli.
   - Jika `NEXT_PUBLIC_APK_DOWNLOAD_URL` belum disetel atau kosong: Muncul modal dialog informatif yang ramah *"Installer Segera Tersedia"* tanpa mengarahkan pengunjung ke tautan palsu/rusak.
   - Metadata versi dan ukuran berkas hanya ditampilkan jika nilainya tersedia pada konfigurasi.

---

## Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Font**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) melalui `next/font/google`

---

## Cara Mengatur URL APK (Environment Variable)

Proyek ini menggunakan satu sumber URL resmi untuk pengunduhan berkas APK.

1. Salin berkas percontohan lingkungan ke `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(atau buat berkas `.env.local` secara manual)*

2. Buka berkas `.env.local` dan atur nilai variabel berikut:
   ```env
   # Masukkan URL tautan unduhan langsung berkas installer APK Isyaratin
   NEXT_PUBLIC_APK_DOWNLOAD_URL="https://pub-2406c94c4bb645119ede540ffe2a6ab7.r2.dev/app-release.apk"

   # (Opsional) Versi rilis aplikasi
   NEXT_PUBLIC_APP_VERSION="v1.0"

   # (Opsional) Estimasi ukuran berkas APK
   NEXT_PUBLIC_APP_FILE_SIZE="173 MB"

   # (Opsional) Checksum SHA-256 untuk verifikasi integritas APK
   NEXT_PUBLIC_APP_SHA256="dec4ff11ac0a06a6c912507641af904105ae5a2f7ac814f4768e9d825f02e811"
   ```

3. Jika `NEXT_PUBLIC_APK_DOWNLOAD_URL` dikosongkan (`""`), antarmuka secara otomatis menampilkan pesan informatif bahwa berkas sedang disiapkan saat pengguna menekan tombol **"Download APK"**.

---

## Cara Menjalankan Proyek Secara Lokal

### 1. Prasyarat
Pastikan Anda telah memasang **Node.js** (versi 18.18 atau lebih baru) dan **npm** di komputer Anda.

### 2. Pemasangan Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka peramban Anda dan akses [http://localhost:3000](http://localhost:3000).

### 4. Membangun Versi Produksi (Build)
```bash
npm run build
npm run start
```

---

## Struktur Direktori

```text
isyaratin-web/
├── public/                 # Berkas statis (logo, favicon)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Pengaturan tema & Tailwind CSS
│   │   ├── icon.svg        # Favicon vektor Isyaratin
│   │   ├── layout.tsx      # RootLayout & SEO metadata
│   │   └── page.tsx        # Halaman utama landing page
│   ├── components/         # Komponen antarmuka modular
│   │   ├── DownloadButton.tsx  # Tombol unduh dengan validasi URL
│   │   ├── DownloadCta.tsx     # Banner CTA penutup
│   │   ├── DownloadModal.tsx   # Dialog informasi saat APK belum rilis
│   │   ├── Faq.tsx             # Akordion FAQ interaktif & aksesibel
│   │   ├── Features.tsx        # Kartu manfaat & fitur aplikasi
│   │   ├── Footer.tsx          # Identitas, navigasi, dan kontak
│   │   ├── Hero.tsx            # Bagian pembuka dengan CTA utama
│   │   ├── HowItWorks.tsx      # Alur 3 langkah instalasi
│   │   ├── Navbar.tsx          # Navigasi atas responsif & mobile menu
│   │   ├── PhoneMockup.tsx     # Mockup smartphone Android interaktif
│   │   └── Requirements.tsx    # Kartu prasyarat sistem Android
│   └── config/
│       └── appConfig.ts    # Pusat konfigurasi konten, kontak, dan tautan
├── .env.example            # Contoh variabel lingkungan
├── .env.local              # Konfigurasi lokal pengembang
├── package.json
└── README.md
```

---

## Lisensi & Hak Cipta
Hak Cipta © 2026 Tim Isyaratin. Seluruh hak cipta dilindungi undang-undang.
