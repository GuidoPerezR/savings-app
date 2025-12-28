import { PiggiIcon } from '../icons/Piggy';
import { Link } from 'react-router';
import { LoginButton } from '@/components/layout/LoginButton';

export function Header() {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between bg-navbar bg-linear-to-b from-dark to-navbar px-4 py-4 font-jakarta-sans text-light">
      <div className="flex items-center gap-3 font-semibold">
        <Link to="/" className="size-12 rounded-full bg-primary p-2">
          <PiggiIcon />
        </Link>
        <span className="text-lg">SavingSaves</span>
      </div>
      <LoginButton />
    </header>
  );
}
