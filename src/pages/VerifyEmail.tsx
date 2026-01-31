import { useNavigate } from 'react-router';
import { SavesPig } from '@/components/icons/SavesPig';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useLogin } from '@/hooks/useLogin';

export default function VerifyEmailPage() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();

  const { handleResendEmail } = useLogin();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-dark px-5 py-32 text-center font-jakarta-sans text-light">
      <div className="mb-6 rounded-full bg-primary p-6">
        <SavesPig className="h-16 w-16" />
      </div>

      <h1 className="mb-6 text-3xl font-bold">
        Verifica tu correo electrónico
      </h1>

      <p className="mb-8 max-w-md text-zinc-400">
        Hemos enviado un enlace de verificación a tu correo electrónico. Por
        favor, revisa tu bandeja de entrada (y spam) para confirmar tu cuenta.
      </p>

      <div className="flex gap-2 text-sm">
        <span className="text-zinc-400">¿No recibiste el correo?</span>
        <button
          className="font-semibold text-primary"
          onClick={handleResendEmail}
        >
          Reenviar
        </button>
      </div>
    </main>
  );
}
