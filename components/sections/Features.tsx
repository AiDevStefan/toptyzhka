import { BookOpen, ShieldCheck, Utensils, HeartHandshake } from "lucide-react";

const FEATURES = [
  { 
    icon: BookOpen, 
    title: "Развитие без мультиков", 
    desc: "Игры, творчество и занятия, соответствующие возрасту. Никаких экранов — только живое общение и познание мира." 
  },
  { 
    icon: ShieldCheck, 
    title: "Безопасная среда", 
    desc: "Комфортное пространство в центре города. Бережная адаптация: научим кушать, одеваться и дружить." 
  },
  { 
    icon: Utensils, 
    title: "Вкусное питание", 
    desc: "Ежедневные прогулки и сбалансированное меню. Индивидуальный подход для детей с пищевой аллергией." 
  },
  { 
    icon: HeartHandshake, 
    title: "Подготовка к школе", 
    desc: "Чистописание, математика, азбука и окружающий мир. Ежедневные фото- и видеоотчеты для родителей." 
  },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-ink relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-x relative z-10">
        <div className="text-center mb-10 lg:mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-3 block">
            Наши преимущества
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 lg:mb-4">
            Всё включено в стоимость
          </h2>
          <p className="text-white/60 text-base lg:text-lg font-medium">
            Мы создали среду, в которой детям интересно, а родителям спокойно.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="bg-white/5 backdrop-blur-sm p-5 lg:p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md bg-accent/20 flex items-center justify-center mb-4 lg:mb-5">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-base lg:text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}