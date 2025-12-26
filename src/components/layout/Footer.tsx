import { GitHub } from '@/components/icons/Github';
import { LinkedIn } from '@/components/icons/LinkedIn';
import { PiggiIcon } from '../icons/Piggy';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-4 border-t border-t-zinc-500 bg-navbar px-5 py-12 text-light">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 font-semibold">
          <Link to="/" className="size-12 rounded-full bg-primary p-2">
            <PiggiIcon />
          </Link>
          <span className="text-lg">SavingSaves</span>
        </div>
        <span className="text-zinc-300">
          La forma mas inteligente de gestionaar tus finanzas personales y
          alcanzar tus objetivos de ahorro.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-6 md:text-xl">
          Hecho por {''}
          <a
            href="https://github.com/GuidoPerezR"
            target="blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            Guidzero
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/GuidoPerezR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <GitHub className="size-6 md:size-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/guidoperezr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <LinkedIn className="size-6 md:size-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
