"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export function About() {
  return (
    <section className="py-16 lg:py-24 bg-bg-alt overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-10 lg:mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-sm font-bold text-ink-light uppercase tracking-widest mb-2 lg:mb-3 block">
              Коротко о центре
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.15]">
              «Тёплая атмосфера для <br className="hidden lg:block" />
              <span className="text-accent">счастливого</span> детства!»
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-ink-light leading-relaxed space-y-4 lg:space-y-5 text-base lg:text-lg"
          >
            <p>
              Наш детский сад — это тёплое и безопасное пространство, где дети учатся, играют и развиваются в атмосфере заботы и внимания. Мы создаём условия, в которых каждый ребёнок чувствует себя уверенно, раскрывает свои способности и с интересом познаёт окружающий мир.
            </p>
            <p>
              Мы уделяем большое внимание безопасности, здоровому питанию и комфортной атмосфере. Для нас важно, чтобы дети с радостью приходили в детский сад, а родители были спокойны и уверены в качестве заботы и образования.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-card border border-border bg-ink flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/80 to-slate-700" />
          <div className="relative z-10 flex flex-col items-center text-white/50 px-4 text-center">
            <ImageIcon className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 opacity-50" />
            <p className="text-base md:text-lg font-bold">Фото детского сада</p>
            <p className="text-xs md:text-sm mt-2 max-w-md">Сюда нужно добавить реальное фото. Положите файл в папку `public` и обновите код.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}