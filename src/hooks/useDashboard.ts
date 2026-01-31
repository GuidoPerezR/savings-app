import { useTransactionsData } from './useTransactionsData';
import { useTotalAmountStore } from '@/store/totalAmountStore';
import { useEffect } from 'react';
import { useAmountsData } from './useAmountsData';
import { toast } from '@moaqzdev/toast/utils';

export const useDashboard = () => {
  const setTotalAmounts = useTotalAmountStore((state) => state.setTotalAmounts);
  const { getLastTransactionsData } = useTransactionsData();
  const { getTotalAmountsData } = useAmountsData();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTotalAmountsData();
        setTotalAmounts(data);
      } catch (error) {
        toast.error({
          title: (error as Error).message,
        });
      }
    };
    getData();
  }, [getTotalAmountsData, setTotalAmounts]);

  const promise = getLastTransactionsData();

  return {
    promise,
  };
};
