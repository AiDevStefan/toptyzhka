"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Сын идёт в сад с удовольствием. Каждое утро — как праздник. А фотоотчёты в чате — это отдельная любовь.",
    author: "Екатерина",
    child: "мама Миши, 4 года",
  },
  {
    text: "Переехали в район и долго искали сад. Здесь — идеальный баланс: и развитие, и забота, и эстетика. Дочь адаптировалась за неделю.",
    author: "Дмитрий",
    child: "папа Софии, 3 года",
  },
  {
    text: "Педагоги — волшебники. Ребёнок стал увереннее, научился дружить, а вечером рассказывает стихи. Мы счастливы.",
    author: "Ольга",
    child: "мама Артёма, 5 лет",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-border overflow-hidden">
      <div className="container-x">
        <div className="text-center mb-10 lg:mb-12">
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-2 block">
            Отзывы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink">
            Родители о нас
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-alt p-6 lg:p-8 rounded-lg shadow-soft border border-border flex flex-col h-full"
            >
              <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-accent/40 mb-4 lg:mb-6 shrink-0" />
              <p className="text-ink leading-relaxed mb-6 lg:mb-8 flex-1 text-sm lg:text-base">
                "{r.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-ink text-sm lg:text-base">{r.author}</p>
                <p className="text-xs lg:text-sm text-ink-light">{r.child}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}