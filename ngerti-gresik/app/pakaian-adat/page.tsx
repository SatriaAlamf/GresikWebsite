"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/sections/PageHeader";
import { pakaianAdatData, type PakaianAdatItem } from "@/data/pakaian";
import { Shirt, MapPin } from "lucide-react";

export default function PakaianAdatPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <PageHeader
        title="Pakaian Adat Gresik"
        subtitle="WARISAN BUDAYA GRESIK"
        description="Keanggunan busana tradisional Gresik yang sarat makna dan filosofi. Dari kebaya yang anggun hingga sorjan yang gagah, setiap detail menyimpan nilai-nilai luhur."
        icon={Shirt}
        gradient="from-terracotta via-burnt to-beige"
      />

      {/* Introduction Section */}
      <IntroSection />

      {/* Gender Sections - Pria & Wanita */}
      <Section background="light" spacing="lg" className="py-20">
        <Container>
          <div className="space-y-32">
            {pakaianAdatData.filter(item => item.type === "Pria" || item.type === "Wanita").map((item, index) => (
              <PakaianShowcase key={item.id} item={item} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <PhilosophySection />
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
            <MapPin className="w-6 h-6 text-terracotta" />
            <Badge variant="primary" size="lg">Asal-Usul</Badge>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Jejak Sejarah Busana Gresik
          </h2>
          
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
            Busana khas Gresik untuk acara resmi telah dibakukan dan dipakai dalam momentum seperti 
            <span className="font-bold text-terracotta"> Hari Jadi Kota Gresik</span>. Untuk busana wanita yang dikenal sebagai 
            <span className="font-bold text-terracotta"> Kurosi</span>, ada pengaruh dari wilayah 
            <span className="font-bold text-terracotta"> Gujarat (India)</span> melalui aktivitas pelabuhan 
            dan dakwah Islam di Gresik. Tradisi busana ini berkembang seiring dengan munculnya 
            <span className="font-bold text-terracotta"> Pesantren Giri</span> pada tahun 1486.
          </p>
          
          <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
            Busana pria Gresik memiliki ciri khas unik dengan penggunaan sarung tenun di atas celana dan 
            tutup kepala berupa kopyah/songkok, yang menjadi pembeda dengan daerah sekitar seperti Surabaya atau Madura. 
            Kopyah Gresik merupakan kerajinan lokal yang terkenal dan menjadi ikon tersendiri.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="font-bold text-lg mb-2 bg-linear-to-r from-terracotta to-burnt bg-clip-text text-transparent">
                Identitas Lokal
              </h3>
              <p className="text-sm text-charcoal/70">
                Gaya busana dengan sarung di atas celana dan kopyah yang membedakan Gresik dari daerah lain seperti Surabaya dan Madura
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="font-bold text-lg mb-2 bg-linear-to-r from-terracotta to-burnt bg-clip-text text-transparent">
                Budaya Santri & Pesantren
              </h3>
              <p className="text-sm text-charcoal/70">
                Kopyah, sarung di atas celana untuk pria, dan kurosi untuk wanita mencerminkan pengaruh kuat tradisi santri-pesantren di Gresik
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="font-bold text-lg mb-2 bg-linear-to-r from-terracotta to-burnt bg-clip-text text-transparent">
                Kerajinan & Lokalitas
              </h3>
              <p className="text-sm text-charcoal/70">
                Penggunaan sarung tenun lokal, kopyah Gresik, dan motif batik khas memperkuat nilai produksi lokal dan penghargaan atas warisan seni
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function PakaianShowcase({ item, index }: { item: PakaianAdatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  const isEven = index % 2 === 0;

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
      {/* Image Side */}
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
          <div className="absolute inset-0 bg-linear-to-br from-navy/40 via-terracotta/30 to-beige/40">
            <div className="absolute inset-0 bg-pattern-dots opacity-20" />
          </div>

          {/* Image or Icon */}
          {item.image ? (
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          ) : (
            <motion.div
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-48 h-48 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                <Shirt className="w-24 h-24 text-terracotta" />
              </div>
            </motion.div>
          )}

          {/* Type Badge */}
          <div className="absolute top-6 left-6 z-10">
            <Badge variant="primary" size="lg" className="text-base px-4 py-2">
              {item.type}
            </Badge>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: isHovered ? -5 : 0 }}
          className="absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br from-terracotta to-burnt rounded-2xl opacity-20 blur-xl"
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

        {/* Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h4 className="font-bold text-lg mb-4 bg-linear-to-r from-terracotta to-burnt bg-clip-text text-transparent">
            Komponen Utama
          </h4>
          <div className="space-y-3">
            {item.components.slice(0, 4).map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-start gap-3 p-3 bg-beige/30 rounded-xl border border-terracotta/10"
              >
                <div className="w-8 h-8 rounded-lg bg-terracotta/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-terracotta">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-navy mb-1">{comp.name}</h5>
                  <p className="text-sm text-charcoal/70">{comp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const philosophies = [
    {
      title: "Identitas Lokal",
      description: "Busana khas menegaskan bahwa Gresik punya gaya sendiri, berbeda dari Surabaya, Madura, ataupun Jawa lain. Penggunaan sarung di atas celana dan kopyah menjadi ciri khas yang unik dan mudah dikenali"
    },
    {
      title: "Keagamaan & Budaya Santri",
      description: "Kopyah, sarung di atas celana untuk pria, dan kurosi untuk wanita menunjukkan pengaruh kuat tradisi santri-pesantren di Gresik yang berkembang sejak era Sunan Giri di abad ke-15"
    },
    {
      title: "Kerajinan & Lokalitas",
      description: "Penggunaan sarung tenun lokal, kopyah Gresik sebagai kerajinan khas, dan motif batik Gresik memperkuat nilai produksi lokal dan penghargaan atas warisan seni tekstil daerah"
    },
    {
      title: "Kesopanan & Estetika",
      description: "Untuk wanita, kurosi dan kebaya menyiratkan keanggunan dan kesopanan sesuai nilai Islami; untuk pria, busana formal bersarung menunjukkan keseriusan dan kehormatan dalam upacara resmi"
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
              <span className="text-sm font-medium text-offwhite">Makna & Filosofi</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6"
            >
              Nilai Luhur Busana Gresik
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-offwhite/80"
            >
              Setiap elemen busana menyimpan filosofi mendalam yang mencerminkan 
              identitas dan kebanggaan masyarakat Gresik
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="font-bold text-2xl mb-3 bg-linear-to-r from-beige via-terracotta to-beige bg-clip-text text-transparent">
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
        className="absolute bottom-10 right-10 w-40 h-40 border-4 border-terracotta/20 rounded-2xl"
      />
    </Section>
  );
}
