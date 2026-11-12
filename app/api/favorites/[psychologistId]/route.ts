import type { NextRequest } from 'next/server';
import { proxyToBackend } from '@/lib/api/bff';

export async function POST(_request: NextRequest, ctx: RouteContext<'/api/favorites/[psychologistId]'>) {
  const { psychologistId } = await ctx.params;
  return proxyToBackend({ method: 'post', url: `/favorites/${encodeURIComponent(psychologistId)}` });
}

export async function DELETE(_request: NextRequest, ctx: RouteContext<'/api/favorites/[psychologistId]'>) {
  const { psychologistId } = await ctx.params;
  return proxyToBackend({ method: 'delete', url: `/favorites/${encodeURIComponent(psychologistId)}` });
}
