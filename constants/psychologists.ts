import type { Psychologist, PsychologistsParams, SortBy, SortOrder } from '@/types/psychologist';

export const PER_PAGE = 3;

interface FilterOption {
  value: string;
  label: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
}

export const FILTER_OPTIONS = [
  { value: 'name-asc', label: 'A to Z', sortBy: 'name', sortOrder: 'asc' },
  { value: 'name-desc', label: 'Z to A', sortBy: 'name', sortOrder: 'desc' },
  { value: 'price-asc', label: 'Cheapest first', sortBy: 'price_per_hour', sortOrder: 'asc' },
  { value: 'price-desc', label: 'Most expensive first', sortBy: 'price_per_hour', sortOrder: 'desc' },
  { value: 'rating-desc', label: 'Popular', sortBy: 'rating', sortOrder: 'desc' },
  { value: 'rating-asc', label: 'Not popular', sortBy: 'rating', sortOrder: 'asc' },
  { value: 'all', label: 'Show all', sortBy: '_id', sortOrder: 'asc' },
] as const satisfies readonly FilterOption[];

export type FilterValue = (typeof FILTER_OPTIONS)[number]['value'];

export const DEFAULT_FILTER: FilterValue = 'name-asc';

export const getFilterOption = (value: FilterValue) =>
  FILTER_OPTIONS.find((option) => option.value === value) ?? FILTER_OPTIONS[0];

export const isFilterValue = (value: string): value is FilterValue =>
  FILTER_OPTIONS.some((option) => option.value === value);

export const buildPsychologistsParams = (filter: FilterValue, page: number): PsychologistsParams => {
  const { sortBy, sortOrder } = getFilterOption(filter);
  return { page, perPage: PER_PAGE, sortBy, sortOrder };
};

export const sortPsychologists = (psychologists: Psychologist[], filter: FilterValue) => {
  const { sortBy, sortOrder } = getFilterOption(filter);
  const direction = sortOrder === 'asc' ? 1 : -1;

  return [...psychologists].sort((a, b) => {
    const left = a[sortBy];
    const right = b[sortBy];
    const result =
      typeof left === 'number' && typeof right === 'number'
        ? left - right
        : String(left).localeCompare(String(right));
    return (result || a._id.localeCompare(b._id)) * direction;
  });
};
