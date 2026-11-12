'use client';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useToastStore } from '@/lib/store/toastStore';

export default function Toast() {
  const message = useToastStore((state) => state.message);
  const severity = useToastStore((state) => state.severity);
  const hideToast = useToastStore((state) => state.hideToast);

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={4000}
      onClose={(_event, reason) => {
        if (reason !== 'clickaway') hideToast();
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={hideToast} severity={severity} variant="filled" sx={{ borderRadius: 3, alignItems: 'center' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
