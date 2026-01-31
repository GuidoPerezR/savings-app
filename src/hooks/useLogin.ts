import { useNavigate } from 'react-router';
import { useAuthStore } from '@/store/authStore';
import { toast } from '@moaqzdev/toast/utils';
import {
  loginWithEmail,
  loginWithGithub,
  loginWithGoogle,
  resendEmail,
} from '@/services/user';

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
    try {
      await loginWithGithub();
    } catch (error) {
      toast.error({
        title: (error as Error).message,
      });
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      toast.error({
        title: (error as Error).message,
      });
    }
  };

  const handleResendEmail = async () => {
    try {
      await resendEmail(email);

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
