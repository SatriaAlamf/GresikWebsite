import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
}

const variantClasses = {
  primary: "bg-terracotta text-white hover:bg-terracotta-dark border-2 border-terracotta hover:border-terracotta-dark shadow-elevation-2 hover:shadow-elevation-3",
  secondary: "bg-teal text-white hover:bg-teal-dark border-2 border-teal hover:border-teal-dark shadow-elevation-2 hover:shadow-elevation-3",
  outline: "bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-offwhite",
  ghost: "bg-transparent hover:bg-beige text-charcoal",
  gradient: "bg-gradient-to-r from-terracotta to-burnt text-white border-2 border-transparent hover:shadow-elevation-3",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      magnetic = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold rounded-lg",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-95",
          magnetic && "btn-magnetic hover:-translate-y-0.5",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
