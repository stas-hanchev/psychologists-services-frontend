import { api } from './api';
import type { PsychologistsParams, PsychologistsResponse } from '@/types/psychologist';

export const fetchPsychologistsWithoutProxy = async (params: PsychologistsParams) => {
  const { data } = await api.get<PsychologistsResponse>('/psychologists', { params });
  return data;
};
