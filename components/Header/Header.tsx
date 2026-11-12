'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Container } from '@/components/Container/Container';
import Logo from '@/components/Logo/Logo';
import AuthActions from './AuthActions';
import Navigation from './Navigation';
import { DrawerContent, HeaderInner, HeaderRoot } from './Header.styled';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderRoot isHome={pathname === '/'}>
      <Container>
        <HeaderInner>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navigation />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <AuthActions />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(true)}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </HeaderInner>
      </Container>
      <Drawer
        id="mobile-menu"
        anchor="right"
        open={isMenuOpen}
        onClose={closeMenu}
        slotProps={{ paper: { sx: { backgroundColor: 'background.paper' } } }}
      >
        <DrawerContent>
          <Logo />
          <Navigation vertical onNavigate={closeMenu} />
          <AuthActions vertical onAction={closeMenu} />
        </DrawerContent>
      </Drawer>
    </HeaderRoot>
  );
}
