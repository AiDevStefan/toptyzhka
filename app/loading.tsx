export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-border border-t-pink animate-spin" />
        <p className="text-muted text-sm font-bold">Загружаем...</p>
      </div>
    </div>
  );
}