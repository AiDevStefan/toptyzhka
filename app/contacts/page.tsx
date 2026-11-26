import { siteConfig } from "@/data/site-config";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

export default function ContactsPage() {
  return (
    <main className="py-16 lg:py-24 bg-bg-alt min-h-screen pt-24 lg:pt-32">
      <div className="container-x">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-3 lg:mb-4">Контакты</h1>
          <p className="text-ink-light text-base lg:text-lg max-w-2xl">
            Мы всегда рады ответить на ваши вопросы и показать наш детский сад.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Левая колонка: Инфо */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-5 lg:p-6 rounded-lg shadow-soft border border-border flex gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-base lg:text-lg mb-1 text-ink">Адрес</h3>
                <p className="text-ink-light text-sm lg:text-base mb-3">{siteConfig.address}</p>
                <a 
                  href="https://2gis.ru/stavropol/search/Кубанский%20проезд%201Б" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  Построить маршрут
                </a>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-lg shadow-soft border border-border flex gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-base lg:text-lg mb-1 text-ink">Телефон</h3>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="text-ink-light hover:text-accent transition-colors font-medium text-sm lg:text-base">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-lg shadow-soft border border-border flex gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-base lg:text-lg mb-1 text-ink">Режим работы</h3>
                <p className="text-ink-light text-sm lg:text-base">{siteConfig.workHours}</p>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-lg shadow-soft border border-border flex gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-base lg:text-lg mb-1 text-ink">Email</h3>
                <a href="mailto:info@toptyzhka.ru" className="text-ink-light hover:text-accent transition-colors font-medium text-sm lg:text-base">
                  info@toptyzhka.ru
                </a>
              </div>
            </div>
          </div>

          {/* Правая колонка: Карта 2ГИС */}
          <div className="lg:col-span-3 h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-card border border-border bg-white relative">
            {/* 
              ВАЖНО: Это виджет 2ГИС. 
              Если адрес не подсвечивается автоматически, 
              зайди на 2gis.ru, найди свой садик, нажми "Поделиться" -> "Встроить на сайт" 
              и замени src на свой уникальный код.
            */}
            <iframe
              src="https://2gis.ru/stavropol/search/Кубанский%20проезд%201Б?m=41.944209%2C45.033783%2F17"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              title="Карта 2ГИС - ТоптыжкА"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}