import { ArrowLeft } from '@/components/icons/ArrowLeft';
import { ArrowRight } from '@/components/icons/ArrowRight';
import { Suspense } from 'react';
import { HistoryTransactions } from '@/components/ui/HistoryTransactions';
import { useHistory } from '@/hooks/useHistory';
import { HistoryTransactionsSkeleton } from '@/components/ui/skeleton/HistoryTransactionsSkeleton';

export default function HistoryPage() {
  const {
    period,
    handleNextPeriod,
    handlePrevPeriod,
    promise,
    isLatestPeriod,
  } = useHistory();

  const nextPeriodClass = `rounded-full p-2 transition-colors ${
    isLatestPeriod
      ? 'cursor-not-allowed bg-zinc-800 text-zinc-500'
      : 'bg-zinc-600 hover:bg-zinc-500'
  }`;

  return (
    <main className="flex min-h-dvh w-full bg-dark px-5 pt-32 pb-24 font-jakarta-sans text-light">
      <section className="w-full">
        <h2 className="text-2xl font-bold">Historial y Analisis</h2>

        <nav className="mt-6 flex w-full items-center justify-between">
          <a
            href="#"
            className="rounded-full bg-zinc-600 p-2"
            onClick={handlePrevPeriod}
          >
            <ArrowLeft className="size-6" />
          </a>
          <span className="text-lg font-bold">{period.formattedDate}</span>
          <a
            href="#"
            className={nextPeriodClass}
            onClick={
              isLatestPeriod ? (e) => e.preventDefault() : handleNextPeriod
            }
            aria-disabled={isLatestPeriod}
          >
            <ArrowRight className="size-6" />
          </a>
        </nav>

        <div className="mt-6">
          <h3 className="text-lg font-bold">Movimientos</h3>
          <div>
            <ul className="mt-4 space-y-4">
              <Suspense fallback={<HistoryTransactionsSkeleton />}>
                <HistoryTransactions promise={promise} />
              </Suspense>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
