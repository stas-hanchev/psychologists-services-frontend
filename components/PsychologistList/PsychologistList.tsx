'use client';

import { styled } from '@mui/material/styles';
import PsychologistCard from '@/components/PsychologistCard/PsychologistCard';
import { useFavorites, useToggleFavorite } from '@/lib/hooks/useFavorites';
import type { Psychologist } from '@/types/psychologist';

const List = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

interface PsychologistListProps {
  psychologists: Psychologist[];
}

export default function PsychologistList({ psychologists }: PsychologistListProps) {
  const { data: favorites } = useFavorites();
  const { toggleFavorite, pendingId } = useToggleFavorite();
  const favoriteIds = new Set(favorites?.map((favorite) => favorite._id));

  return (
    <List>
      {psychologists.map((psychologist) => {
        const isFavorite = favoriteIds.has(psychologist._id);
        return (
          <li key={psychologist._id}>
            <PsychologistCard
              psychologist={psychologist}
              isFavorite={isFavorite}
              isFavoritePending={pendingId === psychologist._id}
              onToggleFavorite={() => toggleFavorite({ psychologistId: psychologist._id, isFavorite })}
            />
          </li>
        );
      })}
    </List>
  );
}
