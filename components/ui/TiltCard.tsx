"use client";

import { forwardRef, useRef, useImperativeHandle, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ children, className, intensity = 10 }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (!el) return;
      if (window.matchMedia("(hover: none)").matches) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -intensity;
      const rotateY = ((x - rect.width / 2) / rect.width) * intensity;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      if (innerRef.current) {
        innerRef.current.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0)";
      }
    };

    return (
      <div
        ref={innerRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "transition-transform duration-300 ease-out will-change-transform",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

TiltCard.displayName = "TiltCard";