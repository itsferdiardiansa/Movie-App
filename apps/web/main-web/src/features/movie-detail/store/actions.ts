import type { ActionContext } from 'vuex'
import type { MovieState } from './state'
import {
  fetchMovieById,
  incrementMovieViews,
} from '@/features/movie-detail/services/movieDetailService'

export const actions = {
  async fetchMovieByIdAndIncrementViews(
    context: ActionContext<MovieState, any>,
    movieId: string
  ) {
    context.commit('setLoading', true)

    try {
      const movie = await fetchMovieById(movieId)
      context.commit('setMovieDetail', movie)

      await incrementMovieViews(movieId)

      const updatedMovie = await fetchMovieById(movieId)
      context.commit('setMovieDetail', updatedMovie)
    } catch (error) {
      context.commit('setError', 'Failed to load or update movie details')
    } finally {
      context.commit('setLoading', false)
    }
  },

  async incrementMovieViews(
    context: ActionContext<MovieState, any>,
    movieId: string
  ) {
    try {
      await incrementMovieViews(movieId)
    } catch (error) {
      console.error('Error incrementing views:', error)
    }
  },
}
