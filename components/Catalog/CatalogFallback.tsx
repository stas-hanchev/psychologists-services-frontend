'use client';

import { Container } from '@/components/Container/Container';
import Loader from './Loader';
import { Section } from './Catalog.styled';

export default function CatalogFallback({ label }: { label: string }) {
  return (
    <Section>
      <Container>
        <Loader label={label} />
      </Container>
    </Section>
  );
}
