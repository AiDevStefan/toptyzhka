import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "coral" | "saffron" | "teal" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/90 shadow-soft",
  coral: "bg-pink text-white hover:bg-pink-dark shadow-glow",
  saffron: "bg-yellow text-ink hover:bg-yellow/90",
  teal: "bg-green text-white hover:bg-green/90",
  outline: "border-2 border-ink/10 text-ink hover:bg-ink hover:text-white",
  "outline-light": "border-2 border-white/30 text-white hover:bg-white hover:text-ink",
  ghost: "text-ink hover:bg-ink/5",
};

const SIZE_STYLES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center font-bold rounded-full whitespace-nowrap",
          "transition-all duration-300 active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink/60 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          VARIANT_STYLES[variant],
          SIZE_STYLES[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";