import { supabase } from '@/lib/supabase';
import { parse, ValiError } from 'valibot';
import { EmailSchema } from '@/schemas/Login';
import { BASE_URL } from '@/consts/Base';

export const logoutAction = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
  return { error };
};

export const loginWithEmail = async (email: string) => {
  try {
    const newEmail = parse(EmailSchema, email);

    const { error } = await supabase.auth.signInWithOtp({
      email: newEmail,
      options: {
        emailRedirectTo: `${BASE_URL}/dashboard`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (error instanceof ValiError) {
      throw new Error(error.message);
    }

    if (error instanceof Error) {
      throw new Error('Error al iniciar sesión');
    }

    throw new Error('Unexpected error');
  }
};
