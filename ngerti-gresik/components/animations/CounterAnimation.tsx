"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface CounterAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  separator?: boolean;
}

export function CounterAnimation({
  end,
  start = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  separator = false,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(start, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  const display = useTransform(springValue, (latest) => {
    const value = latest.toFixed(decimals);
    if (separator) {
      return new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(Number(value));
    }
    return value;
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(end);
      setHasAnimated(true);
    }
  }, [isInView, end, springValue, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
