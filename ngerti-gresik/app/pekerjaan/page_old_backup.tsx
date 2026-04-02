"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { sectorData, diversityStats } from "@/data/pekerjaan";
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Users, 
  Award,
  Factory,
  Ship,
  Hotel,
  Sprout,
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  GraduationCap,
  UserCircle,
  Briefcase as BriefcaseIcon,
  Store,
  Globe
} from "lucide-react";

export default function PekerjaanPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef}>
      {/* Hero Section with Parallax */}
      <Section background="navy" spacing="lg" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxHero smoothProgress={smoothProgress} />
      </Section>

      {/* Introduction Section */}
      <IntroSection />

      {/* Major Companies Showcase */}
      <Section background="light" spacing="lg" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">Perusahaan Utama</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Tulang Punggung Ekonomi Gresik
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Perusahaan-perusahaan besar yang menjadi penggerak utama perekonomian 
              dan penyedia lapangan kerja di Gresik
            </p>
          </div>

          <div className="space-y-32">
            <CompanyShowcase 
              company={{
                name: "PT Petrokimia Gresik",
                tagline: "Agroindustry Solution Provider",
                type: "Pupuk & Kimia",
                icon: Sprout,
                color: "from-green-600 to-emerald-700",
                established: "10 Juli 1972",
                description: "Perusahaan pupuk dan kimia terkemuka di Indonesia, anak usaha PT Pupuk Indonesia (Persero), yang bertransformasi menjadi penyedia solusi agro-industri.",
                highlights: [
                  "Infrastruktur matang dengan komitmen lingkungan",
                  "Program konservasi dan biodiversitas",
                  "Bermitra untuk memperkuat industri kimia",
                  "Kontribusi signifikan terhadap ekonomi lokal dan nasional"
                ],
                location: "Gresik, Jawa Timur",
                philosophy: "Keberlanjutan dan tanggung jawab lingkungan"
              }}
              index={0}
            />

            <CompanyShowcase 
              company={{
                name: "PT Semen Gresik",
                tagline: "Semen Indonesia Group",
                type: "Industri Semen",
                icon: Factory,
                color: "from-gray-700 to-slate-800",
                established: "1957",
                description: "Perusahaan semen besar bagian dari SIG dengan kapasitas produksi mencapai jutaan ton per tahun di Unit I dan II Sidomoro.",
                highlights: [
                  "Produksi semen dengan teknologi ramah lingkungan",
                  "Produk mengurangi emisi CO₂",
                  "TKDN (Tingkat Komponen Dalam Negeri) tinggi",
                  "Lokasi strategis dengan akses bahan baku optimal"
                ],
                location: "Sidomoro, Gresik & Tuban",
                philosophy: "Teknologi berkelanjutan dan kualitas produk"
              }}
              index={1}
            />

            <CompanyShowcase 
              company={{
                name: "Pelabuhan Gresik",
                tagline: "Gerbang Logistik Pesisir Utara",
                type: "Pelabuhan Kelas II",
                icon: Ship,
                color: "from-blue-600 to-cyan-700",
                established: "Abad XIV-XVI",
                description: "Pelabuhan di pesisir Selat Madura yang menjadi pusat perdagangan dan islamisasi masa lalu, kini hub penting untuk distribusi barang dan logistik.",
                highlights: [
                  "Akses penting distribusi zona industri Gresik",
                  "Fasilitas dermaga, gudang, dan lapangan penumpukan",
                  "Integrasi dengan kawasan industri",
                  "Jalur pelayaran ke Pulau Bawean"
                ],
                location: "Jl. Yos Sudarso No.1, Gresik",
                philosophy: "Konektivitas dan efisiensi logistik"
              }}
              index={2}
            />

            <CompanyShowcase 
              company={{
                name: "Hotel Horison GKB Gresik",
                tagline: "Comfort in Gresik Kota Baru",
                type: "Hospitality (Bintang 3)",
                icon: Hotel,
                color: "from-orange-600 to-amber-700",
                established: "2010-an",
                description: "Hotel bintang 3 dengan 101 unit kamar di kawasan Gresik Kota Baru, menawarkan fasilitas lengkap untuk bisnis dan keluarga.",
                highlights: [
                  "Lokasi strategis dekat Tol Manyar dan pusat kota",
                  "Fasilitas: kolam renang, restoran, WiFi",
                  "Pelayanan berkualitas dengan staf ramah",
                  "Pengelolaan limbah konsep 3R (Reduce, Reuse, Recycle)"
                ],
                location: "Jl. Kalimantan No.12A, Wonorejo",
                philosophy: "Kenyamanan tamu dan keberlanjutan lingkungan"
              }}
              index={3}
            />
          </div>
        </Container>
      </Section>

      {/* Economic Impact Section */}
      <EconomicImpactSection />

      {/* Diversity Section - NEW */}
      <DiversitySection />
    </div>
  );
}

function ParallaxHero({ smoothProgress }: { smoothProgress: any }) {
  const y = useTransform(smoothProgress, [0, 0.3], [0, 200]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);

  return (
    <motion.div 
      style={{ y, opacity, scale }}
      className="relative z-10 w-full"
    >
      <Container>
        <div className="text-center max-w-5xl mx-auto pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full shadow-lg mb-8"
          >
            <Briefcase className="w-5 h-5 text-beige animate-pulse" />
            <span className="text-sm font-bold text-offwhite tracking-wide">
              EKONOMI & INDUSTRI GRESIK
            </span>
            <Briefcase className="w-5 h-5 text-beige animate-pulse" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
          >
            <span className="text-offwhite">Pekerjaan &</span>
            <br />
            <span className="text-beige">Peluang Karir</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-offwhite/80 leading-relaxed max-w-3xl mx-auto"
          >
            Gresik sebagai kota industri dan santri menawarkan berbagai peluang karir
            di sektor pupuk, semen, pelabuhan, dan hospitality yang terus berkembang
          </motion.p>
        </div>
      </Container>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-24 h-24 border-4 border-beige/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-32 h-32 border-4 border-teal/30 rounded-2xl"
      />
    </motion.div>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Data BPS Gresik (Agustus 2023)
  const sectors = [
    {
      name: "Sektor Jasa",
      percentage: 47.77,
      color: "from-teal-600 to-cyan-700",
      description: "Perdagangan, transportasi, keuangan, dan layanan publik",
      emoji: "🏪",
      growth: -2.76 // 50.53% → 47.77%
    },
    {
      name: "Manufaktur / Industri",
      percentage: 38.02,
      color: "from-orange-600 to-red-700",
      description: "Kimia, semen, makanan, tekstil, dan manufaktur lainnya",
      emoji: "🏭",
      growth: 2.47 // 35.55% → 38.02%
    },
    {
      name: "Pertanian",
      percentage: 14.21,
      color: "from-green-600 to-emerald-700",
      description: "Pertanian, perikanan, dan kehutanan",
      emoji: "🌾",
      growth: 0.28 // 13.93% → 14.21%
    }
  ];

  const totalWorkers = 688.64; // ribu orang (2023)
  const previousWorkers = 664.37; // ribu orang (2022)

  return (
    <Section background="beige" spacing="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-navy" />
              <Badge variant="primary" size="lg">Data BPS 2023</Badge>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Distribusi Pekerjaan Menurut Sektor
            </h2>
            
            <p className="text-xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
              Berdasarkan data Badan Pusat Statistik Kabupaten Gresik periode Agustus 2023, 
              terdapat <span className="font-bold text-navy">{totalWorkers} ribu penduduk yang bekerja</span>, 
              meningkat dari {previousWorkers} ribu di tahun sebelumnya.
            </p>
          </div>

          {/* Circular Chart Visualization */}
          <div className="grid lg:grid-cols-5 gap-8 items-center mb-12">
            {/* Left: Donut Chart */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative aspect-square max-w-sm mx-auto"
              >
                {/* SVG Donut Chart */}
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#f5f5f5"
                    strokeWidth="40"
                  />
                  
                  {/* Sector segments */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#gradient-jasa)"
                    strokeWidth="40"
                    strokeDasharray={`${sectors[0].percentage * 5.027} 502.7`}
                    strokeDashoffset="0"
                    initial={{ strokeDasharray: "0 502.7" }}
                    animate={isInView ? { strokeDasharray: `${sectors[0].percentage * 5.027} 502.7` } : {}}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#gradient-industri)"
                    strokeWidth="40"
                    strokeDasharray={`${sectors[1].percentage * 5.027} 502.7`}
                    strokeDashoffset={-sectors[0].percentage * 5.027}
                    initial={{ strokeDasharray: "0 502.7" }}
                    animate={isInView ? { strokeDasharray: `${sectors[1].percentage * 5.027} 502.7` } : {}}
                    transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#gradient-pertanian)"
                    strokeWidth="40"
                    strokeDasharray={`${sectors[2].percentage * 5.027} 502.7`}
                    strokeDashoffset={-(sectors[0].percentage + sectors[1].percentage) * 5.027}
                    initial={{ strokeDasharray: "0 502.7" }}
                    animate={isInView ? { strokeDasharray: `${sectors[2].percentage * 5.027} 502.7` } : {}}
                    transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient-jasa" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                    <linearGradient id="gradient-industri" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                    <linearGradient id="gradient-pertanian" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy">{totalWorkers}K</div>
                    <div className="text-sm text-charcoal/60">Pekerja</div>
                    <div className="text-xs text-teal font-semibold mt-1">
                      +{((totalWorkers - previousWorkers) / previousWorkers * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Sector Details */}
            <div className="lg:col-span-3 space-y-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-5 bg-white rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{sector.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl text-navy">{sector.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-navy">{sector.percentage}%</div>
                          <div className={`text-xs font-semibold ${sector.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {sector.growth >= 0 ? '↑' : '↓'} {Math.abs(sector.growth).toFixed(2)}%
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal/70 mb-3">{sector.description}</p>
                      {/* Progress bar */}
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-linear-to-r ${sector.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${sector.percentage}%` } : {}}
                          transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0 }}
            className="p-6 bg-navy/5 rounded-2xl border-2 border-navy/10"
          >
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-navy shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-2">Tren Pergeseran Sektor</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Data menunjukkan <span className="font-bold">pergeseran tenaga kerja dari sektor primer (pertanian) 
                  ke sektor sekunder dan tersier</span>. Sektor jasa menyerap proporsi terbesar pekerja (~48%), 
                  sementara manufaktur meningkat signifikan mencapai 38% karena banyaknya klaster industri 
                  (kimia, semen, makanan) di Gresik. Pertanian tetap penting dengan ~14% pekerja.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary" size="sm" className="text-xs">
                    Sumber: BPS Kabupaten Gresik
                  </Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">
                    Periode: Agustus 2023
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

interface Company {
  name: string;
  tagline: string;
  type: string;
  icon: any;
  color: string;
  established: string;
  description: string;
  highlights: string[];
  location: string;
  philosophy: string;
}

function CompanyShowcase({ company, index }: { company: Company; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  const isEven = index % 2 === 0;
  const Icon = company.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Icon/Visual Side */}
      <motion.div
        className={`${isEven ? "lg:order-1" : "lg:order-2"} relative`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-linear-to-br ${company.color}`}>
            <div className="absolute inset-0 bg-pattern-dots opacity-20" />
          </div>

          {/* Large Icon */}
          <motion.div
            animate={{ 
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-48 h-48 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center">
              <Icon className="w-28 h-28 text-navy" />
            </div>
          </motion.div>

          {/* Type Badge */}
          <div className="absolute top-6 left-6 z-10">
            <Badge variant="primary" size="lg" className="text-base px-4 py-2 bg-white text-navy">
              {company.type}
            </Badge>
          </div>

          {/* Established Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-1">
                <Award className="w-4 h-4" />
                <span className="font-semibold">Didirikan</span>
              </div>
              <p className="text-navy font-bold text-lg">
                {company.established}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: isHovered ? -5 : 0 }}
          className={`absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br ${company.color} rounded-2xl opacity-20 blur-xl`}
        />
      </motion.div>

      {/* Content Side */}
      <motion.div
        className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Title */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-3"
          >
            <span className="text-sm font-semibold text-teal uppercase tracking-wide">
              {company.tagline}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight"
          >
            {company.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-charcoal/80 leading-relaxed"
          >
            {company.description}
          </motion.p>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h4 className="font-bold text-lg mb-4 bg-linear-to-r from-navy to-teal bg-clip-text text-transparent">
            Keunggulan & Peran
          </h4>
          <div className="space-y-3">
            {company.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-start gap-3 p-3 bg-beige/30 rounded-xl border border-navy/10"
              >
                <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-navy">{i + 1}</span>
                </div>
                <p className="flex-1 text-sm text-charcoal/80">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="p-5 bg-white rounded-2xl shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-navy" />
              <h5 className="font-bold text-navy">Lokasi</h5>
            </div>
            <p className="text-sm text-charcoal/70">{company.location}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-navy" />
              <h5 className="font-bold text-navy">Filosofi</h5>
            </div>
            <p className="text-sm text-charcoal/70">{company.philosophy}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function EconomicImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const impacts = [
    {
      title: "Penyerapan Tenaga Kerja",
      description: "Ribuan lapangan kerja tersedia di berbagai sektor industri, dari manufaktur hingga jasa"
    },
    {
      title: "Kontribusi Ekonomi Nasional",
      description: "Produksi pupuk, semen, dan aktivitas pelabuhan berkontribusi besar terhadap GDP nasional"
    },
    {
      title: "Pengembangan UMKM",
      description: "Ekosistem industri besar mendorong pertumbuhan usaha kecil dan menengah di sekitarnya"
    },
    {
      title: "Infrastruktur Modern",
      description: "Investasi berkelanjutan dalam teknologi dan fasilitas ramah lingkungan"
    }
  ];

  return (
    <Section background="navy" spacing="lg" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      <Container>
        <motion.div
          ref={ref}
          className="relative z-10"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-sm mb-6"
            >
              <span className="text-sm font-medium text-offwhite">Dampak Ekonomi</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6"
            >
              Kontribusi untuk Gresik & Indonesia
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-offwhite/80"
            >
              Perusahaan-perusahaan besar di Gresik tidak hanya menciptakan lapangan kerja, 
              tetapi juga menggerakkan roda perekonomian lokal dan nasional
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="font-bold text-2xl mb-3 bg-linear-to-r from-beige via-teal to-beige bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-offwhite/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Decorative shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 border-4 border-beige/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-40 h-40 border-4 border-teal/30 rounded-2xl"
      />
    </Section>
  );
}

function DiversitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section background="light" spacing="xl" className="py-24">
      <Container>
        <motion.div ref={ref}>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Badge variant="primary" size="lg" className="mb-6">Keberagaman Ekonomi</Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-navy mb-6">
              Ekonomi yang <span className="text-teal">Beragam</span> & <span className="text-coral">Inklusif</span>
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              Gresik memiliki struktur ekonomi yang seimbang dan inklusif, membuka peluang 
              kerja untuk semua tingkat pendidikan, usia, dan latar belakang
            </p>
          </div>

          {/* Sector Diversity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-navy to-teal flex items-center justify-center">
                <PieChartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-navy">
                  {diversityStats.sectorDiversity.title}
                </h3>
                <p className="text-charcoal/70">{diversityStats.sectorDiversity.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {diversityStats.sectorDiversity.data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-linear-to-br from-white to-beige/10 rounded-2xl shadow-lg border border-beige/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-navy text-lg">{item.sector}</h4>
                    <div className="text-3xl font-bold text-teal">{item.percentage}%</div>
                  </div>
                  <p className="text-sm text-charcoal/70">{item.description}</p>
                  <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-full bg-linear-to-r from-teal to-coral rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {diversityStats.sectorDiversity.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                  <p className="text-sm text-charcoal/80">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Diversity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-coral to-orange-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-navy">
                  {diversityStats.educationDiversity.title}
                </h3>
                <p className="text-charcoal/70">{diversityStats.educationDiversity.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {diversityStats.educationDiversity.data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-coral mb-2">{item.percentage}%</div>
                  <h5 className="font-bold text-navy mb-2">{item.level}</h5>
                  <p className="text-xs text-charcoal/60">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diversityStats.educationDiversity.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-linear-to-r from-coral/10 to-orange-100/50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
                  <p className="text-sm text-charcoal/80">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Scale Diversity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-navy">
                  {diversityStats.companyScaleDiversity.title}
                </h3>
                <p className="text-charcoal/70">{diversityStats.companyScaleDiversity.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {diversityStats.companyScaleDiversity.data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-6 bg-linear-to-br from-white via-purple-50/30 to-indigo-50/30 rounded-2xl shadow-lg border border-purple-200/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-navy text-lg mb-1">{item.scale}</h4>
                      <p className="text-sm text-purple-600 font-medium">{item.count}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">
                        {(item.employment / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-charcoal/60">pekerja</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal/70 mb-3"><strong>Contoh:</strong> {item.examples}</p>
                  <p className="text-sm text-charcoal/60 italic">{item.contribution}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diversityStats.companyScaleDiversity.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-linear-to-r from-purple-100/70 to-indigo-100/50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0" />
                  <p className="text-sm text-charcoal/80">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Occupation Diversity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-navy">
                  {diversityStats.occupationDiversity.title}
                </h3>
                <p className="text-charcoal/70">{diversityStats.occupationDiversity.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {diversityStats.occupationDiversity.categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
                >
                  <h4 className="font-bold text-navy mb-3">{category.category}</h4>
                  <ul className="space-y-1.5">
                    {category.jobs.map((job, jobIndex) => (
                      <li key={jobIndex} className="flex items-start gap-2">
                        <span className="text-green-600 text-xs mt-1">✓</span>
                        <span className="text-sm text-charcoal/70">{job}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diversityStats.occupationDiversity.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-linear-to-r from-green-100/70 to-emerald-100/50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <p className="text-sm text-charcoal/80">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gender & Age Diversity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Gender Diversity */}
            <div className="p-8 bg-linear-to-br from-pink-50 to-rose-50 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">
                  {diversityStats.genderDiversity.title}
                </h3>
              </div>
              <p className="text-sm text-charcoal/70 mb-6">{diversityStats.genderDiversity.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {diversityStats.genderDiversity.data.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow">
                    <div className="text-3xl font-bold text-rose-600 mb-1">{item.percentage}%</div>
                    <div className="text-sm font-medium text-navy">{item.category}</div>
                    <div className="text-xs text-charcoal/60">{(item.count / 1000).toFixed(0)}K pekerja</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-navy text-sm mb-2">Sektor dengan Dominasi Perempuan:</h5>
                {diversityStats.genderDiversity.femaleLeadingSectors.map((sector, index) => (
                  <div key={index} className="p-3 bg-white/70 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-navy">{sector.sector}</span>
                      <span className="text-sm font-bold text-rose-600">{sector.percentage}%</span>
                    </div>
                    <p className="text-xs text-charcoal/60">{sector.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Diversity */}
            <div className="p-8 bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <UserCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">
                  {diversityStats.ageDiversity.title}
                </h3>
              </div>
              <p className="text-sm text-charcoal/70 mb-6">{diversityStats.ageDiversity.description}</p>
              
              <div className="space-y-3 mb-6">
                {diversityStats.ageDiversity.data.map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-navy">{item.ageGroup}</span>
                      <span className="text-2xl font-bold text-cyan-600">{item.percentage}%</span>
                    </div>
                    <p className="text-xs text-charcoal/70">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {diversityStats.ageDiversity.insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-white/70 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                    <p className="text-xs text-charcoal/70">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-16 p-10 bg-linear-to-r from-navy via-teal to-navy rounded-3xl text-center"
          >
            <Globe className="w-16 h-16 text-beige mx-auto mb-6 animate-pulse" />
            <h3 className="font-display text-3xl md:text-4xl font-bold text-offwhite mb-4">
              Gresik: Ekonomi yang Beragam, Inklusif, dan Berkelanjutan
            </h3>
            <p className="text-lg text-offwhite/80 max-w-4xl mx-auto leading-relaxed">
              Keberagaman ekonomi Gresik bukan hanya angka statistik, tetapi cerminan nyata dari 
              masyarakat yang dinamis, adaptif, dan gotong royong. Dari perusahaan multinasional 
              hingga pedagang kaki lima, dari lulusan sarjana hingga pekerja berpendidikan rendah, 
              semua memiliki tempat dan kontribusi dalam membangun Gresik yang lebih sejahtera.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
