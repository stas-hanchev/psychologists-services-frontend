import { create } from 'zustand';

export type AuthModal = 'login' | 'register';

interface ModalState {
  activeModal: AuthModal | null;
  openModal: (modal: AuthModal) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  activeModal: null,
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
}));
