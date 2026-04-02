import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: "bg-gray-100 text-charcoal border-gray-200",
  primary: "bg-terracotta/10 text-terracotta border-terracotta/20",
  secondary: "bg-teal/10 text-teal border-teal/20",
  success: "bg-forest/10 text-forest border-forest/20",
  warning: "bg-burnt/10 text-burnt border-burnt/20",
  danger: "bg-red-100 text-red-700 border-red-200",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium border",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
