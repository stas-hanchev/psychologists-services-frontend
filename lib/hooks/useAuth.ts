import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, logout, register } from '@/lib/api/clientApi';
import { queryKeys } from '@/lib/queryKeys';
import { useAuthStore } from '@/lib/store/authStore';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      setUser(user);
      queryClient.invalidateQueries({ queryKey: queryKeys.favorites });
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: register,
    onSuccess: (user) => {
      setUser(user);
      queryClient.invalidateQueries({ queryKey: queryKeys.favorites });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);

  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      clearIsAuthenticated();
      queryClient.removeQueries({ queryKey: queryKeys.favorites });
    },
  });
};
