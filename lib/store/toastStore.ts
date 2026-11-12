import { create } from 'zustand';

export type ToastSeverity = 'success' | 'error' | 'info';

interface ToastState {
  message: string | null;
  severity: ToastSeverity;
  showToast: (message: string, severity?: ToastSeverity) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>()((set) => ({
  message: null,
  severity: 'info',
  showToast: (message, severity = 'info') => set({ message, severity }),
  hideToast: () => set({ message: null }),
}));
