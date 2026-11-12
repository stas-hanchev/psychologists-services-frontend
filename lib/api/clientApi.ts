import axios from 'axios';
import type { Psychologist, PsychologistsParams, PsychologistsResponse } from '@/types/psychologist';
import type { LoginRequest, RegisterRequest, User } from '@/types/user';

export const nextServer = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export const fetchPsychologists = async (params: PsychologistsParams) => {
  const { data } = await nextServer.get<PsychologistsResponse>('/psychologists', { params });
  return data;
};

export const fetchFavorites = async () => {
  const { data } = await nextServer.get<Psychologist[]>('/favorites');
  return data;
};

export const addFavorite = async (psychologistId: string) => {
  await nextServer.post(`/favorites/${psychologistId}`);
};

export const removeFavorite = async (psychologistId: string) => {
  await nextServer.delete(`/favorites/${psychologistId}`);
};

export const login = async (body: LoginRequest) => {
  const { data } = await nextServer.post<User>('/auth/login', body);
  return data;
};

export const register = async (body: RegisterRequest) => {
  const { data } = await nextServer.post<User>('/auth/register', body);
  return data;
};

export const logout = async () => {
  await nextServer.post('/auth/logout');
};

export const checkSession = async () => {
  const { data } = await nextServer.get<{ success: boolean }>('/auth/session');
  return data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>('/auth/me');
  return data;
};
