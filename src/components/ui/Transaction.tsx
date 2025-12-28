import { SavesPig } from '../icons/SavesPig';
import type { Transaction as TransactionType } from '@/types/Transactions';

type Props = Omit<TransactionType, 'id'>;

export const Transaction = ({
  categoryId,
  title,
  date,
  amount,
  type,
}: Props) => {
  
  const textColor = {
    earning: 'text-earning',
    spending: 'text-spending',
  };

  const amountText = `${type === 'earning' ? '+' : '-'}$${amount}`;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`rounded-full bg-zinc-500/50 p-2`}>
          <SavesPig className="size-6" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-sm text-zinc-400">{date}</span>
        </div>
      </div>
      <span className={`font-bold ${textColor[type]}`}>{amountText}</span>
    </div>
  );
};
