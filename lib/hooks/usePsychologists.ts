import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPsychologists } from '@/lib/api/clientApi';
import { queryKeys } from '@/lib/queryKeys';
import { buildPsychologistsParams, type FilterValue } from '@/constants/psychologists';

export const usePsychologists = (filter: FilterValue) =>
  useInfiniteQuery({
    queryKey: queryKeys.psychologists(filter),
    queryFn: ({ pageParam }) => fetchPsychologists(buildPsychologistsParams(filter, pageParam)),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined),
    select: (data) => data.pages.flatMap((page) => page.psychologists),
  });
