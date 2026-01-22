import { NavLink } from 'react-router';
import { useAuthStore } from '@/store/authStore';
import { Profile } from '../Profile';

export function LoginButton() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.actions.logout);
  const isLoadinng = useAuthStore((state) => state.isLoading);

  if (isLoadinng) {
    return null;
  }

  const name = user?.user_metadata?.full_name.split(' ')[0] || 'Usuario';
  const userImage = user?.user_metadata?.avatar_url || '';

  if (!isAuthenticated) {
    return (
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? 'hidden' : 'rounded-2xl bg-primary px-4 py-2 font-semibold'
        }
      >
        Iniciar Sesión
      </NavLink>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-end font-semibold">
        <div className="flex gap-1">
          <span>Hola,</span>
          <span>{name}</span>
        </div>
        <button
          onClick={logout}
          className="cursor-pointer text-sm text-zinc-400"
        >
          Cerrar sesión
        </button>
      </div>
      <Profile alt="Profile picture of a smiling user" url={userImage} />
    </div>
  );
}
