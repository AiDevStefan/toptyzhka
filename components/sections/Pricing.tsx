"use client";

import { siteConfig } from "@/data/site-config";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const plans = [
    { key: "short", ...siteConfig.pricing.short, highlight: false },
    { key: "full", ...siteConfig.pricing.full, highlight: true },
    { key: "weekend", ...siteConfig.pricing.weekend, highlight: false },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-x relative z-10">
        <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-3 block">
            Стоимость
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink mb-3 lg:mb-4">
            Прозрачные тарифы
          </h2>
          <p className="text-ink-light text-base lg:text-lg font-medium">
            Всё включено в стоимость: питание, занятия, прогулки и материалы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.key}
              className={`relative p-6 lg:p-8 rounded-lg flex flex-col h-full transition-all duration-300 ${
                plan.highlight
                  ? "bg-ink text-white shadow-xl md:scale-105 z-10 border border-ink"
                  : "bg-white text-ink shadow-soft border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-accent text-ink text-[10px] md:text-xs font-extrabold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
                  Популярный выбор
                </div>
              )}
              
              <h3 className={`text-lg lg:text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-ink"}`}>
                {plan.title}
              </h3>
              
              <div className="mb-4 lg:mb-6">
                <span className={`text-2xl lg:text-3xl font-extrabold ${plan.highlight ? "text-accent" : "text-ink"}`}>
                  {plan.price}
                </span>
              </div>
              
              <ul className="mb-6 lg:mb-8 space-y-3 flex-1">
                <li className={`flex items-start gap-3 text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-ink-light"}`}>
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-accent" : "text-green-500"}`} />
                  <span>{plan.note}</span>
                </li>
              </ul>

              <Link href="/enrollment" className="block w-full mt-auto">
                <button
                  className={`w-full py-3 rounded-md font-bold transition-all flex items-center justify-center text-sm lg:text-base ${
                    plan.highlight
                      ? "bg-accent text-ink hover:bg-accent-hover shadow-md"
                      : "bg-bg-alt text-ink hover:bg-border border border-border"
                  }`}
                >
                  Выбрать тариф
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}