"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CLASSES = [
  {
    id: "toddler",
    title: "Ясельная группа",
    age: "1.5 – 3 года",
    desc: "Мягкая адаптация, сенсорное развитие и первые навыки общения в игровой форме.",
  },
  {
    id: "preschool",
    title: "Средняя группа",
    age: "3 – 5 лет",
    desc: "Развитие речи, творческие мастерские, английский язык и подготовка к школе.",
  },
  {
    id: "prek",
    title: "Старшая группа",
    age: "5 – 6 лет",
    desc: "Интенсивная подготовка к первому классу, проектная деятельность и эмоциональный интеллект.",
  },
];

export function Classes() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-x">
        <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink mb-3 lg:mb-4">Наши группы</h2>
          <p className="text-ink-light text-base sm:text-lg font-medium">
            Программы, адаптированные под возраст и потребности каждого ребёнка
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CLASSES.map((item) => (
            <Link key={item.id} href={`/groups#${item.id}`} className="group block h-full">
              <div className="relative rounded-lg overflow-hidden bg-white shadow-soft hover:shadow-card transition-all duration-300 h-full flex flex-col border border-border">
                <div className="relative h-48 sm:h-60 w-full overflow-hidden shrink-0 bg-bg-alt flex items-center justify-center">
                  <span className="text-ink-light">Фото {item.title}</span>
                  <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-sm">
                    {item.age}
                  </div>
                </div>

                <div className="p-5 lg:p-6 flex flex-col flex-1">
                  <h3 className="text-lg lg:text-xl font-extrabold text-ink mb-2 lg:mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-ink-light text-sm leading-relaxed flex-1 mb-4 lg:mb-6">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                    <span className="text-sm font-bold text-ink">Подробнее</span>
                    <div className="w-8 h-8 rounded-sm bg-bg-alt flex items-center justify-center group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}