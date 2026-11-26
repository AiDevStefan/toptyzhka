"use client";

import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  ({ children, reverse = false, speed = 40, className }, ref) => {
    return (
      <div ref={ref} className={cn("overflow-hidden", className)}>
        <div
          className="marquee-track"
          style={{
            animationDirection: reverse ? "reverse" : "normal",
            animationDuration: `${speed}s`,
          }}
        >
          {children}
          {children}
        </div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";