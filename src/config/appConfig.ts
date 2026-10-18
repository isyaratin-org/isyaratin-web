export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "camera" | "mic" | "user" | "history";
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface RequirementItem {
  title: string;
  detail: string;
  description: string;
  isImportant?: boolean;
}

export const appConfig = {
  name: "ISYARATIN",
  tagline: "Menjembatani Komunikasi, Mewujudkan Inklusi",
  heroTitle:
    "AI-Powered Two-Way Sign Language Communication Assistant for Inclusive Accessibility With 3D Avatar",
  shortDescription:
    "Aplikasi berbasis AI yang menerjemahkan bahasa isyarat (BISINDO) ke teks/suara, dan ucapan ke avatar 3D — dua arah, real-time, di Android.",
  fullDescription:
    "Isyaratin hadir sebagai solusi aksesibilitas cerdas berbasis AI yang menghubungkan komunitas Tuli dan masyarakat luas secara setara, real-time, dan mudah diakses langsung melalui perangkat Android.",

  // Konfigurasi installer APK
  apkDownloadUrl:
    process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ||
    "https://pub-2406c94c4bb645119ede540ffe2a6ab7.r2.dev/app-release.apk",

  // Konfigurasi metadata unduhan (hanya tampil jika nilainya tidak kosong)
  version: process.env.NEXT_PUBLIC_APP_VERSION || "v1.0",
  fileSize: process.env.NEXT_PUBLIC_APP_FILE_SIZE || "173 MB",
  sha256:
    process.env.NEXT_PUBLIC_APP_SHA256 ||
    "dec4ff11ac0a06a6c912507641af904105ae5a2f7ac814f4768e9d825f02e811",

  // Platform target
  platform: "Android",

  // Informasi kontak
  contact: {
    email: "kontak@isyaratin.com",
    supportText: "Kirim masukan atau pertanyaan kepada tim pengembang Isyaratin.",
    repoUrl: "",
    communityNote: "Dikembangkan dengan semangat inklusivitas untuk penyandang tunarungu dan masyarakat Indonesia.",
  },

  // Navigasi
  navigation: [
    { label: "Fitur AI", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Prasyarat", href: "#prasyarat" },
    { label: "FAQ", href: "#faq" },
  ],

  // Fitur aplikasi berbasis mockup ISYARATIN
  features: [
    {
      id: "mulai-isyarat",
      title: "Mulai Isyarat (Kamera)",
      description:
        "Mendeteksi gerakan tangan dan bahasa isyarat secara real-time melalui kamera, lalu menerjemahkannya ke teks dan suara.",
      iconName: "camera",
    },
    {
      id: "voice-note",
      title: "Voice Note Interaktif",
      description:
        "Menangkap suara ucapan lawan bicara dan mengonversinya menjadi gerakan bahasa isyarat yang diperagakan avatar 3D.",
      iconName: "mic",
    },
    {
      id: "avatar-3d",
      title: "Respon Avatar Isyarat 3D",
      description:
        "Avatar 3D memperagakan gestur bahasa isyarat secara natural, lengkap dengan kotak teks balasan dan opsi putar ulang.",
      iconName: "user",
    },
    {
      id: "riwayat-percakapan",
      title: "Riwayat & Catatan Sesi",
      description:
        "Menyimpan riwayat percakapan penting lengkap dengan waktu dan catatan lokasi.",
      iconName: "history",
    },
  ] as FeatureItem[],

  // 3 Langkah Cara Kerja
  howItWorks: [
    {
      number: "01",
      title: "Unduh Berkas APK",
      description:
        "Dapatkan berkas installer resmi Isyaratin ke ponsel Android Anda melalui tombol unduh di situs ini.",
    },
    {
      number: "02",
      title: "Beri Izin & Pasang",
      description:
        "Buka berkas APK, lalu aktifkan izin 'Izinkan dari sumber ini' pada menu Pengaturan Android bila diminta.",
    },
    {
      number: "03",
      title: "Mulai Komunikasi Dua Arah",
      description:
        "Buka aplikasi, gunakan Kamera untuk menerjemahkan isyarat atau Voice Note untuk menampilkan avatar 3D.",
    },
  ] as HowItWorksStep[],

  // Prasyarat Instalasi
  requirements: [
    {
      title: "Sistem Operasi Android",
      detail: "Smartphone atau Tablet Android",
      description:
        "Isyaratin dirancang khusus untuk Android dan didistribusikan dalam format APK.",
      isImportant: true,
    },
    {
      title: "Akses Kamera & Mikrofon",
      detail: "Izin perangkat untuk fitur AI",
      description:
        "Kamera untuk penerjemah isyarat visual, mikrofon untuk Voice Note suara-ke-isyarat.",
      isImportant: true,
    },
    {
      title: "Ruang Penyimpanan Memadai",
      detail: "Penyimpanan internal ponsel",
      description:
        "Pastikan ruang penyimpanan cukup untuk installer APK dan data riwayat percakapan.",
      isImportant: false,
    },
    {
      title: "Izin Pemasangan Sumber Ini",
      detail: "Pengaturan keamanan Android",
      description:
        "Aktifkan 'Izinkan dari sumber ini' di setelan browser atau File Manager saat instalasi.",
      isImportant: true,
    },
  ] as RequirementItem[],

  // FAQ
  faqs: [
    {
      id: "faq-cara-pasang",
      question: "Bagaimana cara mengunduh dan memasang file APK Isyaratin?",
      answer:
        "Untuk memasang Isyaratin: (1) Klik tombol 'Download APK' di halaman ini. (2) Setelah unduhan selesai, buka berkas melalui notifikasi atau folder 'Download' di File Manager Anda. (3) Jika muncul konfirmasi keamanan Android, pilih 'Setelan' (Settings) lalu aktifkan 'Izinkan dari sumber ini'. (4) Kembali ke jendela pemasangan dan pilih 'Pasang' (Install) hingga selesai.",
      highlight:
        "Pengaktifan izin sumber adalah prosedur normal Android untuk installer resmi di luar Google Play Store.",
    },
    {
      id: "faq-fitur-avatar",
      question: "Bagaimana cara kerja komunikasi dua arah dengan Avatar 3D?",
      answer:
        "Ketika penyandang tunarungu menggunakan fitur 'Mulai Isyarat', kamera mendeteksi gerakan tangan dan menerjemahkannya ke teks dan suara. Sebaliknya, saat lawan bicara berbicara menggunakan fitur 'Voice Note', ucapan mereka langsung diubah menjadi gerakan bahasa isyarat yang diperagakan oleh avatar 3D secara visual di layar.",
      highlight: "Komunikasi dua arah memungkinkan kedua pihak saling memahami tanpa kendala bahasa.",
    },
    {
      id: "faq-keamanan",
      question: "Apakah aman memasang berkas APK Isyaratin langsung dari situs ini?",
      answer:
        "Ya, sangat aman. Berkas APK yang kami sediakan di halaman resmi ini dijamin bebas dari malware atau iklan berbahaya. Peringatan sistem yang muncul di Android merupakan proteksi standar terhadap berkas yang diunduh dari peramban web.",
      highlight: "Selalu pastikan Anda mengunduh dari domain resmi Isyaratin.",
    },

    {
      id: "faq-belum-tersedia",
      question: "Mengapa tombol unduh menampilkan pesan bahwa installer segera tersedia?",
      answer:
        "Jika tautan unduhan belum aktif, itu berarti paket installer APK versi terbaru sedang dalam tahap optimasi atau pengujian final performa AI di perangkat Android. Tim pengembang akan segera memperbarui tautan unduhan begitu rilis siap digunakan.",
      highlight: "Kami mengutamakan performa AI dan kestabilan sebelum berkas APK dirilis ke publik.",
    },
    {
      id: "faq-ios",
      question: "Apakah Isyaratin saat ini mendukung iPhone atau iPad (iOS)?",
      answer:
        "Untuk saat ini Isyaratin dikembangkan secara khusus untuk perangkat Android melalui format installer APK. Pengembangan platform lain akan dievaluasi seiring perkembangan proyek.",
    },
  ] as FaqItem[],
};
