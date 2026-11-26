"use client";

import { motion } from "framer-motion";
import { Sun, Coffee, BookOpen, Utensils, Moon, Palette } from "lucide-react";

const timeline = [
  {
    time: "07:00",
    title: "Встречаемся",
    desc: "Мягкое пробуждение, свободная игра, объятия.",
    icon: Sun,
  },
  {
    time: "08:30",
    title: "Завтрак",
    desc: "Каша, фрукты, домашняя выпечка от нашего повара.",
    icon: Coffee,
  },
  {
    time: "10:00",
    title: "Занятия",
    desc: "Развитие речи, математика в игре, английский.",
    icon: BookOpen,
  },
  {
    time: "12:30",
    title: "Обед",
    desc: "Сбалансированное меню с учётом аллергий.",
    icon: Utensils,
  },
  {
    time: "14:00",
    title: "Тихий час",
    desc: "Сон под спокойную музыку, мягкий свет.",
    icon: Moon,
  },
  {
    time: "16:00",
    title: "Творчество",
    desc: "Лепка, рисование, музыка, театр.",
    icon: Palette,
  },
];

export function DayInGarden() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-peach/20 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-sm font-semibold text-brand-emerald/60 uppercase tracking-widest mb-4 block">
            01 — Распорядок
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-emerald mb-6">
            Один день <br />
            <span className="italic font-normal text-brand-emerald/70">в саду</span>
          </h2>
          <p className="text-text-muted text-xl font-light">
            Каждый день выстроен так, чтобы ребёнок чувствовал ритм, безопасность и радость открытий.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white hover:bg-white hover:shadow-2xl hover:shadow-brand-emerald/10 transition-all duration-500 hover-3d"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-brand-emerald/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-emerald group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-7 h-7 text-brand-emerald group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-bold text-brand-emerald/20 group-hover:text-brand-emerald/40 transition-colors">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-emerald mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}