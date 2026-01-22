import { supabase } from '@/lib/supabase';

type SetAmountParams = {
  current_balance?: number;
};

export const getTotalAmounts = async (userId: string) => {
  const { data, error } = await supabase
    .from('total_amounts')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const setAmount = async (amounts: SetAmountParams, userId: string) => {
  const { data, error } = await supabase
    .from('total_amounts')
    .upsert({ ...amounts, user_id: userId }, { onConflict: 'user_id' })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
