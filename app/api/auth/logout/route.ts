import { proxyToBackend } from '@/lib/api/bff';

export async function POST() {
  return proxyToBackend({ method: 'post', url: '/auth/logout' });
}
