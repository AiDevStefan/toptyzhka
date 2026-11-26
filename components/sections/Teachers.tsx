"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const teachers = [
  {
    name: "Анна Сергеевна",
    role: "Старший воспитатель",
    exp: "12 лет опыта",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Мария Ивановна",
    role: "Педагог-психолог",
    exp: "8 лет опыта",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Елена Петровна",
    role: "Логопед-дефектолог",
    exp: "10 лет опыта",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
];

export function Teachers() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-sm font-semibold text-brand-emerald/60 uppercase tracking-widest mb-4 block">
            02 — Команда
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-emerald mb-6">
            Наши <span className="italic font-normal text-brand-emerald/70">педагоги</span>
          </h2>
          <p className="text-text-muted text-xl font-light">
            Люди, которые каждый день создают среду, в которой хочется расти.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 relative bg-brand-sand/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <GraduationCap className="w-4 h-4" />
                    {t.exp}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-emerald mb-1">{t.name}</h3>
              <p className="text-text-muted">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}