'use client';

import { useModalStore } from '@/lib/store/modalStore';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function AuthModals() {
  const activeModal = useModalStore((state) => state.activeModal);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <>
      <LoginModal open={activeModal === 'login'} onClose={closeModal} />
      <RegisterModal open={activeModal === 'register'} onClose={closeModal} />
    </>
  );
}
