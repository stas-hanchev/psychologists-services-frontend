import { create } from 'zustand';
import type { User } from '@/types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isSessionChecked: boolean;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  isSessionChecked: false,
  setUser: (user) => set({ user, isAuthenticated: true, isSessionChecked: true }),
  clearIsAuthenticated: () => set({ user: null, isAuthenticated: false, isSessionChecked: true }),
}));
