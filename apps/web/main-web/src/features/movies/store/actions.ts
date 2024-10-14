import type { MoviesState } from './state'
import { mutations } from './mutations'
import {
  fetchMoviesFromFirebase,
  fetchFilteredMoviesFromFirebase,
} from '@/features/movies/services/movieService'

type ActionContext = {
  commit<K extends keyof typeof mutations>(
    key: K,
    payload: Parameters<(typeof mutations)[K]>[1]
  ): ReturnType<(typeof mutations)[K]>
  state: MoviesState
}

export const actions = {
  async fetchMovies(
    { commit, state }: ActionContext,
    {
      collectionName,
      pageSize,
      lastDoc,
    }: { collectionName: string; pageSize: number; lastDoc: any }
  ) {
    commit('setLoading', true)
    commit('setError', null)

    commit('resetMovies', [])

    try {
      const { movies, lastVisible } = await fetchMoviesFromFirebase(
        collectionName,
        pageSize,
        lastDoc
      )

      commit('setMovies', [...state.movies, ...movies])

      commit('setLastVisibleDoc', lastVisible)

      const hasMoreMovies = movies.length === pageSize
      commit('setHasMoreMovies', hasMoreMovies)
    } catch (error) {
      console.error('Error fetching paginated movies:', error)
      commit('setError', 'Failed to load movies. Please try again.')
    } finally {
      commit('setLoading', false)
    }
  },

  async fetchFilteredMovies(
    { commit, state }: ActionContext,
    {
      collectionName,
      q,
      keyname,
      pageSize,
      lastDoc,
    }: {
      collectionName: string
      q: string
      keyname: string
      pageSize: number
      lastDoc: any
    }
  ) {
    commit('setLoading', true)
    commit('setError', null)

    commit('resetMovies', [])

    try {
      const { movies, lastVisible } = await fetchFilteredMoviesFromFirebase(
        collectionName,
        q,
        keyname,
        pageSize,
        lastDoc
      )

      commit('setMovies', [...state.movies, ...movies])

      commit('setLastVisibleDoc', lastVisible)

      const hasMoreMovies = movies.length === pageSize
      commit('setHasMoreMovies', hasMoreMovies)
    } catch (error) {
      console.error('Error fetching paginated movies:', error)
      commit('setError', 'Failed to load movies. Please try again.')
    } finally {
      commit('setLoading', false)
    }
  },

  async resetMovies({ commit }: ActionContext) {
    commit('resetMovies', [])
  },
}
