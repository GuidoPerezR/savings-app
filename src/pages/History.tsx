import { TRANSACTIONS } from '@/mocks/Transactions';
import { Transaction } from '@/components/ui/Transaction';
import { ArrowLeft } from '@/components/icons/ArrowLeft';
import { ArrowRight } from '@/components/icons/ArrowRight';

export const HistoryPage = () => {
  return (
    <main className="flex min-h-dvh w-full bg-dark px-5 pt-32 pb-24 font-jakarta-sans text-light">
      <section className="w-full">
        <h2 className="text-2xl font-bold">Historial y Analisis</h2>

        <nav className="mt-6 flex w-full items-center justify-between">
          <a href="#" className="rounded-full bg-zinc-600 p-2">
            <ArrowLeft className="size-6" />
          </a>
          <span className="text-lg font-bold">Diciembre de 2025</span>
          <a href="#" className="rounded-full bg-zinc-600 p-2">
            <ArrowRight className="size-6" />
          </a>
        </nav>

        <div className="mt-6">
          <h3 className="text-lg font-bold">Movimientos</h3>
          <div>
            <ul className="mt-4 space-y-4">
              {TRANSACTIONS.map(
                ({ id, categoryId, title, date, amount, type }) => (
                  <li key={id} className="rounded-2xl bg-navbar p-4">
                    <Transaction
                      categoryId={categoryId}
                      title={title}
                      date={date}
                      amount={amount}
                      type={type}
                    />
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
