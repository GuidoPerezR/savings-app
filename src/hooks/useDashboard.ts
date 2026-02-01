import { useTransactionsData } from './useTransactionsData';
import { useTotalAmountStore } from '@/store/totalAmountStore';
import { useEffect } from 'react';
import { useAmountsData } from './useAmountsData';

export const useDashboard = () => {
  const setTotalAmounts = useTotalAmountStore((state) => state.setTotalAmounts);
  const { getLastTransactionsData } = useTransactionsData();
  const { getTotalAmountsData } = useAmountsData();

  useEffect(() => {
    const getData = async () => {
      const data = await getTotalAmountsData();
      setTotalAmounts(data);
    };
    getData();
  }, [getTotalAmountsData, setTotalAmounts]);

  const promise = getLastTransactionsData();

  return {
    promise,
  };
};
