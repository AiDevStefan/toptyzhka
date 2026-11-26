import Link from "next/link";
import Image from "next/image";
import { mockNews } from "@/data/mock-db";
import { CalendarDays } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="py-24 bg-bg-alt min-h-screen">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl font-extrabold text-ink mb-4">Новости и мероприятия</h1>
          <p className="text-ink-light text-lg">
            Следите за жизнью нашего детского сада. Здесь мы делимся самыми яркими моментами.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((news, i) => (
            <Link key={news.id} href={`/news/${news.id}`} className="group block h-full">
              <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border h-full flex flex-col">
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3 font-bold">
                    <CalendarDays className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h2 className="text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-ink-light text-sm leading-relaxed flex-1">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}