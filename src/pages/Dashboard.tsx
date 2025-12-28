import { DASHBOARD_CARDS } from '@/consts/DashboardCards.ts';
import { DashboardCard } from '@/components/ui/DashboardCard.tsx';
import { TRANSACTIONS } from '@/mocks/Transactions.ts';
import { Transaction } from '@/components/ui/Transaction.tsx';
import { DashboardArticle } from '@/components/ui/DashboardArticle.tsx';

export function Dashboard() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-dark px-5 pt-32 pb-24 font-jakarta-sans text-light">
      <section className="grid w-full grid-cols-2 gap-6">
        <DashboardArticle className="col-span-2">
          <h3 className="text-center font-semibold text-light/80 uppercase">
            Saldo total actual
          </h3>
          <span className="mt-4 block text-center text-5xl font-bold">
            $22,345.67
          </span>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-fit rounded-lg bg-green-500/10 px-2 text-sm text-earning">
              +2.4%
            </span>
            <span className="text-sm text-zinc-400"> vs. mes anterior</span>
          </div>
        </DashboardArticle>

        {DASHBOARD_CARDS.map(({ title, icon: Icon, amount, color }, index) => (
          <DashboardCard
            key={index}
            title={title}
            icon={Icon}
            amount={amount}
            color={color}
          />
        ))}

        <DashboardArticle className="col-span-2">
          <h2 className="text-lg font-bold text-light">Actividad Reciente</h2>
          <ul className="mt-4 space-y-4">
            {TRANSACTIONS.map(
              ({ id, categoryId, title, date, amount, type }) => (
                <li key={id}>
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
        </DashboardArticle>
      </section>
    </main>
  );
}
