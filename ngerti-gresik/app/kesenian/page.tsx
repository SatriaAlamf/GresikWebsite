"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/sections/PageHeader";
import { kesenianData, type KesenianItem } from "@/data/kesenian";
import { Music, Sparkles, Users, Calendar } from "lucide-react";

export default function KesenianPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <PageHeader
        title="Kesenian Daerah Gresik"
        subtitle="WARISAN SENI & BUDAYA"
        description="Kekayaan seni dan budaya Gresik yang hidup dan lestari. Dari Jemblung yang jenaka, Hadrah yang spiritual, hingga Tari Grebeg Suran yang megah dan penuh makna."
        icon={Music}
        gradient="from-burnt via-teal to-beige"
      />

      {/* Introduction Section */}
      <IntroSection />

      {/* Kesenian Showcase */}
      <Section background="light" spacing="lg" className="py-20">
        <Container>
          <div className="space-y-32">
            {kesenianData.map((item, index) => (
              <KesenianShowcase key={item.id} item={item} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Cultural Significance Section */}
      <CulturalSection />
    </div>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section background="beige" spacing="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-teal" />
            <Badge variant="primary" size="lg">Warisan Seni Budaya</Badge>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Tiga Kesenian Khas Gresik
          </h2>
          
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
            Gresik memiliki tiga kesenian unik yang menjadi identitas budaya daerah: 
            <strong className="text-navy"> Damar Kurung</strong> sebagai seni visual yang menceritakan kehidupan masyarakat pesisir, 
            <strong className="text-navy"> Pencak Macan</strong> yang memadukan silat dengan atraksi harimau sebagai simbol keberanian, 
            dan <strong className="text-navy"> Kuda Kincak</strong> yang menampilkan semangat perjuangan melalui tarian kuda tiruan yang energik.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg border-2 border-teal/20 hover:border-teal/40 transition-all"
            >
              <div className="text-4xl mb-2">🏮</div>
              <h3 className="font-bold text-lg mb-1 bg-linear-to-r from-teal to-forest bg-clip-text text-transparent">
                Damar Kurung
              </h3>
              <p className="text-sm text-charcoal/70">
                Lentera bergambar kehidupan rakyat Gresik
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white rounded-2xl shadow-lg border-2 border-terracotta/20 hover:border-terracotta/40 transition-all"
            >
              <div className="text-4xl mb-2">🐅</div>
              <h3 className="font-bold text-lg mb-1 bg-linear-to-r from-terracotta to-burnt bg-clip-text text-transparent">
                Pencak Macan
              </h3>
              <p className="text-sm text-charcoal/70">
                Bela diri dengan atraksi kostum harimau
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white rounded-2xl shadow-lg border-2 border-burnt/20 hover:border-burnt/40 transition-all"
            >
              <div className="text-4xl mb-2">�</div>
              <h3 className="font-bold text-lg mb-1 bg-linear-to-r from-burnt to-terracotta bg-clip-text text-transparent">
                Kuda Kincak
              </h3>
              <p className="text-sm text-charcoal/70">
                Tari kuda tiruan penuh semangat
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function KesenianShowcase({ item, index }: { item: KesenianItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  const isEven = index % 2 === 0;

  const getTypeIcon = () => {
    switch (item.type) {
      case "Tari": return "💃";
      case "Musik": return "🥁";
      case "Teater": return "🎭";
      case "Seni Suara": return "🎤";
      case "Seni Visual": return "🏮";
      case "Seni Pertunjukan": return "🥋";
      default: return "🎨";
    }
  };

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
          {/* Background Image */}
          {item.image ? (
            <div className="absolute inset-0">
              <Image 
                src={item.image} 
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ) : (
            <>
              {/* Gradient Background - jika tidak ada gambar */}
              <div className="absolute inset-0 bg-linear-to-br from-teal/40 via-forest/30 to-navy/40">
                <div className="absolute inset-0 bg-pattern-dots opacity-20" />
              </div>

              {/* Large Emoji Icon */}
              <motion.div
                animate={{ 
                  y: isHovered ? -10 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-9xl drop-shadow-2xl">
                  {getTypeIcon()}
                </div>
              </motion.div>
            </>
          )}

          {/* Gradient Overlay untuk readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />

          {/* Type Badge */}
          <div className="absolute top-6 left-6 z-10">
            <Badge variant="primary" size="lg" className="text-base px-4 py-2">
              {item.type}
            </Badge>
          </div>

          {/* Performers Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-1">
                <Users className="w-4 h-4" />
                <span className="font-semibold">Pelaku Seni</span>
              </div>
              <p className="text-navy font-bold">
                {item.performers.min}
                {item.performers.max && `-${item.performers.max}`} orang
              </p>
              <p className="text-xs text-charcoal/70 mt-1">
                {item.performers.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: isHovered ? -5 : 0 }}
          className="absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br from-teal to-forest rounded-2xl opacity-20 blur-xl"
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight"
          >
            {item.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-charcoal/80 leading-relaxed"
          >
            {item.description}
          </motion.p>
        </div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="p-5 bg-white rounded-2xl shadow-md"
        >
          <h4 className="font-bold text-lg mb-3 bg-linear-to-r from-teal to-forest bg-clip-text text-transparent">
            Sejarah & Asal-Usul
          </h4>
          <p className="text-sm text-charcoal/70 leading-relaxed">
            {item.history}
          </p>
        </motion.div>

        {/* Characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h4 className="font-bold text-lg mb-3 bg-linear-to-r from-teal to-forest bg-clip-text text-transparent">
            Karakteristik Utama
          </h4>
          <div className="space-y-3">
            {item.characteristics.map((char, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start gap-3 p-3 bg-teal/10 rounded-xl border border-teal/20"
              >
                <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-teal">{i + 1}</span>
                </div>
                <p className="flex-1 text-sm text-charcoal/80">{char}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instruments (if any) */}
        {item.instruments && item.instruments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="p-5 bg-forest/10 rounded-2xl"
          >
            <h4 className="font-bold text-navy mb-3">🎵 Alat Musik</h4>
            <div className="flex flex-wrap gap-2">
              {item.instruments.map((instrument, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1.5 bg-white text-forest font-medium rounded-lg shadow-sm"
                >
                  {instrument}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Occasions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-teal" />
            <h4 className="font-bold text-navy">Ditampilkan Pada</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.occasions.map((occasion, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1.5 bg-beige text-charcoal rounded-full"
              >
                {occasion}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function CulturalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      title: "Media Dakwah Islam",
      description: "Kesenian seperti Jemblung dan Hadrah menjadi sarana dakwah Islam yang efektif di masyarakat pesisir Gresik sejak abad ke-15"
    },
    {
      title: "Identitas Budaya Lokal",
      description: "Setiap pertunjukan mencerminkan karakter masyarakat Gresik yang religius, harmonis, dan menghargai warisan leluhur"
    },
    {
      title: "Pemersatu Masyarakat",
      description: "Pertunjukan kesenian menjadi momen kebersamaan yang memperkuat ikatan sosial antar warga di berbagai acara"
    },
    {
      title: "Pelestarian Tradisi",
      description: "Generasi muda tetap dilibatkan dalam pembelajaran dan pertunjukan untuk menjaga keberlanjutan seni tradisional"
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
              <span className="text-sm font-medium text-offwhite">Makna & Nilai</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6"
            >
              Nilai Budaya dalam Kesenian Gresik
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-offwhite/80"
            >
              Kesenian bukan sekadar hiburan, melainkan wadah nilai spiritual, 
              sosial, dan identitas yang memperkuat jati diri masyarakat Gresik
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, index) => (
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
    </Section>
  );
}
