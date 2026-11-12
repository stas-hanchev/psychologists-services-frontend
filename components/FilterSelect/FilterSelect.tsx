'use client';

import { useId } from 'react';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { FILTER_OPTIONS, isFilterValue, type FilterValue } from '@/constants/psychologists';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 226,
  maxWidth: '100%',
});

const Label = styled('span')(({ theme }) => ({
  fontSize: 14,
  lineHeight: '18px',
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

const SelectInput = styled(InputBase)(({ theme }) => ({
  height: 48,
  borderRadius: 14,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 16,
  lineHeight: '20px',
  fontWeight: 500,
  transition: theme.transitions.create('background-color'),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&.Mui-focused': {
    outline: `2px solid ${theme.palette.primary.dark}`,
    outlineOffset: 2,
  },
  '& .MuiSelect-select': {
    padding: '14px 48px 14px 18px',
    borderRadius: 14,
  },
  '& .MuiSelect-icon': {
    right: 14,
    top: 'calc(50% - 10px)',
    transition: theme.transitions.create('transform'),
  },
  '& .MuiSelect-iconOpen': {
    transform: 'rotate(180deg)',
  },
}));

const Option = styled(MenuItem)(({ theme }) => ({
  minHeight: 0,
  padding: '4px 18px',
  fontSize: 16,
  lineHeight: '20px',
  color: theme.palette.tokens.textFaded,
  '&:hover, &.Mui-focusVisible': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
  '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));

const ChevronIcon = ({ className }: { className?: string }) => (
  <Image className={className} src="/icons/chevron-down.svg" alt="" width={20} height={20} />
);

interface FilterSelectProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

export default function FilterSelect({ value, onChange }: FilterSelectProps) {
  const labelId = useId();

  const handleChange = (event: SelectChangeEvent<FilterValue>) => {
    const nextValue = event.target.value;
    if (isFilterValue(nextValue)) onChange(nextValue);
  };

  return (
    <Root>
      <Label id={labelId}>Filters</Label>
      <Select<FilterValue>
        value={value}
        onChange={handleChange}
        labelId={labelId}
        input={<SelectInput />}
        IconComponent={ChevronIcon}
        MenuProps={{
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          transformOrigin: { vertical: 'top', horizontal: 'left' },
          slotProps: {
            paper: {
              sx: {
                width: 226,
                mt: 1,
                borderRadius: '14px',
                backgroundColor: 'common.white',
                boxShadow: '0 20px 69px rgba(0, 0, 0, 0.07)',
              },
            },
            list: { sx: { py: 1.25 } },
          },
        }}
      >
        {FILTER_OPTIONS.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Root>
  );
}
