import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Form } from 'formik';

export const StyledForm = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
});

export const Fields = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const FieldsRow = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 16,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
  },
}));

export const FormError = styled('p')(({ theme }) => ({
  margin: '16px 0 0',
  fontSize: 14,
  lineHeight: '18px',
  color: theme.palette.error.main,
}));

export const SubmitButton = styled(Button)({
  marginTop: 40,
  padding: 16,
});
