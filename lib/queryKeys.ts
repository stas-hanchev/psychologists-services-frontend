import type { FilterValue } from '@/constants/psychologists';

export const queryKeys = {
  psychologists: (filter: FilterValue) => ['psychologists', filter] as const,
  favorites: ['favorites'] as const,
};
