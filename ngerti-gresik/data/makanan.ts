export interface MakananItem {
  id: string;
  name: string;
  description: string;
  origin: string;
  category: "Manis" | "Gurih" | "Tradisional" | "Modern";
  popularity: number; // 1-100
  story: string;
  ingredients?: string[];
  servingStyle?: string;
  image?: string;
}

export const makananData: MakananItem[] = [
  {
    id: "pudak",
    name: "Pudak",
    image: "/images/makanan/pudak.jpg",
    description:
      "Kue tradisional khas Gresik berbahan dasar kelapa muda yang manis dan lembut. Pudak memiliki tekstur kenyal dengan rasa manis alami dari gula kelapa.",
    origin: "Gresik Kota",
    category: "Manis",
    popularity: 95,
    story:
      "Pudak telah menjadi ikon kuliner Gresik sejak ratusan tahun lalu. Dibuat dengan resep turun-temurun, kue ini menjadi oleh-oleh wajib bagi wisatawan yang berkunjung ke Kota Gresik.",
    ingredients: ["Kelapa muda", "Gula merah", "Tepung beras", "Garam"],
    servingStyle: "Dibungkus daun kelapa atau plastik, dimakan sebagai camilan",
  },
  {
    id: "legen",
    name: "Legen",
    image: "/images/makanan/legen.jpg",
    description:
      "Minuman tradisional dari nira pohon kelapa atau aren yang segar dan alami. Memiliki rasa manis segar dengan aroma khas yang menyegarkan.",
    origin: "Gresik",
    category: "Tradisional",
    popularity: 90,
    story:
      "Legen adalah minuman tradisional yang telah dikonsumsi masyarakat Gresik sejak zaman dahulu. Minuman ini diambil dari pohon kelapa atau aren di pagi hari saat masih segar. Legen memiliki nilai budaya tinggi dan sering disajikan dalam acara-acara adat. Jika dibiarkan lebih lama, legen akan berfermentasi menjadi tuak.",
    ingredients: [
      "Nira kelapa/aren segar",
      "Es batu",
    ],
    servingStyle: "Disajikan dingin dalam gelas, diminum langsung saat masih segar",
  },
  {
    id: "nasi-krawu",
    name: "Sego Krawu",
    image: "/images/makanan/nasi-krawu.jpg",
    description:
      "Nasi dengan lauk daging sapi yang dimasak bumbu rempah khas, disajikan dengan serundeng, sambal, dan kerupuk. Cita rasa gurih dan pedas yang khas.",
    origin: "Gresik",
    category: "Gurih",
    popularity: 88,
    story:
      "Nasi Krawu berasal dari daerah Gresik dan Surabaya. Nama 'Krawu' konon berasal dari kata 'krau' yang berarti campur, karena hidangan ini merupakan campuran berbagai lauk.",
    ingredients: [
      "Nasi putih",
      "Daging sapi",
      "Serundeng kelapa",
      "Sambal terasi",
      "Kerupuk rambak",
    ],
    servingStyle: "Disajikan di atas piring dengan semua lauk dicampur",
  },
  {
    id: "sego-menir",
    name: "Sego Menir",
    image: "/images/makanan/sego-menir.jpg",
    description:
      "Nasi yang dimasak dengan beras menir (beras pecah/patah) sehingga teksturnya lebih pulen dan lengket. Biasanya disajikan dengan lauk ikan asin, tempe, dan sambal terasi khas Gresik.",
    origin: "Gresik",
    category: "Tradisional",
    popularity: 85,
    story:
      "Sego Menir adalah makanan tradisional masyarakat pesisir Gresik yang mencerminkan nilai kesederhanaan dan kearifan lokal. Beras menir yang digunakan merupakan beras pecah yang lebih ekonomis namun tetap bergizi. Hidangan ini telah menjadi makanan sehari-hari nelayan Gresik sejak puluhan tahun lalu, mencerminkan kehidupan masyarakat pesisir yang erat dengan hasil laut.",
    ingredients: [
      "Beras menir",
      "Ikan asin",
      "Tempe goreng",
      "Sambal terasi",
      "Lalapan",
      "Kerupuk",
    ],
    servingStyle: "Disajikan dengan lauk sederhana dan sambal terasi yang pedas",
  },
  {
    id: "otak-otak-bandeng",
    name: "Otak-Otak Bandeng",
    image: "/images/makanan/otak-otak-bandeng.jpg",
    description:
      "Daging ikan bandeng yang dihaluskan, dicampur bumbu rempah, lalu dimasukkan kembali ke dalam tubuh bandeng dan dibakar atau digoreng.",
    origin: "Gresik",
    category: "Gurih",
    popularity: 87,
    story:
      "Otak-otak Bandeng Gresik memerlukan keahlian khusus dalam pembuatannya. Daging ikan harus dikeluarkan tanpa merusak kulit, lalu dihaluskan dengan bumbu dan dimasukkan kembali.",
    ingredients: [
      "Ikan bandeng",
      "Kelapa parut",
      "Bumbu halus",
      "Telur",
      "Daun jeruk",
    ],
    servingStyle: "Dibakar atau digoreng, disajikan dengan sambal dan nasi",
  },
  {
    id: "bonggolan",
    name: "Bonggolan",
    image: "/images/makanan/bonggolan.jpg",
    description:
      "Makanan ringan terbuat dari adonan beras yang dibentuk bulat, digoreng hingga renyah. Camilan tradisional yang gurih dan renyah.",
    origin: "Gresik",
    category: "Gurih",
    popularity: 75,
    story:
      "Bonggolan sering dijajakan di pasar-pasar tradisional Gresik. Bentuknya yang unik dan teksturnya yang renyah membuatnya digemari sebagai camilan sore hari.",
    ingredients: ["Tepung beras", "Kelapa parut", "Garam", "Bawang putih"],
    servingStyle: "Dimakan sebagai camilan dengan teh atau kopi",
  },
  {
    id: "sego-roomo",
    name: "Sego Roomo",
    image: "/images/makanan/sego-roomo.jpg",
    description:
      "Nasi dengan lauk ikan tongkol atau teri yang dimasak dengan bumbu rempah kaya rasa. Hidangan khas pesisir Gresik dengan cita rasa gurih pedas yang menggugah selera.",
    origin: "Gresik",
    category: "Gurih",
    popularity: 82,
    story:
      "Sego Roomo adalah hidangan khas masyarakat pesisir Gresik yang diwariskan turun-temurun. Kata 'Roomo' dalam bahasa Jawa berarti ramai atau banyak, merujuk pada campuran berbagai lauk dan bumbu yang kaya. Hidangan ini mencerminkan kekayaan hasil laut Gresik dan keahlian meracik bumbu tradisional.",
    ingredients: ["Nasi putih", "Ikan tongkol/teri", "Bumbu rempah", "Cabai", "Tomat", "Bawang merah"],
    servingStyle: "Disajikan dengan nasi hangat, dilengkapi sambal dan lalapan",
  },
  {
    id: "soto-gresik",
    name: "Soto Gresik",
    image: "/images/makanan/soto-gresik.jpg",
    description:
      "Soto khas Gresik dengan kuah bening, isi ayam atau daging sapi, dengan tambahan koya (remahan kerupuk dan kacang).",
    origin: "Gresik",
    category: "Gurih",
    popularity: 80,
    story:
      "Soto Gresik memiliki ciri khas kuah yang jernih namun gurih. Tambahan koya memberikan tekstur dan rasa yang unik pada setiap sendokan.",
    ingredients: [
      "Ayam/daging",
      "Kuah kaldu",
      "Koya",
      "Tauge",
      "Daun seledri",
      "Bawang goreng",
    ],
    servingStyle: "Disajikan panas dalam mangkuk dengan nasi atau lontong",
  },
];

export const makananCategories = [
  "Semua",
  "Manis",
  "Gurih",
  "Tradisional",
  "Modern",
] as const;

export function getMakananByCategory(category: string): MakananItem[] {
  if (category === "Semua") return makananData;
  return makananData.filter((item) => item.category === category);
}

export function getMakananById(id: string): MakananItem | undefined {
  return makananData.find((item) => item.id === id);
}
