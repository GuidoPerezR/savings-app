import { useNavigate } from 'react-router';
import { supabase } from '@/lib/supabase';
import { BASE_URL } from '@/consts/Base';
import { useAuthStore } from '@/store/authStore';
import { toast } from '@moaqzdev/toast/utils';
import { loginWithEmail } from '@/services/user';

export const useLogin = () => {
  const navigate = useNavigate();

  const email = useAuthStore((state) => state.email);
  const setEmail = useAuthStore((state) => state.actions.setEmail);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const email = formData.get('email') as string;

      await loginWithEmail(email);

      setEmail(email);

      navigate('/verify-email');
    } catch (error) {
      toast.error({
        title: (error as Error).message,
      });
    }
  };

  const handleLoginWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${BASE_URL}/dashboard`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${BASE_URL}/dashboard`,
      },
    });
    if (error) {
      throw new Error(error.message);
    }
  };

  const handleResendEmail = async () => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success({
        title: 'Correo de verificación reenviado',
      });
    } catch (error) {
      toast.error({
        title: (error as Error).message,
      });
    }
  };

  return {
    handleSubmit,
    handleLoginWithGithub,
    handleLoginWithGoogle,
    handleResendEmail,
  };
};
