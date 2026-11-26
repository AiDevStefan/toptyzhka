"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Newspaper, CalendarDays, LogOut, Plus } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"news" | "schedule">("news");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("admin_token") !== "true") {
      router.push("/admin");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (!isAuth) return null;

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-bg-alt pb-20 pt-24 lg:pt-32">
      <div className="container-x">
        {/* Шапка дашборда */}
        <div className="bg-white rounded-lg border border-border p-4 lg:p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl lg:text-2xl font-extrabold text-ink">Управление сайтом</h1>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 bg-ink text-white hover:bg-ink/90 px-4 py-2 rounded-md font-bold text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" /> Выйти
          </button>
        </div>

        {/* Вкладки */}
        <div className="flex gap-2 border-b border-border mb-6 lg:mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-4 lg:px-6 py-3 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "news" ? "border-accent text-accent" : "border-transparent text-ink-light hover:text-ink"
            }`}
          >
            <Newspaper className="w-4 h-4" /> Новости
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`flex items-center gap-2 px-4 lg:px-6 py-3 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "schedule" ? "border-accent text-accent" : "border-transparent text-ink-light hover:text-ink"
            }`}
          >
            <CalendarDays className="w-4 h-4" /> Расписание
          </button>
        </div>

        {/* Контент вкладок */}
        {activeTab === "news" && (
          <div className="bg-white p-6 rounded-lg shadow-soft border border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-ink">Управление новостями</h2>
              <button className="flex items-center gap-2 bg-accent text-ink px-4 py-2 rounded-md font-bold text-sm hover:bg-accent-hover transition-colors">
                <Plus className="w-4 h-4" /> Добавить
              </button>
            </div>
            <p className="text-ink-light text-sm bg-bg-alt p-4 rounded-md border border-border">
              Здесь будет список новостей с кнопками редактирования и удаления. 
              Пока это заглушка — в следующем шаге мы подключим базу данных (SQLite), 
              чтобы новости реально сохранялись.
            </p>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="bg-white p-6 rounded-lg shadow-soft border border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-ink">Управление расписанием</h2>
              <button className="flex items-center gap-2 bg-accent text-ink px-4 py-2 rounded-md font-bold text-sm hover:bg-accent-hover transition-colors">
                <Plus className="w-4 h-4" /> Добавить
              </button>
            </div>
            <p className="text-ink-light text-sm bg-bg-alt p-4 rounded-md border border-border">
              Здесь будет таблица с расписанием занятий. Позже мы сделаем так, 
              чтобы изменения сразу отображались на странице «Группы».
            </p>
          </div>
        )}
      </div>
    </main>
  );
}