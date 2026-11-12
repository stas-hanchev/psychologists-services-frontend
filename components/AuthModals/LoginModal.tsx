'use client';

import LoginForm from '@/components/forms/LoginForm';
import Modal from '@/components/Modal/Modal';
import { getErrorMessage } from '@/lib/api/getErrorMessage';
import { useLogin } from '@/lib/hooks/useAuth';
import { useToastStore } from '@/lib/store/toastStore';
import type { LoginRequest } from '@/types/user';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const { mutate, isPending, error, reset } = useLogin();
  const showToast = useToastStore((state) => state.showToast);

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = (values: LoginRequest) => {
    mutate(values, {
      onSuccess: (user) => {
        handleClose();
        showToast(`Welcome back, ${user.name}!`, 'success');
      },
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      width={566}
      title="Log In"
      description="Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."
    >
      <LoginForm onSubmit={handleSubmit} isSubmitting={isPending} serverError={error && getErrorMessage(error)} />
    </Modal>
  );
}
