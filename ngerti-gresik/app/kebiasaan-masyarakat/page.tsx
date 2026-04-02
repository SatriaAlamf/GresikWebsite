"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { kebiasaanData, KebiasaanItem } from "@/data/kebiasaan";
import { 
  Users, 
  MapPin, 
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function KebiasaanMasyarakatPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Kebiasaan Masyarakat Gresik"
        subtitle="TRADISI & KEHIDUPAN SEHARI-HARI"
        description="Jelajahi tradisi dan kebiasaan unik masyarakat Gresik yang mencerminkan religiusitas, solidaritas, dan kearifan lokal yang dijaga turun-temurun."
        icon={Users}
        gradient="from-teal via-forest to-burnt"
      />

      {/* Timeline Section */}
      <Section background="light" spacing="lg">
        <Container maxWidth="full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative py-12">
              {/* Vertical Timeline Line - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-terracotta/30 via-teal/40 to-navy/30 transform -translate-x-1/2" />
              
              {/* Timeline Items */}
              <div className="space-y-20">
                {kebiasaanData.map((kebiasaan, index) => (
                  <TimelineItem 
                    key={kebiasaan.id} 
                    kebiasaan={kebiasaan} 
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Insight Section */}
      <Section background="beige" spacing="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-navy" />
              <span className="text-sm font-semibold text-navy">Nilai Budaya Lokal</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6">
              Nilai-Nilai Budaya dari{" "}
              <span className="text-transparent bg-linear-to-r from-terracotta via-burnt to-teal bg-clip-text">
                Kebiasaan Masyarakat Gresik
              </span>
            </h2>
            
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              Kebiasaan dan tradisi masyarakat Gresik mencerminkan nilai-nilai budaya yang kuat dan dijaga turun-temurun. 
              Setiap tradisi mengandung <strong className="text-navy">makna mendalam</strong> yang membentuk karakter dan identitas masyarakat Gresik.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-md border-2 border-navy/10 hover:border-navy/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-navy to-teal rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  🕌
                </div>
                <h3 className="font-bold text-navy mb-2 text-xl">Religius</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Tradisi seperti padusan, sedekah bumi, dan perayaan hari besar Islam menunjukkan kuatnya nilai religius dalam kehidupan sehari-hari masyarakat Gresik
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-md border-2 border-terracotta/10 hover:border-terracotta/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-terracotta to-burnt rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  🎨
                </div>
                <h3 className="font-bold text-navy mb-2 text-xl">Pelestarian Budaya</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Aktif menjaga warisan leluhur melalui kesenian tradisional, upacara adat, dan kearifan lokal yang terus dihidupkan oleh generasi muda
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-white rounded-2xl shadow-md border-2 border-teal/10 hover:border-teal/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-teal to-forest rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  🤝
                </div>
                <h3 className="font-bold text-navy mb-2 text-xl">Solidaritas Sosial</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Semangat gotong royong, kerja bakti, dan saling membantu dalam acara hajatan menunjukkan tingginya kohesi sosial masyarakat
                </p>
              </motion.div>
            </div>

            {/* Additional Values */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-white rounded-2xl shadow-md border-2 border-burnt/10 hover:border-burnt/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-burnt to-terracotta rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  🌾
                </div>
                <h3 className="font-bold text-navy mb-2 text-xl">Syukur & Kerendahan Hati</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Tradisi sedekah bumi dan syukuran panen mencerminkan rasa syukur kepada Tuhan serta kerendahan hati terhadap alam
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-white rounded-2xl shadow-md border-2 border-forest/10 hover:border-forest/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-forest to-teal rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  👨‍👩‍👧‍👦
                </div>
                <h3 className="font-bold text-navy mb-2 text-xl">Kekeluargaan & Kebersamaan</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Acara kenduri, arisan, dan pertemuan rutin warga memperkuat ikatan kekeluargaan dan kebersamaan antar tetangga
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

// Timeline Item Component - Zigzag Layout
function TimelineItem({ 
  kebiasaan, 
  index, 
  isLeft 
}: { 
  kebiasaan: KebiasaanItem; 
  index: number;
  isLeft: boolean;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === kebiasaan.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? kebiasaan.images.length - 1 : prev - 1
    );
  };

  const categoryColors = {
    spiritual: { bg: "from-navy to-teal", text: "text-navy", border: "border-navy/20", light: "from-navy/10 to-teal/10" },
    ekonomi: { bg: "from-terracotta to-burnt", text: "text-terracotta", border: "border-terracotta/20", light: "from-terracotta/10 to-burnt/10" },
    seni: { bg: "from-teal to-cyan", text: "text-teal", border: "border-teal/20", light: "from-teal/10 to-cyan/10" },
    komunitas: { bg: "from-burnt to-orange", text: "text-burnt", border: "border-burnt/20", light: "from-burnt/10 to-orange/10" },
    religi: { bg: "from-navy to-forest", text: "text-navy", border: "border-navy/20", light: "from-navy/10 to-forest/10" },
  };

  const colors = categoryColors[kebiasaan.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      {/* Timeline Dot - Center on desktop */}
      <div className="hidden lg:block absolute left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className={`w-16 h-16 rounded-full bg-linear-to-br ${colors.bg} shadow-lg flex items-center justify-center border-4 border-white`}
        >
          <span className="text-2xl font-bold text-white">{index + 1}</span>
        </motion.div>
      </div>

      {/* Mobile Number Badge */}
      <div className="lg:hidden mb-4">
        <div className={`inline-flex items-center gap-3 px-4 py-2 bg-linear-to-r ${colors.bg} rounded-full text-white shadow-lg`}>
          <span className="text-xl font-bold">{index + 1}</span>
          <span className="text-xs font-bold uppercase">{kebiasaan.category}</span>
        </div>
      </div>

      {/* Content Container - Zigzag Layout */}
      <div className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* Image Gallery - Left/Right alternating */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative mb-6 lg:mb-0 ${isLeft ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}
        >
          <div className={`relative h-80 md:h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-elevation-3 group border-4 ${colors.border}`}>
            {/* Main Image */}
            <motion.img
              key={currentImageIndex}
              src={kebiasaan.images[currentImageIndex]}
              alt={`${kebiasaan.title} - ${currentImageIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Navigation Arrows */}
            {kebiasaan.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-navy" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-navy" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold shadow-lg">
                  {currentImageIndex + 1} / {kebiasaan.images.length}
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {kebiasaan.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <div className={`px-4 py-2 bg-linear-to-r ${colors.bg} rounded-full text-white text-xs font-bold uppercase shadow-lg backdrop-blur-sm`}>
                {kebiasaan.category}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content - Right/Left alternating */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`${isLeft ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}`}
        >
          <div className="bg-white rounded-3xl shadow-elevation-2 p-8 border-2 border-gray-100">
            {/* Title */}
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              {kebiasaan.title}
            </h3>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className={`flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border ${colors.border}`}>
                <Calendar className={`w-4 h-4 ${colors.text}`} />
                <span className="text-sm font-medium text-charcoal">{kebiasaan.waktu}</span>
              </div>
              {kebiasaan.lokasi && (
                <div className={`flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border ${colors.border}`}>
                  <MapPin className={`w-4 h-4 ${colors.text}`} />
                  <span className="text-sm font-medium text-charcoal">{kebiasaan.lokasi}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-charcoal/80 mb-6 leading-relaxed text-lg">
              {kebiasaan.description}
            </p>

            {/* Makna & Nilai Box */}
            <div className={`bg-linear-to-r ${colors.light} rounded-2xl p-6 mb-6 border-l-4 ${colors.border.replace('/20', '')}`}>
              <div className="flex items-start gap-3">
                <div className={`shrink-0 w-10 h-10 rounded-full bg-linear-to-br ${colors.bg} flex items-center justify-center text-white text-xl shadow-md`}>
                  💡
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-navy mb-2 text-lg">Makna & Nilai</h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    {kebiasaan.makna}
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="pt-6 border-t-2 border-gray-100">
              <p className="text-xs font-bold text-charcoal/60 mb-3 uppercase tracking-wide">Sumber Referensi:</p>
              <div className="flex flex-wrap gap-2">
                {kebiasaan.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border-2 ${colors.border} rounded-full text-sm font-medium ${colors.text} transition-all hover:shadow-md hover:scale-105 group`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                    {source.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
