"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function EnrollmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "1.5-3",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Ошибка отправки");

      setIsSubmitted(true);
    } catch (err) {
      setError("Не удалось отправить заявку. Пожалуйста, позвоните нам напрямую.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="py-16 lg:py-24 bg-bg-alt min-h-screen pt-24 lg:pt-32">
      <div className="container-x max-w-2xl">
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-3 lg:mb-4">On-line заявка</h1>
          <p className="text-ink-light text-base lg:text-lg max-w-xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами, расскажем о нашем детском саде и ответим на все вопросы.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-card text-center border border-border">
            <CheckCircle2 className="w-14 h-14 md:w-16 md:h-16 text-green-500 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-2">Заявка отправлена!</h2>
            <p className="text-ink-light mb-6 md:mb-8">
              Спасибо! Мы свяжемся с вами по указанному номеру телефона.
            </p>
            <button
              className="bg-ink text-white hover:bg-ink/90 rounded-md px-6 md:px-8 py-3 font-bold transition-colors w-full sm:w-auto"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", phone: "", age: "1.5-3" });
              }}
            >
              Отправить еще одну
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-12 rounded-lg shadow-card border border-border space-y-5 md:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-bold text-ink mb-2">Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-2">Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-ink mb-2">Возраст ребенка</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm text-ink"
              >
                <option value="1.5-3">От 1,5 до 3 лет</option>
                <option value="4-6">От 4 до 6 лет</option>
              </select>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded-sm border-border text-accent focus:ring-accent shrink-0"
              />
              <label className="text-xs text-ink-light leading-tight">
                Я даю согласие на обработку персональных данных в соответствии с{" "}
                <Link href="/privacy" className="text-accent hover:underline font-bold">
                  Политикой конфиденциальности
                </Link>{" "}
                и принимаю условия{" "}
                <Link href="/terms" className="text-accent hover:underline font-bold">
                  Пользовательского соглашения
                </Link>. *
              </label>
            </div>

            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent hover:bg-accent-hover text-ink font-extrabold text-base md:text-lg py-4 rounded-md transition-colors shadow-md flex items-center justify-center disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                "Отправить запрос"
              )}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}