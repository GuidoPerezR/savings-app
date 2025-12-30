import { useId } from 'react';
import { Google } from '@/components/icons/Google';
import { GitHub } from '@/components/icons/Github';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router';
import { supabase } from '@/lib/supabase';

export function LoginPage() {
  const emailInput = useId();
  const passwordInput = useId();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    navigate('/dashboard');
  };

  const handleLoginWithGithub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });

      console.log(data);
    } catch (error) {
      console.error('Error during GitHub login:', error);
    }
  };

  return (
    <main className="flex min-h-dvh items-center justify-center bg-dark px-5 py-32 font-jakarta-sans text-light">
      <section className="w-full">
        <h1 className="text-3xl font-extrabold text-balance">
          Bienvenido de nuevo
        </h1>
        <small className="mt-4 block text-zinc-400">
          Gestiona tus ahorros de forma inteligente
        </small>

        <form className="mt-6 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor={emailInput} className="font-semibold">
            Correo Electronico
          </label>
          <input
            type="email"
            name="email"
            id={emailInput}
            placeholder="nombre@ejemplo.com"
            className="mt-2 rounded-xl border border-zinc-500 bg-navbar px-3 py-4 text-light focus:outline-primary"
          />

          <label htmlFor={passwordInput} className="mt-4 font-semibold">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id={passwordInput}
            placeholder="••••••••"
            className="mt-2 rounded-xl border border-zinc-500 bg-navbar px-3 py-4 text-light placeholder:text-lg placeholder:tracking-widest focus:outline-primary"
          />

          <button
            type="submit"
            className="mt-6 rounded-3xl bg-primary px-12 py-3 font-bold"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 px-4">
          <div className="h-px flex-1 bg-zinc-400"></div>
          <span className="text-xs font-medium text-zinc-400">
            O CONTINÚA CON
          </span>
          <div className="h-px flex-1 bg-zinc-400"></div>
        </div>

        <div className="flex w-full items-center gap-6">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-500 bg-secondary px-5 py-3 font-semibold">
            <Google className="size-6" />
            <span>Google</span>
          </button>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-500 bg-secondary px-5 py-3 font-semibold"
            onClick={handleLoginWithGithub}
          >
            <GitHub className="size-6" />
            <span>GitHub</span>
          </button>
        </div>
      </section>
    </main>
  );
}
