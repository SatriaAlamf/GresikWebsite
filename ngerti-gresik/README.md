<div align="center">

# 🏛️ Ngerti Gresik

### Portal Budaya Digital Kabupaten Gresik

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Netlify](https://img.shields.io/badge/Netlify-Live-00C7B7?style=for-the-badge&logo=netlify)](https://ngerti-gresik.netlify.app)

**[🌐 Live Demo](https://ngerti-gresik.netlify.app)** • **[📖 Dokumentasi](#dokumentasi)** • **[🚀 Quick Start](#-quick-start)**

<img src="https://img.shields.io/badge/Project-PPKN_Bab_3-orange?style=flat-square" alt="Project Badge"/>
<img src="https://img.shields.io/badge/Status-Production-success?style=flat-square" alt="Status Badge"/>

</div>

---

## 📋 Tentang Project

**Ngerti Gresik** adalah platform edukasi interaktif yang menampilkan kekayaan budaya Kabupaten Gresik, Jawa Timur. Website ini dikembangkan sebagai bagian dari project Pendidikan Pancasila dan Kewarganegaraan (PPKN) Bab 3, dengan fokus pada pelestarian dan dokumentasi warisan budaya lokal.

### ✨ Fitur Utama

- 🎨 **Kesenian Tradisional** - Dokumentasi lengkap Damar Kurung, Pencak Macan, dan Kuda Kincak
- 🍜 **Kuliner Khas** - Eksplorasi makanan tradisional dengan sejarah dan nilai budaya
- 👘 **Pakaian Adat** - Penjelasan detail busana tradisional Gresik
- 💼 **Mata Pencaharian** - Profil pekerjaan khas masyarakat Gresik
- 🕌 **Adat Istiadat** - Tradisi dan upacara adat yang masih lestari
- 🤝 **Kebiasaan Masyarakat** - Nilai-nilai budaya dari kebiasaan sehari-hari
- 📊 **Visualisasi Data** - Grafik interaktif untuk pemahaman lebih baik
- 🎭 **Animasi Interaktif** - Pengalaman browsing yang engaging

---

## 🛠️ Tech Stack

<table>
<tr>
<td width="50%">

### Frontend
- **Framework:** Next.js 16.0.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Charts:** Recharts 3

</td>
<td width="50%">

### Tools & Utilities
- **State Management:** React 19
- **Intersection Observer:** react-intersection-observer
- **Class Management:** clsx, tailwind-merge
- **Deployment:** Netlify
- **Package Manager:** npm

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** versi 18.0 atau lebih baru
- **npm** versi 8.0 atau lebih baru

### Instalasi

```bash
# 1. Clone repository
git clone https://github.com/yourusername/ngerti_gresik.id.git

# 2. Masuk ke folder project
cd ngerti_gresik.id

# 3. Install dependencies
npm install
```

### 🏃 Menjalankan Development Server

```bash
npm run dev
```

Buka browser dan akses **[http://localhost:3000](http://localhost:3000)**

Server akan otomatis reload saat Anda melakukan perubahan code.

### 🔨 Build untuk Production

```bash
# Build static export
npm run build

# Preview production build (opsional)
npm run start
```

File hasil build akan tersimpan di folder `out/`

### 🌐 Deploy ke Netlify

```bash
# 1. Install Netlify CLI (jika belum)
npm install -g netlify-cli

# 2. Login ke Netlify
netlify login

# 3. Deploy ke production
netlify deploy --prod
```

Atau push ke repository dan biarkan Netlify auto-deploy dari GitHub/GitLab.

---

## 📁 Struktur Project

```
ngerti_gresik.id/
├── 📂 app/                          # Next.js App Router
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Homepage
│   ├── 📂 adat-istiadat/           # Halaman adat istiadat
│   ├── 📂 kesenian/                # Halaman kesenian
│   ├── 📂 kesimpulan/              # Halaman kesimpulan
│   ├── 📂 makanan/                 # Halaman kuliner
│   ├── 📂 pakaian-adat/            # Halaman pakaian adat
│   ├── 📂 pekerjaan/               # Halaman mata pencaharian
│   └── 📂 kebiasaan-masyarakat/    # Halaman kebiasaan masyarakat
│
├── 📂 components/                   # React Components
│   ├── 📂 animations/              # Animation components
│   │   ├── CounterAnimation.tsx
│   │   ├── MagneticButton.tsx
│   │   └── RevealOnScroll.tsx
│   ├── 📂 charts/                  # Chart components
│   │   ├── BarChart.tsx
│   │   ├── DonutChart.tsx
│   │   └── LineChart.tsx
│   ├── 📂 layouts/                 # Layout components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── 📂 sections/                # Section components
│   │   ├── DualIdentitySection.tsx
│   │   ├── ExploreSection.tsx
│   │   └── HeroSection.tsx
│   └── 📂 ui/                      # UI components
│       ├── BackToTop.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Section.tsx
│
├── 📂 data/                         # Data & Content
│   ├── adat.ts                     # Data adat istiadat
│   ├── kesenian.ts                 # Data kesenian
│   ├── makanan.ts                  # Data kuliner
│   ├── nilai.ts                    # Data nilai budaya
│   ├── pakaian.ts                  # Data pakaian adat
│   └── pekerjaan.ts                # Data pekerjaan
│
├── 📂 lib/                          # Utilities
│   ├── animations.ts               # Animation utilities
│   ├── constants.ts                # Constants
│   └── utils.ts                    # Helper functions
│
├── 📂 public/                       # Static assets
│   ├── 📂 images/                  # Images
│   └── 📂 videos/                  # Videos
│
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── netlify.toml                    # Netlify configuration
└── package.json                    # Dependencies
```

---

## 🎨 Custom Color Palette

Website ini menggunakan palet warna kustom yang terinspirasi dari budaya Gresik:

```css
--navy:      #1a2238    /* Deep blue - menggambarkan laut */
--terracotta: #d4574a   /* Warm red - terinspirasi keramik */
--beige:     #f5e6d3    /* Soft beige - warna natural */
--forest:    #2d5016    /* Dark green - kehijauan alam */
--teal:      #1a7d84    /* Teal - perpaduan laut & hijau */
--burnt:     #9b4819    /* Burnt orange - tanah liat */
--offwhite:  #faf9f6    /* Off white - background */
--charcoal:  #2c2c2c    /* Dark gray - text */
```

---

## 📊 Fitur Interaktif

### Animasi & Transisi
- ✨ Smooth page transitions dengan Framer Motion
- 🎯 Magnetic button effects
- 👁️ Reveal on scroll animations
- 🔢 Counter animations untuk statistik

### Visualisasi Data
- 📊 Bar charts untuk perbandingan data
- 🍩 Donut charts untuk distribusi
- 📈 Line charts untuk tren temporal

### UX Enhancements
- 🔼 Back to top button
- 🎭 Hover effects pada cards
- 📱 Fully responsive design
- ⚡ Fast page loads (static export)

---

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📝 Lisensi

Project ini dibuat untuk keperluan edukasi (PPKN Project Bab 3).

---

## 👥 Tim Pengembang

Dikembangkan dengan ❤️ oleh mahasiswa untuk pelestarian budaya Gresik.

---

## 📞 Kontak & Support

- 🌐 **Website:** [ngerti-gresik.netlify.app](https://ngerti-gresik.netlify.app)
- 📧 **Email:** [your-email@example.com]
- 📱 **Issues:** [GitHub Issues](https://github.com/yourusername/ngerti_gresik.id/issues)

---

<div align="center">

### ⭐ Jangan lupa beri bintang jika project ini bermanfaat!

**Made with 💙 for Gresik**

</div>
