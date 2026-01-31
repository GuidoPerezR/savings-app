import { supabase } from '@/lib/supabase';
import { parse, ValiError } from 'valibot';
import { EmailSchema } from '@/schemas/Login';
import { BASE_URL } from '@/consts/Base';

export const logoutAction = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
    return { error };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error al cerrar sesión');
    }
  }
};

export const loginWithGithub = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${BASE_URL}/dashboard`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error al iniciar sesión con GitHub');
    }
  }
};

export const loginWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${BASE_URL}/dashboard`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error al iniciar sesión con Google');
    }
  }
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

export const resendEmail = async (email: string) => {
  try {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
