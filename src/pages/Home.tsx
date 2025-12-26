import { Link } from 'react-router';
import { Profile } from '@/components/Profile.tsx';
import { PROFILES } from '@/consts/Profiles.ts';

export function HomePage() {
  return (
    <>
      <main className="flex min-h-dvh w-full items-center justify-center bg-dark px-5 pt-32 pb-24 font-jakarta-sans text-light">
        <section className="flex flex-col">
          <h1 className="mt-10 text-5xl font-extrabold">
            Domina tus Finanzas con{' '}
            <span className="text-primary"> Ahorro Inteligente</span>
          </h1>
          <p className="mt-10 text-xl text-pretty text-zinc-400">
            La plataforma diseñada para ayudarte a ahorrar sin esfuerzo.
            Automatiza tusu metasa, controla tus gastos y visualiza tu
            crecimientoo financiero en tiempo real.{' '}
          </p>

          <Link
            to={'/login'}
            className="mx-auto mt-12 inline-block rounded-3xl bg-primary px-8 py-3.5 font-semibold"
          >
            Empezar a ahorrar
          </Link>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm lg:justify-start">
            <div className="flex -space-x-2">
              {PROFILES.map(({ alt, url }, i) => (
                <Profile key={i} alt={alt} url={url} />
              ))}
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-secondary bg-dark font-semibold">
                +2k
              </div>
            </div>
            <small className="text-sm text-zinc-400">Confían en nosotros</small>
          </div>
            
            {/* TODO: Poner imagen */}
          <img src="" alt="" />
          
        </section>
      </main>
    </>
  );
}
