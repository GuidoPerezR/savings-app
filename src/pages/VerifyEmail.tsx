import { NavLink, useNavigate } from 'react-router';
import { SavesPig } from '@/components/icons/SavesPig';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export const VerifyEmailPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();
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

      <div className="flex flex-col gap-4">
        {/* <NavLink
          to="/login"
          className="rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Volver al inicio de sesión
        </NavLink> */}

        {/* TODO */}
        <button
          className="text-sm text-zinc-400 transition-colors hover:text-zinc-600"
          onClick={() =>
            alert(
              'Por favor intenta registrarte nuevamente si no recibiste el correo.',
            )
          }
        >
          ¿No recibiste el correo?{' '}
          <span className="font-semibold text-primary hover:underline">
            Reenviar
          </span>
        </button>
      </div>
    </main>
  );
};
