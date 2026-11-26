"use client";

import dynamic from "next/dynamic";

// Динамический импорт с отключенным SSR
const StyledMap = dynamic(
  () => import("@/components/ui/StyledMap").then((mod) => mod.StyledMap),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-bg-alt flex items-center justify-center text-ink-light font-bold">
        Загрузка карты...
      </div>
    )
  }
);

export function MapWrapper() {
  return <StyledMap />;
}