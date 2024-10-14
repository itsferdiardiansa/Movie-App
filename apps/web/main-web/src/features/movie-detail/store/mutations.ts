import type { MovieItem } from '@/features/movies/store/state'
import type { MovieState } from './state'

export const mutations = {
  setLoading(state: MovieState, isLoading: boolean) {
    state.isLoading = isLoading
  },
  setMovieDetail(state: MovieState, movie: MovieItem) {
    state.movieDetail = movie
  },
  setError(state: MovieState, error: string) {
    state.error = error
  },
}
