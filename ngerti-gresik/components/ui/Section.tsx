import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "dark" | "beige" | "navy" | "transparent";
  clipPath?: "diagonal" | "diagonal-reverse" | "none";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const backgroundClasses = {
  light: "bg-offwhite",
  dark: "bg-navy text-offwhite",
  beige: "bg-beige",
  navy: "bg-navy text-offwhite",
  transparent: "bg-transparent",
};

const clipPathClasses = {
  diagonal: "clip-diagonal",
  "diagonal-reverse": "clip-diagonal-reverse",
  none: "",
};

const spacingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

export function Section({
  children,
  className,
  id,
  background = "transparent",
  clipPath = "none",
  spacing = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        backgroundClasses[background],
        clipPathClasses[clipPath],
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
