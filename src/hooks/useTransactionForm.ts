import { useRef, useState } from 'react';
import { useCategoriesStore } from '@/store/categories';
import { insertTransaction } from '@/services/transactions';
import type { TransactionType } from '@/types/Transactions';
import { useAuthStore } from '@/store/authStore';
import { useTotalAmountData } from './useTotalAmountData';
import { toast } from '@moaqzdev/toast/utils';

export const useTransactionForm = () => {
  const [investedAmount, setInvestedAmount] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionType, setTransactionType] =
    useState<TransactionType>('income');

  const selectedCategoryId = useCategoriesStore(
    (state) => state.selectedCategoryId,
  );

  const resetSelectedCategoryId = useCategoriesStore(
    (state) => state.resetSelectedCategoryId,
  );

  const user = useAuthStore((state) => state.user);

  const amountValueInput = useRef<HTMLInputElement>(null);
  const titleValueInput = useRef<HTMLInputElement>(null);

  const { setIncome, setExpense } = useTotalAmountData();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const inputAmount = parseFloat(amountValueInput.current?.value ?? '0');

    const transaction = {
      title: titleValueInput.current?.value || '',
      date: new Date().toISOString(),
      amount: inputAmount,
      type: transactionType,
      categoryId: selectedCategoryId,
      user_id: user?.id || '',
    };

    try {
      await insertTransaction({ transaction });

      if (transactionType === 'income')
        await setIncome({
          amount: inputAmount,
          investedAmount,
          savingAmount,
        });

      if (transactionType === 'expense')
        await setExpense({ amount: inputAmount });

      toast.success({
        title: 'Movimiento guardado!',
      });

      amountValueInput.current!.value = '';
      titleValueInput.current!.value = '';
      setTransactionType('income');
      resetSelectedCategoryId();
      setInvestedAmount(0);
      setSavingAmount(0);
    } catch (e) {
      toast.error({
        title: (e as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setInvestedAmount(0);
      setSavingAmount(0);
      return;
    }
    const value = parseFloat(e.target.value);

    const invested = (value * 10) / 100;
    const saving = (value * 10) / 100;
    setInvestedAmount(invested);
    setSavingAmount(saving);
  };

  return {
    handleSubmit,
    amountValueInput,
    titleValueInput,
    transactionType,
    setTransactionType,
    onChangeInput,
    investedAmount,
    savingAmount,
    isLoading,
  };
};
