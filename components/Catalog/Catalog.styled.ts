import { styled } from '@mui/material/styles';

export const Section = styled('main')(({ theme }) => ({
  minHeight: 'calc(100vh - 96px)',
  paddingBlock: '40px 64px',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    paddingBlock: '64px 100px',
  },
}));

export const PageTitle = styled('h1')({
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
});

export const Toolbar = styled('div')({
  marginBottom: 32,
});

export const Footer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 64,
});

export const Status = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  padding: '64px 24px',
  borderRadius: 24,
  backgroundColor: theme.palette.tokens.surface,
  textAlign: 'center',
  fontSize: 18,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  '& p': {
    margin: 0,
  },
}));
