import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "neu" | "glass" | "outline" | "elevated";
  hover?: boolean;
  onClick?: () => void;
}

const variantClasses = {
  default: "bg-white border border-gray-200",
  neu: "neu",
  glass: "glass",
  outline: "bg-transparent border-2 border-charcoal",
  elevated: "bg-white shadow-elevation-2",
};

export function Card({
  children,
  className,
  variant = "default",
  hover = false,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-xl p-6",
        variantClasses[variant],
        hover && "card-hover cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function CardTitle({
  children,
  className,
  as: Component = "h3",
}: CardTitleProps) {
  return (
    <Component className={cn("text-2xl font-bold text-navy", className)}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-charcoal/70 mt-2", className)}>{children}</p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn("mt-6 pt-4 border-t", className)}>{children}</div>;
}
