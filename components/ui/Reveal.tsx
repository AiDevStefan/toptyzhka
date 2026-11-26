"use client";

import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, delay = 0, className }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;

      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        el.classList.add("is-visible");
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const t = window.setTimeout(
              () => el.classList.add("is-visible"),
              delay
            );
            observer.unobserve(el);
            return () => window.clearTimeout(t);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <div ref={innerRef} className={cn("reveal", className)}>
        {children}
      </div>
    );
  }
);

Reveal.displayName = "Reveal";