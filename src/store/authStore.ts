import { create } from 'zustand';
import type { User as UserType } from '@supabase/supabase-js';
import { logoutAction } from '@/services/user';

type User = UserType | null;
interface AuthStore {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  email: string;
  actions: {
    setUser: (user: User) => void;
    setEmail: (email: string) => void;
    logout: () => Promise<void>;
  };
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  email: '',
  actions: {
    setEmail: (email: string) => set({ email }),
    setUser: (user: User) =>
      set({ user, isAuthenticated: !!user, isLoading: false }),
    async logout() {
      await logoutAction();
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        email: '',
      });
    },
  },
}));
