'use client';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import AppointmentForm from '@/components/forms/AppointmentForm';
import Modal from '@/components/Modal/Modal';
import { useToastStore } from '@/lib/store/toastStore';
import type { AppointmentRequest } from '@/types/appointment';
import type { Psychologist } from '@/types/psychologist';

const PsychologistInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  marginBottom: 40,
});

const Caption = styled('p')(({ theme }) => ({
  margin: '0 0 4px',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

const Name = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
  psychologist: Psychologist;
}

export default function AppointmentModal({ open, onClose, psychologist }: AppointmentModalProps) {
  const showToast = useToastStore((state) => state.showToast);

  const handleSubmit = (values: AppointmentRequest) => {
    onClose();
    showToast(`Thank you, ${values.name.trim()}! Your request for ${values.time} has been sent.`, 'success');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      width={600}
      title="Make an appointment with a psychologists"
      description="You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."
    >
      <PsychologistInfo>
        <Avatar
          variant="rounded"
          src={psychologist.avatar_url}
          alt=""
          sx={{ width: 44, height: 44, borderRadius: '15px', bgcolor: '#e0e0e0' }}
        />
        <div>
          <Caption>Your psychologists</Caption>
          <Name>{psychologist.name}</Name>
        </div>
      </PsychologistInfo>
      <AppointmentForm onSubmit={handleSubmit} />
    </Modal>
  );
}
