"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Factory, School, TrendingUp, BookOpen, Users, Layers } from "lucide-react";

export function DualIdentitySection() {
  const [activeTab, setActiveTab] = useState<"industri" | "santri">("industri");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="light" spacing="lg">
      <Container maxWidth="xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 backdrop-blur-sm border border-navy/20 rounded-full mb-6"
          >
            <Layers className="w-4 h-4 text-terracotta" />
            <span className="text-sm font-medium text-navy">
              Dua Identitas, Satu Harmoni
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
            Mengapa Gresik Dijuluki{" "}
            <span className="text-transparent bg-linear-to-r from-terracotta via-burnt to-orange bg-clip-text">
              Kota Industri
            </span>{" "}
            dan{" "}
            <span className="text-transparent bg-linear-to-r from-teal via-forest to-navy bg-clip-text">
              Kota Santri
            </span>
            ?
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Dua julukan yang mencerminkan keseimbangan sempurna antara kemajuan ekonomi dan kekuatan spiritual
          </p>
        </motion.div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("industri")}
            className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "industri"
                ? "bg-linear-to-r from-terracotta to-burnt text-white shadow-2xl"
                : "bg-white text-navy shadow-md hover:shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3">
              <Factory className="w-6 h-6" />
              <span>Kota Industri</span>
            </div>
            {activeTab === "industri" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-linear-to-r from-terracotta to-burnt rounded-2xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("santri")}
            className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "santri"
                ? "bg-linear-to-r from-teal to-forest text-white shadow-2xl"
                : "bg-white text-navy shadow-md hover:shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3">
              <School className="w-6 h-6" />
              <span>Kota Santri</span>
            </div>
            {activeTab === "santri" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-linear-to-r from-teal to-forest rounded-2xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        </div>

        {/* Content Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "industri" ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {activeTab === "industri" ? (
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Visual Section */}
              <div className="bg-linear-to-br from-terracotta via-burnt to-orange p-12 flex flex-col justify-center text-white relative overflow-hidden">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-2xl rotate-12"
                />
                
                <div className="text-7xl mb-6">🏭</div>
                <h3 className="font-display text-4xl font-bold mb-4">
                  Kota Industri
                </h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Kawasan industri strategis dengan kontribusi ekonomi besar bagi Jawa Timur
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">3+</div>
                    <div className="text-sm text-white/80">Kawasan Industri Besar</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">Top</div>
                    <div className="text-sm text-white/80">Kontributor Ekonomi Jatim</div>
                  </div>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy text-xl mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-terracotta" />
                      Lokasi Strategis & Industri Besar
                    </h4>
                    <p className="text-navy/70 leading-relaxed">
                      Gresik menjadi salah satu daerah dengan banyak kawasan industri besar di Jawa Timur seperti 
                      PT Semen Gresik (Semen Indonesia Group), Petrokimia Gresik, Maspion Industrial Estate, 
                      Kawasan Industri Gresik (KIG), dan Java Integrated Industrial and Ports Estate (JIIPE). 
                      Lokasi strategis di jalur pelayaran internasional dekat Pelabuhan Gresik dan Tanjung Perak 
                      menjadikannya pusat industri manufaktur, kimia, semen, elektronik, tekstil, dan logam.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy/10">
                    <h4 className="font-semibold text-navy text-xl mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-terracotta" />
                      Industri Utama
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Industri Semen: PT Semen Indonesia Group (Semen Gresik)",
                        "Petrokimia: Petrokimia Gresik - pupuk dan produk kimia",
                        "Elektronik & Logam: Maspion Industrial Estate",
                        "Kawasan Modern: JIIPE - industri terintegrasi dengan pelabuhan",
                      ].map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-start gap-3 text-navy/70"
                        >
                          <span className="text-terracotta font-bold shrink-0 mt-1">✓</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Content Section */}
              <div className="p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy text-xl mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-teal" />
                      Pusat Penyebaran Islam Awal di Jawa
                    </h4>
                    <p className="text-navy/70 leading-relaxed">
                      Gresik dikenal sebagai tempat Islam pertama kali berkembang di Jawa melalui tokoh seperti 
                      Maulana Malik Ibrahim (Sunan Gresik) dan Sunan Giri. Di Gresik terdapat makam para wali 
                      yang penting dalam sejarah Islam di Jawa, sehingga nuansa islami sangat kental. 
                      Kehidupan masyarakat religius dengan tradisi keagamaan seperti ziarah wali, tahlilan, 
                      dan kegiatan keislaman masih sangat terjaga hingga kini.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy/10">
                    <h4 className="font-semibold text-navy text-xl mb-3 flex items-center gap-2">
                      <School className="w-5 h-5 text-teal" />
                      Pondok Pesantren & Pendidikan Islam
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Banyak pondok pesantren di setiap kecamatan seperti Pondok Pesantren Qomaruddin (Sidayu)",
                        "Lembaga pendidikan Islam tersebar luas di wilayah Gresik dan sekitarnya",
                        "Nuansa santri sangat kuat dalam kehidupan sehari-hari masyarakat",
                        "Tradisi keagamaan turun-temurun masih lestari dan dijaga dengan baik",
                      ].map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-start gap-3 text-navy/70"
                        >
                          <span className="text-teal font-bold shrink-0 mt-1">✓</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Visual Section */}
              <div className="bg-linear-to-br from-teal via-forest to-navy p-12 flex flex-col justify-center text-white relative overflow-hidden">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-2xl -rotate-12"
                />
                
                <div className="text-7xl mb-6">🕌</div>
                <h3 className="font-display text-4xl font-bold mb-4">
                  Kota Santri
                </h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Warisan spiritual dan pendidikan Islam yang mengakar kuat dalam kehidupan masyarakat
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">Ratusan</div>
                    <div className="text-sm text-white/80">Pondok Pesantren</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">600+</div>
                    <div className="text-sm text-white/80">Tahun Sejarah Islam</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-linear-to-br from-navy via-forest to-teal rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl">🏭</div>
            <span className="text-4xl">🤝</span>
            <div className="text-5xl">🕌</div>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Harmoni Sempurna: Industri & Spiritualitas
          </h3>
          <p className="text-lg text-offwhite/90 leading-relaxed max-w-3xl mx-auto">
            Gresik membuktikan bahwa kemajuan ekonomi dan nilai-nilai spiritual dapat berjalan beriringan. 
            Industri yang maju tidak menghilangkan identitas religius, dan tradisi santri tidak menghambat 
            modernisasi. Inilah keunikan Gresik yang menjadi contoh keseimbangan bagi kota-kota lain di Indonesia.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
