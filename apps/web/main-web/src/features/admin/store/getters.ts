import type { AdminState } from './state'

export const getters = {
  movies: (state: AdminState) => state.movies,
  selectedMovie: (state: AdminState) => state.selectedMovie,
  isLoading: (state: AdminState) => state.loading,
  error: (state: AdminState) => state.error,
}
