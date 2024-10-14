import type { AdminState } from './state'
import type { MovieItem } from '@/features/movies/store/state'

export const mutations = {
  setMovies(state: AdminState, movies: MovieItem[]) {
    state.movies = movies
  },
  setSelectedMovie(state: AdminState, movie: MovieItem) {
    state.selectedMovie = movie
  },
  setLoading(state: AdminState, loading: boolean) {
    state.loading = loading
  },
  setError(state: AdminState, error: string | null) {
    state.error = error
  },
}
