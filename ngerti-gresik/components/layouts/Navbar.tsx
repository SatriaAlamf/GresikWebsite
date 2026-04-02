"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { MagneticButton } from "../animations/MagneticButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 20);
      
      // Auto-hide/show navbar
      if (currentScrollY < 100) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-beige/30"
            : "bg-navy/80 backdrop-blur-md border-b border-white/10"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl",
                  "bg-linear-to-br from-terracotta to-burnt text-white shadow-elevation-2"
                )}
              >
                NG
              </motion.div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-display font-bold text-xl transition-colors",
                    isScrolled ? "text-navy" : "text-offwhite"
                  )}
                >
                  NgertiGresik
                </span>
                <span
                  className={cn(
                    "text-[10px] -mt-1 transition-colors",
                    isScrolled ? "text-charcoal/60" : "text-offwhite/80"
                  )}
                >
                  Kota Industri & Santri
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <MagneticButton key={item.href} strength={0.2}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-200 relative",
                        isScrolled 
                          ? "hover:bg-beige/50" 
                          : "hover:bg-white/10",
                        isActive
                          ? isScrolled 
                            ? "text-terracotta" 
                            : "text-teal"
                          : isScrolled
                          ? "text-charcoal"
                          : "text-offwhite"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className={cn(
                            "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                            isScrolled ? "bg-terracotta" : "bg-teal"
                          )}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </MagneticButton>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled 
                  ? "hover:bg-beige/50 focus:ring-terracotta" 
                  : "hover:bg-white/10 focus:ring-teal",
                "focus:outline-none focus:ring-2"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-6 h-6", isScrolled ? "text-charcoal" : "text-offwhite")} />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled ? "text-charcoal" : "text-offwhite")} />
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-terracotta to-teal"
          style={{
            scaleX: 0,
            transformOrigin: "0%",
          }}
          animate={{
            scaleX: isScrolled ? 1 : 0,
          }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-offwhite shadow-elevation-4 overflow-y-auto"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-2">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-6 py-4 rounded-xl font-semibold text-lg transition-all",
                            "hover:bg-beige hover:-translate-x-1",
                            isActive
                              ? "bg-linear-to-r from-terracotta to-burnt text-white shadow-elevation-2"
                              : "text-charcoal"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="mt-12 pt-6 border-t border-beige">
                  <p className="text-sm text-charcoal/60 text-center">
                    © 2025 NgertiGresik.Id
                  </p>
                  <p className="text-xs text-charcoal/40 text-center mt-1">
                    Mengenal Gresik Lebih Dekat
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
