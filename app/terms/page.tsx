export default function TermsPage() {
  return (
    <main className="py-24 bg-white min-h-screen pt-32">
      <div className="container-x max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-extrabold text-ink mb-8">Пользовательское соглашение</h1>
        <p className="text-ink-light mb-6">Настоящее Соглашение регулирует отношения между Администрацией сайта «ТоптыжкА» и Пользователем сети Интернет.</p>
        
        <h2 className="text-xl font-bold text-ink mt-8 mb-4">1. Общие условия</h2>
        <p className="text-ink-light mb-4">1.1. Отправляя форму на сайте, Пользователь подтверждает, что ознакомлен и согласен с условиями настоящего Соглашения.</p>
        
        <h2 className="text-xl font-bold text-ink mt-8 mb-4">2. Обязательства сторон</h2>
        <p className="text-ink-light mb-4">2.1. Администрация обязуется не разглашать персональные данные Пользователя и использовать их только для связи.</p>
        <p className="text-ink-light mb-4">2.2. Пользователь обязуется предоставлять достоверную информацию.</p>
      </div>
    </main>
  );
}