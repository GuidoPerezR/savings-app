import { useAuthStore } from '@/store/authStore';
import { getMonthRange } from '@/functions/getRange';
import {
  getLastTransactions,
  getTransactionsHistory,
} from '@/services/transactions';

export const useTransactionsData = () => {
  const user = useAuthStore((state) => state.user);

  const getTransactionsHistoryData = (month: number, year: number) => {
    const { start, end } = getMonthRange(month, year);

    return getTransactionsHistory({
      userId: user?.id ?? '',
      startDate: start,
      endDate: end,
    });
  };

  const getLastTransactionsData = () => {
    return getLastTransactions(user?.id || '');
  };

  return {
    getTransactionsHistoryData,
    getLastTransactionsData,
  };
};
