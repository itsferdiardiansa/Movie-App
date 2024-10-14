import type { MovieItem } from '@/features/movies/store/state'

export interface AdminState {
  movies: MovieItem[]
  selectedMovie: MovieItem | null
  loading: boolean
  error: string | null
}

export const state: AdminState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,
}
