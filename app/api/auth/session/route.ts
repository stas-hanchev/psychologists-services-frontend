import { requestBackend, serviceUnavailable, toNextResponse } from '@/lib/api/bff';

export async function GET() {
  try {
    const backendResponse = await requestBackend({ method: 'get', url: '/auth/session' });

    if (backendResponse.status === 401) {
      return toNextResponse(backendResponse, { status: 200, body: { success: false } });
    }

    return toNextResponse(backendResponse);
  } catch {
    return serviceUnavailable();
  }
}
