import { Link, NavLink } from 'react-router';
import { HomeIcon } from '@/components/icons/Home';
import { PlusIcon } from '@/components/icons/Plus';
import { Clock } from '@/components/icons/Clock';

export function Menu() {
  return (
    <nav className="fixed bottom-0 w-full bg-navbar/80 px-5 py-3 font-jakarta-sans text-light backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-around">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-1 saturate-150 transition-colors duration-300 ease-in-out hover:text-light-purple md:flex-none ${isActive ? 'text-light-purple' : 'text-gray'}`
          }
        >
          <HomeIcon className="size-5 md:size-8" />
          <span className="text-sm">Inicio</span>
        </NavLink>

        <Link
          to="/add"
          className="pulse -translate-y-5 rounded-full bg-primary p-5 shadow-md shadow-primary/30 transition-colors duration-300 ease-in-out hover:bg-tertiary"
          aria-label="Agregar movimiento"
        >
          <PlusIcon className="size-5 md:size-8" />
        </Link>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-1 saturate-150 transition-colors duration-300 ease-in-out hover:text-light-purple md:flex-none ${isActive ? 'text-light-purple' : 'text-gray'}`
          }
        >
          <Clock className="size-5 md:size-8" />
          <span className="text-sm">Historial</span>
        </NavLink>
      </div>
    </nav>
  );
}
