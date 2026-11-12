import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

export const Card = styled('article')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 20,
  borderRadius: 24,
  backgroundColor: theme.palette.tokens.surface,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: 24,
  },
}));

export const AvatarFrame = styled('div')(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: 120,
  height: 120,
  padding: 10,
  border: `2px solid ${theme.palette.primary.light}`,
  borderRadius: 30,
}));

export const OnlineBadge = styled('span')({
  position: 'absolute',
  top: 7,
  right: 12,
  display: 'flex',
});

export const Content = styled('div')({
  flex: 1,
  minWidth: 0,
});

export const Top = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 24,
  },
}));

export const Role = styled('p')(({ theme }) => ({
  margin: '0 0 8px',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

export const Name = styled('h3')(({ theme }) => ({
  margin: 0,
  fontSize: 24,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const MetaRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 28,
});

export const Stats = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 4,
  margin: 0,
  padding: 0,
  listStyle: 'none',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  '& > li': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  '& > li + li::before': {
    content: '""',
    display: 'none',
    width: 1,
    height: 16,
    marginInline: 8,
    backgroundColor: theme.palette.tokens.borderStrong,
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    '& > li + li::before': {
      display: 'block',
    },
  },
}));

export const Price = styled('span')(({ theme }) => ({
  color: theme.palette.tokens.price,
}));

export const FavoriteButton = styled(ButtonBase)(({ theme }) => ({
  flexShrink: 0,
  width: 26,
  height: 26,
  borderRadius: 6,
  transition: theme.transitions.create('transform'),
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  '&.Mui-disabled': {
    opacity: 0.5,
  },
}));

export const Chips = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px 4px',
  margin: '24px 0 0',
  padding: 0,
  listStyle: 'none',
});

export const Chip = styled('li')(({ theme }) => ({
  padding: '8px 16px',
  borderRadius: 24,
  backgroundColor: theme.palette.tokens.chip,
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  '& > span': {
    color: theme.palette.text.primary,
  },
}));

export const About = styled('p')(({ theme }) => ({
  margin: '24px 0 0',
  fontSize: 16,
  lineHeight: '20px',
  color: theme.palette.tokens.textMuted,
}));

export const ReadMore = styled(ButtonBase)(({ theme }) => ({
  marginTop: 14,
  fontFamily: 'inherit',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  textDecoration: 'underline',
  textUnderlineOffset: 3,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: 4,
  },
}));

export const Details = styled('div')({
  marginTop: 48,
});

export const Reviews = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const Reviewer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 16,
});

export const ReviewerInitial = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 44,
  height: 44,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  fontSize: 20,
  lineHeight: '20px',
  fontWeight: 500,
  color: theme.palette.primary.main,
}));

export const ReviewerName = styled('p')(({ theme }) => ({
  margin: '0 0 4px',
  fontSize: 16,
  lineHeight: '20px',
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const ReviewRating = styled('p')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  margin: 0,
  fontSize: 14,
  lineHeight: '18px',
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const ReviewComment = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: 16,
  lineHeight: '20px',
  color: theme.palette.tokens.textMuted,
}));
