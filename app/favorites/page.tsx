import type { Metadata } from 'next';
import FavoritesCatalog from '@/components/Catalog/FavoritesCatalog';

export const metadata: Metadata = {
  title: 'Favorites',
  robots: { index: false },
};

export default function FavoritesPage() {
  return <FavoritesCatalog />;
}
