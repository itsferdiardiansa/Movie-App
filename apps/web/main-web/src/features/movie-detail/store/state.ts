import type { MovieItem } from '@/features/movies/store/state'

export interface MovieState {
  isLoading: boolean
  movieDetail: MovieItem | null
  error: string | null
}

export const state: MovieState = {
  isLoading: false,
  movieDetail: null,
  error: null,
}
