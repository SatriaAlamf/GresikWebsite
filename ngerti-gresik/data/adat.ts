export interface AdatItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  timing: string;
  activities: string[];
  meaning: string;
}

export const adatData: AdatItem[] = [
  {
    id: "sedekah-laut",
    name: "Sedekah Laut / Petik Laut",
    icon: "🌊",
    description: "Tradisi tahunan masyarakat nelayan Gresik sebagai ungkapan syukur kepada Allah SWT atas hasil tangkapan laut dan keselamatan para nelayan. Upacara ini menampilkan prosesi larung sesaji di laut yang diiringi doa bersama.",
    timing: "Biasanya dilaksanakan pada bulan Syuro (Muharram) atau setelah musim panen ikan",
    activities: [
      "Persiapan sesaji berupa hasil bumi dan laut",
      "Doa bersama yang dipimpin oleh tokoh agama",
      "Prosesi larung sesaji ke tengah laut menggunakan perahu hias",
      "Pertunjukan kesenian tradisional seperti musik patrol dan hadrah",
      "Makan bersama (kenduri) di pesisir pantai"
    ],
    meaning: "Mengajarkan nilai syukur, kebersamaan, dan harmoni antara manusia dengan alam. Tradisi ini juga menjadi simbol harapan akan hasil tangkapan yang melimpah dan keselamatan nelayan."
  },
  {
    id: "damar-kurung",
    name: "Damar Kurung",
    icon: "🏮",
    description: "Lentera khas Gresik yang menjadi ikon budaya lokal. Damar Kurung adalah lampu tradisional berbentuk kubus atau prisma yang terbuat dari kayu dan kertas, dihias dengan motif-motif khas yang sarat makna. Tradisi ini berkembang sejak zaman Kerajaan Majapahit dan masih lestari hingga kini.",
    timing: "Biasanya dipamerkan saat perayaan hari besar Islam, terutama menjelang bulan Ramadan dan Maulid Nabi",
    activities: [
      "Pembuatan kerangka damar dari bambu atau kayu",
      "Pemasangan kertas warna-warni dengan motif khas Gresik",
      "Penambahan kaligrafi Arab dan ornamen islami",
      "Penyalaan lampu minyak di dalamnya",
      "Pawai damar kurung di jalan-jalan kota",
      "Lomba kreativitas desain damar kurung"
    ],
    meaning: "Melambangkan cahaya Islam yang menerangi kehidupan masyarakat Gresik. Warna-warni dan motifnya mencerminkan keberagaman budaya yang harmonis dalam bingkai nilai-nilai Islami."
  },
  {
    id: "pasar-bandeng",
    name: "Pasar Bandeng",
    icon: "🐟",
    description: "Tradisi pasar khusus ikan bandeng yang diadakan menjelang Hari Raya Idul Fitri. Pasar ini menjadi pusat jual beli bandeng segar dan olahan khas Gresik seperti bandeng presto, bandeng duri lunak, dan otak-otak bandeng.",
    timing: "Minggu terakhir bulan Ramadan menjelang Idul Fitri",
    activities: [
      "Persiapan area pasar di lokasi strategis",
      "Penjualan bandeng segar hasil tangkapan nelayan lokal",
      "Penjualan berbagai olahan bandeng khas Gresik",
      "Demonstrasi cara mengolah bandeng",
      "Interaksi langsung antara nelayan, pedagang, dan pembeli",
      "Festival kuliner bandeng dengan berbagai kreasi menu"
    ],
    meaning: "Tradisi ini mencerminkan identitas Gresik sebagai kota penghasil bandeng berkualitas. Sekaligus menjadi sarana ekonomi masyarakat pesisir dan melestarikan kuliner khas daerah."
  },
  {
    id: "ruwat-desa",
    name: "Ruwat Desa / Bersih Desa",
    icon: "🙏",
    description: "Upacara tradisional pembersihan desa yang dilakukan secara rutin oleh masyarakat untuk menjaga keselamatan, keberkahan, dan kerukunan warga. Dalam konteks Islam di Gresik, tradisi ini telah beradaptasi dengan nilai-nilai keislaman.",
    timing: "Biasanya dilaksanakan setelah panen atau menjelang bulan suci Ramadan",
    activities: [
      "Gotong royong membersihkan lingkungan desa, makam, dan tempat ibadah",
      "Pengajian dan doa bersama yang dipimpin tokoh agama",
      "Penyembelihan hewan kurban (kambing atau sapi) sebagai sedekah",
      "Kenduri atau selamatan dengan hidangan tradisional",
      "Pembacaan tahlil dan sholawat",
      "Silaturahmi antar warga dan pemimpin desa"
    ],
    meaning: "Mengajarkan nilai kebersihan, kebersamaan, dan syukur. Tradisi ini memperkuat tali silaturahmi dan gotong royong dalam masyarakat, serta menjadi pengingat untuk selalu menjaga keharmonisan dengan lingkungan."
  },
  {
    id: "ruwat-rajakaya",
    name: "Ruwat Rajakaya / Rojokoyo",
    icon: "🐄",
    description: "Tradisi pemberkatan hewan ternak (terutama sapi) yang dilakukan oleh petani dan peternak di Gresik. Upacara ini bertujuan memohon keselamatan dan keberkahan atas ternak yang menjadi sumber mata pencaharian masyarakat.",
    timing: "Biasanya dilaksanakan setelah masa panen atau pada bulan-bulan tertentu menurut hitungan Jawa",
    activities: [
      "Memandikan dan menghias hewan ternak dengan warna-warni",
      "Arak-arakan hewan ternak mengelilingi desa",
      "Doa bersama dan pembacaan ayat suci Al-Qur'an",
      "Pemberian sesaji berupa hasil pertanian",
      "Kenduri dan makan bersama warga",
      "Lomba hias ternak dan lomba ketangkasan ternak"
    ],
    meaning: "Melambangkan rasa syukur atas rejeki yang diberikan melalui hasil peternakan. Tradisi ini juga mengajarkan untuk menghargai hewan sebagai makhluk Allah yang membantu manusia dalam kehidupan sehari-hari."
  },
  {
    id: "malam-selawe",
    name: "Tradisi Malam Selawe",
    icon: "🎋",
    description: "Tradisi peringatan malam ke-25 Ramadan yang penuh khidmat dan sakral. Malam Selawe (dari kata 'selikur' dalam bahasa Jawa yang berarti dua puluh lima) dipercaya sebagai salah satu malam istimewa untuk beribadah dan mencari Lailatul Qadar.",
    timing: "Malam ke-25 bulan Ramadan",
    activities: [
      "Sholat tarawih dan tahajud berjamaah di masjid-masjid",
      "Pembacaan Al-Qur'an secara tartil sepanjang malam",
      "Dzikir dan wirid bersama hingga menjelang subuh",
      "Ceramah agama tentang keutamaan Lailatul Qadar",
      "Memperbanyak sedekah dan berbagi takjil",
      "I'tikaf di masjid bagi yang mampu"
    ],
    meaning: "Menandai penghormatan terhadap malam-malam mulia di bulan Ramadan. Tradisi ini mengajarkan pentingnya meningkatkan ibadah dan kedekatan dengan Allah di sepuluh hari terakhir Ramadan."
  }
];

export const getAllAdat = (): AdatItem[] => {
  return adatData;
};

export const getAdatById = (id: string): AdatItem | undefined => {
  return adatData.find((item) => item.id === id);
};
