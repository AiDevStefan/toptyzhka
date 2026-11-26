"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function EnrollmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="py-24 bg-bg-alt min-h-screen pt-32">
      <div className="container-x max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">On-line заявка</h1>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами, расскажем о нашем детском саде и ответим на все вопросы.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-lg shadow-card text-center border border-border"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-ink mb-2">Заявка отправлена!</h2>
            <p className="text-ink-light">
              Спасибо! Мы свяжемся с вами по указанному номеру телефона.
            </p>
            <button
              className="mt-8 bg-ink text-white hover:bg-ink/90 rounded-md px-8 py-3 font-bold transition-colors"
              onClick={() => setIsSubmitted(false)}
            >
              Отправить еще одну
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-lg shadow-card border border-border space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-ink mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-2">Телефон *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-ink mb-2">Возраст ребенка</label>
              <select className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm text-ink-light">
                <option value="1.5-3">От 1,5 до 3 лет</option>
                <option value="4-6">От 4 до 6 лет</option>
              </select>
            </div>

            {/* Юридические согласия по РФ */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded-sm border-border text-accent focus:ring-accent"
              />
              <label className="text-xs text-ink-light leading-tight">
                Я даю согласие на обработку персональных данных в соответствии с{" "}
                <a href="/privacy" className="text-accent hover:underline font-bold">
                  Политикой конфиденциальности
                </a>{" "}
                и принимаю условия{" "}
                <a href="/terms" className="text-accent hover:underline font-bold">
                  Пользовательского соглашения
                </a>. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-ink font-extrabold text-lg py-4 rounded-md transition-colors shadow-md"
            >
              Отправить запрос
            </button>
          </motion.form>
        )}
      </div>
    </main>
  );
}