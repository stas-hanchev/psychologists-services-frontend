import { proxyJsonToBackend } from '@/lib/api/bff';

export async function POST(request: Request) {
  return proxyJsonToBackend(request, { method: 'post', url: '/auth/login' });
}
