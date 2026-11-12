import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addFavorite, fetchFavorites, removeFavorite } from '@/lib/api/clientApi';
import { getErrorMessage, isUnauthorizedError } from '@/lib/api/getErrorMessage';
import { queryKeys } from '@/lib/queryKeys';
import { useAuthStore } from '@/lib/store/authStore';
import { useModalStore } from '@/lib/store/modalStore';
import { useToastStore } from '@/lib/store/toastStore';

export const useFavorites = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: queryKeys.favorites,
    queryFn: fetchFavorites,
    enabled: isAuthenticated,
  });
};

interface ToggleFavoriteVariables {
  psychologistId: string;
  isFavorite: boolean;
}

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);
  const openModal = useModalStore((state) => state.openModal);
  const showToast = useToastStore((state) => state.showToast);

  const mutation = useMutation({
    mutationFn: ({ psychologistId, isFavorite }: ToggleFavoriteVariables) =>
      isFavorite ? removeFavorite(psychologistId) : addFavorite(psychologistId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.favorites }),
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        clearIsAuthenticated();
        queryClient.removeQueries({ queryKey: queryKeys.favorites });
        openModal('login');
        showToast('Your session has expired. Please log in again.', 'info');
        return;
      }
      showToast(getErrorMessage(error), 'error');
    },
  });

  const toggleFavorite = (variables: ToggleFavoriteVariables) => {
    if (!isAuthenticated) {
      openModal('login');
      showToast('Favorites are available only to registered users. Please log in.', 'info');
      return;
    }
    mutation.mutate(variables);
  };

  const pendingId = mutation.isPending ? mutation.variables?.psychologistId : undefined;

  return { toggleFavorite, pendingId };
};
