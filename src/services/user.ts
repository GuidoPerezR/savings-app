import { supabase } from '@/lib/supabase';

export const logoutAction = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
  return { error };
};
