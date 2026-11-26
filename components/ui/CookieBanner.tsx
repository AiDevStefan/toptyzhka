"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, принял ли пользователь уже cookie
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container-x max-w-4xl mx-auto bg-white rounded-lg shadow-card border border-border p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-accent" />
          </div>
          <p className="text-sm text-ink-light">
            Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{" "}
            <Link href="/privacy" className="text-accent hover:underline font-bold">Политикой конфиденциальности</Link>.
          </p>
        </div>
        <button
          onClick={acceptCookies}
          className="bg-ink text-white hover:bg-ink/90 font-bold px-6 py-2.5 rounded-md text-sm transition-colors shrink-0 w-full md:w-auto"
        >
          Принять
        </button>
      </div>
    </div>
  );
}