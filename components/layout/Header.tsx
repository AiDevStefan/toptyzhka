"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Phone, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/groups", label: "Группы" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20",
          "bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/10",
          scrolled ? "shadow-lg" : "shadow-none"
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shine_5s_infinite_linear]" />
        </div>

        <div className="container-x h-full flex items-center justify-between relative z-10">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-bold transition-colors hover:text-accent",
                    isActive ? "text-accent" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+70000000000"
              className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 (000) 000-00-00
            </a>
            
            <Link
              href="/admin"
              className="flex items-center gap-2 text-sm font-bold text-white border border-white/20 hover:border-white px-4 py-2 rounded-md transition-colors bg-white/5"
            >
              <User className="w-4 h-4" />
              Войти
            </Link>

            <Link
              href="/enrollment"
              className="flex items-center justify-center bg-accent text-ink font-extrabold text-sm px-5 py-2.5 rounded-md hover:bg-accent-hover transition-all shadow-sm"
            >
              Записаться
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            aria-label="Открыть меню"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0F172A] z-[70] shadow-2xl flex flex-col lg:hidden border-l border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Logo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Закрыть меню"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-2 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-bold py-3 px-4 rounded-md transition-colors",
                      pathname === link.href
                        ? "bg-white/10 text-accent"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10 space-y-4">
                <a
                  href="tel:+70000000000"
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors font-bold"
                >
                  <Phone className="w-5 h-5" />
                  +7 (000) 000-00-00
                </a>
                
                <Link
                  href="/admin"
                  className="flex items-center justify-center gap-2 w-full text-white border border-white/20 hover:border-white px-4 py-3 rounded-md transition-colors bg-white/5 font-bold"
                >
                  <User className="w-5 h-5" />
                  Войти
                </Link>

                <Link
                  href="/enrollment"
                  className="flex items-center justify-center w-full bg-accent text-ink font-extrabold px-5 py-3 rounded-md hover:bg-accent-hover transition-all shadow-sm"
                >
                  Записаться
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}