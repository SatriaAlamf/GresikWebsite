export interface PakaianAdatItem {
  id: string;
  name: string;
  type: "Pria" | "Wanita" | "Anak" | "Pengantin";
  description: string;
  image?: string;
  components: Array<{
    name: string;
    description: string;
    symbolism?: string;
  }>;
  colors: {
    primary: string;
    secondary: string[];
    meaning: string;
  };
  occasion: string[];
  philosophy: string;
  history: string;
}

export const pakaianAdatData: PakaianAdatItem[] = [
  {
    id: "busana-pria",
    name: "Busana Adat Pria Gresik",
    type: "Pria",
    description:
      "Busana khas pria Gresik yang dikenakan untuk acara resmi dan hari-hari besar, memadukan baju beskap atau koko dengan sarung tenun yang dililitkan di atas celana, serta kopyah sebagai penutup kepala yang menjadi ikon khas Gresik.",
    image: "/images/pakaian/pakaian-pria.jpg",
    components: [
      {
        name: "Baju Beskap/Koko Putih",
        description: "Baju muslim warna putih atau beskap dengan kerah sanghai (leher tinggi), melambangkan kesucian dan kesederhanaan",
        symbolism: "Kesopanan dan identitas muslim yang kuat",
      },
      {
        name: "Celana Panjang",
        description: "Celana panjang dengan warna yang senada dengan baju bagian atas",
        symbolism: "Kesederhanaan dan kepraktisan",
      },
      {
        name: "Sarung Tenun Gresik",
        description: "Sarung tenun khas Gresik yang dililitkan dari pinggang hingga di atas lutut, di atas celana panjang",
        symbolism: "Identitas lokal dan kebanggaan sebagai warga Gresik, serta penghormatan terhadap kerajinan lokal",
      },
      {
        name: "Kopyah/Songkok Hitam",
        description: "Tutup kepala berbentuk kopyah atau songkok berwarna hitam, merupakan kerajinan khas Gresik yang sudah menjadi ikon tersendiri",
        symbolism: "Simbol ketakwaan, budaya santri, dan identitas khas pria Gresik yang membedakannya dari daerah lain",
      },
    ],
    colors: {
      primary: "#FFFFFF",
      secondary: ["#000000", "#8B4513", "#2C3E50"],
      meaning:
        "Putih melambangkan kesucian dan kesederhanaan, hitam pada kopyah melambangkan keteguhan iman, coklat sarung tenun melambangkan kearifan lokal",
    },
    occasion: [
      "Hari Jadi Kota Gresik",
      "Acara Resmi Pemerintahan",
      "Upacara Adat",
      "Peringatan Hari Besar Islam",
      "Acara Kenegaraan",
    ],
    philosophy:
      "Busana pria Gresik mencerminkan identitas lokal yang kuat dengan pengaruh budaya santri dan pesantren. Penggunaan sarung di atas celana dan kopyah menjadi pembeda unik dari daerah sekitar seperti Surabaya atau Madura, menunjukkan kebanggaan akan tradisi dan kerajinan lokal.",
    history:
      "Busana khas Gresik untuk pria telah dibakukan dan dipakai resmi sejak era modern, terutama saat momentum Hari Jadi Kota Gresik. Kopyah Gresik sendiri merupakan kerajinan lokal yang terkenal dan menjadi ciri khas tersendiri. Gaya berpakaian ini menunjukkan pengaruh kuat tradisi santri dan pesantren yang berkembang di Gresik sejak abad ke-15.",
  },
  {
    id: "busana-wanita-kurosi",
    name: "Kurosi - Busana Adat Wanita Gresik",
    type: "Wanita",
    description:
      "Busana khas wanita Gresik yang disebut 'Kurosi' (kerudung-sarung), terdiri dari kebaya lengkap dengan kain jarik dan kerudung atau selendang sarung. Busana ini memiliki pengaruh dari Gujarat, India, melalui aktivitas pelabuhan dan dakwah Islam di Gresik.",
    image: "/images/pakaian/pakaian-wanita.jpg",
    components: [
      {
        name: "Kebaya",
        description: "Kebaya tradisional dengan model yang sopan dan elegan, sering dengan potongan yang lebih tertutup sesuai nilai Islami",
        symbolism: "Keanggunan dan kesopanan perempuan Gresik",
      },
      {
        name: "Kain Jarik",
        description: "Kain panjang yang dililitkan sebagai rok, menggunakan batik atau tenun lokal Gresik",
        symbolism: "Warisan budaya dan keterampilan tekstil lokal",
      },
      {
        name: "Kurosi (Kerudung-Sarung)",
        description: "Kerudung atau selendang sarung yang menjadi penanda penting busana adat wanita Gresik, menutup kepala dan bahu dengan anggun",
        symbolism: "Identitas khas wanita Gresik, menunjukkan nilai keagamaan dan pengaruh Gujarat dalam tradisi berpakaian",
      },
      {
        name: "Selendang/Jilbab",
        description: "Pelengkap penutup kepala yang dikenakan dengan cara khas Gresik",
        symbolism: "Ketakwaan dan kesopanan dalam berbusana",
      },
    ],
    colors: {
      primary: "#8B4513",
      secondary: ["#F5DEB3", "#2F4F4F", "#FFFFFF"],
      meaning:
        "Warna-warna earth tone melambangkan kesederhanaan dan keanggunan, putih melambangkan kesucian, dengan motif batik atau tenun lokal yang mencerminkan kekayaan budaya tekstil Gresik",
    },
    occasion: [
      "Hari Jadi Kota Gresik",
      "Acara Resmi Pemerintahan",
      "Upacara Adat",
      "Pengajian",
      "Peringatan Hari Besar Islam",
      "Acara Keluarga",
    ],
    philosophy:
      "Kurosi sebagai busana wanita Gresik mencerminkan perpaduan antara pengaruh Gujarat (India) dengan nilai-nilai lokal dan keislaman. Busana ini menekankan kesopanan, keanggunan, dan identitas lokal yang kuat. Penggunaan tenun dan batik lokal menunjukkan penghargaan terhadap kerajinan tekstil Gresik.",
    history:
      "Menurut catatan sejarah, busana wanita Gresik khususnya Kurosi memiliki akar dari pengaruh Gujarat (India) yang masuk melalui aktivitas pelabuhan dan dakwah Islam di Gresik. Tradisi ini berkembang seiring dengan munculnya Pesantren Giri pada tahun 1486 dan menjadi bagian dari identitas budaya santri Gresik. Busana ini telah dibakukan dan dipakai dalam acara-acara resmi untuk memperkuat karakter dan kebanggaan daerah.",
  },
];

export const pakaianOccasions = [
  "Semua",
  "Pernikahan",
  "Upacara Adat",
  "Pengajian",
  "Acara Resmi",
  "Keseharian",
] as const;

export function getPakaianByOccasion(occasion: string): PakaianAdatItem[] {
  if (occasion === "Semua") return pakaianAdatData;
  return pakaianAdatData.filter((item) =>
    item.occasion.includes(occasion)
  );
}

export function getPakaianById(id: string): PakaianAdatItem | undefined {
  return pakaianAdatData.find((item) => item.id === id);
}
