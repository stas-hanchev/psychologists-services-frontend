'use client';

import { useEffect, type ReactNode } from 'react';
import { checkSession, getMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const isSessionValid = await checkSession();
        if (!isSessionValid) {
          clearIsAuthenticated();
          return;
        }
        setUser(await getMe());
      } catch {
        clearIsAuthenticated();
      }
    };

    restoreSession();
  }, [setUser, clearIsAuthenticated]);

  return children;
}
