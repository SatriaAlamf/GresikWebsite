"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/sections/PageHeader";
import { sectorData } from "@/data/pekerjaan";
import { 
  Briefcase, 
  Users, 
  TrendingUp,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  FileText
} from "lucide-react";

export default function PekerjaanPage() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        title="Pekerjaan & Ekonomi Gresik"
        subtitle="EKONOMI & INDUSTRI GRESIK"
        description="Dari sektor jasa yang dominan hingga industri manufaktur yang kuat, Gresik menawarkan berbagai peluang karir untuk semua kalangan."
        icon={Briefcase}
        gradient="from-forest via-teal to-beige"
      />

      {/* Statistics Overview */}
      <StatisticsSection />

      {/* Sektor-sektor Pekerjaan */}
      <SectorsSection />

      {/* Insight & Catatan */}
      <InsightSection />
    </div>
  );
}

// Remove old HeroSection function, now use PageHeader

// Statistics Section
function StatisticsSection() {
  const totalWorkers = "688.64"; // ribu orang
  const year = "2023";

  const topSectors = [
    {
      name: "Sektor Jasa",
      percentage: 47.77,
      icon: "🏪",
      color: "from-teal-600 to-cyan-700",
      description: "Perdagangan, hotel/restoran, layanan",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      name: "Manufaktur/Industri",
      percentage: 38.02,
      icon: "🏭",
      color: "from-orange-600 to-red-700",
      description: "Industri pengolahan dan manufaktur",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      name: "Pertanian",
      percentage: 14.21,
      icon: "🌾",
      color: "from-green-600 to-emerald-700",
      description: "Pertanian, kehutanan, perikanan",
      bgImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
    }
  ];

  return (
    <Section background="light" spacing="lg">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" size="lg" className="mb-4">
            Data BPS Agustus {year}
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Distribusi Pekerjaan Berdasarkan Sektor
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Terdapat <span className="font-bold text-navy">{totalWorkers} ribu penduduk yang bekerja</span> di Kabupaten Gresik, 
            tersebar di berbagai sektor utama
          </p>
        </div>

        {/* Sector Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topSectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-elevation-2 hover:shadow-elevation-3 transition-all overflow-hidden group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundImage: `url(${sector.bgImage})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${sector.color} opacity-10 group-hover:opacity-15 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 drop-shadow-lg">{sector.icon}</div>
                <div className={`text-5xl font-bold bg-linear-to-r ${sector.color} bg-clip-text text-transparent mb-2 drop-shadow-sm`}>
                  {sector.percentage}%
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 drop-shadow-sm">{sector.name}</h3>
                <p className="text-charcoal/80 font-medium drop-shadow-sm">{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-teal/10 to-cyan/10 border-2 border-teal/20 rounded-3xl p-8 text-center"
        >
          <TrendingUp className="w-12 h-12 text-teal mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-3">
            Keragaman Pekerjaan
          </h3>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Meskipun Gresik terkenal sebagai "kota industri", <span className="font-bold text-navy">sektor jasa 
            masih memegang posisi tertinggi</span> sebagai penyerap tenaga kerja. Ini menunjukkan keragaman 
            ekonomi dan peluang kerja yang luas di Gresik.
          </p>
        </motion.div>

        {/* Source Button */}
        <div className="text-center mt-8">
          <a
            href="https://gresikkab.bps.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-navy/20 rounded-full text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Sumber: BPS Kabupaten Gresik
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </Section>
  );
}

// Sectors Section with Expandable Details
function SectorsSection() {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  // Filter out sectors with 0 percentage for main display
  const mainSectors = sectorData.filter(s => s.percentage > 0);
  const additionalSectors = sectorData.filter(s => s.percentage === 0);

  return (
    <Section background="beige" spacing="lg">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" size="lg" className="mb-4">
            5 Sektor Utama
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Peluang Pekerjaan di Setiap Sektor
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Informasi lengkap tentang jenis pekerjaan, perusahaan utama, dan peluang karir di setiap sektor
          </p>
        </div>

        {/* Main Sectors */}
        <div className="space-y-6 mb-12">
          {mainSectors.map((sector, index) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              index={index}
              isExpanded={expandedSector === sector.id}
              onToggle={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
            />
          ))}
        </div>

        {/* Additional Sectors Info */}
        {additionalSectors.length > 0 && (
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy mb-6 text-center">
              Sektor Pendukung Lainnya
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalSectors.map((sector, index) => (
                <SectorCard
                  key={sector.id}
                  sector={sector}
                  index={index}
                  isExpanded={expandedSector === sector.id}
                  onToggle={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
                  isAdditional
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

// Sector Card Component
function SectorCard({ 
  sector, 
  index, 
  isExpanded, 
  onToggle,
  isAdditional = false 
}: { 
  sector: typeof sectorData[0]; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void;
  isAdditional?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl border-2 border-gray-100 shadow-elevation-2 overflow-hidden"
    >
      {/* Header - Clickable */}
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="text-5xl">{sector.icon}</div>
          <div>
            <h3 className={`text-2xl font-bold bg-linear-to-r ${sector.gradient} bg-clip-text text-transparent mb-1`}>
              {sector.name}
            </h3>
            <p className="text-charcoal/70">{sector.description}</p>
            {sector.percentage > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <Users className="w-4 h-4 text-navy" />
                <span className="text-sm font-semibold text-navy">
                  {sector.percentage}% tenaga kerja ({Math.round(sector.employment / 1000)} ribu orang)
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className={`w-10 h-10 rounded-full bg-linear-to-r ${sector.gradient} flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t-2 border-gray-100"
        >
          <div className="p-6 md:p-8 space-y-8">
            {/* Detailed Info */}
            <div>
              <h4 className="text-lg font-bold text-navy mb-3">📊 Informasi Lengkap</h4>
              <p className="text-charcoal/80 leading-relaxed">{sector.detailedInfo}</p>
            </div>

            {/* Sub Sectors */}
            {sector.subSectors.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-navy mb-4">🎯 Sub-Sektor & Peluang</h4>
                <div className="space-y-4">
                  {sector.subSectors.map((sub, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                      <h5 className="font-semibold text-navy mb-2">{sub.name}</h5>
                      <p className="text-sm text-charcoal/70 mb-3">{sub.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {sub.examples.map((example, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full text-charcoal/70">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Major Companies */}
            {sector.majorCompanies.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-navy mb-4">🏢 Perusahaan & Institusi Utama</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {sector.majorCompanies.map((company, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-navy mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-navy mb-1">{company.name}</h5>
                          <p className="text-sm text-charcoal/70">{company.description}</p>
                          {company.source && (
                            <p className="text-xs text-charcoal/50 mt-1">Sumber: {company.source}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Job Types */}
            {sector.jobTypes.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-navy mb-4">💼 Jenis Pekerjaan Umum</h4>
                <div className="flex flex-wrap gap-3">
                  {sector.jobTypes.map((job, idx) => (
                    <span key={idx} className={`px-4 py-2 bg-linear-to-r ${sector.gradient} text-white rounded-full text-sm font-medium`}>
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sources */}
            {sector.sources.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-navy mb-3">📚 Sumber Referensi:</h4>
                <div className="flex flex-wrap gap-2">
                  {sector.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-charcoal/70 hover:bg-gray-50 hover:border-navy/30 transition-colors"
                    >
                      <FileText className="w-3 h-3" />
                      {source.title}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Insight Section
function InsightSection() {
  return (
    <Section background="navy" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-6xl mb-6">💡</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Catatan Penting
          </h2>
          
          <div className="space-y-4 text-lg text-white/90 leading-relaxed text-left">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <span>
                  <strong className="text-white">Sektor Jasa Terbesar:</strong> Meskipun Gresik terkenal sebagai "kota industri", 
                  sektor jasa (47.77%) masih menjadi penyerap tenaga kerja terbanyak, diikuti manufaktur (38.02%) dan pertanian (14.21%).
                </span>
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="flex items-start gap-3">
                <span className="text-2xl">🏭</span>
                <span>
                  <strong className="text-white">Industri Masih Dominan:</strong> Lowongan kerja di Gresik masih didominasi 
                  sektor manufaktur hingga tahun 2026, dengan 843 usaha industri besar dan menengah (2023).
                </span>
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span>
                  <strong className="text-white">Data Terkini:</strong> Semua data bersumber dari BPS Kabupaten Gresik 
                  periode Agustus 2023. Pastikan selalu mengecek update terbaru untuk informasi paling akurat.
                </span>
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <span>
                  <strong className="text-white">Sektor Potensial:</strong> Sektor pertambangan & penggalian serta 
                  konstruksi & energi masih dapat berkembang pesat dan menawarkan peluang karir baru di masa depan.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
