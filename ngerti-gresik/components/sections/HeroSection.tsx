"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Users, Briefcase, UtensilsCrossed, Music2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MagneticButton } from "../animations/MagneticButton";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Video Background Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ filter: "blur(3px)" }}
          >
            <source src="/videos/gresik_drone.mp4" type="video/mp4" />
            <source src="/videos/gresik_drone.webm" type="video/webm" />
          </video>
          
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-navy/40 via-transparent to-navy/80" />
        </motion.div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-1">
          {/* Geometric Shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 w-32 h-32 border-4 border-terracotta/30 rounded-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-32 left-10 w-24 h-24 bg-teal/20 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-burnt/30"
          />
        </div>

        <Container className="relative z-10 py-32">
          <motion.div
            style={{ opacity }}
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn("down", 0)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full shadow-elevation-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-teal" />
              <span className="text-sm font-medium text-offwhite">
                Selamat Datang di Portal Kebudayaan Gresik
              </span>
            </motion.div>

            {/* Main Heading with Highlighted City Name */}
            <motion.h1
              variants={fadeIn("up", 0.1)}
              className="font-display font-bold mb-6 leading-tight"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl text-offwhite mb-2">
                Ngerti
              </span>
              <span className="block text-7xl md:text-8xl lg:text-9xl font-black bg-linear-to-r from-teal via-cyan to-sky bg-clip-text text-transparent drop-shadow-glow mb-4">
                GRESIK
              </span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-terracotta via-burnt to-orange bg-clip-text text-transparent font-bold"
              >
                Kota Industri & Santri
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
            >
              Temukan harmoni sempurna antara warisan spiritual dan kemajuan industri. 
              Dari makam para wali hingga kawasan industri modern, dari kuliner khas hingga kesenian tradisional yang lestari.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <MagneticButton>
                <Link href="/#explore">
                  <Button
                    variant="primary"
                    size="lg"
                    magnetic
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Mulai Jelajah
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full p-1 backdrop-blur-sm"
          >
            <motion.div className="w-1.5 h-2 bg-teal rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section - Below Video */}
      <div className="relative bg-navy py-20 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                number: "1.3 Juta+", 
                label: "Penduduk",
                icon: Users,
                gradient: "from-teal to-cyan",
                delay: 0.1
              },
              { 
                number: "680K+", 
                label: "Tenaga Kerja",
                icon: Briefcase,
                gradient: "from-orange to-terracotta",
                delay: 0.15
              },
              { 
                number: "7+", 
                label: "Kuliner Khas",
                icon: UtensilsCrossed,
                gradient: "from-burnt to-orange",
                delay: 0.2
              },
              { 
                number: "5+", 
                label: "Kesenian Tradisional",
                icon: Music2,
                gradient: "from-cyan to-teal",
                delay: 0.25
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: stat.delay,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-elevation-2 hover:shadow-elevation-3 hover:bg-white/15 transition-all overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Number */}
                <div className="relative text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="relative text-base font-medium text-white/90 group-hover:text-white transition-colors">
                  {stat.label}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/70 transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
