'use client';

import Link from 'next/link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Container } from '@/components/Container/Container';
import { Section, Status } from '@/components/Catalog/Catalog.styled';

const Title = styled('h1')({
  margin: 0,
  fontSize: 32,
  lineHeight: '40px',
  fontWeight: 600,
});

export default function NotFound() {
  return (
    <Section>
      <Container>
        <Status>
          <Title>Page not found</Title>
          <p>The page you are looking for does not exist.</p>
          <Button variant="contained" component={Link} href="/">
            Go home
          </Button>
        </Status>
      </Container>
    </Section>
  );
}
