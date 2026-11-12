import { Suspense } from 'react';
import type { Metadata } from 'next';
import { cacheLife } from 'next/cache';
import CatalogFallback from '@/components/Catalog/CatalogFallback';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PsychologistsCatalog from '@/components/Catalog/PsychologistsCatalog';
import { buildPsychologistsParams, DEFAULT_FILTER } from '@/constants/psychologists';
import { fetchPsychologistsWithoutProxy } from '@/lib/api/serverApi';
import { queryKeys } from '@/lib/queryKeys';

export const metadata: Metadata = {
  title: 'Psychologists',
  description: 'Browse psychologists by name, price and popularity, read reviews and book an appointment.',
};

async function PrefetchedPsychologists() {
  'use cache';
  cacheLife('minutes');

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.psychologists(DEFAULT_FILTER),
    queryFn: ({ pageParam }) => fetchPsychologistsWithoutProxy(buildPsychologistsParams(DEFAULT_FILTER, pageParam)),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PsychologistsCatalog />
    </HydrationBoundary>
  );
}

export default function PsychologistsPage() {
  return (
    <Suspense fallback={<CatalogFallback label="Loading psychologists" />}>
      <PrefetchedPsychologists />
    </Suspense>
  );
}
