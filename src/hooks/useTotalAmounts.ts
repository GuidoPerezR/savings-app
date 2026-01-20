import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { useCallback } from 'react';
import { useTotalAmountStore } from '@/store/totalAmountStore';

type SetAmountParams = {
  current_balance?: number;
};

export const useTotalAmounts = () => {
  const user = useAuthStore((state) => state.user);
  const setTotalAmounts = useTotalAmountStore((state) => state.setTotalAmounts);

  const setAmount = async (amounts: SetAmountParams) => {
    const { data, error } = await supabase
      .from('total_amounts')
      .upsert({ ...amounts, user_id: user?.id }, { onConflict: 'user_id' })
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    setTotalAmounts(data);
  };

  const getTotalAmounts = useCallback(async () => {
    const { data, error } = await supabase
      .from('total_amounts')
      .select('*')
      .eq('user_id', user?.id)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }, [user?.id]);

  return { setAmount, getTotalAmounts };
};
