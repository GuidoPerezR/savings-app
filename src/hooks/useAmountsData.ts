import { useAuthStore } from '@/store/authStore';
import { getTotalAmounts, setAmount } from '@/services/totalAmounts';

export const useAmountsData = () => {
  const user = useAuthStore((state) => state.user);

  const getTotalAmountsData = () => {
    return getTotalAmounts(user?.id || '');
  };

  const setAmountsData = (name: string, value: number) => {
    return setAmount({ [name]: Number(value) }, user?.id || '');
  };

  return {
    getTotalAmountsData,
    setAmountsData,
  };
};
