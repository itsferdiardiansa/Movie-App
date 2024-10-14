import type { MoviesState, MovieItem } from './state'

export const mutations = {
  setMovies(state: MoviesState, movies: MovieItem[]) {
    state.movies = movies
  },

  setLastVisibleDoc(state: MoviesState, lastVisibleDoc: any) {
    state.lastVisibleDoc = lastVisibleDoc
  },

  setLoading(state: MoviesState, isLoading: boolean) {
    state.loading = isLoading
  },

  setError(state: MoviesState, error: string | null) {
    state.error = error
  },

  setHasMoreMovies(state: MoviesState, hasMore: boolean) {
    state.hasMoreMovies = hasMore
  },

  resetMovies(state: MoviesState, data: MovieItem[]) {
    state.movies = []
    state.hasMoreMovies = true
    // state.lastVisibleDoc = null
    // state.loading = false
    // state.error = null
  },
}
