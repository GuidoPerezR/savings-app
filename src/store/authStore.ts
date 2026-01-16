import { create } from 'zustand';
import type { User as UserType } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

type User = UserType | null;
interface AuthStore {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  email: string;
  setUser: (user: User) => void;
  setEmail: (email: string) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  email: '',

  setEmail: (email: string) => set({ email }),

  setUser: (user: User) =>
    set({
      user,
      isAuthenticated: !!user,
      isLoading: false,
    }),

  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
    set({ isAuthenticated: false, user: null, email: '' });
  },
}));
