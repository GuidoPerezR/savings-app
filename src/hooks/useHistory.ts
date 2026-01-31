import { useState } from 'react';
import { formatDate } from '@/functions/formatDate';
import { useTransactionsData } from './useTransactionsData';

export const useHistory = () => {
  const [period, setPeriod] = useState(() => {
    const now = new Date();
    return formatDate(now);
  });

  const { getTransactionsHistoryData } = useTransactionsData();

  const handlePrevPeriod = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const prevMonthDate = new Date(period.year, period.month - 1, 1);
    const newPeriod = formatDate(prevMonthDate);
    setPeriod(newPeriod);
  };

  const handleNextPeriod = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextMonthDate = new Date(period.year, period.month + 1, 1);
    const newPeriod = formatDate(nextMonthDate);
    setPeriod(newPeriod);
  };

  const promise = getTransactionsHistoryData(period.month, period.year);

  const now = new Date();
  const isLatestPeriod =
    period.year === now.getFullYear() && period.month === now.getMonth();

  return {
    period,
    handleNextPeriod,
    handlePrevPeriod,
    promise,
    isLatestPeriod,
  };
};
