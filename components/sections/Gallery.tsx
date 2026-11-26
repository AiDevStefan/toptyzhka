"use client";

import { Marquee } from "@/components/ui/Marquee";

const photos = [
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=600&auto=format&fit=crop",
];

export function Gallery() {
  return (
    <section className="py-20 bg-plum-deep overflow-hidden relative">
      <div className="mb-12 text-center">
        <h2 className="text-display-md text-cream px-6">
          Жизнь <span className="text-gradient italic">сада</span>
        </h2>
      </div>
      <Marquee speed={50}>
        {photos.map((src, i) => (
          <div
            key={i}
            className="w-72 h-96 mx-3 rounded-[2rem] overflow-hidden shrink-0 group border-2 border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Фото ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}