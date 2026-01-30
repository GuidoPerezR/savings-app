import type { TransactionWithCategory } from '@/types/Transactions';
import { CATEGORY_ICONS } from '@/consts/Categories';
import type { CategoryName } from '@/types/Categories';
import { formatAmount } from '@/functions/formatAmount';

type Props = Omit<TransactionWithCategory, 'id'>;

export const Transaction = ({
  categories,
  title,
  date,
  amount,
  type,
}: Props) => {
  const textColor = {
    income: 'text-earning',
    expense: 'text-spending/90',
  };

  const categoryName = categories?.name as CategoryName;

  const Icon = CATEGORY_ICONS[categoryName];

  const formattedDate = new Date(date).toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  const amountText = `${type === 'income' ? '+' : '-'}${formatAmount(amount)}`;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`rounded-full bg-primary p-2`}>
          {Icon && <Icon className="size-6 text-zinc-300" />}
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-sm text-zinc-400">{formattedDate}</span>
        </div>
      </div>
      <span className={`font-bold ${textColor[type]}`}>{amountText}</span>
    </div>
  );
};
