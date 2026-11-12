'use client';

import { useState } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormField, { type FormFieldProps } from './FormField';

export default function PasswordField(props: Omit<FormFieldProps, 'type' | 'endAdornment'>) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <FormField
      {...props}
      type={isVisible ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end" sx={{ ml: 1, height: 20 }}>
          <IconButton
            aria-label={isVisible ? 'Hide password' : 'Show password'}
            onClick={() => setIsVisible((visible) => !visible)}
            edge="end"
            size="small"
            sx={{ mr: '-5px' }}
          >
            <Image src={isVisible ? '/icons/eye.svg' : '/icons/eye-off.svg'} alt="" width={20} height={20} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
