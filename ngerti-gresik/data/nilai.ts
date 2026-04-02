export interface NilaiItem {
  id: string;
  name: string;
  icon: string; // emoji or icon name
  description: string;
  deepMeaning: string;
  manifestations: string[];
  connections?: string[]; // IDs of related nilai
  connectedTo: Array<{
    category: "Adat" | "Kesenian" | "Pekerjaan" | "Makanan" | "Pakaian";
    items: string[];
    explanation: string;
  }>;
  realLifeExamples: Array<{
    title: string;
    story: string;
  }>;
  quotes: Array<{
    text: string;
    author: string;
    context: string;
  }>;
  color: string;
  tagline?: string; // Short tagline
  realLifeExample?: string; // Single example for summary
  quote?: string; // Single quote for summary
  example?: string; // Short example for cards
}

export const nilaiData: NilaiItem[] = [
  {
    id: "religius",
    name: "Nilai Religius",
    icon: "🕌",
    tagline: "Iman sebagai Fondasi Kehidupan",
    description:
      "Ketaatan kepada Tuhan Yang Maha Esa dan pengamalan ajaran agama dalam kehidupan sehari-hari menjadi landasan utama masyarakat Gresik.",
    deepMeaning:
      "Nilai religius bukan hanya tentang ritual ibadah, tetapi juga tercermin dalam etika kerja, hubungan sosial, dan pengambilan keputusan. Gresik sebagai Kota Santri menjadikan Islam sebagai way of life yang menyatu dengan budaya lokal.",
    manifestations: [
      "Masjid dan pesantren di setiap sudut kota",
      "Adzan berkumandang 5 kali sehari",
      "Budaya nyantri yang kuat",
      "Perayaan hari besar Islam yang meriah",
      "Toleransi antar umat beragama",
      "Ekonomi syariah yang berkembang",
      "Pakaian yang menutup aurat",
      "Makanan halal dan thayyib",
    ],
    connections: ["gotong-royong", "toleransi", "pelestarian"],
    connectedTo: [
      {
        category: "Adat",
        items: ["Tradisi Suran", "Budaya Nyantri", "Tradisi Pernikahan"],
        explanation:
          "Semua tradisi adat Gresik disesuaikan dengan nilai-nilai Islam. Tidak ada tradisi yang bertentangan dengan syariat.",
      },
      {
        category: "Kesenian",
        items: ["Hadrah", "Qasidah", "Jemblung"],
        explanation:
          "Kesenian Gresik didominasi oleh seni Islami yang mengandung pesan dakwah dan pujian kepada Allah.",
      },
      {
        category: "Pakaian",
        items: ["Kebaya Kutubaru", "Pakaian Pengantin"],
        explanation:
          "Pakaian adat Gresik mencerminkan kesopanan dan menutup aurat sesuai ajaran Islam.",
      },
    ],
    realLifeExamples: [
      {
        title: "Waktu Sholat di Tempat Kerja",
        story:
          "Di PT Petrokimia Gresik, ketika adzan berkumandang, seluruh aktivitas produksi di area tertentu dihentikan sementara untuk memberikan kesempatan karyawan sholat berjamaah di musholla perusahaan. Ini menunjukkan bahwa perusahaan besar pun menghormati nilai religius.",
      },
      {
        title: "Pesantren Entrepreneur",
        story:
          "Banyak alumni pesantren di Gresik yang menjadi pengusaha sukses. Mereka menerapkan nilai kejujuran, amanah, dan berkah dalam berbisnis. Usaha kuliner pudak dan bandeng presto banyak dirintis oleh santri yang mengembangkan usaha keluarga.",
      },
      {
        title: "Toleransi Beragama",
        story:
          "Meskipun mayoritas Muslim, masyarakat Gresik sangat toleran terhadap umat agama lain. Gereja dan vihara tetap berdiri dengan aman, dan saat hari raya keagamaan, warga saling bersilaturahmi.",
      },
    ],
    quotes: [
      {
        text: "Gresik bukan hanya kota industri, tapi juga kota santri yang menjaga nilai-nilai Islam dalam setiap aspek kehidupan.",
        author: "KH. Abdul Ghofur",
        context: "Pengasuh Pondok Pesantren Al-Hidayah Gresik",
      },
      {
        text: "Rezeki yang halal dan berkah adalah prioritas, bukan hanya banyak.",
        author: "H. Ahmad (Pengusaha Bandeng Presto)",
        context: "Wawancara tentang etika bisnis Islami",
      },
    ],
    color: "#2D5F4C",
    realLifeExample: "Di PT Petrokimia Gresik, ketika adzan berkumandang, seluruh aktivitas produksi di area tertentu dihentikan sementara untuk memberikan kesempatan karyawan sholat berjamaah di musholla perusahaan. Ini menunjukkan bahwa perusahaan besar pun menghormati nilai religius.",
    quote: "Gresik bukan hanya kota industri, tapi juga kota santri yang menjaga nilai-nilai Islam dalam setiap aspek kehidupan.",
    example: "Saat adzan berkumandang di pabrik Petrokimia Gresik, aktivitas produksi dihentikan untuk waktu sholat berjamaah di musholla perusahaan.",
  },
  {
    id: "gotong-royong",
    name: "Gotong Royong",
    icon: "🤝",
    tagline: "Bersama Kita Kuat",
    description:
      "Semangat bekerja bersama dan saling tolong-menolong tanpa pamrih menjadi kekuatan sosial masyarakat Gresik.",
    deepMeaning:
      "Gotong royong adalah implementasi dari ukhuwah (persaudaraan) dalam Islam dan nilai kekeluargaan Jawa. Di era modern, nilai ini tetap relevan sebagai modal sosial yang kuat untuk menghadapi tantangan bersama.",
    manifestations: [
      "Kerja bakti membersihkan kampung setiap minggu",
      "Bantuan tenaga saat ada warga hajatan",
      "Iuran sosial untuk membantu yang kesusahan",
      "Ronda malam menjaga keamanan bersama",
      "Kelompok tani dan nelayan yang solid",
      "Arisan dan pengajian sebagai wadah silaturahmi",
      "Tanggap bencana yang cepat dan terorganisir",
    ],
    connections: ["religius", "toleransi", "kerja-keras"],
    connectedTo: [
      {
        category: "Adat",
        items: [
          "Petik Laut",
          "Gotong Royong Pesisir",
          "Bersih Desa",
          "Tradisi Pernikahan",
        ],
        explanation:
          "Semua tradisi besar di Gresik melibatkan gotong royong seluruh warga. Tidak ada yang bisa dilakukan sendiri.",
      },
      {
        category: "Pekerjaan",
        items: [
          "Kelompok Usaha Bersama Nelayan",
          "Koperasi UMKM",
          "Kelompok Tani",
        ],
        explanation:
          "Gotong royong dalam ekonomi membantu meningkatkan kesejahteraan bersama. KUB dan koperasi adalah bentuk modern gotong royong.",
      },
    ],
    realLifeExamples: [
      {
        title: "Hajatan Tanpa Biaya Tenaga",
        story:
          "Ketika ada warga yang hajatan (pernikahan, khitanan, dll), tetangga sekampung otomatis datang membantu. Ada yang memasak, mendirikan tenda, melayani tamu, tanpa diminta dan tanpa dibayar. Ini sudah tradisi turun temurun.",
      },
      {
        title: "KUB Nelayan Mina Jaya",
        story:
          "Kelompok Usaha Bersama (KUB) Mina Jaya di Gresik beranggotakan 50 nelayan. Mereka patungan membeli perahu besar, berbagi hasil tangkapan, dan saling membantu saat ada yang kesusahan. Hasilnya, kesejahteraan meningkat signifikan.",
      },
      {
        title: "Banjir Rob, Gotong Royong Tanggap",
        story:
          "Saat banjir rob melanda pesisir Gresik, warga spontan bergotong royong mengungsikan barang, membuat tanggul darurat dari karung pasir, dan menyiapkan dapur umum. Tidak ada yang menunggu perintah, semua bergerak otomatis.",
      },
    ],
    quotes: [
      {
        text: "Satu orang untuk semua, semua untuk satu. Itulah prinsip kami di kampung ini.",
        author: "Pak Lurah Kampung Nelayan",
        context: "Wawancara tentang kekuatan gotong royong",
      },
      {
        text: "Berat sama dipikul, ringan sama dijinjing. Pepatah ini masih hidup di Gresik.",
        author: "Mbah Sapari (Tokoh Masyarakat)",
        context: "Diskusi nilai-nilai luhur budaya Jawa",
      },
    ],
    color: "#E07A3E",
    realLifeExample: "Saat banjir melanda beberapa wilayah Gresik, tanpa diminta, warga dari berbagai kampung datang membawa makanan, terpal, dan bantuan. Mereka bergerak cepat tanpa menunggu instruksi pemerintah. Ini adalah gotong royong modern yang responsif.",
    quote: "Masalah satu warga adalah masalah kita semua. Kita hidup bersama, mati pun bersama.",
    example: "Saat ada hajatan pernikahan, tetangga sekampung otomatis datang membantu memasak, mendirikan tenda, melayani tamu tanpa diminta dan tanpa dibayar.",
  },
  {
    id: "kerja-keras",
    name: "Kerja Keras & Entrepreneurship",
    icon: "💪",
    tagline: "Produktif dan Berinovasi",
    description:
      "Etos kerja yang tinggi dan jiwa wirausaha yang kuat menjadikan Gresik sebagai salah satu kota industri terkemuka di Jawa Timur.",
    deepMeaning:
      "Kerja keras bukan hanya tentang bekerja lama, tapi bekerja cerdas dan produktif. Ditambah jiwa entrepreneurship yang berani mengambil risiko, masyarakat Gresik mampu mengubah potensi menjadi kesuksesan nyata.",
    manifestations: [
      "Industri besar seperti Petrokimia dan Semen Gresik",
      "UMKM yang berkembang pesat (pudak, bandeng presto)",
      "Nelayan yang berani melaut jauh",
      "Petani yang inovatif",
      "Santri yang sambil berwirausaha",
      "Pasar tradisional yang ramai sejak subuh",
      "Online shop lokal yang go national",
    ],
    connections: ["religius", "gotong-royong", "pelestarian-budaya"],
    connectedTo: [
      {
        category: "Pekerjaan",
        items: ["Semua sektor", "UMKM", "Industri", "Perikanan"],
        explanation:
          "Kerja keras adalah fondasi kesuksesan di semua sektor pekerjaan Gresik, dari nelayan hingga industrialis.",
      },
      {
        category: "Makanan",
        items: ["Pudak", "Bandeng Presto", "Otak-otak Bandeng"],
        explanation:
          "Makanan khas Gresik adalah hasil kerja keras dan inovasi. Pudak dibuat dengan proses rumit, bandeng presto memerlukan teknik khusus.",
      },
      {
        category: "Adat",
        items: ["Budaya Nyantri", "Petik Laut"],
        explanation:
          "Budaya nyantri mengajarkan disiplin dan kerja keras. Petik Laut adalah wujud syukur atas kerja keras melaut sepanjang tahun.",
      },
    ],
    realLifeExamples: [
      {
        title: "Dari Karyawan Jadi Pengusaha Pudak",
        story:
          "Bu Sulis dulunya karyawan pabrik dengan gaji UMR. Ia belajar membuat pudak dari tetangganya, lalu mulai berjualan online. Kini ia punya 10 karyawan dan omzet puluhan juta per bulan. Kunci suksesnya: kerja keras, konsisten, dan inovasi rasa.",
      },
      {
        title: "Nelayan yang Melek Teknologi",
        story:
          "Pak Hasan, nelayan 40 tahun, belajar menggunakan GPS dan fish finder untuk meningkatkan hasil tangkapan. Ia juga bergabung dengan KUB untuk akses modal. Kini penghasilannya 2x lipat dari sebelumnya.",
      },
      {
        title: "Santri Entrepreneur Digital",
        story:
          "Ahmad Fauzi, santri di Gresik, sambil mondok ia berjualan aksesoris muslim online. Dari dropship, kini ia punya brand sendiri dengan ribuan pelanggan. Ia menginspirasi santri lain untuk mandiri.",
      },
    ],
    quotes: [
      {
        text: "Kesuksesan itu 1% inspirasi, 99% keringat. Tidak ada yang instan.",
        author: "H. Bambang (Owner Bandeng Presto Legendaris)",
        context: "Motivasi untuk pengusaha muda",
      },
      {
        text: "Jangan takut gagal. Yang perlu ditakutkan adalah tidak pernah mencoba.",
        author: "Ibu Siti (Pengusaha UMKM Sukses)",
        context: "Workshop kewirausahaan untuk perempuan",
      },
    ],
    color: "#D4695B",
    realLifeExample: "Pengusaha bandeng presto Bu Siti memulai dari warung kecil di tahun 2010. Dengan kerja keras, produknya kini dikirim hingga ke luar Jawa. Dia mulai dari pagi buta memproses ikan, dan tidak pernah menolak pesanan kecil. Kini ia punya 15 karyawan.",
    quote: "Sukses itu hasil dari kerja keras, doa, dan pantang menyerah.",
    example: "Bu Siti memulai usaha bandeng presto dari dapur rumahnya tahun 2010. Kini produknya dikirim ke seluruh Indonesia dengan 15 karyawan.",
  },
  {
    id: "pelestarian-budaya",
    name: "Pelestarian Budaya",
    icon: "🎭",
    tagline: "Jaga Warisan, Rangkul Masa Depan",
    description:
      "Komitmen kuat untuk melestarikan warisan budaya leluhur sambil tetap terbuka terhadap modernisasi yang positif.",
    deepMeaning:
      "Pelestarian budaya bukan berarti anti-modernitas, tapi memilih dengan bijak mana yang perlu dipertahankan dan mana yang perlu disesuaikan. Gresik berhasil menjadi modern tanpa kehilangan identitas.",
    manifestations: [
      "Festival Grebeg Suran yang megah",
      "Sanggar seni di berbagai tempat",
      "Pengajaran kesenian di sekolah",
      "Museum dan situs sejarah terawat",
      "Makanan tradisional tetap populer",
      "Pakaian adat dipakai saat acara resmi",
      "Bahasa Jawa masih diajarkan",
    ],
    connections: ["kerja-keras", "toleransi", "religius"],
    connectedTo: [
      {
        category: "Kesenian",
        items: [
          "Jemblung",
          "Hadrah",
          "Qasidah",
          "Tari Grebeg Suran",
          "Wayang Topeng",
        ],
        explanation:
          "Kesenian adalah wujud nyata pelestarian budaya. Melalui pertunjukan, nilai-nilai leluhur diturunkan ke generasi muda.",
      },
      {
        category: "Adat",
        items: ["Semua tradisi adat", "Festival", "Upacara"],
        explanation:
          "Setiap adat yang masih dilaksanakan adalah bukti komitmen pelestarian budaya.",
      },
      {
        category: "Makanan",
        items: ["Pudak", "Bandeng Presto", "Lontong Kupang"],
        explanation:
          "Makanan tradisional yang tetap eksis adalah pelestarian budaya kuliner. Resep turun temurun dijaga keasliannya.",
      },
    ],
    realLifeExamples: [
      {
        title: "Sanggar Jemblung Remaja",
        story:
          "Sanggar Jemblung 'Putri Budaya' merekrut anak-anak muda usia 15-25 tahun untuk belajar Jemblung. Dengan pendekatan modern (social media, video klip), Jemblung jadi keren di mata anak muda.",
      },
      {
        title: "Festival Grebeg Suran Mendunia",
        story:
          "Festival Grebeg Suran yang awalnya hanya acara lokal, kini menarik wisatawan mancanegara. Tercatat 50.000+ pengunjung setiap tahunnya. Budaya lokal jadi kebanggaan nasional.",
      },
      {
        title: "Pudak Viral di TikTok",
        story:
          "Pengusaha muda membuat konten TikTok tentang proses pembuatan Pudak. Videonya viral 5 juta views. Hasilnya, order Pudak meningkat drastis, terutama dari luar Gresik.",
      },
    ],
    quotes: [
      {
        text: "Budaya yang tidak dilestarikan akan punah. Budaya yang tidak dikembangkan akan mati.",
        author: "Dinas Kebudayaan Gresik",
        context: "Launching program revitalisasi budaya",
      },
      {
        text: "Anak muda adalah kunci pelestarian budaya. Mereka harus bangga dengan budaya sendiri.",
        author: "Mbak Rina (Penari Muda)",
        context: "Workshop seni untuk generasi muda",
      },
    ],
    color: "#00B4AB",
    realLifeExample: "Festival Grebeg Suran yang rutin digelar adalah bukti pelestarian budaya yang sukses. Generasi muda terlibat aktif dalam pertunjukan wayang topeng, tari tradisional, dan musik hadrah. Mereka bangga memakai kostum tradisional dan tampil di depan ribuan orang.",
    quote: "Budaya adalah akar kita. Tanpa akar, pohon akan mudah tumbang saat badai modernisasi datang.",
    example: "Festival Grebeg Suran yang rutin digelar melibatkan generasi muda dalam pertunjukan wayang topeng, tari tradisional, dan musik hadrah.",
  },
  {
    id: "toleransi",
    name: "Toleransi & Keberagaman",
    icon: "🌈",
    tagline: "Berbeda tapi Bersatu",
    description:
      "Sikap saling menghargai perbedaan agama, suku, dan budaya menjadi kekuatan Gresik sebagai kota multikultur.",
    deepMeaning:
      "Toleransi di Gresik bukan sekadar 'tidak mengganggu', tapi aktif saling mendukung dan merayakan keberagaman. Ini adalah implementasi dari nilai Pancasila dan ajaran Islam yang rahmatan lil alamin.",
    manifestations: [
      "Kerukunan antar umat beragama",
      "Perayaan hari besar bersama",
      "Pernikahan beda budaya yang harmonis",
      "Pasar dengan pedagang berbagai suku",
      "Sekolah yang inklusif",
      "Festival budaya yang menampilkan semua kesenian",
      "Dialog lintas agama rutin",
    ],
    connections: ["religius", "gotong-royong", "pelestarian-budaya"],
    connectedTo: [
      {
        category: "Adat",
        items: ["Grebeg Suran", "Petik Laut", "Gotong Royong"],
        explanation:
          "Semua tradisi melibatkan seluruh lapisan masyarakat tanpa diskriminasi. Ini memupuk toleransi.",
      },
      {
        category: "Pekerjaan",
        items: ["Semua sektor", "Koperasi multi-etnis"],
        explanation:
          "Di tempat kerja, semua orang dinilai dari kompetensi, bukan agama atau suku. Ini menciptakan lingkungan yang toleran.",
      },
      {
        category: "Kesenian",
        items: ["Beragam kesenian dari berbagai budaya"],
        explanation:
          "Kesenian Jawa, Arab, Madura, dan modern hidup berdampingan dan saling menghargai.",
      },
    ],
    realLifeExamples: [
      {
        title: "Gereja di Tengah Kampung Muslim",
        story:
          "Gereja Katolik St. Yoseph berdiri di tengah kampung yang mayoritas Muslim. Tidak ada konflik. Bahkan saat Natal, warga Muslim ikut menjaga keamanan. Saat Lebaran, umat Kristiani turut menyemarakkan.",
      },
      {
        title: "TKA Buddhis Dibantu Warga Muslim",
        story:
          "Ketika Taman Kanak-kanak Buddhis kesulitan dana renovasi, warga Muslim setempat bergotong royong membantu. 'Anak-anak adalah masa depan bangsa, apapun agamanya,' kata Pak RT.",
      },
      {
        title: "Festival Grebeg Suran: Semua Warna, Satu Hati",
        story:
          "Dalam Festival Grebeg Suran, ada peserta dari berbagai agama dan suku. Ada barongsai, hadrah, angklung, tari Bali, semua berpadu indah. Ini bukti toleransi sejati.",
      },
    ],
    quotes: [
      {
        text: "Kita berbeda agama, tapi satu saudara sebangsa Indonesia.",
        author: "Bupati Gresik",
        context: "Dialog Kerukunan Umat Beragama",
      },
      {
        text: "Toleransi bukan hanya di mulut, tapi dalam tindakan nyata sehari-hari.",
        author: "Pastor Andreas (Gereja St. Yoseph)",
        context: "Wawancara tentang kerukunan di Gresik",
      },
    ],
    color: "#1A2332",
    realLifeExample: "Saat Lebaran, warga non-Muslim ikut menjaga keamanan saat sholat Idul Fitri. Begitu juga saat Natal, warga Muslim membantu mengatur parkir di gereja. Ini adalah toleransi aktif yang indah, bukan hanya toleransi pasif.",
    quote: "Toleransi bukan hanya di mulut, tapi dalam tindakan nyata sehari-hari.",
    example: "Saat Lebaran, warga non-Muslim menjaga keamanan saat sholat Idul Fitri. Saat Natal, warga Muslim membantu mengatur parkir di gereja.",
  },
];

// Nilai relationships (which nilai connects to which)
export const nilaiRelationships = [
  { from: "religius", to: "toleransi", strength: "strong" },
  { from: "religius", to: "kerja-keras", strength: "strong" },
  { from: "gotong-royong", to: "toleransi", strength: "strong" },
  { from: "gotong-royong", to: "kerja-keras", strength: "medium" },
  { from: "kerja-keras", to: "pelestarian-budaya", strength: "medium" },
  { from: "pelestarian-budaya", to: "toleransi", strength: "strong" },
];

export function getNilaiById(id: string): NilaiItem | undefined {
  return nilaiData.find((item) => item.id === id);
}

export function getRelatedNilai(nilaiId: string): NilaiItem[] {
  const related = nilaiRelationships
    .filter((rel) => rel.from === nilaiId || rel.to === nilaiId)
    .map((rel) => (rel.from === nilaiId ? rel.to : rel.from));

  return nilaiData.filter((item) => related.includes(item.id));
}
