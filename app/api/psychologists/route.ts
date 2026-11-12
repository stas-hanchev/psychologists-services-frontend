import type { NextRequest } from 'next/server';
import { proxyToBackend } from '@/lib/api/bff';

export async function GET(request: NextRequest) {
  return proxyToBackend({
    method: 'get',
    url: '/psychologists',
    params: Object.fromEntries(request.nextUrl.searchParams),
  });
}
