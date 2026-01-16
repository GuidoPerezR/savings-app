import { useNavigate } from 'react-router';
import { supabase } from '@/lib/supabase';
import { BASE_URL } from '@/consts/Base';
import { useAuthStore } from '@/store/authStore';

export const useLogin = () => {
  const navigate = useNavigate();

  const email = useAuthStore((state) => state.email);
  const setEmail = useAuthStore((state) => state.setEmail);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    setEmail(email);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${BASE_URL}/dashboard`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    navigate('/verify-email');
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
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  return {
    handleSubmit,
    handleLoginWithGithub,
    handleLoginWithGoogle,
    handleResendEmail,
  };
};
