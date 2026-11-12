'use client';

import Link from 'next/link';
import { styled } from '@mui/material/styles';

const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: 20,
  lineHeight: '24px',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 4,
    borderRadius: 4,
  },
}));

const Accent = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function Logo() {
  return (
    <LogoLink href="/" aria-label="psychologists.services home">
      <Accent sx={{ fontWeight: 700 }}>psychologists</Accent>
      <Accent sx={{ fontWeight: 500 }}>.</Accent>
      services
    </LogoLink>
  );
}
