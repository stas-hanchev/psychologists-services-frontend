import { api } from './api';

export const checkServerSession = (cookieHeader: string) =>
  api.get<{ success: boolean }>('/auth/session', {
    headers: { Cookie: cookieHeader },
    validateStatus: () => true,
  });
