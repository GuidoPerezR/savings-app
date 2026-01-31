import { DashboardArticle } from '@/components/ui/DashboardArticle.tsx';
import { Suspense } from 'react';
import { InputData } from '@/components/ui/InputData';
import { DASHBOARD_CARDS } from '@/consts/DashboardCards';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { LastTransactions } from '@/components/ui/LastTransactions';
import { useDashboard } from '@/hooks/useDashboard';
import { LastTransactionsSkeleton } from '@/components/ui/skeleton/LastTransactionsSkeleton';

export default function Dashboard() {
  const { promise } = useDashboard();

  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-dark px-5 pt-32 pb-24 font-jakarta-sans text-light">
      <section className="grid w-full grid-cols-2 gap-6">
        <DashboardArticle className="col-span-2">
          <h3 className="text-center font-semibold text-light/80 uppercase">
            Saldo total actual
          </h3>
          <InputData name={'current_balance'} style="lg" />

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-fit rounded-lg bg-green-500/10 px-2 text-sm text-earning">
              +2.4%
            </span>
            <span className="text-sm text-zinc-400"> vs. mes anterior</span>
          </div>
        </DashboardArticle>

        {DASHBOARD_CARDS.map(
          ({ title, icon: Icon, color, inputName }, index) => (
            <DashboardCard
              key={index}
              title={title}
              icon={Icon}
              color={color}
              inputName={inputName}
            />
          ),
        )}

        <DashboardArticle className="col-span-2">
          <h2 className="text-lg font-bold text-light">Actividad Reciente</h2>
          <ul className="mt-4 space-y-4">
            <Suspense fallback={<LastTransactionsSkeleton />}>
              <LastTransactions promise={promise} />
            </Suspense>
          </ul>
        </DashboardArticle>
      </section>
    </main>
  );
}
