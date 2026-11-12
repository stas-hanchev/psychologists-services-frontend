'use client';

import RegisterForm from '@/components/forms/RegisterForm';
import Modal from '@/components/Modal/Modal';
import { getErrorMessage } from '@/lib/api/getErrorMessage';
import { useRegister } from '@/lib/hooks/useAuth';
import { useToastStore } from '@/lib/store/toastStore';
import type { RegisterRequest } from '@/types/user';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
  const { mutate, isPending, error, reset } = useRegister();
  const showToast = useToastStore((state) => state.showToast);

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = (values: RegisterRequest) => {
    mutate(values, {
      onSuccess: (user) => {
        handleClose();
        showToast(`Welcome, ${user.name}! Your account has been created.`, 'success');
      },
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      width={566}
      title="Registration"
      description="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
    >
      <RegisterForm onSubmit={handleSubmit} isSubmitting={isPending} serverError={error && getErrorMessage(error)} />
    </Modal>
  );
}
