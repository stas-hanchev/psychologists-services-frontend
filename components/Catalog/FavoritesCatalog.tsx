'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { Container } from '@/components/Container/Container';
import FilterSelect from '@/components/FilterSelect/FilterSelect';
import PsychologistList from '@/components/PsychologistList/PsychologistList';
import { DEFAULT_FILTER, PER_PAGE, sortPsychologists, type FilterValue } from '@/constants/psychologists';
import { getErrorMessage } from '@/lib/api/getErrorMessage';
import { useFavorites } from '@/lib/hooks/useFavorites';
import { useAuthStore } from '@/lib/store/authStore';
import { useModalStore } from '@/lib/store/modalStore';
import Loader from './Loader';
import { Footer, PageTitle, Section, Status, Toolbar } from './Catalog.styled';

export default function FavoritesCatalog() {
  const [filter, setFilter] = useState<FilterValue>(DEFAULT_FILTER);
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const isSessionChecked = useAuthStore((state) => state.isSessionChecked);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openModal = useModalStore((state) => state.openModal);
  const { data: favorites, error, isPending, isError, refetch } = useFavorites();

  const handleFilterChange = (value: FilterValue) => {
    setFilter(value);
    setVisibleCount(PER_PAGE);
  };

  const renderContent = () => {
    if (isSessionChecked && !isAuthenticated) {
      return (
        <Status>
          <p>Please log in to see your favorite psychologists.</p>
          <Button variant="contained" onClick={() => openModal('login')}>
            Log In
          </Button>
        </Status>
      );
    }

    if (!isSessionChecked || isPending) return <Loader label="Loading favorites" />;

    if (isError) {
      return (
        <Status role="alert">
          <p>{getErrorMessage(error, 'Failed to load favorites.')}</p>
          <Button variant="contained" onClick={() => refetch()}>
            Try again
          </Button>
        </Status>
      );
    }

    if (favorites.length === 0) {
      return (
        <Status>
          <p>You have no favorite psychologists yet.</p>
          <Button variant="contained" component={Link} href="/psychologists">
            Find a psychologist
          </Button>
        </Status>
      );
    }

    const sorted = sortPsychologists(favorites, filter);

    return (
      <>
        <PsychologistList psychologists={sorted.slice(0, visibleCount)} />
        {visibleCount < sorted.length && (
          <Footer>
            <Button variant="contained" onClick={() => setVisibleCount((count) => count + PER_PAGE)} sx={{ px: 6 }}>
              Load more
            </Button>
          </Footer>
        )}
      </>
    );
  };

  return (
    <Section>
      <Container>
        <PageTitle>Favorite psychologists</PageTitle>
        <Toolbar>
          <FilterSelect value={filter} onChange={handleFilterChange} />
        </Toolbar>
        {renderContent()}
      </Container>
    </Section>
  );
}
