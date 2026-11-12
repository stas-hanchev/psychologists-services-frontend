'use client';

import { useId } from 'react';
import { useField } from 'formik';
import type { InputBaseProps } from '@mui/material/InputBase';
import { ErrorText, FieldRoot, HiddenLabel, StyledInput } from './Field.styled';

export interface FormFieldProps extends Omit<InputBaseProps, 'name' | 'error' | 'value' | 'onChange' | 'onBlur'> {
  name: string;
  label: string;
}

export default function FormField({ name, label, id, inputProps, ...inputBaseProps }: FormFieldProps) {
  const [field, meta] = useField<string>(name);
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const showError = Boolean(meta.touched && meta.error);

  return (
    <FieldRoot>
      <HiddenLabel htmlFor={inputId}>{label}</HiddenLabel>
      <StyledInput
        {...inputBaseProps}
        {...field}
        id={inputId}
        placeholder={label}
        error={showError}
        inputProps={{
          ...inputProps,
          'aria-invalid': showError,
          'aria-describedby': showError ? errorId : undefined,
        }}
      />
      {showError && <ErrorText id={errorId}>{meta.error}</ErrorText>}
    </FieldRoot>
  );
}
