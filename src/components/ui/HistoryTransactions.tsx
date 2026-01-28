import { type TransactionWithCategory } from '@/types/Transactions';
import { use } from 'react';
import { Transaction } from './Transaction';

type HistoryTransactionsProps = {
  promise: Promise<TransactionWithCategory[]>;
};

export const HistoryTransactions = ({ promise }: HistoryTransactionsProps) => {
  const data = use(promise);
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
