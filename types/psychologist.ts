export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Psychologist {
  _id: string;
  name: string;
  avatar_url: string;
  experience: string;
  reviews: Review[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export type SortBy = '_id' | 'name' | 'rating' | 'price_per_hour';

export type SortOrder = 'asc' | 'desc';

export interface PsychologistsParams {
  page: number;
  perPage: number;
  sortBy: SortBy;
  sortOrder: SortOrder;
}

export interface PsychologistsResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  psychologists: Psychologist[];
}
