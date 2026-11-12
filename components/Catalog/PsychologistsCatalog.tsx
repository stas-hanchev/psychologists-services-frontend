'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import { Container } from '@/components/Container/Container';
import FilterSelect from '@/components/FilterSelect/FilterSelect';
import PsychologistList from '@/components/PsychologistList/PsychologistList';
import { DEFAULT_FILTER, type FilterValue } from '@/constants/psychologists';
import { getErrorMessage } from '@/lib/api/getErrorMessage';
import { usePsychologists } from '@/lib/hooks/usePsychologists';
import Loader from './Loader';
import { Footer, PageTitle, Section, Status, Toolbar } from './Catalog.styled';

export default function PsychologistsCatalog() {
  const [filter, setFilter] = useState<FilterValue>(DEFAULT_FILTER);
  const { data: psychologists, error, isPending, isError, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } =
    usePsychologists(filter);

  const renderContent = () => {
    if (isPending) return <Loader label="Loading psychologists" />;

    if (isError) {
      return (
        <Status role="alert">
          <p>{getErrorMessage(error, 'Failed to load psychologists.')}</p>
          <Button variant="contained" onClick={() => refetch()}>
            Try again
          </Button>
        </Status>
      );
    }

    if (psychologists.length === 0) {
      return (
        <Status>
          <p>No psychologists found.</p>
        </Status>
      );
    }

    return (
      <>
        <PsychologistList psychologists={psychologists} />
        {hasNextPage && (
          <Footer>
            <Button variant="contained" onClick={() => fetchNextPage()} disabled={isFetchingNextPage} sx={{ px: 6 }}>
              {isFetchingNextPage ? 'Loading...' : 'Load more'}
            </Button>
          </Footer>
        )}
      </>
    );
  };

  return (
    <Section>
      <Container>
        <PageTitle>Psychologists</PageTitle>
        <Toolbar>
          <FilterSelect value={filter} onChange={setFilter} />
        </Toolbar>
        {renderContent()}
      </Container>
    </Section>
  );
}
