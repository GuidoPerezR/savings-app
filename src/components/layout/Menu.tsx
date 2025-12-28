import { Link, NavLink } from 'react-router';
import { HomeIcon } from '@/components/icons/Home';
import { PlusIcon } from '@/components/icons/Plus';
import { Clock } from '@/components/icons/Clock';

export function Menu() {
  return (
    <nav className="fixed bottom-0 flex w-full items-center justify-around bg-navbar/80 px-5 py-3 font-jakarta-sans text-light backdrop-blur-sm">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-1 flex-col items-center gap-1 saturate-150 ${isActive ? 'text-primary' : 'text-zinc-400'}`
        }
      >
        <HomeIcon className="size-5" />
        <span className="text-sm">Inicio</span>
      </NavLink>

      <Link
        to="/add"
        className="-translate-y-5 rounded-full bg-primary p-5 shadow-md shadow-primary/30"
      >
        <PlusIcon className="size-5" />
      </Link>

      <NavLink
        to="/history"
        className={({ isActive }) =>
          `flex flex-1 flex-col items-center gap-1 saturate-150 ${isActive ? 'text-primary' : 'text-zinc-400'}`
        }
      >
        <Clock className="size-5" />
        <span className="text-sm">Historial</span>
      </NavLink>
    </nav>
  );
}
