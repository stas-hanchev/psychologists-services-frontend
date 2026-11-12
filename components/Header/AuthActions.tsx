'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import { useLogout } from '@/lib/hooks/useAuth';
import { useAuthStore } from '@/lib/store/authStore';
import { useModalStore } from '@/lib/store/modalStore';
import { useToastStore } from '@/lib/store/toastStore';
import { Actions, UserBadge, UserIcon, UserName } from './Header.styled';

interface AuthActionsProps {
  vertical?: boolean;
  onAction?: () => void;
}

export default function AuthActions({ vertical, onAction }: AuthActionsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isSessionChecked = useAuthStore((state) => state.isSessionChecked);
  const openModal = useModalStore((state) => state.openModal);
  const showToast = useToastStore((state) => state.showToast);
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  const layout = vertical ? { flexDirection: 'column' as const, alignItems: 'stretch' } : undefined;

  if (!isSessionChecked) {
    return <Actions aria-hidden />;
  }

  if (isAuthenticated && user) {
    const handleLogout = () => {
      logout(undefined, {
        onSettled: () => {
          onAction?.();
          if (pathname.startsWith('/favorites')) router.replace('/');
          showToast('You have logged out.', 'success');
        },
      });
    };

    return (
      <Actions sx={layout}>
        <UserBadge>
          <UserIcon>
            <Image src="/icons/user.svg" alt="" width={24} height={24} />
          </UserIcon>
          <UserName>{user.name}</UserName>
        </UserBadge>
        <Button variant="outlined" onClick={handleLogout} disabled={isLoggingOut}>
          Log out
        </Button>
      </Actions>
    );
  }

  const open = (modal: 'login' | 'register') => {
    onAction?.();
    openModal(modal);
  };

  return (
    <Actions sx={layout}>
      <Button variant="outlined" onClick={() => open('login')}>
        Log In
      </Button>
      <Button variant="contained" onClick={() => open('register')}>
        Registration
      </Button>
    </Actions>
  );
}
