import { useEffect, useRef, useState } from 'react';
import { setAmount } from '@/functions/totalAmounts';
import { useAuthStore } from '@/store/authStore';
import { useTotalAmountStore } from '@/store/totalAmountStore';

type InputDataProps = {
  amount: number | null;
  name: string;
  style: 'sm' | 'lg';
};

export const InputData = ({ amount, name, style }: InputDataProps) => {
  const user = useAuthStore((state) => state.user);
  const setTotalAmounts = useTotalAmountStore((state) => state.setTotalAmounts);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalAmount = amount ?? 0;

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
    const { name, value } = inputRef.current;

    if (!name) return;

    setIsEditing(false);
    const data = await setAmount({ [name]: Number(value) }, user?.id || '');
    setTotalAmounts(data);
  };

  if (!isEditing) {
    return (
      <span className={spanClassName[style]} onClick={() => setIsEditing(true)}>
        ${totalAmount.toFixed(2)}
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
