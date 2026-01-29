import { use } from 'react';
import type { TransactionWithCategory } from '@/types/Transactions';
import { Transaction } from './Transaction';

type LastTransactionsProps = {
  promise: Promise<TransactionWithCategory[]>;
};

export const LastTransactions = ({ promise }: LastTransactionsProps) => {
  const data = use(promise);

  if (data.length === 0) {
    return (
      <p className="py-6 text-center text-zinc-400">
        No hay transacciones recientes
      </p>
    );
  }

  return (
    <>
      {data.map(({ id, categories, title, date, amount, type }) => (
        <li key={id}>
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
