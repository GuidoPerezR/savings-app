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

  const nextPeriodClass = `rounded-full p-2 transition-colors duration-300 ease-in-out ${
    isLatestPeriod
      ? 'cursor-not-allowed bg-zinc-800 text-zinc-500'
      : 'bg-zinc-600 hover:bg-tertiary'
  }`;

  return (
    <main className="flex min-h-dvh w-full justify-center bg-dark px-5 py-32 font-jakarta-sans text-light">
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold">Historial y Analisis</h2>

        <nav className="mt-6 flex w-full items-center justify-between">
          <a
            href="#"
            className="rounded-full bg-zinc-600 p-2 transition-colors duration-300 ease-in-out hover:bg-tertiary"
            onClick={handlePrevPeriod}
            aria-label="Ir a periodo anterior"
          >
            <ArrowLeft className="size-6 md:size-8" />
          </a>
          <span className="text-lg font-bold">{period.formattedDate}</span>
          <a
            href="#"
            className={nextPeriodClass}
            onClick={
              isLatestPeriod ? (e) => e.preventDefault() : handleNextPeriod
            }
            aria-label="Ir a periodo siguiente"
            aria-disabled={isLatestPeriod}
          >
            <ArrowRight className="size-6 md:size-8" />
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
