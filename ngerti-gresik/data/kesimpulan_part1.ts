export interface NilaiBudaya {
  icon: string;
  title: string;
  desc: string;
  color: string;
  verified: boolean;
  source?: {
    title: string;
    url: string;
  };
}

export interface KonflikSejarah {
  tahun: string;
  judul: string;
  icon: string;
  deskripsi: string;
  dampak: string[];
  pembelajaran: string;
  verified: boolean;
  source: {
    title: string;
    url: string;
  };
}

export interface Pernyataan {
  type: "benar" | "salah";
  text: string;
  alasan: string;
  source?: {
    title: string;
    url: string;
  };
}

export interface Solusi {
  icon: string;
  label: string;
}

export interface Takeaway {
  icon: string;
  title: string;
  points: string[];
}

export interface PesanInti {
  title: string;
  content: string;
  highlight: string;
  icon: string;
}

export interface FinalMessage {
  title: string;
  content: string;
  tags: string[];
  icon: string;
}

// Nilai-nilai Budaya Gresik
export const nilaiBudayaData: NilaiBudaya[] = [
  {
    icon: "",
    title: "Religius",
    desc: "Ketaatan beribadah dan menjalankan nilai-nilai agama dalam kehidupan sehari-hari, termasuk menghormati keberagaman keyakinan",
    color: "from-teal/20 to-forest/20",
    verified: false
  },
  {
    icon: "",
    title: "Toleransi & Multikulturalisme",
    desc: "Menghormati perbedaan agama dan budaya, hidup harmonis dalam keberagaman sebagaimana diterapkan di sekolah-sekolah Gresik",
    color: "from-forest/20 to-teal/20",
    verified: false
  },
  {
    icon: "",
    title: "Pelestarian Budaya Lokal",
    desc: "Menjaga warisan leluhur seperti budaya kercengan di Bawean sebagai sarana harmonisasi sosial masyarakat",
    color: "from-beige/40 to-terracotta/20",
    verified: false
  },
  {
    icon: "",
    title: "Dialog & Kerja Sama",
    desc: "Membangun komunikasi aktif antar kelompok dan bekerja sama dalam menjaga kerukunan, seperti di Desa Pengalangan",
    color: "from-terracotta/20 to-burnt/20",
    verified: false
  },
  {
    icon: "",
    title: "Gotong Royong",
    desc: "Semangat kebersamaan dan saling membantu antar warga masyarakat dalam berbagai kegiatan",
    color: "from-navy/20 to-forest/20",
    verified: false
  },
  {
    icon: "",
    title: "Harmoni dengan Lingkungan",
    desc: "Menjaga keseimbangan antara pembangunan dan pelestarian lingkungan pesisir serta tambak tradisional",
    color: "from-teal/20 to-navy/20",
    verified: false
  },
];
