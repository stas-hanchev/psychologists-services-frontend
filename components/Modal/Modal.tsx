'use client';

import { useId, type ReactNode } from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const Title = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: 28,
  lineHeight: '34px',
  fontWeight: 500,
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
  [theme.breakpoints.up('sm')]: {
    fontSize: 40,
    lineHeight: '48px',
  },
}));

const Description = styled('p')(({ theme }) => ({
  margin: '20px 0 0',
  fontSize: 16,
  lineHeight: '20px',
  color: theme.palette.tokens.textMuted,
}));

const Body = styled('div')({
  marginTop: 40,
});

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  width: number;
  children: ReactNode;
}

export default function Modal({ open, onClose, title, description, width, children }: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      slotProps={{
        backdrop: { sx: { backgroundColor: 'tokens.overlay' } },
        paper: {
          sx: {
            position: 'relative',
            width: '100%',
            maxWidth: width,
            m: 2,
            p: { xs: '56px 20px 32px', sm: 8 },
            borderRadius: { xs: 6, sm: '30px' },
            backgroundColor: 'background.paper',
            boxShadow: 'none',
          },
        },
      }}
    >
      <IconButton aria-label="Close" onClick={onClose} sx={{ position: 'absolute', top: 16, right: 16, p: 0.5 }}>
        <Image src="/icons/close.svg" alt="" width={32} height={32} />
      </IconButton>
      <Title id={titleId}>{title}</Title>
      <Description id={descriptionId}>{description}</Description>
      <Body>{children}</Body>
    </Dialog>
  );
}
