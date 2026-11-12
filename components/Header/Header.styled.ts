import Link from 'next/link';
import { styled } from '@mui/material/styles';

export const HeaderRoot = styled('header', {
  shouldForwardProp: (prop) => prop !== 'isHome',
})<{ isHome: boolean }>(({ theme, isHome }) => ({
  position: 'relative',
  zIndex: 2,
  borderBottom: `1px solid ${theme.palette.tokens.border}`,
  backgroundColor: isHome ? theme.palette.tokens.surface : theme.palette.background.default,
}));

export const HeaderInner = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  minHeight: 72,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr auto 1fr',
    minHeight: 95,
    columnGap: 24,
  },
}));

export const NavList = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'vertical',
})<{ vertical?: boolean }>(({ vertical }) => ({
  display: 'flex',
  flexDirection: vertical ? 'column' : 'row',
  alignItems: vertical ? 'flex-start' : 'center',
  gap: vertical ? 24 : 40,
  margin: 0,
  padding: 0,
  listStyle: 'none',
}));

export const NavLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  paddingBlock: 6,
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: '-0.01em',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: 4,
  },
  '&[aria-current="page"]::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: -6,
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    transform: 'translateX(-50%)',
  },
}));

export const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 8,
});

export const UserBadge = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  marginRight: 20,
});

export const UserIcon = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: theme.palette.primary.main,
}));

export const UserName = styled('span')(({ theme }) => ({
  maxWidth: 160,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: 16,
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '-0.01em',
  color: theme.palette.text.primary,
}));

export const DrawerContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  width: 280,
  padding: '24px 24px 32px',
});
