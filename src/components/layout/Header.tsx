import { PiggiIcon } from '../icons/Piggy';
import { Link } from 'react-router';
import { LoginButton } from '@/components/layout/LoginButton';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-navbar bg-linear-to-b from-dark to-navbar px-4 py-4 font-jakarta-sans text-light">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2">
        <div className="flex items-center gap-3 font-semibold">
          <Link
            to="/"
            className="pulse duration-300 size-12 rounded-full bg-primary p-2 transition-all hover:bg-tertiary"
            aria-label="Ir a Inicio"
          >
            <PiggiIcon />
          </Link>
          <span className="text-lg">SavingSaves</span>
        </div>
        <LoginButton />
      </div>
    </header>
  );
}
