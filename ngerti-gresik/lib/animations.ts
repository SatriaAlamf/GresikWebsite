/**
 * Animation helper functions and configurations
 */

import { Variants } from "framer-motion";

/**
 * Create stagger animation variants
 */
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Fade up animation
 */
export const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      delay,
    },
  },
});

/**
 * Fade in animation
 */
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "none" = "none",
  delay: number = 0
): Variants => {
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    none: { x: 0, y: 0 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Scale in animation
 */
export const scaleIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  },
});

/**
 * Rotate in animation
 */
export const rotateIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, rotate: -10 },
  show: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

/**
 * Slide in from side
 */
export const slideIn = (
  direction: "left" | "right" = "left",
  delay: number = 0
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay,
    },
  },
});

/**
 * Bounce in animation
 */
export const bounceIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay,
    },
  },
});

/**
 * Flip card animation
 */
export const flipCard = {
  front: {
    rotateY: 0,
    transition: { duration: 0.6 },
  },
  back: {
    rotateY: 180,
    transition: { duration: 0.6 },
  },
};

/**
 * Expand animation
 */
export const expand = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      delay,
    },
  },
});

/**
 * Text reveal animation (for individual characters)
 */
export const textReveal = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

/**
 * Parallax scroll effect calculator
 */
export function calculateParallax(scrollY: number, speed: number = 0.5): number {
  return scrollY * speed;
}

/**
 * Easing functions
 */
export const EASING = {
  easeInOut: [0.43, 0.13, 0.23, 0.96],
  easeOut: [0.33, 1, 0.68, 1],
  easeIn: [0.32, 0, 0.67, 0],
  bounce: [0.68, -0.55, 0.265, 1.55],
} as const;

/**
 * Page transition variants
 */
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

/**
 * Modal animation variants
 */
export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Backdrop animation variants
 */
export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
