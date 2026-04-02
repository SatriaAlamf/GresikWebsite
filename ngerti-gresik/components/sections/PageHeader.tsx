"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  icon: Icon,
  gradient,
}: PageHeaderProps) {
  return (
    <section className="relative bg-navy min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-10`} />

      <Container className="relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`w-20 h-20 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center shadow-2xl`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>

          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              {subtitle}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className={`bg-linear-to-r ${gradient} bg-clip-text text-transparent`}>
              {title}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1 mx-auto"
            >
              <div className="w-1.5 h-2 bg-white/70 rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
