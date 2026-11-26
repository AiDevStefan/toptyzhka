"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINKS = [
  {
    title: "Детский сад",
    links: [
      { href: "/about", label: "О нас" },
      { href: "/groups", label: "Группы" },
      { href: "/news", label: "Новости" },
    ],
  },
  {
    title: "Родителям",
    links: [
      { href: "/enrollment", label: "Запись в сад" },
      { href: "/contacts", label: "Контакты" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-12 lg:pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 lg:pb-12 border-b border-border">
          
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-ink-light mt-4 lg:mt-6 text-sm leading-relaxed max-w-xs">
              Частный детский сад с домашней и безопасной средой. Мы создаем условия для гармоничного развития каждого ребенка.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-bold text-sm text-ink mb-4 lg:mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-light hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h4 className="font-bold text-sm text-ink mb-4 lg:mb-6">
              Контакты
            </h4>
            <ul className="space-y-4 text-sm text-ink-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="mailto:info@toptyzhka.ru" className="hover:text-accent transition-colors">
                  info@toptyzhka.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{siteConfig.workHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 lg:pt-8 text-xs text-ink-light">
          <p className="text-center md:text-left">© {new Date().getFullYear()} {siteConfig.name}. Все права защищены.</p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Конфиденциальность
            </Link>
            <Link href="/admin" className="hover:text-ink transition-colors">
              Админ-панель
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}