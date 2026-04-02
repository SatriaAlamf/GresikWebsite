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

// Nilai-nilai Budaya Gresik (Berdasarkan Riset)
export const nilaiBudayaData: NilaiBudaya[] = [
  {
    icon: "🙏",
    title: "Religius",
    desc: "Ketaatan beribadah dan menjalankan nilai-nilai agama dalam kehidupan sehari-hari, termasuk menghormati keberagaman keyakinan",
    color: "from-teal/20 to-forest/20",
    verified: true,
    source: {
      title: "UNISNU Jepara Journal",
      url: "https://ejournal.unisnu.ac.id/j-asna/article/download/7474/pdf"
    }
  },
  {
    icon: "☮️",
    title: "Toleransi & Multikulturalisme",
    desc: "Menghormati perbedaan agama dan budaya, hidup harmonis dalam keberagaman sebagaimana diterapkan di sekolah-sekolah Gresik",
    color: "from-forest/20 to-teal/20",
    verified: true,
    source: {
      title: "UNISNU Jepara Journal",
      url: "https://ejournal.unisnu.ac.id/j-asna/article/download/7474/pdf"
    }
  },
  {
    icon: "🎭",
    title: "Pelestarian Budaya Lokal",
    desc: "Menjaga warisan leluhur seperti budaya kercengan di Bawean sebagai sarana harmonisasi sosial masyarakat",
    color: "from-beige/40 to-terracotta/20",
    verified: true,
    source: {
      title: "Gubug Jurnal STITNU",
      url: "https://jurnal.stitnualhikmah.ac.id/index.php/seling/article/view/119"
    }
  },
  {
    icon: "🤝",
    title: "Dialog & Kerja Sama",
    desc: "Membangun komunikasi aktif antar kelompok dan bekerja sama dalam menjaga kerukunan, seperti di Desa Pengalangan",
    color: "from-terracotta/20 to-burnt/20",
    verified: true,
    source: {
      title: "IDEAS/RePEc",
      url: "https://ideas.repec.org/a/bcp/journl/v8y2024i7p3214-3220.html"
    }
  },
  {
    icon: "💪",
    title: "Gotong Royong",
    desc: "Semangat kebersamaan dan saling membantu antar warga masyarakat dalam berbagai kegiatan",
    color: "from-navy/20 to-forest/20",
    verified: false
  },
  {
    icon: "🌊",
    title: "Harmoni dengan Lingkungan",
    desc: "Menjaga keseimbangan antara pembangunan dan pelestarian lingkungan pesisir serta tambak tradisional",
    color: "from-teal/20 to-navy/20",
    verified: false
  },
];

// Konflik Sejarah yang Pernah Terjadi di Gresik
export const konflikSejarahData: KonflikSejarah[] = [
  {
    tahun: "1999-2004",
    judul: "Konflik Antar Nelayan Gresik-Lamongan",
    icon: "🎣",
    deskripsi: "Konflik antar nelayan terjadi di wilayah pantai utara Kabupaten Gresik dan Lamongan akibat perebutan wilayah tangkap ikan (fishing ground) dan perbedaan penggunaan alat tangkap antara nelayan tradisional dan modern.",
    dampak: [
      "Ketegangan sosial antar kelompok nelayan",
      "Penurunan produktivitas sektor perikanan",
      "Kondisi sosial menjadi kurang inklusif",
      "Konflik berkepanjangan yang mengganggu keharmonisan"
    ],
    pembelajaran: "Pentingnya pengelolaan keberagaman profesi dan metode tangkap secara inklusif untuk membangun produktivitas yang kondusif",
    verified: true,
    source: {
      title: "E-Journal Unesa - Konflik Antar Nelayan",
      url: "https://ejournal.unesa.ac.id/index.php/avatara/article/view/36134/32191"
    }
  },
  {
    tahun: "2020-an",
    judul: "Konflik Wilayah Tangkap Nelayan Sidayu",
    icon: "⚓",
    deskripsi: "Konflik antara dua kelompok nelayan di Desa Randuboto (Kec. Sidayu) dan Desa Ujung Pangkah Wetan terkait batas wilayah tangkap ikan. Rumpon yang dipasang diduga melewati wilayah hak tangkap kelompok lain.",
    dampak: [
      "Pelanggaran batas wilayah tangkap antar kelompok",
      "Ketegangan dan bentrokan fisik antar nelayan",
      "Penurunan kerjasama dan produktivitas nelayan",
      "Intervensi polisi untuk penanganan konflik"
    ],
    pembelajaran: "Diperlukan kesepakatan bersama, pengelolaan wilayah tangkap yang adil, dan komunikasi antar kelompok untuk mencegah konflik",
    verified: true,
    source: {
      title: "Klik Media - Konflik Nelayan Gresik",
      url: "https://www.klikmedianetwork.com/peristiwa/1946753940/dua-kelompok-nelayan-terlibat-konflik-soal-batas-wilayah-tangkap-ikan-di-perairan-gresik-polisi-turun-tangan"
    }
  },
  {
    tahun: "Kontemporer",
    judul: "Konflik Ideologi Keagamaan di Sumengko",
    icon: "🕌",
    deskripsi: "Di Desa Sumengko, Kecamatan Wringinanom, terjadi konflik sosial antara dua kelompok keagamaan (kelompok Ahlusunnah dan kelompok Sunnatullah) yang berada di lingkungan yang sama namun berbeda orientasi ideologi.",
    dampak: [
      "Ketegangan antar kelompok keagamaan di satu desa",
      "Perpecahan sosial dalam komunitas",
      "Penurunan kohesi sosial masyarakat",
      "Kebutuhan mediasi antar kelompok"
    ],
    pembelajaran: "Pentingnya dialog antar kelompok, toleransi terhadap perbedaan ideologi, dan penguatan moderasi beragama",
    verified: true,
    source: {
      title: "UINSA Digital Library - Konflik Ideologi Sumengko",
      url: "https://digilib.uinsa.ac.id/24930/"
    }
  },
  {
    tahun: "Kontemporer",
    judul: "Konflik Aliran Keagamaan di Golokan",
    icon: "📿",
    deskripsi: "Studi kasus di Desa Golokan, Kecamatan Sidayu, menjelaskan adanya perselisihan antara tarekat Wahidiyah dengan masyarakat Golokan terkait perbedaan aliran keagamaan yang menjadi pemantik konflik sosial.",
    dampak: [
      "Perselisihan antar kelompok aliran keagamaan",
      "Stigma dan ketegangan sosial",
      "Perbedaan praktik keagamaan menjadi sumber konflik",
      "Kebutuhan pendekatan penyelesaian yang sensitif"
    ],
    pembelajaran: "Pentingnya pemahaman dan penghormatan terhadap keberagaman aliran dalam Islam serta dialog yang konstruktif",
    verified: true,
    source: {
      title: "E-Journal UIN Suka - Konflik Aliran Wahidiyah",
      url: "https://ejournal.uin-suka.ac.id/ushuluddin/li/article/view/4338"
    }
  },
  {
    tahun: "Kontemporer",
    judul: "Konflik Antar Perguruan Silat",
    icon: "🥋",
    deskripsi: "Di wilayah Gresik terjadi konflik antar perguruan pencak silat yang disebabkan oleh faktor personal, sosial, dan budaya—termasuk fanatisme kelompok, perbedaan tradisi dan budaya antar perguruan.",
    dampak: [
      "Bentrokan fisik antar anggota perguruan",
      "Fanatisme kelompok yang berlebihan",
      "Ketegangan sosial antar komunitas pencak silat",
      "Gangguan keamanan dan ketertiban"
    ],
    pembelajaran: "Pentingnya mengelola keberagaman tradisi dan budaya dengan sportivitas serta menghindari fanatisme berlebihan",
    verified: true,
    source: {
      title: "Sivis Pacem Journal - Konflik Perguruan Silat",
      url: "https://sivispacemjournal.my.id/index.php/login/article/view/15"
    }
  },
  {
    tahun: "1980-2000",
    judul: "Perubahan Sosio-Kultural Akibat Industrialisasi",
    icon: "🏭",
    deskripsi: "Dengan hadirnya industri besar seperti PT Petrokimia Gresik, terjadi perubahan sosial dan budaya di Gresik dari masyarakat agraris ke masyarakat industri yang memunculkan kesenjangan budaya (cultural gap) dan konflik nilai.",
    dampak: [
      "Pergeseran nilai dari agraris ke industrial",
      "Kesenjangan budaya antar generasi",
      "Perubahan struktur sosial masyarakat",
      "Konflik nilai antara tradisi dan modernisasi"
    ],
    pembelajaran: "Pentingnya menjaga keseimbangan antara pembangunan industri dengan pelestarian nilai-nilai budaya lokal",
    verified: true,
    source: {
      title: "E-Journal Unesa - Dampak Industrialisasi",
      url: "https://ejournal.unesa.ac.id/index.php/avatara/article/view/22360"
    }
  }
];

// Pernyataan Benar/Salah tentang Harmoni
export const pernyataanData: Pernyataan[] = [
  {
    type: "benar",
    text: "Harmoni dalam keberagaman sangat penting untuk menciptakan lingkungan kerja yang inklusif dan produktif.",
    alasan: "Di wilayah pantai utara Kabupaten Gresik, konflik antar nelayan tahun 1999-2004 terjadi akibat perebutan wilayah tangkap ikan dan perbedaan alat tangkap. Konflik tersebut menyebabkan kondisi sosial menjadi kurang inklusif dan produktivitas sektor perikanan terdampak. Maka, terciptanya harmoni dalam keberagaman menjadi sangat penting untuk membangun inklusivitas dan produktivitas yang kondusif.",
    source: {
      title: "E-Journal Unesa - Konflik Antar Nelayan",
      url: "https://ejournal.unesa.ac.id/index.php/avatara/article/view/36134/32191"
    }
  },
  {
    type: "salah",
    text: "Keberagaman pekerjaan tidak berkontribusi pada penciptaan harmoni di lingkungan kerja.",
    alasan: "Justru di perairan Gresik, konflik muncul karena perbedaan pekerjaan/alat tangkap antar nelayan (tradisional vs modern) dan perbedaan wilayah tangkap yang tidak dikelola secara inklusif. Karena keberagaman jenis pekerjaan tidak dikelola dengan baik, malah menjadi sumber ketegangan. Oleh karena itu, pernyataan ini keliru — keberagaman pekerjaan yang dikelola dengan baik justru dapat menjadi aset untuk harmoni.",
    source: {
      title: "ResearchGate - Antisipasi Pemuda Nelayan",
      url: "https://www.researchgate.net/publication/366471063_Antisipasi_Pemuda_Nelayan_dalam_Menghadapi_Konflik"
    }
  },
  {
    type: "benar",
    text: "Menerapkan nilai harmoni dalam keberagaman dapat membantu mengurangi konflik dan meningkatkan produktivitas di lingkungan masyarakat dan lingkungan kerja.",
    alasan: "Konflik antar nelayan di Gresik, seperti yang terjadi di Desa Randuboto dan Desa Ujung Pangkah Wetan, dipicu oleh pelanggaran batas wilayah tangkap rumpon. Dengan menerapkan nilai harmoni (kesepakatan bersama, pengelolaan wilayah tangkap yang adil, komunikasi antar kelompok), konflik semacam itu bisa dicegah dan produktivitas serta kerjasama nelayan menjadi lebih baik.",
    source: {
      title: "Klik Media - Konflik Nelayan Gresik",
      url: "https://www.klikmedianetwork.com/peristiwa/1946753940/dua-kelompok-nelayan-terlibat-konflik-soal-batas-wilayah-tangkap-ikan-di-perairan-gresik-polisi-turun-tangan"
    }
  },
  {
    type: "salah",
    text: "Menciptakan harmoni dalam keberagaman merupakan tanggung jawab pimpinan di tempat kerja, bukan tanggung jawab karyawan.",
    alasan: "Dalam studi konflik nelayan Gresik-Lamongan, penyelesaian banyak dilakukan melalui musyawarah antar nelayan sendiri (generasi muda nelayan, organisasi lokal nelayan) bukan semata oleh pemimpin formal. Artinya, tanggung jawab terciptanya harmoni tidak hanya di tangan pimpinan formal tetapi juga seluruh anggota komunitas. Maka pernyataan bahwa hanya pimpinan yang bertanggung jawab adalah keliru.",
    source: {
      title: "ResearchGate - Antisipasi Pemuda Nelayan",
      url: "https://www.researchgate.net/publication/366471063_Antisipasi_Pemuda_Nelayan_dalam_Menghadapi_Konflik"
    }
  },
  {
    type: "salah",
    text: "Toleransi dan harmoni dalam keberagaman adalah konsep yang sama dan dapat digunakan secara bergantian.",
    alasan: "Dari konflik nelayan Gresik dapat dilihat bahwa toleransi saja tidak cukup. Diperlukan harmoni yang lebih jauh: kesepakatan, struktur pengelolaan wilayah, koordinasi, dan inklusi dalam keputusan. Jika hanya toleransi tanpa pengelolaan yang adil, konflik tetap muncul (seperti klaim wilayah tangkap dan alat tangkap). Maka menyamakan toleransi dan harmoni adalah keliru.",
    source: {
      title: "E-Journal Unesa - Konflik Antar Nelayan",
      url: "https://ejournal.unesa.ac.id/index.php/avatara/article/view/36134/32191"
    }
  },
];

// Pesan Inti
export const pesanIntiData: PesanInti = {
  title: "Pesan Inti: Tanggung Jawab Bersama",
  content: "Harmoni dalam keberagaman adalah tanggung jawab bersama seluruh anggota masyarakat dan lingkungan kerja. Melalui penerapan nilai-nilai budaya Gresik—religius, gotong royong, kerja keras, pelestarian budaya, dan toleransi—kita dapat menciptakan lingkungan yang inklusif, mengurangi konflik, dan meningkatkan produktivitas.",
  highlight: "Keberagaman adalah Kekuatan, Bukan Hambatan",
  icon: "🤝"
};

// Key Takeaways
export const takeawaysData: Takeaway[] = [
  {
    icon: "heart",
    title: "Menghargai Keberagaman",
    points: [
      "Menghormati perbedaan budaya dan tradisi",
      "Belajar dari kearifan lokal",
      "Menjaga toleransi antar golongan"
    ]
  },
  {
    icon: "users",
    title: "Gotong Royong",
    points: [
      "Bekerjasama dalam kegiatan sosial",
      "Saling membantu sesama",
      "Membangun kebersamaan"
    ]
  },
  {
    icon: "trending-up",
    title: "Produktivitas",
    points: [
      "Menerapkan etos kerja yang baik",
      "Berinovasi dan berkreasi",
      "Berkontribusi untuk kemajuan"
    ]
  }
];

// Final Message
export const finalMessageData: FinalMessage = {
  title: "Mari Lestarikan Budaya Gresik",
  content: "Budaya adalah identitas kita. Dengan menjaga dan melestarikan nilai-nilai luhur budaya Gresik, kita turut membangun generasi yang berkarakter, toleran, dan produktif. Mari bersama-sama menjadi bagian dari perubahan positif!",
  tags: ["#BudayaGresik", "#KotaSantri", "#KotaIndustri", "#HarmoniKeberagaman"],
  icon: "🌟"
};
