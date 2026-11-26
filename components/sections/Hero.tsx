"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Heart, Utensils, GraduationCap } from "lucide-react";

const ADVANTAGES = [
  { 
    text: "Индивидуальный подход", 
    icon: (
      <svg 
        viewBox="0 0 512 512" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
      >
        <path d="M12 256c0-48 24-80 64-80s80 32 80 80v112c0 48-32 80-80 80s-64-32-64-80V256z" />
        <path d="M32 220c16-16 40-24 64-24" />
        <circle cx="256" cy="180" r="70" />
        <path d="M186 280c20-30 50-50 70-50s50 20 70 50" />
        <path d="M226 320v40" />
        <path d="M286 320v40" />
        <path d="M500 256c0-48-24-80-64-80s-80 32-80 80v112c0 48 32 80 80 80s64-32 64-80V256z" />
        <path d="M480 220c-16-16-40-24-64-24" />
        <path d="M370 150l10-20 10 20 20 10-20 10-10 20-10-20-20-10 20-10z" />
        <path d="M140 380l10-20 10 20 20 10-20 10-10 20-10-20-20-10 20-10z" />
      </svg>
    )
  },
  { text: "Бережная адаптация", icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" strokeWidth={2.5} /> },
  { text: "Вкусное питание", icon: <Utensils className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" strokeWidth={2.5} /> },
  { text: "Подготовка к школе", icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" strokeWidth={2.5} /> },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Детский сад"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/50" />
      </div>

      <div className="container-x relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 mb-8 lg:mb-10 w-full">
          
          <div className="flex items-center gap-2 shrink-0">
            <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
              г. Ставрополь, Кубанский проезд, 1Б
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 lg:gap-x-10 lg:gap-y-5 lg:justify-items-end w-full lg:w-auto">
            {ADVANTAGES.map((item, i) => {
              return (
                <div key={i} className="flex items-center gap-2 lg:gap-3 text-accent">
                  {item.icon}
                  <span className="text-xs sm:text-sm text-white font-bold leading-tight lg:whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-4 leading-[1.1] tracking-tight">
            Комфортная и безопасная среда <br />
            <span className="text-accent">для ваших детей</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg mb-6 lg:mb-8 font-medium max-w-xl leading-relaxed">
            В детском саду «ТоптыжкА» создана домашняя атмосфера. Группы кратковременного и дневного пребывания для детей от 1,5 до 3 лет и от 4 до 6 лет.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/enrollment"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-ink font-extrabold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-md transition-all shadow-lg"
            >
              Записаться на экскурсию
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Link>
            <Link
              href="/groups"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-md hover:bg-white/20 transition-all"
            >
              Наши группы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}