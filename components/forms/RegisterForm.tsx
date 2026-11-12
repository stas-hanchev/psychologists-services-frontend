'use client';

import { Formik } from 'formik';
import * as Yup from 'yup';
import type { RegisterRequest } from '@/types/user';
import FormField from './fields/FormField';
import PasswordField from './fields/PasswordField';
import { Fields, FormError, StyledForm, SubmitButton } from './Form.styled';

const registerSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must be at most 30 characters')
    .required('Name is required'),
  email: Yup.string().trim().email('Enter a valid email').max(254, 'Email is too long').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(72, 'Password must be at most 72 characters')
    .required('Password is required'),
});

const initialValues: RegisterRequest = { name: '', email: '', password: '' };

interface RegisterFormProps {
  onSubmit: (values: RegisterRequest) => void;
  isSubmitting: boolean;
  serverError?: string | null;
}

export default function RegisterForm({ onSubmit, isSubmitting, serverError }: RegisterFormProps) {
  return (
    <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={(values) => onSubmit(values)}>
      <StyledForm noValidate>
        <Fields>
          <FormField name="name" label="Name" autoComplete="name" />
          <FormField name="email" label="Email" type="email" autoComplete="email" />
          <PasswordField name="password" label="Password" autoComplete="new-password" />
        </Fields>
        {serverError && <FormError role="alert">{serverError}</FormError>}
        <SubmitButton type="submit" variant="contained" fullWidth disabled={isSubmitting}>
          Sign Up
        </SubmitButton>
      </StyledForm>
    </Formik>
  );
}
