import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CookieBanner } from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "ТоптыжкА — частный детский сад в Ставрополе",
  description: "Детский сад «ТоптыжкА»: играйте и учитесь. Комфортная и безопасная среда для ваших детей.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* Подключаем Nunito через стандартный линк, минуя загрузчик Next.js */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-bg-alt text-ink antialiased font-sans">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}