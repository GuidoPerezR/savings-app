import { NavLink } from 'react-router';
import { useAuthStore } from '@/store/authStore';
import { Profile } from '../Profile';

export function LoginButton() {
  const { isAuthenticated, logout } = useAuthStore();

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
      <div className="flex flex-col items-end">
        <span className="font-semibold">Hola, Guido</span>
        <button
          onClick={logout}
          className="cursor-pointer text-sm text-zinc-400"
        >
          Cerrar sesión
        </button>
      </div>
      <Profile
        alt="Profile picture of a smiling user"
        url="https://lh3.googleusercontent.com/aida-public/AB6AXuBww3Yx202itHXwKn7F2uOivUX3fx6BaiXibbd9zUnNxZ52XU-8pCDRUV2vy1KqyYe_iBpllDykKwOYB0Ky_OvIPiFFK6C40Nrfo6M5WDuOm0DFmRwOIi_4vSoYuuWHAM69a2jSg_Qbz2S9XxWM74UrhsAA-8tfBMAdbHXmUcvuhN4K6z2IyQSmOMEQPFE9V_IIj3IT6lo1IpG2i-GYoYqocB56M1VZIgYF_BRzJXTe4-R6pl6lH46Svx-lRemEyjihxF9ZAfaEi50"
      />
    </div>
  );
}
