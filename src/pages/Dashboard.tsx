import { TRANSACTIONS } from '@/mocks/Transactions.ts';
import { Transaction } from '@/components/ui/Transaction.tsx';
import { DashboardArticle } from '@/components/ui/DashboardArticle.tsx';
import { useEffect } from 'react';
import { getTotalAmounts } from '@/services/totalAmounts';
import { useAuthStore } from '@/store/authStore';
import { useTotalAmountStore } from '@/store/totalAmountStore';
import { InputData } from '@/components/ui/InputData';
import { DASHBOARD_CARDS } from '@/consts/DashboardCards';
import { DashboardCard } from '@/components/ui/DashboardCard';

export function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const setTotalAmounts = useTotalAmountStore((state) => state.setTotalAmounts);

  useEffect(() => {
    const getData = async () => {
      const data = await getTotalAmounts(user?.id || '');
      setTotalAmounts(data);
    };
    getData();
  }, [setTotalAmounts, user?.id]);

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
