import type { MoviesState } from './state'

export const getters = {
  movies: (state: MoviesState) => state.movies,
  movieCount: (state: MoviesState) => state.movies.length,
}
