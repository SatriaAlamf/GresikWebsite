export interface KesenianItem {
  id: string;
  name: string;
  type: "Tari" | "Musik" | "Teater" | "Seni Suara" | "Seni Visual" | "Seni Pertunjukan";
  description: string;
  origin: string;
  history: string;
  characteristics: string[];
  instruments?: string[];
  performers: {
    min: number;
    max?: number;
    description: string;
  };
  occasions: string[];
  culturalSignificance: string;
  preservation: string;
  image?: string;
}

export const kesenianData: KesenianItem[] = [
  {
    id: "damar-kurung",
    name: "Damar Kurung",
    type: "Seni Visual",
    description:
      "Lentera tradisional berbentuk kotak khas Kabupaten Gresik. Lentera ini terbuat dari rangka kayu yang dibungkus kertas bergambar narasi kehidupan masyarakat. Setiap sisinya menggambarkan cerita yang berbeda — seperti kegiatan pasar, permainan anak-anak, atau tradisi keagamaan.",
    origin: "Gresik",
    history:
      "Tradisi Damar Kurung diyakini telah ada sejak masa kerajaan Islam Giri (abad ke-16). Seniman Mbah Masmundari (1904–2005) dikenal sebagai maestro pelestari seni ini. 'Damar' berarti pelita, dan 'Kurung' berarti sangkar — simbol cahaya kebaikan yang menerangi kehidupan manusia. Dulu Damar Kurung dipasang di depan rumah warga saat bulan Ramadan untuk penerangan malam dan simbol sukacita.",
    characteristics: [
      "Gaya lukis dua dimensi tanpa perspektif, warna cerah, dan garis tegas",
      "Ceritanya bersifat dokumenter sosial, menggambarkan kehidupan rakyat Gresik",
      "Menggunakan lampu kecil di dalamnya untuk memancarkan cahaya dari balik gambar",
      "Rangka dari kayu yang dibungkus kertas bergambar",
      "Setiap sisi menggambarkan cerita berbeda (pasar, permainan anak, tradisi keagamaan)",
      "Warna-warna cerah dan motif khas kehidupan pesisir Gresik",
    ],
    instruments: [],
    performers: {
      min: 1,
      description: "Seniman atau pengrajin lokal yang melukis dan membuat lentera",
    },
    occasions: [
      "Bulan Ramadan",
      "Festival Damar Kurung Gresik (dihadiri 500+ lentera)",
      "Peringatan Hari Jadi Kota Gresik",
      "Festival Budaya dan Seni Tradisional",
      "Acara Pariwisata Daerah",
    ],
    culturalSignificance:
      "Damar Kurung adalah ikon budaya Gresik yang merepresentasikan cahaya kebaikan dan dokumentasi visual kehidupan masyarakat pesisir. Seni ini menjadi simbol spiritualitas, kreativitas rakyat, dan warisan leluhur yang mencerminkan nilai-nilai keagamaan serta kebersamaan masyarakat Gresik.",
    preservation:
      "Kini menjadi ikon budaya Gresik yang dirayakan tiap tahun dalam Festival Damar Kurung dengan ratusan lentera tradisional. Masih dilestarikan melalui sanggar seni, sekolah-sekolah, dan komunitas budaya lokal. Mendapat perhatian dari pemerintah daerah dan sering ditampilkan dalam event pariwisata nasional.",
    image: "https://asset-2.tribunnews.com/surabaya/foto/bank/images/Damar-Kurung-Keluarga-Masmundari-di-acara-Padusan-Tlogopojok-Kamis-3132022.jpg",
  },
  {
    id: "pencak-macan",
    name: "Pencak Macan",
    type: "Seni Pertunjukan",
    description:
      "Kesenian bela diri tradisional khas Gresik yang menampilkan perpaduan antara gerakan silat dan atraksi kostum berbentuk harimau. Dalam pertunjukan, satu pemain mengenakan kostum kepala macan besar dengan tubuh berlapis kain belang, sementara lainnya berperan sebagai pesilat atau prajurit.",
    origin: "Pesisir Gresik (Manyar dan Bungah)",
    history:
      "Kesenian ini tumbuh di kawasan pesisir Gresik seperti Manyar dan Bungah, yang terkenal dengan tradisi pencak silatnya. Tokoh macan melambangkan keberanian, kekuatan, dan penjaga masyarakat. Dulu, kesenian ini sekaligus menjadi latihan bela diri bagi para pemuda desa dan bagian dari tradisi ritual perlindungan kampung.",
    characteristics: [
      "Pemain mengenakan kostum kepala macan buatan dari anyaman rotan dan bulu tiruan",
      "Atraksi pertarungan simbolik antara pendekar dan macan",
      "Gerakan silat yang lincah dan agresif menyerupai harimau",
      "Diiringi irama gendang cepat, gong, kenong, dan terompet bambu",
      "Kostum macan dengan tubuh berlapis kain belang warna-warni",
      "Melibatkan interaksi dengan penonton dan adegan dramatik",
    ],
    instruments: ["Kendang", "Gong", "Kenong", "Terompet Bambu"],
    performers: {
      min: 4,
      max: 8,
      description: "1 pemain sebagai macan, sisanya penabuh musik dan pesilat",
    },
    occasions: [
      "Festival Budaya Gresik",
      "Acara Kenegaraan dan Penyambutan Tamu",
      "Pernikahan Adat",
      "Khitanan",
      "Perayaan Hari Jadi Desa",
      "Upacara Bersih Desa",
    ],
    culturalSignificance:
      "Selain sebagai hiburan rakyat, Pencak Macan juga berfungsi menanamkan nilai keberanian, sportivitas, dan solidaritas antarwarga. Kesenian ini merepresentasikan kearifan lokal pesisir Gresik yang menghargai kekuatan, keberanian, dan keseimbangan antara fisik dan spiritual dalam kehidupan bermasyarakat.",
    preservation:
      "Kini sering ditampilkan dalam festival budaya Gresik dan acara kenegaraan. Beberapa sanggar seni di Manyar dan Bungah masih aktif melatih generasi muda. Tercatat dalam inventarisasi kesenian tradisional Kabupaten Gresik oleh Disbudpar dan mendapat perhatian dari komunitas pelestari budaya lokal.",
    image: "https://turisian.com/wp-content/uploads/2022/12/Pencak-Macan-Gresik.jpg",
  },
  {
    id: "kuda-kincak",
    name: "Kuda Kincak",
    type: "Seni Pertunjukan",
    description:
      "Pertunjukan rakyat Gresik yang menampilkan penari menunggang kuda tiruan dari kayu atau bambu. Gerakan penarinya menggambarkan semangat prajurit yang gagah, berpadu dengan musik tradisional yang menghentak. 'Kincak' berarti 'bergerak lincah', menggambarkan karakter tarinya yang enerjik.",
    origin: "Gresik (Masyarakat Agraris dan Pesisir)",
    history:
      "Kesenian ini berakar dari tradisi masyarakat agraris dan pesisir Gresik yang gemar menampilkan hiburan pada acara sedekah bumi, pernikahan, dan khitanan. Kata 'kincak' berarti 'bergerak lincah', menggambarkan karakter tarinya yang energik. Kuda Kincak dulu menjadi bagian penting dari ritual syukuran panen dan perayaan keberhasilan masyarakat desa.",
    characteristics: [
      "Properti utama: kuda buatan dari bambu atau kayu ringan yang dihias warna-warni",
      "Gerakan menirukan kuda berlari, menendang, dan berputar dengan lincah",
      "Kostum: pakaian warna cerah dengan hiasan kepala dan selendang",
      "Musik pengiring: kendang, kenong, terompet, gong, dan kadang gamelan kecil",
      "Gerakan energik dan dinamis mencerminkan semangat keberanian",
      "Dapat berlangsung dalam durasi panjang dengan improvisasi gerakan",
    ],
    instruments: ["Kendang", "Kenong", "Terompet", "Gong", "Gamelan Kecil"],
    performers: {
      min: 6,
      max: 10,
      description: "Penari kuda dan penabuh musik pengiring",
    },
    occasions: [
      "Sedekah Bumi",
      "Pernikahan Adat",
      "Khitanan",
      "Festival Seni Tradisional Gresik",
      "Perayaan Hari Jadi Desa",
      "Hajatan dan Acara Rakyat",
    ],
    culturalSignificance:
      "Kuda Kincak menjadi simbol semangat perjuangan dan gotong royong masyarakat desa. Kuda sebagai simbol kekuatan, keberanian, dan kebebasan mencerminkan jiwa masyarakat Gresik yang pantang menyerah. Seni ini mengajarkan nilai kebersamaan, kerja keras, dan rasa syukur atas hasil bumi.",
    preservation:
      "Kini kesenian ini sering tampil dalam Festival Seni Tradisional Gresik dan menjadi materi pembelajaran budaya di sekolah-sekolah daerah. Masih bertahan di tengah modernisasi berkat upaya komunitas seni lokal dan dukungan Disbudpar Gresik. Tercatat dalam kajian etnografi BRIN sebagai identitas budaya pesisir Gresik.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif-K_DY-uG2fV6ut5ehJNynUhTV2ryl3aOU6YXWebzpcrHHSO1za8aUNO5lA2T3tUNM8ly67_Loxh7qWy2SwMhQ6StV4f2HSgsy6GhnufUIdf8nuhoKtrH6yoKM7rRz2NjY5wtt9EpN7E/s1600/JARAN-KENCAK.jpg",
  },
];

export const kesenianTypes = [
  "Semua",
  "Seni Visual",
  "Seni Pertunjukan",
  "Musik",
  "Tari",
  "Teater",
  "Seni Suara",
] as const;

export function getKesenianByType(type: string): KesenianItem[] {
  if (type === "Semua") return kesenianData;
  return kesenianData.filter((item) => item.type === type);
}

export function getKesenianById(id: string): KesenianItem | undefined {
  return kesenianData.find((item) => item.id === id);
}
