'use client';

import { Formik } from 'formik';
import * as Yup from 'yup';
import type { LoginRequest } from '@/types/user';
import FormField from './fields/FormField';
import PasswordField from './fields/PasswordField';
import { Fields, FormError, StyledForm, SubmitButton } from './Form.styled';

const loginSchema = Yup.object({
  email: Yup.string().trim().email('Enter a valid email').max(254, 'Email is too long').required('Email is required'),
  password: Yup.string().max(72, 'Password must be at most 72 characters').required('Password is required'),
});

const initialValues: LoginRequest = { email: '', password: '' };

interface LoginFormProps {
  onSubmit: (values: LoginRequest) => void;
  isSubmitting: boolean;
  serverError?: string | null;
}

export default function LoginForm({ onSubmit, isSubmitting, serverError }: LoginFormProps) {
  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={(values) => onSubmit(values)}>
      <StyledForm noValidate>
        <Fields>
          <FormField name="email" label="Email" type="email" autoComplete="email" />
          <PasswordField name="password" label="Password" autoComplete="current-password" />
        </Fields>
        {serverError && <FormError role="alert">{serverError}</FormError>}
        <SubmitButton type="submit" variant="contained" fullWidth disabled={isSubmitting}>
          Log In
        </SubmitButton>
      </StyledForm>
    </Formik>
  );
}
