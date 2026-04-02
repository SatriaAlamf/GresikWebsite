"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Utensils, Shirt, Music, Briefcase, Calendar, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const exploreItems = [
  {
    title: "Makanan Khas",
    description: "Jelajahi kuliner legendaris Gresik dari Pudak hingga Bandeng Presto",
    icon: Utensils,
    href: "/makanan",
    gradient: "from-terracotta via-burnt to-orange",
    items: "8+ Hidangan",
    emoji: "🍜",
  },
  {
    title: "Pakaian Adat",
    description: "Keanggunan busana tradisional dengan filosofi mendalam",
    icon: Shirt,
    href: "/pakaian-adat",
    gradient: "from-burnt via-terracotta to-orange",
    items: "4+ Jenis",
    emoji: "👘",
  },
  {
    title: "Kesenian Daerah",
    description: "Dari Jemblung, Hadrah, hingga Tari Grebeg Suran yang megah",
    icon: Music,
    href: "/kesenian",
    gradient: "from-teal via-cyan to-sky",
    items: "6+ Kesenian",
    emoji: "🎭",
  },
  {
    title: "Pekerjaan & Ekonomi",
    description: "Data lengkap sektor industri, UMR, dan peluang karir di Gresik",
    icon: Briefcase,
    href: "/pekerjaan",
    gradient: "from-forest via-teal to-cyan",
    items: "5 Sektor Utama",
    emoji: "💼",
  },
  {
    title: "Kebiasaan Masyarakat",
    description: "Tradisi dan kebiasaan unik masyarakat Gresik yang hidup hingga kini",
    icon: Calendar,
    href: "/kebiasaan-masyarakat",
    gradient: "from-navy via-blue-600 to-cyan",
    items: "5+ Tradisi",
    emoji: "🎊",
  },
  {
    title: "Kesimpulan",
    description: "Rangkuman lengkap keragaman budaya dan identitas Gresik",
    icon: Heart,
    href: "/kesimpulan",
    gradient: "from-terracotta via-orange to-burnt",
    items: "Refleksi & Insight",
    emoji: "📝",
  },
];

// Simple Card Component without 3D effects
function SimpleCard({ item, index }: { item: typeof exploreItems[0]; index: number }) {
  const [hovering, setHovering] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
      }}
      className="group"
    >
      <Link href={item.href}>
        <motion.div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative h-full p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-elevation-2 hover:shadow-elevation-3 transition-all overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon & Emoji */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white relative z-10" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl" />
              </div>

              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-display text-2xl font-bold bg-linear-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-charcoal/70 mb-6 leading-relaxed min-h-16">
              {item.description}
            </p>

            {/* Meta & Arrow */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-terracotta" />
                <span className="text-sm font-semibold text-charcoal/60">
                  {item.items}
                </span>
              </div>

              <motion.div
                animate={{ x: hovering ? 5 : 0 }}
                transition={{ duration: 0.2 }}
                className={`w-10 h-10 rounded-full bg-linear-to-r ${item.gradient} flex items-center justify-center shadow-lg`}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Shine Effect on Hover */}
          {hovering && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
            />
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ExploreSection() {
  return (
    <Section id="explore" background="light" spacing="lg">
      <Container>
        <RevealOnScroll>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-terracotta to-burnt text-white rounded-full text-sm font-semibold mb-4 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Jelajahi Gresik
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
            >
              Keragaman yang{" "}
              <span className="bg-linear-to-r from-terracotta via-burnt to-orange bg-clip-text text-transparent">
                Memikat
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-charcoal/70 max-w-2xl mx-auto"
            >
              Dari kuliner, budaya, hingga ekonomi. Setiap aspek Gresik punya
              cerita menarik yang sayang untuk dilewatkan.
            </motion.p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {exploreItems.map((item, index) => (
            <SimpleCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
