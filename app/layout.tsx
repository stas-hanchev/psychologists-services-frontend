import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthModals from '@/components/AuthModals/AuthModals';
import Header from '@/components/Header/Header';
import AuthProvider from '@/components/providers/AuthProvider';
import TanStackProvider from '@/components/providers/TanStackProvider';
import ThemeRegistry from '@/components/providers/ThemeRegistry';
import Toast from '@/components/Toast/Toast';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'psychologists.services',
    template: '%s | psychologists.services',
  },
  description:
    'Find an experienced psychologist, compare specializations and ratings, save favorites and book an appointment.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeRegistry>
          <TanStackProvider>
            <AuthProvider>
              <Header />
              {children}
              <AuthModals />
              <Toast />
            </AuthProvider>
          </TanStackProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
