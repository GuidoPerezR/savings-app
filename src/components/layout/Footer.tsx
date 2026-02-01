import { GitHub } from '@/components/icons/Github';
import { LinkedIn } from '@/components/icons/LinkedIn';
import { PiggiIcon } from '../icons/Piggy';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="w-full gap-4 border-t border-t-zinc-500 bg-navbar px-5 py-12 font-jakarta-sans text-light">
      <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 font-semibold">
            <Link
              to="/"
              className="pulse size-12 rounded-full bg-primary p-2 transition-all duration-300 hover:bg-tertiary"
              aria-label="Ir a Inicio"
            >
              <PiggiIcon />
            </Link>
            <span className="text-lg">SavingSaves</span>
          </div>
          <span className="max-w-lg text-zinc-300 lg:max-w-">
            La forma mas inteligente de gestionar tus finanzas personales y
            alcanzar tus objetivos de ahorro.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:items-end">
          <p className="mt-6 text-zinc-300 md:mt-2">
            Hecho por
            <a
              href="https://github.com/GuidoPerezR"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1.5 hover:text-primary"
              aria-label="Ir a perfil de Github"
            >
              Guidzero
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/GuidoPerezR"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse"
              aria-label="Ir a perfil de Github"
            >
              <GitHub className="size-6 transition-colors duration-200 hover:text-primary md:size-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/guidoperezr/"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse"
              aria-label="Ir a perfil de LinkedIn"
            >
              <LinkedIn className="size-6 transition-colors duration-200 hover:text-primary md:size-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
