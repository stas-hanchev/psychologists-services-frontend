import { proxyToBackend } from '@/lib/api/bff';

export async function GET() {
  return proxyToBackend({ method: 'get', url: '/favorites' });
}
