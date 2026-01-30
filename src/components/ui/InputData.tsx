import { useEffect, useRef, useState } from 'react';
import { useTotalAmountStore } from '@/store/totalAmountStore';
import { useAmountsData } from '@/hooks/useAmountsData';
import { formatAmount } from '@/functions/formatAmount';
import { toast } from '@moaqzdev/toast/utils';

type InputDataProps = {
  name:
    | 'current_balance'
    | 'total_earnings'
    | 'total_spendings'
    | 'total_invested'
    | 'total_savings';
  style: 'sm' | 'lg';
};

export const InputData = ({ name, style }: InputDataProps) => {
  const setTotalAmounts = useTotalAmountStore((state) => state.setTotalAmounts);
  const totalAmounts = useTotalAmountStore((state) => state.totalAmounts);
  const { setAmountsData } = useAmountsData();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalAmount = totalAmounts?.[name] ?? 0;

  const spanClassName = {
    sm: 'mt-1 block text-lg font-semibold',
    lg: 'mt-4 block text-center text-5xl font-bold',
  };

  const inputClassName = {
    sm: 'mt-1 w-full text-lg font-semibold',
    lg: 'mt-4 w-full text-center text-5xl font-bold',
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const saveAmount = async () => {
    if (!inputRef.current) return;

    try {
      const { name, value } = inputRef.current;

      if (!name) return;

      setIsEditing(false);

      // Si tiene el mismo valor se retorna y no hace nada
      if (Number(value) === totalAmount) return;

      const data = await setAmountsData(name, Number(value));

      setTotalAmounts(data);

      toast.success({
        title: 'Monto actualizado correctamente',
      });
    } catch (error) {
      toast.error({
        title: (error as Error).message,
      });
    }
  };

  if (!isEditing) {
    return (
      <span className={spanClassName[style]} onClick={() => setIsEditing(true)}>
        {formatAmount(totalAmount)}
      </span>
    );
  }

  return (
    <input
      ref={inputRef}
      name={name}
      type="number"
      defaultValue={totalAmount}
      onKeyDown={(e) => e.key === 'Enter' && saveAmount()}
      onBlur={saveAmount}
      className={inputClassName[style]}
    />
  );
};
