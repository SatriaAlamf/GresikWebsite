"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/sections/PageHeader";
import { 
  nilaiBudayaData,
  konflikSejarahData,
  pernyataanData,
  pesanIntiData,
  takeawaysData,
  finalMessageData
} from "@/data/kesimpulan";
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Heart, 
  Users, 
  TrendingUp,
  Sparkles,
  Target,
  Award,
  ExternalLink
} from "lucide-react";

export default function KesimpulanPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Kesimpulan"
        subtitle="REFLEKSI & INSIGHT"
        description="Rangkuman lengkap tentang keragaman budaya, kuliner, kesenian, dan identitas Gresik sebagai Kota Industri dan Santri yang harmonis dan seimbang."
        icon={Award}
        gradient="from-beige via-burnt to-teal"
      />

      {/* Main Points Section - Nilai Budaya */}
      <Section background="light" spacing="lg">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 backdrop-blur-sm border border-teal/30 rounded-full mb-6"
            >
              <span className="text-2xl">🌟</span>
              <span className="text-sm font-medium text-navy">
                Fondasi Budaya Gresik
              </span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
              Nilai-Nilai{" "}
              <span className="text-transparent bg-linear-to-r from-terracotta to-teal bg-clip-text">
                Budaya Gresik
              </span>
            </h2>
            <p className="text-lg text-navy/70 max-w-3xl mx-auto">
              Nilai-nilai budaya yang menjadi identitas dan kearifan lokal masyarakat Gresik
            </p>
          </motion.div>

          {/* Nilai-nilai Budaya Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {nilaiBudayaData.map((nilai, idx) => (
              <NilaiCard key={idx} nilai={nilai} index={idx} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Konflik Terdokumentasi */}
      <Section background="navy" spacing="lg">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
            >
              <span className="text-2xl">📚</span>
              <span className="text-sm font-medium text-offwhite">
                Pembelajaran dari Sejarah
              </span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-offwhite mb-4">
              Konflik{" "}
              <span className="text-transparent bg-linear-to-r from-terracotta via-burnt to-teal bg-clip-text">
                Terdokumentasi
              </span>
            </h2>
            <p className="text-lg text-offwhite/80 max-w-3xl mx-auto">
              Memahami konflik masa lalu untuk menghargai harmoni yang ada saat ini
            </p>
          </motion.div>

          {/* Konflik Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {konflikSejarahData.map((konflik, idx) => (
              <KonflikCard key={idx} konflik={konflik} index={idx} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Harmoni dalam Keberagaman - Uji Pemahaman */}
      <Section background="beige" spacing="lg">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 backdrop-blur-sm border border-navy/20 rounded-full mb-6"
            >
              <span className="text-2xl">🧠</span>
              <span className="text-sm font-medium text-navy">
                Uji Pemahaman
              </span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
              Harmoni dalam{" "}
              <span className="text-transparent bg-linear-to-r from-terracotta to-teal bg-clip-text">
                Keberagaman
              </span>
            </h2>
            <p className="text-lg text-navy/70 max-w-3xl mx-auto">
              Memahami pernyataan yang benar dan keliru tentang harmoni dalam keberagaman
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pernyataanData.map((item, idx) => (
              <PernyataanCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Pesan Inti */}
      <Section background="light" spacing="lg">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-teal via-forest to-navy rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-terracotta rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-6xl mb-6"
              >
                {pesanIntiData.icon}
              </motion.div>
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-6">
                {pesanIntiData.title}
              </h3>
              <p className="text-lg md:text-xl text-offwhite/90 leading-relaxed max-w-4xl mx-auto mb-8">
                {pesanIntiData.content}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              >
                <Award className="w-5 h-5" />
                <span className="font-semibold">
                  {pesanIntiData.highlight}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Key Takeaways */}
      <Section background="beige" spacing="lg">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/10 backdrop-blur-sm border border-terracotta/30 rounded-full mb-6"
            >
              <span className="text-2xl">💡</span>
              <span className="text-sm font-medium text-navy">
                Pelajaran Berharga
              </span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
              Pembelajaran{" "}
              <span className="text-transparent bg-linear-to-r from-terracotta to-teal bg-clip-text">
                Utama
              </span>
            </h2>
            <p className="text-lg text-navy/70 max-w-3xl mx-auto">
              Hal-hal penting yang dapat kita terapkan dalam kehidupan sehari-hari
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {takeawaysData.map((takeaway, idx) => (
              <TakeawayCard key={idx} takeaway={takeaway} index={idx} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final Message */}
      <Section background="light" spacing="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-4xl mx-auto border-2 border-teal/20"
          >
            <div className="text-5xl mb-6">{finalMessageData.icon}</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              {finalMessageData.title}
            </h3>
            <p className="text-lg text-navy/70 leading-relaxed mb-6">
              {finalMessageData.content}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {finalMessageData.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-linear-to-r from-teal/20 to-terracotta/20 rounded-full text-sm font-semibold text-navy border border-navy/10"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

// Nilai Card Component
function NilaiCard({ nilai, index }: { nilai: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`bg-linear-to-br ${nilai.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-navy/10`}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="text-5xl mb-4"
      >
        {nilai.icon}
      </motion.div>
      <h3 className="font-display text-xl font-bold text-navy mb-2">
        {nilai.title}
      </h3>
      <p className="text-sm text-navy/70 leading-relaxed">
        {nilai.desc}
      </p>
    </motion.div>
  );
}

// Pernyataan Card Component
function PernyataanCard({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-linear-to-br ${
        item.type === "benar" ? "from-teal/20 to-forest/20" : "from-terracotta/20 to-burnt/20"
      } rounded-2xl p-6 border-2 ${
        item.type === "benar" ? "border-teal/30 hover:border-teal/60" : "border-terracotta/30 hover:border-terracotta/60"
      } transition-all duration-300 shadow-md hover:shadow-xl`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          {item.type === "benar" ? (
            <CheckCircle2 className="w-8 h-8 text-teal" />
          ) : (
            <XCircle className="w-8 h-8 text-terracotta" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
              item.type === "benar" ? "bg-teal text-white" : "bg-terracotta text-white"
            }`}>
              {item.type === "benar" ? "✓ BENAR" : "✗ KELIRU"}
            </div>
            {item.source && (
              <motion.a
                href={item.source.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-md transition-colors group ${
                  item.type === "benar" 
                    ? "bg-teal/20 hover:bg-teal/30" 
                    : "bg-terracotta/20 hover:bg-terracotta/30"
                }`}
                title={item.source.title}
              >
                <ExternalLink className={`w-3 h-3 ${
                  item.type === "benar" ? "text-teal" : "text-terracotta"
                }`} />
                <span className={`text-[10px] font-semibold ${
                  item.type === "benar" ? "text-teal" : "text-terracotta"
                }`}>
                  Sumber
                </span>
              </motion.a>
            )}
          </div>
          <p className="text-navy leading-relaxed mb-3">
            {item.text}
          </p>
          {item.alasan && (
            <div className={`mt-3 p-3 rounded-lg border ${
              item.type === "benar" 
                ? "bg-teal/10 border-teal/30" 
                : "bg-terracotta/10 border-terracotta/30"
            }`}>
              <p className="text-xs text-navy/80 leading-relaxed">
                <span className="font-semibold">Penjelasan: </span>
                {item.alasan}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Konflik Card Component
function KonflikCard({ konflik, index }: { konflik: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-3xl">{konflik.icon}</span>
            <div className="inline-block px-3 py-1 bg-terracotta/30 rounded-full text-xs font-bold text-offwhite">
              {konflik.tahun}
            </div>
            {konflik.source && (
              <motion.a
                href={konflik.source.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors group"
                title={konflik.source.title}
              >
                <ExternalLink className="w-3 h-3 text-offwhite group-hover:text-teal transition-colors" />
                <span className="text-[10px] font-semibold text-offwhite group-hover:text-teal transition-colors">
                  Sumber
                </span>
              </motion.a>
            )}
          </div>
          <h3 className="font-display text-lg md:text-xl font-bold text-offwhite">
            {konflik.judul}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-offwhite/80 leading-relaxed mb-4 text-sm">
        {konflik.deskripsi}
      </p>

      {/* Pembelajaran */}
      <div className="pt-4 border-t border-white/20 bg-teal/20 rounded-xl p-3">
        <h4 className="font-semibold text-offwhite mb-2 flex items-center gap-2 text-sm">
          <span className="text-base">💡</span>
          Pembelajaran:
        </h4>
        <p className="text-xs text-offwhite/90 italic leading-relaxed">
          "{konflik.pembelajaran}"
        </p>
      </div>
    </motion.div>
  );
}

// Takeaway Card Component
function TakeawayCard({ takeaway, index }: { takeaway: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Map icon string to component
  const getIcon = (iconName: string) => {
    const icons = {
      'heart': <Heart className="w-12 h-12 text-terracotta" />,
      'users': <Users className="w-12 h-12 text-teal" />,
      'trending-up': <TrendingUp className="w-12 h-12 text-forest" />
    };
    return icons[iconName as keyof typeof icons] || <Lightbulb className="w-12 h-12 text-navy" />;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
        className="mb-6"
      >
        {getIcon(takeaway.icon)}
      </motion.div>
      <h3 className="font-display text-xl font-bold text-navy mb-4">
        {takeaway.title}
      </h3>
      <ul className="space-y-3">
        {takeaway.points.map((point: string, idx: number) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 + idx * 0.1 }}
            className="flex items-start gap-3 text-navy/70"
          >
            <Lightbulb className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
            <span className="text-sm">{point}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
