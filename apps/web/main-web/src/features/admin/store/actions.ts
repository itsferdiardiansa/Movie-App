import type { ActionContext } from 'vuex'
import {
  fetchMovies,
  fetchMovieById,
  createMovie,
  updateMovie,
  fetchMoviesByMostViewed,
} from '@/features/admin/services/adminService'
import type { AdminState } from './state'
import type { MovieItem } from '@/features/movies/store/state'

export const actions = {
  async fetchMovies(context: ActionContext<AdminState, any>) {
    context.commit('setLoading', true)
    try {
      const movies = await fetchMovies()
      context.commit('setMovies', movies)
    } catch (error) {
      context.commit('setError', 'Failed to fetch movies')
    } finally {
      context.commit('setLoading', false)
    }
  },

  async fetchMovieById(
    context: ActionContext<AdminState, any>,
    movieId: string
  ) {
    context.commit('setLoading', true)
    try {
      const movie = await fetchMovieById(movieId)
      context.commit('setSelectedMovie', movie)
    } catch (error) {
      context.commit('setError', 'Failed to fetch movie')
    } finally {
      context.commit('setLoading', false)
    }
  },

  async fetchMoviesByMostViewed(context: ActionContext<AdminState, any>) {
    context.commit('setLoading', true)
    try {
      const movies: MovieItem[] = await fetchMoviesByMostViewed() // Call the service to get most viewed movies
      context.commit('setMovies', movies) // Commit the movies to the state
    } catch (error) {
      context.commit('setError', 'Failed to fetch most viewed movies')
    } finally {
      context.commit('setLoading', false)
    }
  },

  async createMovie(
    context: ActionContext<AdminState, any>,
    movieData: MovieItem
  ) {
    context.commit('setLoading', true)
    try {
      await createMovie(movieData)
    } catch (error) {
      context.commit('setError', 'Failed to create movie')
    } finally {
      context.commit('setLoading', false)
    }
  },

  async updateMovie(
    context: ActionContext<AdminState, any>,
    movieData: MovieItem
  ) {
    context.commit('setLoading', true)
    try {
      await updateMovie(movieData)
    } catch (error) {
      context.commit('setError', 'Failed to update movie')
    } finally {
      context.commit('setLoading', false)
    }
  },
}
