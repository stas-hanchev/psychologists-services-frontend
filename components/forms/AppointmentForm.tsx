'use client';

import { Formik } from 'formik';
import * as Yup from 'yup';
import type { AppointmentRequest } from '@/types/appointment';
import FormField from './fields/FormField';
import TimeField from './fields/TimeField';
import { Fields, FieldsRow, StyledForm, SubmitButton } from './Form.styled';

const appointmentSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must be at most 30 characters')
    .required('Name is required'),
  phone: Yup.string()
    .trim()
    .matches(/^\+380\d{9}$/, 'Enter the phone in the format +380XXXXXXXXX')
    .required('Phone is required'),
  time: Yup.string().required('Choose a meeting time'),
  email: Yup.string().trim().email('Enter a valid email').max(254, 'Email is too long').required('Email is required'),
  comment: Yup.string()
    .trim()
    .min(10, 'Comment must be at least 10 characters')
    .max(500, 'Comment must be at most 500 characters')
    .required('Comment is required'),
});

const initialValues: AppointmentRequest = { name: '', phone: '+380', time: '', email: '', comment: '' };

interface AppointmentFormProps {
  onSubmit: (values: AppointmentRequest) => void;
}

export default function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  return (
    <Formik initialValues={initialValues} validationSchema={appointmentSchema} onSubmit={(values) => onSubmit(values)}>
      <StyledForm noValidate>
        <Fields sx={{ gap: 2 }}>
          <FormField name="name" label="Name" autoComplete="name" />
          <FieldsRow>
            <FormField name="phone" label="Phone" type="tel" autoComplete="tel" />
            <TimeField name="time" label="Meeting time" />
          </FieldsRow>
          <FormField name="email" label="Email" type="email" autoComplete="email" />
          <FormField name="comment" label="Comment" multiline minRows={4} />
        </Fields>
        <SubmitButton type="submit" variant="contained" fullWidth>
          Send
        </SubmitButton>
      </StyledForm>
    </Formik>
  );
}
