import { type TransactionWithCategory } from '@/types/Transactions';
import { use } from 'react';
import { Transaction } from './Transaction';

type HistoryTransactionsProps = {
  promise: Promise<TransactionWithCategory[]>;
};

export const HistoryTransactions = ({ promise }: HistoryTransactionsProps) => {
  const data = use(promise);

  if (data.length === 0) {
    return (
      <p className="py-6 text-center text-zinc-400">
        No hay transacciones en este periodo
      </p>
    );
  }
  return (
    <>
      {data.map(({ id, categories, title, date, amount, type }) => (
        <li key={id} className="rounded-2xl bg-navbar p-4">
          <Transaction
            categories={categories}
            title={title}
            date={date}
            amount={amount}
            type={type}
          />
        </li>
      ))}
    </>
  );
};
