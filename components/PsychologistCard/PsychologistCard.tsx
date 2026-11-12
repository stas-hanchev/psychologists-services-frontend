'use client';

import { useState } from 'react';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import type { Psychologist } from '@/types/psychologist';
import {
  About,
  AvatarFrame,
  Card,
  Chip,
  Chips,
  Content,
  Details,
  FavoriteButton,
  MetaRow,
  Name,
  OnlineBadge,
  Price,
  ReadMore,
  ReviewComment,
  Reviewer,
  ReviewerInitial,
  ReviewerName,
  ReviewRating,
  Reviews,
  Role,
  Stats,
  Top,
} from './PsychologistCard.styled';

interface PsychologistCardProps {
  psychologist: Psychologist;
  isFavorite: boolean;
  isFavoritePending: boolean;
  onToggleFavorite: (psychologist: Psychologist) => void;
}

export default function PsychologistCard({
  psychologist,
  isFavorite,
  isFavoritePending,
  onToggleFavorite,
}: PsychologistCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const { name, avatar_url, rating, price_per_hour, experience, license, specialization, initial_consultation, about, reviews } =
    psychologist;

  const chips = [
    { label: 'Experience', value: experience },
    { label: 'License', value: license },
    { label: 'Specialization', value: specialization },
    { label: 'Initial_consultation', value: initial_consultation },
  ];

  return (
    <Card aria-label={name}>
      <AvatarFrame>
        <Avatar
          variant="rounded"
          src={avatar_url}
          alt={`Photo of ${name}`}
          sx={{ width: 96, height: 96, borderRadius: '15px', bgcolor: '#e0e0e0' }}
        />
        <OnlineBadge>
          <Image src="/icons/online-dot.svg" alt="" width={14} height={14} />
        </OnlineBadge>
      </AvatarFrame>

      <Content>
        <Top>
          <div>
            <Role>Psychologist</Role>
            <Name>{name}</Name>
          </div>
          <MetaRow>
            <Stats>
              <li>
                <Image src="/icons/star.svg" alt="" width={16} height={16} />
                Rating: {rating}
              </li>
              <li>
                <span>
                  Price / 1 hour: <Price>{price_per_hour}$</Price>
                </span>
              </li>
            </Stats>
            <FavoriteButton
              onClick={() => onToggleFavorite(psychologist)}
              disabled={isFavoritePending}
              aria-pressed={isFavorite}
              aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
            >
              <Image src={isFavorite ? '/icons/heart-filled.svg' : '/icons/heart.svg'} alt="" width={26} height={26} />
            </FavoriteButton>
          </MetaRow>
        </Top>

        <Chips>
          {chips.map(({ label, value }) => (
            <Chip key={label}>
              {label}: <span>{value}</span>
            </Chip>
          ))}
        </Chips>

        <About>{about}</About>

        {isExpanded ? (
          <Details>
            {reviews.length > 0 && (
              <Reviews aria-label="Reviews">
                {reviews.map((review, index) => (
                  <li key={`${review.reviewer}-${index}`}>
                    <Reviewer>
                      <ReviewerInitial aria-hidden>{review.reviewer.charAt(0).toUpperCase()}</ReviewerInitial>
                      <div>
                        <ReviewerName>{review.reviewer}</ReviewerName>
                        <ReviewRating>
                          <Image src="/icons/star.svg" alt="" width={16} height={16} />
                          <span aria-label={`Rating ${review.rating.toFixed(1)} out of 5`}>{review.rating.toFixed(1)}</span>
                        </ReviewRating>
                      </div>
                    </Reviewer>
                    <ReviewComment>{review.comment}</ReviewComment>
                  </li>
                ))}
              </Reviews>
            )}
            <Button variant="contained" onClick={() => setIsAppointmentOpen(true)} sx={{ mt: 5, px: 4 }}>
              Make an appointment
            </Button>
          </Details>
        ) : (
          <ReadMore onClick={() => setIsExpanded(true)}>Read more</ReadMore>
        )}
      </Content>

      <AppointmentModal
        open={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        psychologist={psychologist}
      />
    </Card>
  );
}
