'use client';

import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { NavLink, NavList } from './Header.styled';

interface NavigationProps {
  vertical?: boolean;
  onNavigate?: () => void;
}

export default function Navigation({ vertical, onNavigate }: NavigationProps) {
  const pathname = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/psychologists', label: 'Psychologists' },
    ...(isAuthenticated ? [{ href: '/favorites', label: 'Favorites' }] : []),
  ];

  return (
    <nav aria-label="Main">
      <NavList vertical={vertical}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <NavLink href={href} aria-current={pathname === href ? 'page' : undefined} onClick={onNavigate}>
              {label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}
