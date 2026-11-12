'use client';

import { useId, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { useField } from 'formik';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { ErrorText, FieldRoot, TriggerButton } from './Field.styled';

const createTimeSlots = (from: number, to: number) => {
  const slots: string[] = [];
  for (let minutes = from * 60; minutes <= to * 60; minutes += 30) {
    const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
    slots.push(`${hours}:${String(minutes % 60).padStart(2, '0')}`);
  }
  return slots;
};

const TIME_SLOTS = createTimeSlots(9, 18);

const Title = styled(ListSubheader)(({ theme }) => ({
  padding: '16px 16px 8px',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
}));

const SlotItem = styled(MenuItem)(({ theme }) => ({
  justifyContent: 'center',
  minHeight: 0,
  padding: '4px 16px',
  fontSize: 16,
  lineHeight: '20px',
  fontWeight: 500,
  whiteSpace: 'pre',
  color: theme.palette.tokens.textFaded,
  '&:hover, &.Mui-focusVisible': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
  '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));

const Value = styled('span')({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

interface TimeFieldProps {
  name: string;
  label: string;
}

export default function TimeField({ name, label }: TimeFieldProps) {
  const [field, meta, helpers] = useField<string>(name);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const baseId = useId();
  const menuId = `${baseId}-menu`;
  const errorId = `${baseId}-error`;
  const isOpen = Boolean(anchorEl);
  const showError = Boolean(meta.touched && meta.error);

  const handleOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
    helpers.setTouched(true);
  };

  const handleSelect = async (slot: string) => {
    setAnchorEl(null);
    await helpers.setValue(slot, true);
    helpers.setTouched(true, false);
  };

  return (
    <FieldRoot>
      <TriggerButton
        type="button"
        invalid={showError}
        onClick={handleOpen}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        aria-label={field.value ? `${label}: ${field.value}` : label}
        aria-invalid={showError}
        aria-describedby={showError ? errorId : undefined}
      >
        <Value>{field.value || '00:00'}</Value>
        <Image src="/icons/clock.svg" alt="" width={20} height={20} />
      </TriggerButton>
      {showError && <ErrorText id={errorId}>{meta.error}</ErrorText>}
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              width: 151,
              maxHeight: 180,
              mt: 1,
              borderRadius: 3,
              backgroundColor: 'common.white',
              boxShadow: '0 20px 69px rgba(0, 0, 0, 0.07)',
            },
          },
          list: { role: 'listbox', 'aria-label': 'Meeting time', sx: { pt: 0, pb: 2 } },
        }}
      >
        <Title>Meeting time</Title>
        {TIME_SLOTS.map((slot) => (
          <SlotItem
            key={slot}
            role="option"
            selected={slot === field.value}
            aria-selected={slot === field.value}
            onClick={() => handleSelect(slot)}
          >
            {slot.replace(':', ' : ')}
          </SlotItem>
        ))}
      </Menu>
    </FieldRoot>
  );
}
