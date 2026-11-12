'use client';

import CircularProgress from '@mui/material/CircularProgress';
import { Status } from './Catalog.styled';

export default function Loader({ label }: { label: string }) {
  return (
    <Status role="status">
      <CircularProgress aria-label={label} />
    </Status>
  );
}
