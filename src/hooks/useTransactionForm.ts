import { useRef, useState } from 'react';
import { useCategoriesStore } from '@/store/categories';
import { insertTransaction } from '@/services/transactions';
import type { TransactionType } from '@/types/Transactions';
import { useAuthStore } from '@/store/authStore';

export const useTransactionForm = () => {
  const selectedCategoryId = useCategoriesStore(
    (state) => state.selectedCategoryId,
  );
  const resetSelectedCategoryId = useCategoriesStore(
    (state) => state.resetSelectedCategoryId,
  );
  const [transactionType, setTransactionType] =
    useState<TransactionType>('income');
  const amountValueInput = useRef<HTMLInputElement>(null);
  const titleValueInput = useRef<HTMLInputElement>(null);

  const user = useAuthStore((state) => state.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const transaction = {
      title: titleValueInput.current?.value || '',
      date: new Date().toISOString(),
      amount: parseFloat(amountValueInput.current?.value || '0'),
      type: transactionType,
      categoryId: selectedCategoryId,
      user_id: user?.id || '',
    };

    await insertTransaction({ transaction });

    amountValueInput.current!.value = '';
    titleValueInput.current!.value = '';
    setTransactionType('income');
    resetSelectedCategoryId();
  };

  return {
    handleSubmit,
    amountValueInput,
    titleValueInput,
    transactionType,
    setTransactionType,
  };
};
