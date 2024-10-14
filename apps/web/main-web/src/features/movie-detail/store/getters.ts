import type { MovieState } from './state'

export const getters = {
  getMovieById: (state: MovieState) => (id: string) => {
    return state.movieDetail && state.movieDetail.id === id
      ? state.movieDetail
      : null
  },
}
