import Link from 'next/link';
import { styled } from '@mui/material/styles';

export const HeroSection = styled('main')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: 'calc(100vh - 96px)',
  backgroundColor: theme.palette.tokens.surface,
}));

export const Glow = styled('div')({
  position: 'absolute',
  top: -628,
  left: 'calc(50% - 711px)',
  width: 2469,
  height: 2469,
  pointerEvents: 'none',
});

export const HeroInner = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 48,
  paddingBlock: '48px 64px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 24,
    paddingBlock: '0 100px',
  },
}));

export const TextBlock = styled('div')(({ theme }) => ({
  maxWidth: 595,
  [theme.breakpoints.up('lg')]: {
    paddingTop: 126,
  },
}));

export const Title = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: 44,
  lineHeight: '48px',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
  [theme.breakpoints.up('sm')]: {
    fontSize: 64,
    lineHeight: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 80,
    lineHeight: '82px',
  },
}));

export const TitleAccent = styled('em')(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.primary.main,
}));

export const Subtitle = styled('p')(({ theme }) => ({
  maxWidth: 510,
  margin: '20px 0 0',
  fontSize: 18,
  lineHeight: '24px',
  fontWeight: 500,
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
}));

export const CtaLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 18,
  marginTop: 40,
  padding: '18px 50px',
  borderRadius: 30,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 20,
  lineHeight: '24px',
  fontWeight: 500,
  letterSpacing: '-0.01em',
  textDecoration: 'none',
  transition: theme.transitions.create('background-color'),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.dark}`,
    outlineOffset: 2,
  },
}));

export const Arrow = styled('span')({
  display: 'inline-flex',
  transform: 'rotate(-53deg)',
});

export const Visual = styled('div')(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  maxWidth: 464,
  aspectRatio: '464 / 526',
  [theme.breakpoints.up('lg')]: {
    marginTop: 78,
  },
}));

export const Photo = styled('div')({
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  borderRadius: 10,
});

export const PhotoCrop = styled('div')({
  position: 'absolute',
  top: '-6.12%',
  left: '-84.05%',
  width: '228.88%',
  height: '113.57%',
});

export const StatsCard = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 16,
  bottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '24px 28px',
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    left: -101,
    top: 333,
    bottom: 'auto',
    width: 311,
    height: 118,
    padding: 32,
  },
}));

export const CheckBox = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 54,
  height: 54,
  borderRadius: 13,
  backgroundColor: theme.palette.tokens.surface,
}));

export const StatsText = styled('p')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  margin: 0,
  fontSize: 14,
  whiteSpace: 'nowrap',
  color: 'rgba(251, 251, 251, 0.5)',
  '& > strong': {
    fontSize: 24,
    fontWeight: 700,
    color: theme.palette.primary.contrastText,
  },
}));

export const FloatingBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'rotation' && prop !== 'color' && prop !== 'size',
})<{ rotation: number; color: string; size: number }>(({ theme, rotation, color, size }) => ({
  position: 'absolute',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  width: size,
  height: size,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 10,
    backgroundColor: color,
    transform: `rotate(${rotation}deg)`,
  },
  '& > img': {
    position: 'relative',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
