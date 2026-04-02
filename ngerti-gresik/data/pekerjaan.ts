export interface SectorData {
  id: string;
  name: string;
  percentage: number;
  employment: number;
  description: string;
  detailedInfo: string;
  subSectors: Array<{
    name: string;
    description: string;
    examples: string[];
  }>;
  majorCompanies: Array<{
    name: string;
    description: string;
    source?: string;
  }>;
  jobTypes: string[];
  color: string;
  gradient: string;
  icon: string;
  sources: Array<{
    title: string;
    url: string;
  }>;
}

export interface UMRComparison {
  city: string;
  umk2025: number;
  growth: number;
}

export interface HistoricalUMR {
  year: string;
  value: number;
}

// Data BPS Kabupaten Gresik (Agustus 2023)
export const sectorData: SectorData[] = [
  {
    id: "jasa",
    name: "Sektor Jasa",
    percentage: 47.77,
    employment: 328930, // 47.77% dari 688,640 ribu
    description: "Sektor jasa, perdagangan, hotel & restoran",
    detailedInfo: "Sektor jasa adalah penyerap tenaga kerja terbanyak di Gresik. Sektor perdagangan, hotel & restoran memberikan kontribusi besar dalam struktur ekonomi Gresik dengan berbagai peluang pekerjaan di hospitality, perdagangan retail, dan layanan.",
    subSectors: [
      {
        name: "Perdagangan & Retail",
        description: "Toko, minimarket, mall, dan pasar tradisional",
        examples: ["Kasir", "Pramuniaga", "Stok barang", "Supervisor toko"]
      },
      {
        name: "Hotel & Restoran",
        description: "Hospitality, housekeeping, dan tata boga",
        examples: ["Staf dapur", "Pelayanan tamu", "Housekeeping", "Chef"]
      },
      {
        name: "Logistik & Distribusi",
        description: "Pergudangan dan sistem distribusi barang",
        examples: ["Warehouse staff", "Pengelola gudang", "Supervisor pergudangan"]
      },
    ],
    majorCompanies: [
      {
        name: "Hotel Horison GKB Gresik",
        description: "Hotel bintang 3 dengan 101 kamar di Gresik Kota Baru"
      },
      {
        name: "Retail & Perdagangan",
        description: "Alfamart, Indomaret, Matahari, dan berbagai UMKM"
      }
    ],
    jobTypes: [
      "Kasir dan pramuniaga",
      "Staf hotel dan restoran",
      "Pelayanan tamu dan housekeeping",
      "Pengelola gudang dan distribusi"
    ],
    color: "#00B4AB",
    gradient: "from-teal-600 to-cyan-700",
    icon: "🏪",
    sources: [
      {
        title: "BPS Kabupaten Gresik - Data Agustus 2023",
        url: "https://gresikkab.bps.go.id"
      },
      {
        title: "E-Journal Unesa - Struktur Ekonomi Gresik",
        url: "https://ejournal.unesa.ac.id"
      }
    ]
  },
  {
    id: "manufaktur",
    name: "Sektor Manufaktur & Industri Pengolahan",
    percentage: 38.02,
    employment: 261720, // 38.02% dari 688,640 ribu
    description: "Industri manufaktur, petrokimia, semen, dan pengolahan",
    detailedInfo: "Sektor manufaktur masih mendominasi lowongan kerja di Gresik hingga 2026. Terdapat 843 usaha industri besar dan menengah di Gresik (2023). Kawasan industri seperti JIIPE memadukan area industri, pelabuhan, dan residensial.",
    subSectors: [
      {
        name: "Petrokimia & Pupuk",
        description: "PT Petrokimia Gresik - produsen pupuk dan bahan kimia",
        examples: ["Operator produksi", "Teknisi kimia", "Quality control", "R&D"]
      },
      {
        name: "Semen & Bahan Bangunan",
        description: "PT Semen Gresik (Semen Indonesia Group) dengan jaringan distribusi 1.200+ jalur darat dan 100+ jalur laut",
        examples: ["Operator mesin", "Teknisi pemeliharaan", "Supervisor produksi"]
      },
      {
        name: "Pengolahan Minyak Sawit",
        description: "PT Wilmar Nabati Indonesia - industri pengolahan",
        examples: ["Operator produksi", "Pengendali kualitas", "Pekerjaan shift"]
      },
      {
        name: "Kawasan Industri Modern",
        description: "JIIPE (Java Integrated Industrial and Ports Estate)",
        examples: ["Teknisi industri", "Logistik", "Manajemen pelabuhan"]
      }
    ],
    majorCompanies: [
      {
        name: "PT Petrokimia Gresik",
        description: "Produsen pupuk dan bahan kimia terbesar, menyerap ribuan tenaga kerja",
        source: "Jurnal Ngawi"
      },
      {
        name: "PT Semen Gresik (Semen Indonesia Group)",
        description: "Produsen semen besar dengan jaringan distribusi luas (1.200+ jalur darat, 100+ laut)",
        source: "radargresik.jawapos.com"
      },
      {
        name: "PT Wilmar Nabati Indonesia",
        description: "Industri pengolahan minyak sawit yang menyerap ribuan pekerja",
        source: "Jurnal Ngawi"
      },
      {
        name: "JIIPE (Java Integrated Industrial and Ports Estate)",
        description: "Kawasan industri dan pelabuhan terpadu modern",
        source: "jiipe.com"
      }
    ],
    jobTypes: [
      "Operator produksi mesin dan teknisi",
      "Pengendali kualitas (quality control)",
      "Pekerjaan shift di pabrik",
      "Logistik, pergudangan dan distribusi produk"
    ],
    color: "#D4695B",
    gradient: "from-orange-600 to-red-700",
    icon: "🏭",
    sources: [
      {
        title: "BPS Gresik - Industri Besar & Menengah 2023",
        url: "https://gresikkab.bps.go.id"
      },
      {
        title: "Gresik Satu - Lowongan Kerja 2026",
        url: "https://gresiksatu.com"
      },
      {
        title: "Bappeda Gresik - Sektor Potensial",
        url: "https://bappeda.gresikkab.go.id"
      },
      {
        title: "JIIPE Official Website",
        url: "https://jiipe.com"
      }
    ]
  },
  {
    id: "pertanian",
    name: "Sektor Pertanian",
    percentage: 14.21,
    employment: 97860, // 14.21% dari 688,640 ribu
    description: "Pertanian, kehutanan, perikanan, dan pertambangan",
    detailedInfo: "Meski Gresik lebih dikenal sebagai kota industri, sektor pertambangan & penggalian tetap dianggap potensial untuk dikembangkan. UKM pengrajin dan industri kecil di sektor pertambangan/bahan baku berada di wilayah Gresik Utara (Sidayu) sebagai pelengkap industri besar.",
    subSectors: [
      {
        name: "Perikanan & Kelautan",
        description: "Nelayan tangkap dan budidaya tambak",
        examples: ["Nelayan", "Budidaya bandeng", "Pengolahan ikan", "Cold storage"]
      },
      {
        name: "Pertanian & Hortikultura",
        description: "Pertanian tanaman pangan dan perkebunan",
        examples: ["Petani padi", "Perkebunan tebu", "Sayuran", "Peternakan"]
      },
      {
        name: "Pertambangan & Penggalian",
        description: "Sektor potensial yang masih dapat berkembang pesat",
        examples: ["Penggalian bahan baku", "Pemrosesan awal", "Transportasi bahan mentah"]
      },
      {
        name: "Industri Kecil & Kerajinan",
        description: "UKM pengrajin di Gresik Utara (Sidayu)",
        examples: ["Pengrajin", "Konveksi", "Kerajinan tas", "Perhiasan"]
      }
    ],
    majorCompanies: [
      {
        name: "Pelabuhan Perikanan Nusantara Gresik",
        description: "Pusat perikanan dan kelautan"
      },
      {
        name: "Kelompok Usaha Bersama (KUB) Nelayan",
        description: "Organisasi nelayan lokal"
      },
      {
        name: "Gabungan Kelompok Tani (Gapoktan)",
        description: "Kelompok tani dan perkebunan"
      },
      {
        name: "UKM Pengrajin Gresik Utara",
        description: "Industri kecil di Sidayu",
        source: "E-Journal Unesa"
      }
    ],
    jobTypes: [
      "Nelayan dan budidaya perikanan",
      "Petani padi, palawija, dan perkebunan",
      "Penggalian dan pemrosesan bahan tambang",
      "Pengrajin, konveksi, dan kerajinan"
    ],
    color: "#2D5F4C",
    gradient: "from-green-600 to-emerald-700",
    icon: "🌾",
    sources: [
      {
        title: "BPS Kabupaten Gresik - Agustus 2023",
        url: "https://gresikkab.bps.go.id"
      },
      {
        title: "Bappeda Gresik - Sektor Potensial",
        url: "https://bappeda.gresikkab.go.id"
      },
      {
        title: "E-Journal Unesa - UKM Gresik Utara",
        url: "https://ejournal.unesa.ac.id"
      }
    ]
  },
  {
    id: "logistik",
    name: "Sektor Logistik, Pelabuhan & Distribusi",
    percentage: 0, // Termasuk dalam sektor jasa
    employment: 0,
    description: "Pelabuhan, transportasi, dan distribusi",
    detailedInfo: "Gresik memiliki kawasan industri & pelabuhan terpadu yaitu JIIPE yang memadukan area industri, pelabuhan, dan residensial. Jaringan distribusi industri semen melibatkan lebih dari 1.200 jalur transportasi darat dan 100 jalur laut.",
    subSectors: [
      {
        name: "Pelabuhan & Pergudangan",
        description: "JIIPE dan Pelabuhan Gresik sebagai hub logistik",
        examples: ["Operator pelabuhan", "Warehouse staff", "Supervisor pergudangan"]
      },
      {
        name: "Transportasi & Armada",
        description: "Distribusi darat dan laut",
        examples: ["Supir truk", "Operator armada", "Koordinator logistik"]
      }
    ],
    majorCompanies: [
      {
        name: "JIIPE (Java Integrated Industrial and Ports Estate)",
        description: "Kawasan terpadu industri, pelabuhan, dan residensial",
        source: "jiipe.com"
      },
      {
        name: "Pelabuhan Gresik",
        description: "Pelabuhan utama untuk distribusi regional"
      },
      {
        name: "Jaringan Distribusi Semen Indonesia",
        description: "1.200+ jalur darat dan 100+ jalur laut",
        source: "radargresik.jawapos.com"
      }
    ],
    jobTypes: [
      "Operator pelabuhan dan warehouse",
      "Supir truk dan operator armada",
      "Pengelola gudang dan distribusi"
    ],
    color: "#0369A1",
    gradient: "from-blue-600 to-cyan-700",
    icon: "🚢",
    sources: [
      {
        title: "JIIPE Official Website",
        url: "https://jiipe.com"
      },
      {
        title: "Radar Gresik - Jaringan Distribusi",
        url: "https://radargresik.jawapos.com"
      }
    ]
  },
  {
    id: "konstruksi",
    name: "Sektor Konstruksi, Listrik & Energi",
    percentage: 0, // Data spesifik belum tersedia
    employment: 0,
    description: "Konstruksi, instalasi listrik, dan energi",
    detailedInfo: "Pekerjaan konstruksi dan sektor energi muncul karena kebutuhan kawasan industri/pelabuhan di Gresik, misalnya penyediaan listrik untuk kawasan industri. Skema kompetensi mencakup pekerjaan konstruksi elektrik, pemeliharaan sistem, pengangkutan & pergudangan.",
    subSectors: [
      {
        name: "Instalasi & Pemeliharaan Listrik",
        description: "Teknisi listrik untuk kawasan industri",
        examples: ["Teknisi listrik", "Instalasi sistem", "Pemeliharaan", "Operator mesin listrik"]
      },
      {
        name: "Konstruksi Infrastruktur",
        description: "Pembangunan pabrik, dermaga, dan infrastruktur",
        examples: ["Pekerja konstruksi", "Tukang bangunan", "Supervisor proyek"]
      },
      {
        name: "Utilitas Kawasan Industri",
        description: "Kesehatan, keselamatan kerja, dan lingkungan",
        examples: ["HSE officer", "Teknisi utilitas", "Environmental staff"]
      }
    ],
    majorCompanies: [
      {
        name: "Penyedia Listrik Kawasan Industri",
        description: "Perusahaan energi untuk kawasan JIIPE dan industri besar",
        source: "Global Energi"
      },
      {
        name: "Kontraktor Konstruksi",
        description: "Pembangunan infrastruktur industri dan pelabuhan"
      }
    ],
    jobTypes: [
      "Teknisi listrik dan instalasi",
      "Pekerja konstruksi infrastruktur",
      "HSE dan utilitas kawasan industri"
    ],
    color: "#F59E0B",
    gradient: "from-yellow-600 to-orange-600",
    icon: "⚡",
    sources: [
      {
        title: "Global Energi - Kebutuhan Listrik Industri",
        url: "https://globalenergi.co.id"
      },
      {
        title: "SIDIA Kemenperin - Skema Kompetensi",
        url: "https://sidia.kemenperin.go.id"
      }
    ]
  }
];

// UMR Comparison - Data Resmi 2025 (Sumber: bappeda.jatimprov.go.id & Banjoo.id)
export const umrComparison: UMRComparison[] = [
  { city: "Surabaya", umk2025: 4961753, growth: 3.8 },
  { city: "Gresik", umk2025: 4874133, growth: 3.5 },
  { city: "Sidoarjo", umk2025: 4870511, growth: 3.4 },
  { city: "Pasuruan", umk2025: 4866890, growth: 3.3 },
  { city: "Mojokerto", umk2025: 4856026, growth: 3.2 },
  { city: "Malang", umk2025: 3507693, growth: 3.0 },
];

// Historical UMR - Data yang disesuaikan dengan UMK 2025 terbaru
export const historicalUMR: HistoricalUMR[] = [
  { year: "2020", value: 3700000 },
  { year: "2021", value: 3900000 },
  { year: "2022", value: 4200000 },
  { year: "2023", value: 4500000 },
  { year: "2024", value: 4700000 },
  { year: "2025", value: 4874133 }, // Data resmi UMK Gresik 2025
];

// Economic Statistics - Data BPS Agustus 2023
export const economicStats = {
  totalWorkforce: 688640, // Total penduduk bekerja (Agustus 2023 - BPS Kab. Gresik)
  gdpContribution: 12.5, // percentage to East Java
  averageGrowthRate: 3.5, // percentage per year
  unemploymentRate: 4.2, // percentage
  laborParticipationRate: 68.5, // percentage
  formalEmployment: 62, // percentage
  informalEmployment: 38, // percentage
};

export const costOfLiving = {
  housing: {
    rentApartment1BR: { min: 1500000, max: 3000000 },
    rentApartment2BR: { min: 2500000, max: 5000000 },
    buyHouse: { min: 300000000, max: 800000000 },
  },
  food: {
    dailyMeals: { min: 30000, max: 75000 },
    monthlyGroceries: { min: 1500000, max: 3000000 },
  },
  transportation: {
    monthlyFuel: { min: 500000, max: 1000000 },
    publicTransport: { min: 200000, max: 400000 },
  },
  utilities: {
    electricity: { min: 300000, max: 800000 },
    water: { min: 100000, max: 250000 },
    internet: { min: 300000, max: 500000 },
  },
  totalMinimum: 3000000,
  totalComfortable: 6000000,
};

// Worker persona examples
export const workerPersonas = [
  {
    name: "Budi Santoso",
    age: 32,
    sector: "Industri",
    position: "Operator Produksi",
    company: "PT Petrokimia Gresik",
    salary: 7500000,
    education: "SMA",
    experience: 8,
    story:
      "Budi bekerja sebagai operator produksi di PT Petrokimia Gresik sejak 2015. Dengan gaji yang stabil dan tunjangan yang baik, ia dapat menghidupi keluarganya dengan layak.",
  },
  {
    name: "Siti Aminah",
    age: 28,
    sector: "UMKM & Kerajinan",
    position: "Pengusaha Pudak",
    company: "Home Industry",
    salary: 4500000,
    education: "SMP",
    experience: 5,
    story:
      "Siti mewarisi usaha pudak dari ibunya. Dengan pemasaran online, ia berhasil meningkatkan omzet hingga 3 kali lipat dan mempekerjakan 5 karyawan.",
  },
  {
    name: "Ahmad Fauzi",
    age: 45,
    sector: "Perikanan & Kelautan",
    position: "Nelayan",
    company: "KUB Mina Jaya",
    salary: 4000000,
    education: "SD",
    experience: 25,
    story:
      "Ahmad adalah nelayan tradisional yang telah melaut selama 25 tahun. Bergabung dengan KUB membantu ia mendapat akses modal dan pemasaran yang lebih baik.",
  },
  {
    name: "Rina Dewi",
    age: 26,
    sector: "Perdagangan & Jasa",
    position: "Supervisor Retail",
    company: "Alfamart",
    salary: 5500000,
    education: "Diploma",
    experience: 4,
    story:
      "Rina memulai karir sebagai kasir dan kini menjadi supervisor. Ia terus mengikuti pelatihan manajemen untuk mengembangkan karirnya.",
  },
];

// Career path data
export const careerPaths = [
  {
    sector: "Industri",
    levels: [
      { level: "Operator", salary: "4.5 - 6 juta", education: "SMA/SMK" },
      { level: "Teknisi", salary: "6 - 9 juta", education: "Diploma" },
      { level: "Supervisor", salary: "8 - 12 juta", education: "Sarjana" },
      { level: "Manager", salary: "12 - 20 juta", education: "Sarjana" },
    ],
  },
  {
    sector: "Perdagangan & Jasa",
    levels: [
      { level: "Staff", salary: "3 - 5 juta", education: "SMA" },
      { level: "Senior Staff", salary: "5 - 7 juta", education: "Diploma" },
      { level: "Supervisor", salary: "6 - 9 juta", education: "Sarjana" },
      { level: "Manager", salary: "9 - 15 juta", education: "Sarjana" },
    ],
  },
];

export function getTotalEmployment(): number {
  return sectorData.reduce((total, sector) => total + sector.employment, 0);
}

export function getSectorById(id: string): SectorData | undefined {
  return sectorData.find((sector) => sector.id === id);
}

export function getSectorDistributionData() {
  return sectorData.map((sector) => ({
    name: sector.name,
    value: sector.percentage,
    employment: sector.employment,
    color: sector.color,
  }));
}

export function getUMRComparisonData() {
  return umrComparison.map((item) => ({
    name: item.city,
    value: item.umk2025,
    color: item.city === "Gresik" ? "#D4695B" : "#CCCCCC",
  }));
}

export function getHistoricalUMRData() {
  return historicalUMR.map((item) => ({
    name: item.year,
    value: item.value,
  }));
}

// Diversity Statistics - Keberagaman Pekerjaan di Gresik
export const diversityStats = {
  sectorDiversity: {
    title: "Keberagaman Sektor Ekonomi",
    description: "Gresik memiliki ekonomi yang beragam, tidak bergantung pada satu sektor saja",
    data: [
      { sector: "Sektor Jasa (Tersier)", percentage: 47.77, description: "Perdagangan, logistik, hospitality, jasa profesional" },
      { sector: "Sektor Industri (Sekunder)", percentage: 38.02, description: "Petrokimia, semen, manufaktur, IKM" },
      { sector: "Sektor Pertanian (Primer)", percentage: 14.21, description: "Perikanan, pertanian, perkebunan, peternakan" },
    ],
    insights: [
      "Gresik memiliki struktur ekonomi yang seimbang antara industri manufaktur (sekunder) dan sektor jasa (tersier)",
      "Sektor pertanian masih memegang peranan penting sebagai penyangga ekonomi masyarakat pesisir dan pedesaan",
      "Keberagaman sektor menciptakan resiliensi ekonomi dan peluang kerja yang luas"
    ]
  },

  employmentTypeDiversity: {
    title: "Keberagaman Jenis Ketenagakerjaan",
    description: "Keberagaman status pekerjaan menunjukkan dinamika pasar kerja Gresik",
    data: [
      { type: "Pekerja Formal", percentage: 62, count: 427000, description: "Pegawai tetap dengan kontrak, jaminan sosial, dan hak penuh" },
      { type: "Pekerja Informal", percentage: 38, count: 261700, description: "Wiraswasta, pekerja harian, pedagang kaki lima, pengrajin" },
    ],
    insights: [
      "62% tenaga kerja Gresik bekerja di sektor formal dengan perlindungan hukum dan jaminan sosial",
      "Sektor informal masih vital, terutama untuk UMKM, perdagangan kecil, dan kerajinan tradisional",
      "Transisi dari informal ke formal terus berlangsung seiring formalisasi UMKM"
    ]
  },

  educationDiversity: {
    title: "Keberagaman Tingkat Pendidikan Pekerja",
    description: "Pasar kerja Gresik membuka peluang bagi semua tingkat pendidikan",
    data: [
      { level: "Sarjana & Pascasarjana", percentage: 8, description: "Manajer, profesional, teknisi senior, akademisi" },
      { level: "Diploma", percentage: 14, description: "Teknisi, supervisor, tenaga kesehatan, administrasi" },
      { level: "SMA/SMK", percentage: 37, description: "Operator, staff retail, teknisi junior, tenaga administratif" },
      { level: "SMP", percentage: 23, description: "Pekerja pabrik, asisten produksi, pedagang, pengrajin" },
      { level: "SD & Tidak Tamat", percentage: 18, description: "Nelayan, petani, buruh, pekerja harian, home industry" },
    ],
    insights: [
      "Gresik menyediakan peluang kerja inklusif untuk semua tingkat pendidikan",
      "Pendidikan SMA/SMK dominan di sektor industri dan jasa, mencerminkan kebutuhan tenaga terampil",
      "Peluang bagi pekerja berpendidikan rendah tetap terbuka di sektor pertanian, perikanan, dan UMKM",
      "Program pelatihan dan sertifikasi membantu pekerja meningkatkan kompetensi"
    ]
  },

  companyScaleDiversity: {
    title: "Keberagaman Skala Usaha",
    description: "Dari perusahaan multinasional hingga UMKM rumahan, semua berkontribusi pada ekonomi Gresik",
    data: [
      { 
        scale: "Perusahaan Besar (>300 karyawan)", 
        count: "15+ perusahaan", 
        employment: 180000,
        examples: "PT Petrokimia Gresik, PT Semen Indonesia, Maspion Group",
        contribution: "Penyerap tenaga kerja terbesar, kontributor utama PAD"
      },
      { 
        scale: "Perusahaan Menengah (50-300 karyawan)", 
        count: "200+ perusahaan", 
        employment: 85000,
        examples: "Pabrik manufaktur, hotel, retail chain, cold storage",
        contribution: "Penggerak ekonomi lokal, supplier untuk industri besar"
      },
      { 
        scale: "Usaha Kecil (5-49 karyawan)", 
        count: "3.000+ usaha", 
        employment: 120000,
        examples: "Toko material, bengkel, warung makan, toko kelontong",
        contribution: "Jangkar ekonomi komunitas, fleksibilitas lapangan kerja"
      },
      { 
        scale: "Usaha Mikro & Rumahan (<5 karyawan)", 
        count: "25.000+ usaha", 
        employment: 303640,
        examples: "Pedagang kaki lima, pengrajin pudak, penjahit, home industry",
        contribution: "Penyerap tenaga kerja masif, ekonomi kreatif, pengentasan kemiskinan"
      },
    ],
    insights: [
      "Ekosistem bisnis Gresik sangat beragam, dari korporasi multinasional hingga pedagang pasar",
      "UMKM menyerap hampir 60% total tenaga kerja Gresik, menjadi tulang punggung ekonomi rakyat",
      "Keberadaan perusahaan besar menciptakan ekosistem supplier dan vendor lokal",
      "Kemitraan antara perusahaan besar dan UMKM terus didorong untuk pertumbuhan inklusif"
    ]
  },

  occupationDiversity: {
    title: "Keberagaman Jenis Pekerjaan",
    description: "Spektrum pekerjaan yang luas mencerminkan ekonomi yang dinamis dan inklusif",
    categories: [
      {
        category: "Industri & Manufaktur",
        jobs: [
          "Operator produksi", "Teknisi mesin", "Quality control", "Supervisor produksi",
          "Engineer kimia", "Maintenance", "Logistik pabrik", "HSE officer"
        ]
      },
      {
        category: "Perdagangan & Retail",
        jobs: [
          "Kasir", "Sales person", "Pramuniaga", "Supervisor toko",
          "Merchandiser", "Buyer", "Warehouse staff", "Delivery driver"
        ]
      },
      {
        category: "Jasa & Hospitality",
        jobs: [
          "Resepsionis", "Housekeeping", "Chef", "Waiter/waitress",
          "Front office", "Barista", "Event organizer", "Tour guide"
        ]
      },
      {
        category: "Transportasi & Logistik",
        jobs: [
          "Supir truk", "Operator forklift", "Admin ekspedisi", "Koordinator pengiriman",
          "Bongkar muat", "Nahkoda kapal", "ABK", "Admin pelabuhan"
        ]
      },
      {
        category: "Pertanian & Perikanan",
        jobs: [
          "Nelayan", "Petani", "Peternak", "Pengolah ikan",
          "Teknisi tambak", "Pengrajin bandeng presto", "Pedagang hasil laut", "Buruh tani"
        ]
      },
      {
        category: "Jasa Profesional & Kreatif",
        jobs: [
          "Programmer", "Desainer grafis", "Content creator", "Konsultan bisnis",
          "Akuntan", "Notaris", "Arsitek", "Marketing digital"
        ]
      },
      {
        category: "UMKM & Kerajinan",
        jobs: [
          "Pengrajin pudak", "Pembuat songkok", "Penjahit", "Tukang kayu",
          "Pembuat furniture", "Home baker", "Konveksi", "Pengrajin batik"
        ]
      },
      {
        category: "Pemerintahan & Layanan Publik",
        jobs: [
          "PNS", "Guru", "Tenaga kesehatan", "Polisi", 
          "Petugas kebersihan", "Pekerja sosial", "Penyuluh", "Satpol PP"
        ]
      },
    ],
    insights: [
      "Lebih dari 150 jenis pekerjaan berbeda tersedia di Gresik, dari blue collar hingga white collar",
      "Setiap tingkat pendidikan dan keahlian memiliki peluang yang sesuai",
      "Ekonomi digital membuka peluang baru: freelancer, UMKM online, content creator",
      "Keberagaman pekerjaan menciptakan masyarakat yang dinamis dan adaptif"
    ]
  },

  genderDiversity: {
    title: "Partisipasi Perempuan dalam Angkatan Kerja",
    description: "Keterlibatan perempuan di berbagai sektor menunjukkan inklusivitas pasar kerja",
    data: [
      { category: "Laki-laki", percentage: 62.5, count: 430400 },
      { category: "Perempuan", percentage: 37.5, count: 258240 },
    ],
    femaleLeadingSectors: [
      { sector: "Perdagangan & Retail", percentage: 55, description: "Pramuniaga, kasir, admin" },
      { sector: "UMKM & Home Industry", percentage: 65, description: "Pengrajin pudak, konveksi, katering" },
      { sector: "Jasa Kesehatan & Pendidikan", percentage: 60, description: "Perawat, guru, bidan" },
      { sector: "Hospitality", percentage: 45, description: "Housekeeping, F&B, front office" },
    ],
    insights: [
      "Partisipasi perempuan terus meningkat, terutama di sektor jasa dan UMKM",
      "Fleksibilitas kerja dari rumah (home industry) membuka peluang bagi ibu rumah tangga",
      "Program pelatihan khusus perempuan (menjahit, memasak, kerajinan) memperkuat ekonomi keluarga",
      "Masih perlu peningkatan partisipasi perempuan di sektor teknis dan manajerial"
    ]
  },

  ageDiversity: {
    title: "Keberagaman Usia Pekerja",
    description: "Pasar kerja Gresik inklusif untuk berbagai kelompok usia",
    data: [
      { ageGroup: "15-24 tahun (Pemula)", percentage: 18, description: "Fresh graduate, magang, pekerja entry-level" },
      { ageGroup: "25-39 tahun (Produktif)", percentage: 48, description: "Mayoritas pekerja aktif di semua sektor" },
      { ageGroup: "40-54 tahun (Berpengalaman)", percentage: 28, description: "Supervisor, manajer, owner UMKM, profesional senior" },
      { ageGroup: "55+ tahun (Senior)", percentage: 6, description: "Konsultan, nelayan, petani, pengrajin berpengalaman" },
    ],
    insights: [
      "Dominasi usia produktif (25-39 tahun) mencerminkan bonus demografi",
      "Pekerja senior tetap aktif, terutama di sektor informal, pertanian, dan UMKM",
      "Program pelatihan untuk anak muda mempersiapkan tenaga kerja siap industri 4.0",
      "Kebijakan pensiun fleksibel di sektor informal memungkinkan pekerja senior tetap produktif"
    ]
  },
};

export function getDiversityOverview() {
  return {
    totalSectors: 3,
    totalSubSectors: sectorData.reduce((sum, sector) => sum + sector.subSectors.length, 0),
    totalWorkforce: economicStats.totalWorkforce,
    formalEmployment: economicStats.formalEmployment,
    informalEmployment: economicStats.informalEmployment,
    diversityScore: "Tinggi - Ekonomi yang seimbang dan inklusif",
  };
}
