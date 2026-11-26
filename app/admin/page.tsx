"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("admin_token", "true");
      router.push("/admin/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-bg-alt py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-card p-6 md:p-8 border border-border">
        <div className="text-center mb-6 md:mb-8">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 md:w-8 md:h-8 text-accent" />
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold text-ink">Вход в админ-панель</h1>
          <p className="text-ink-light text-sm mt-2">Введите пароль для управления сайтом</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Пароль"
              className="w-full px-4 py-3 rounded-md bg-bg-alt border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
            />
            {error && <p className="text-red-500 text-sm mt-1 font-bold">Неверный пароль</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-ink hover:bg-ink/90 text-white font-bold py-3 rounded-md transition-colors"
          >
            Войти
          </button>
        </form>
        <p className="text-xs text-center text-ink-light mt-4">Пароль для теста: admin123</p>
      </div>
    </main>
  );
}