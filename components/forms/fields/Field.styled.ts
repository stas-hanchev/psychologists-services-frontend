import ButtonBase from '@mui/material/ButtonBase';
import InputBase from '@mui/material/InputBase';
import { styled, type Theme } from '@mui/material/styles';

const fieldBorder = (theme: Theme) => ({
  width: '100%',
  border: `1px solid ${theme.palette.tokens.border}`,
  borderRadius: 12,
  padding: '15px 17px',
  fontSize: 16,
  lineHeight: '20px',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  transition: theme.transitions.create('border-color'),
  '&:hover': {
    borderColor: theme.palette.tokens.borderStrong,
  },
});

export const FieldRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minWidth: 0,
});

export const HiddenLabel = styled('label')({
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
});

export const StyledInput = styled(InputBase)(({ theme }) => ({
  ...fieldBorder(theme),
  '& .MuiInputBase-input': {
    height: 20,
    padding: 0,
    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
  '& .MuiInputBase-inputMultiline': {
    height: 'auto',
  },
  '&.Mui-focused': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-error': {
    borderColor: theme.palette.error.main,
  },
}));

export const TriggerButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'invalid',
})<{ invalid: boolean }>(({ theme, invalid }) => ({
  ...fieldBorder(theme),
  justifyContent: 'space-between',
  gap: 12,
  fontFamily: 'inherit',
  textAlign: 'left',
  borderColor: invalid ? theme.palette.error.main : theme.palette.tokens.border,
  '&.Mui-focusVisible, &[aria-expanded="true"]': {
    borderColor: theme.palette.primary.main,
  },
}));

export const ErrorText = styled('p')(({ theme }) => ({
  margin: 0,
  paddingInline: 18,
  fontSize: 12,
  lineHeight: '16px',
  color: theme.palette.error.main,
}));
