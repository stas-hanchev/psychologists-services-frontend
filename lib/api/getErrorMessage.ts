import { isAxiosError } from 'axios';

interface BackendErrorBody {
  message?: string;
  validation?: Record<string, { message?: string }>;
}

export const getErrorMessage = (error: unknown, fallback = 'Something went wrong. Please try again.') => {
  if (isAxiosError<BackendErrorBody>(error)) {
    const body = error.response?.data;
    const validationMessage = body?.validation && Object.values(body.validation)[0]?.message;
    return validationMessage || body?.message || fallback;
  }
  return fallback;
};

export const isUnauthorizedError = (error: unknown) => isAxiosError(error) && error.response?.status === 401;
