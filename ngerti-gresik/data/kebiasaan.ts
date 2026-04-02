export interface KebiasaanItem {
  id: string;
  title: string;
  description: string;
  waktu: string;
  lokasi?: string;
  makna: string;
  images: string[];
  sources: {
    title: string;
    url: string;
  }[];
  category: "spiritual" | "ekonomi" | "seni" | "komunitas" | "religi";
}

export const kebiasaanData: KebiasaanItem[] = [
  {
    id: "malam-selawe",
    title: "Malam Selawe",
    description: "Tradisi ziarah ke makam Sunan Giri yang dilaksanakan pada malam ke-25 Ramadan. Ribuan umat berkumpul untuk melakukan ibadah khusus seperti tarawih berjamaah dan membaca Al-Qur'an sambil mencari keberkahan.",
    waktu: "Malam ke-25 bulan Ramadan (kalender Hijriyah)",
    lokasi: "Makam Sunan Giri, Gresik",
    makna: "Menunjukkan kekuatan religiusitas masyarakat Gresik sekaligus memperkuat hubungan sosial antar-warga dalam momen bersama. Tradisi ini menjadi simbol wisata religi yang khas.",
    category: "spiritual",
    images: [
      "https://disparekrafbudpora.gresikkab.go.id/content/uploads/whatsapp_image_2024-02-28_at_08-26-481.jpeg",
      "https://disparekrafbudpora.gresikkab.go.id/content/uploads/malam_selawe.jpg",
      "https://www.bangsaonline.com/images/uploads/berita/700/6bfe7984519e45a3e6a03d6bf3fbbd0b.jpg",
      "https://abadinews.id/po-content/uploads/IMG-20220427-WA0013.jpg",
      "https://www.nugresik.or.id/wp-content/uploads/2024/04/PENGUNJUNG-TRADISI-MALAM-SELAWE-GRESIK.jpg",
      "https://www.gresik.info/wp-content/uploads/tradisi-malam-selawe-gresik-gerbang-masuk-makam-sunan-giri-1024x763.jpg"
    ],
    sources: [
      {
        title: "Liputan6",
        url: "https://www.liputan6.com/feeds/read/5813478/ciri-khas-gresik-warisan-budaya-yang-mempesona-dari-kota-santri"
      },
      {
        title: "Kelurahan Sidomoro",
        url: "https://kelurahansidomoro13.wordpress.com/2021/02/16/mengenal-tradisi-yang-ada-di-kota-gresik/"
      }
    ]
  },
  {
    id: "pasar-bandeng",
    title: "Pasar Bandeng",
    description: "Tradisi pasar yang diadakan menjelang Hari Raya Idul Fitri, khususnya di daerah tambak dan budidaya ikan bandeng. Bukan hanya ajang jual-beli, tetapi juga momen silaturahmi dan penguatan identitas lokal sebagai 'kampung bandeng'.",
    waktu: "Menjelang Idul Fitri / akhir Ramadan",
    lokasi: "Desa-desa tambak di Gresik",
    makna: "Mencerminkan aktivitas ekonomi dan budaya masyarakat pesisir Gresik yang tak terpisahkan. Tradisi ini menunjukkan bagaimana kegiatan ekonomi menjadi bagian dari identitas sosial.",
    category: "ekonomi",
    images: [
      "https://www.nugresik.or.id/wp-content/uploads/2024/04/PASAR-BANDENG-GRESIK-860x641.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgr-w_OB9KIUxGmxtsVqqjckET8_QSZvpyyKwmLIa_Z1jc0W6bYX4PQmaQ4OeVYzwa7aIytpjIayA0x_qWao5bPbKsIfExtSFfaA3H_yYvkzeLK7SpFli3s4P2y6-bjMmrcTOmLKmD7-0/w1200-h630-p-k-no-nu/IMG_9905.JPG",
      "https://image.idntimes.com/post/20220613/fromandroid-797fb4582ff4ae98439d977d2ec6da71.jpg",
      "https://static.promediateknologi.id/crop/0x0%3A0x0/0x0/webp/photo/p2/83/2024/04/07/pasar-bandeng-496188464.jpeg",
      "https://awsimages.detik.net.id/community/media/visual/2025/03/26/pasar-bandeng-gresik-1742977541231_169.jpeg?w=1200",
      "https://awsimages.detik.net.id/community/media/visual/2023/04/19/bupati-gresik-fandi-akhmad-yani_43.jpeg?w=1200"
    ],
    sources: [
      {
        title: "Geo FISIPOL UNESA",
        url: "https://geo.fisipol.unesa.ac.id/post/geografi-sosial-budaya-dalam-tradisi-ramadan-bandeng-kawak-di-pangkahwetan-gresik"
      },
      {
        title: "Kelurahan Sidomoro",
        url: "https://kelurahansidomoro13.wordpress.com/2021/02/16/mengenal-tradisi-yang-ada-di-kota-gresik/"
      }
    ]
  },
  {
    id: "damar-kurung",
    title: "Damar Kurung",
    description: "Seni lampion tradisional berbentuk kubus atau kotak yang dilukis dengan adegan kehidupan sehari-hari masyarakat Gresik. Damar Kurung menjadi media ekspresi budaya dan religius yang merefleksikan kehidupan lokal dalam bentuk seni visual.",
    waktu: "Berbagai acara budaya dan religi",
    lokasi: "Gresik",
    makna: "Sebagai warisan budaya tak benda yang diakui, Damar Kurung mencerminkan kreativitas dan identitas masyarakat Gresik. Seni ini menggabungkan nilai estetika dengan pesan moral dan religius.",
    category: "seni",
    images: [
      "https://api.minio.jatimprov.go.id/kominfo-jatim/images/1000377270.jpg",
      "https://www.suarasurabaya.net/wp-content/uploads/2014/09/kk140345_clip10.jpg",
      "https://cdn.antaranews.com/cache/1200x800/2023/04/02/Damar-Kurung-Festive-2023-01042023-Rh-5.jpg",
      "https://genpi.id/wp-content/uploads/2021/06/image-7.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo3iDprPECQ9EB8bY4fWK27Iypk-fO2PmBZog3q7_6vV5Nhf0iavtpEGAhpIZ3FfekuALBkCivJDqfJvyAepkftxxrhM0UkAtqipWAp14yk72diVlNnP1ldYOfoEEG-808zu-uQHgaW2I/s1600/dk1.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9gaU6fVSlcbdhgiI2RoJ8hS0E40GHakPDuqjfjzRwWGahZ34xmzMla5ivqbWDOvsuw0VGOsplb9EwvHBEUuzpzKwZS-obyhdLiY6ozyjGYZmlQXaT7NdxLcg6oQ1Yt2FCANVWyaAbO0o/s1600/IMG_7110%2B%28FILEminimizer%29.JPG"
    ],
    sources: [
      {
        title: "PT. Petrokimia Gresik",
        url: "https://petrokimia-gresik.com/news/inilah-alasan-mengapa-gresik-punya-banyak-julukan"
      },
      {
        title: "Radar Tulungagung",
        url: "https://radartulungagung.jawapos.com/seni-budaya/766065945/enam-budaya-asal-gresik-jawa-timur-yang-diakui-sebagai-warisan-budaya-tak-benda-indonesia-berikut-rinciannya-dan-nomor-terakhir-ada-di-pulau-bawean"
      },
      {
        title: "Klikmu",
        url: "https://klikmu.co/lima-tradisi-khas-gresik-ditetapkan-sebagai-warisan-budaya-tak-benda-indonesia/"
      }
    ]
  },
  {
    id: "sanggring-kolak-ayam",
    title: "Sanggring - Tradisi Kolak Ayam",
    description: "Tradisi khas Desa Gumeno yang memasak kolak ayam secara bersama-sama untuk warga. Dijalankan turun-temurun sebagai ritual kebersamaan yang mencerminkan solidaritas dan pelestarian budaya lokal.",
    waktu: "Acara tertentu (umumnya bulan Ramadan)",
    lokasi: "Desa Gumeno, Kecamatan Manyar, Gresik",
    makna: "Mencerminkan karakter masyarakat Gresik yang religius, pelestari budaya, dan memiliki solidaritas tinggi dalam kegiatan komunitas. Tradisi ini menjadi contoh konkret gotong-royong dan kebersamaan.",
    category: "komunitas",
    images: [
      "https://timesindonesia.co.id/_next/image?q=70&url=https%3A%2F%2Fcdn-1.timesmedia.co.id%2Fimages%2F2025%2F03%2F18%2FSanggring-Kolak-Ayam.jpg&w=3840",
      "https://cdn.antaranews.com/cache/1200x800/2023/04/13/antarafoto-tradisi-kolak-ayam-gresik-130423-rh-4.jpg",
      "https://infogresik.id/wp-content/uploads/2024/04/Kolak-ayam-desa-gumeno.jpg",
      "https://klimg.com/merdeka.com/i/w/news/2023/03/29/1536528/540x270/kolak-ayam-gumeno-kuliner-ramadan-warisan-sunan-giri-yang-lezat-dan-sehat.png",
      "https://asset.kompas.com/crops/zXiqKCY_WrpP_AGAeL7IiPf3s6w%3D/0x0%3A0x0/1200x800/data/photo/2022/04/25/6265ba0ec06cc.jpg",
      "https://www.gresiksatu.com/wp-content/uploads/2022/04/232-1.jpg"
    ],
    sources: [
      {
        title: "Jurnal Sosiologi FISIP UNILA",
        url: "https://jurnalsosiologi.fisip.unila.ac.id/index.php/jurnal/article/download/1292/166/3786"
      }
    ]
  },
  {
    id: "rebo-wekasan",
    title: "Rebo Wekasan & Kupat Keteg",
    description: "Rebo Wekasan adalah tradisi yang dilaksanakan pada hari Rabu terakhir bulan Safar sebagai ritual tolak bala. Kupat Keteg merupakan tradisi pelengkap yang turut menjadi bagian warisan budaya tak benda Gresik.",
    waktu: "Rabu terakhir bulan Safar (Rebo Wekasan)",
    lokasi: "Berbagai lokasi di Gresik, khususnya Desa Suci",
    makna: "Tradisi spiritual untuk menolak bahaya dan mendapat keberkahan. Menunjukkan kepercayaan dan praktik keagamaan yang berakar kuat dalam masyarakat Gresik.",
    category: "religi",
    images: [
      "https://gresiksatu.com/wp-content/uploads/2022/11/4BE3C7AD-3C11-4DA9-B200-6FF3BC96330F-585x439.jpeg",
      "https://jatimnow.com/po-content/uploads/202510/kupat.jpg",
      "https://www.gresiksatu.com/wp-content/uploads/2024/09/malam-rebo-wekasan-tradisi-sholat-tolak-bala-di-desa-suci-gresik.jpg",
      "https://awsimages.detik.net.id/community/media/visual/2022/09/20/sejarah-rebo-wekasan-di-gresik-5_169.jpeg?w=1200",
      "https://awsimages.detik.net.id/community/media/visual/2023/09/11/rebo-wekasan-di-suci-manyar-gresik-1_169.jpeg?w=1200",
      "https://assets.promediateknologi.id/crop/0x0%3A0x0/0x0/webp/photo/p2/01/2023/09/13/rebo-wekasan-965131982.png"
    ],
    sources: [
      {
        title: "Liputan6",
        url: "https://www.liputan6.com/feeds/read/5813478/ciri-khas-gresik-warisan-budaya-yang-mempesona-dari-kota-santri"
      },
      {
        title: "Berita Jatim",
        url: "https://beritajatim.com/5-budaya-asli-gresik-ditetapkan-sebagai-warisan-budaya-tak-benda-nasional"
      }
    ]
  }
];
