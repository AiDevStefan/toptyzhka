"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="bg-gradient-warm rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border-4 border-white/50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-plum/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-plum/10 backdrop-blur-sm text-plum font-semibold text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Осталось 3 места на сентябрь</span>
              </div>

              <h2 className="text-display-lg text-plum mb-8 font-bold">
                Приходите <br />
                <span className="italic">знакомиться</span>
              </h2>

              <p className="text-plum/80 text-xl font-light mb-12 max-w-xl mx-auto">
                Запишитесь на экскурсию — покажем группы, познакомим с педагогами, ответим на все вопросы.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/enrollment">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl">
                    Записаться на экскурсию
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contacts">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/30 backdrop-blur-md border-plum/30 text-plum hover:bg-white hover:text-plum">
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}