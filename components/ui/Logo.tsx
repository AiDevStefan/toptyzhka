"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className }, ref) => {
    return (
      <Link
        ref={ref}
        href="/"
        className={cn("group flex items-center gap-3 select-none", className)}
        aria-label="ТоптыжкА - на главную"
      >
        <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-accent -rotate-12 animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(255,193,7,0.5)]"
          >
            <path
              d="M12 14C15.3137 14 18 16.0147 18 18.5C18 20.433 15.3137 22 12 22C8.68629 22 6 20.433 6 18.5C6 16.0147 8.68629 14 12 14Z"
              fill="currentColor"
            />
            <circle cx="6" cy="10" r="2.5" fill="currentColor" />
            <circle cx="18" cy="10" r="2.5" fill="currentColor" />
            <circle cx="9.5" cy="5" r="2.5" fill="currentColor" />
            <circle cx="14.5" cy="5" r="2.5" fill="currentColor" />
          </svg>
        </div>

        <div className="font-extrabold text-xl tracking-tight flex items-center">
          <span className="text-white">ТОП</span>
          <span className="text-white/70">ТЫЖКА</span>
        </div>
      </Link>
    );
  }
);

Logo.displayName = "Logo";