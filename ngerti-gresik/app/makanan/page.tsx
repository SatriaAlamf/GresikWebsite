"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { PageHeader } from "@/components/sections/PageHeader";
import { makananData, type MakananItem } from "@/data/makanan";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { UtensilsCrossed, Sparkles, Flame } from "lucide-react";

export default function MakananPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <PageHeader
        title="Makanan Khas Gresik"
        subtitle="KULINER LEGENDARIS GRESIK"
        description="Jelajahi cita rasa khas Gresik yang legendaris, dari Pudak yang manis hingga Bandeng Presto yang gurih. Setiap hidangan menyimpan cerita dan warisan budaya yang turun-temurun."
        icon={UtensilsCrossed}
        gradient="from-burnt via-terracotta to-teal"
      />

      {/* Makanan Showcase - Alternating Layout */}
      <Section background="light" spacing="lg" className="py-20">
        <Container>
          <div className="space-y-32">
            {makananData.map((item, index) => (
              <MakananShowcase key={item.id} item={item} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

function MakananShowcase({ item, index }: { item: MakananItem; index: number }) {
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content Side */}
      <motion.div
        className={`${isEven ? "lg:order-1" : "lg:order-2"} space-y-6`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Number Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          className="inline-flex items-center gap-3"
        >
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-terracotta to-burnt flex items-center justify-center shadow-lg">
            <span className="font-display text-2xl font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-display text-5xl md:text-6xl font-bold text-navy mb-4 leading-tight"
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

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="p-6 bg-linear-to-br from-beige/50 to-terracotta/5 rounded-2xl border-2 border-terracotta/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-terracotta" />
            <h4 className="font-bold text-navy">Cerita di Baliknya</h4>
          </div>
          <p className="text-charcoal/70 leading-relaxed">{item.story}</p>
        </motion.div>

        {/* Ingredients */}
        {item.ingredients && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-terracotta" />
              Bahan Utama
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ingredient, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="px-4 py-2 bg-white rounded-full border-2 border-terracotta/20 text-charcoal font-medium hover:bg-terracotta hover:text-white transition-all duration-300 cursor-default"
                >
                  {ingredient}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Serving Style */}
        {item.servingStyle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-teal/20"
          >
            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-teal" />
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Cara Penyajian</h4>
              <p className="text-sm text-charcoal/70">{item.servingStyle}</p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Visual Side */}
      <motion.div
        className={`${isEven ? "lg:order-2" : "lg:order-1"} relative`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
            rotateZ: isHovered ? (isEven ? 2 : -2) : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-br from-terracotta/30 via-burnt/20 to-teal/30">
            <div className="absolute inset-0 bg-pattern-dots opacity-20" />
          </div>

          {/* Image or Icon */}
          {item.image ? (
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 p-8"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          ) : (
            <motion.div
              animate={{
                y: isHovered ? -10 : 0,
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-48 h-48 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                <UtensilsCrossed className="w-24 h-24 text-terracotta" />
              </div>
            </motion.div>
          )}

          {/* Decorative Circles */}
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.6 : 0.3,
            }}
            className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/50"
          />
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.6 : 0.3,
            }}
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-4 border-white/50"
          />
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
          }}
          className="absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br from-terracotta to-burnt rounded-2xl opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
          }}
          className="absolute -top-6 -left-6 w-32 h-32 bg-linear-to-br from-teal to-forest rounded-full opacity-20 blur-xl"
        />
      </motion.div>
    </motion.div>
  );
}
