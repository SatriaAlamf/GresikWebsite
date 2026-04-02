"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { Container } from "../ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-offwhite relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-terracotta via-teal to-burnt" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-terracotta to-burnt flex items-center justify-center font-bold text-2xl text-white shadow-elevation-2">
                NG
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">
                  {SITE_NAME}
                </span>
                <span className="text-xs text-offwhite/60">
                  Kota Industri & Santri
                </span>
              </div>
            </div>
            <p className="text-sm text-offwhite/70 leading-relaxed">
              Platform digital untuk mengenal keragaman budaya, kuliner,
              kesenian, dan keragaman pekerjaan di Kota Gresik secara mendalam.
            </p>
            <div className="mt-6">
              <p className="text-xs text-offwhite/50">
                © {currentYear} NgertiGresik.Id
              </p>
              <p className="text-xs text-offwhite/40 mt-1">
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-beige">
              Jelajahi
            </h3>
            <nav className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-offwhite/70 hover:text-teal transition-colors hover:translate-x-1 duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-beige">
              Lainnya
            </h3>
            <nav className="space-y-2">
              {NAV_ITEMS.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-offwhite/70 hover:text-teal transition-colors hover:translate-x-1 duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-beige">
              Tentang Gresik
            </h3>
            <div className="space-y-3 text-sm text-offwhite/70">
              <p>
                <span className="text-teal font-semibold">Lokasi:</span> Jawa
                Timur, Indonesia
              </p>
              <p>
                <span className="text-teal font-semibold">Julukan:</span> Kota
                Santri & Industri
              </p>
              <p>
                <span className="text-teal font-semibold">Populasi:</span> ~1.3
                Juta jiwa
              </p>
              <p>
                <span className="text-teal font-semibold">Ikon:</span> Petrokimia,
                Semen, Pelabuhan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-offwhite/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-offwhite/50 text-center md:text-left">
              Dibuatuntuk memperkenalkan keragaman dari Kota Gresik
            </p>
            <div className="flex items-center gap-2 text-xs text-offwhite/40">
              <span>Built with</span>
              <span className="px-2 py-1 bg-offwhite/10 rounded">Next.js</span>
              <span className="px-2 py-1 bg-offwhite/10 rounded">TypeScript</span>
              <span className="px-2 py-1 bg-offwhite/10 rounded">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative shapes */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-teal/10 rounded-full blur-3xl" />
    </footer>
  );
}
