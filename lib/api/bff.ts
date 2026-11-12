import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from './api';
import { appendSetCookies } from './setCookies';

const getClientIp = async () => {
  const headerStore = await headers();
  const forwardedFor = headerStore.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwardedFor || headerStore.get('x-real-ip') || undefined;
};

export const requestBackend = async (config: AxiosRequestConfig) => {
  const cookieStore = await cookies();
  const clientIp = await getClientIp();

  return api.request({
    ...config,
    headers: {
      ...config.headers,
      Cookie: cookieStore.toString(),
      ...(clientIp && { 'X-Forwarded-For': clientIp }),
    },
    validateStatus: () => true,
  });
};

interface ResponseOverride {
  status?: number;
  body?: unknown;
}

export const toNextResponse = (backendResponse: AxiosResponse, override: ResponseOverride = {}) => {
  const status = override.status ?? backendResponse.status;
  const body = 'body' in override ? override.body : backendResponse.data;
  const response =
    status === 204 ? new NextResponse(null, { status }) : NextResponse.json(body ?? null, { status });

  appendSetCookies(response, backendResponse.headers['set-cookie']);
  return response;
};

export const serviceUnavailable = () =>
  NextResponse.json({ message: 'Service is temporarily unavailable. Please try again later.' }, { status: 502 });

export const proxyToBackend = async (config: AxiosRequestConfig) => {
  try {
    return toNextResponse(await requestBackend(config));
  } catch {
    return serviceUnavailable();
  }
};

export const badRequest = () => NextResponse.json({ message: 'Invalid request body' }, { status: 400 });

export const proxyJsonToBackend = async (request: Request, config: AxiosRequestConfig) => {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return badRequest();
  }
  return proxyToBackend({ ...config, data });
};
