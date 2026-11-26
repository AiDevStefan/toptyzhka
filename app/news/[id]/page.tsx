import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { mockNews } from "@/data/mock-db";
import { CalendarDays, ArrowLeft } from "lucide-react";

interface NewsPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return mockNews.map((news) => ({ id: news.id }));
}

export default function NewsItemPage({ params }: NewsPageProps) {
  const news = mockNews.find((n) => n.id === params.id);

  if (!news) {
    notFound();
  }

  return (
    <main className="py-24 bg-white min-h-screen">
      <div className="container-x max-w-3xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent-hover transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Все новости
        </Link>

        <div className="flex items-center gap-2 text-sm text-accent mb-4 font-bold">
          <CalendarDays className="w-4 h-4" />
          {news.date}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-8 leading-tight">
          {news.title}
        </h1>

        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bg-alt mb-10 border border-border">
          <Image
            src={news.image}
            alt={news.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="text-ink-light text-lg leading-relaxed space-y-4">
          <p className="font-medium text-ink text-xl mb-6">{news.excerpt}</p>
          <p>
            Мы делимся подробностями и фотографиями с мероприятий,
            чтобы родители всегда были в курсе жизни сада. Следите за обновлениями
            в разделе «Новости» и в нашем закрытом чате.
          </p>
        </div>
      </div>
    </main>
  );
}