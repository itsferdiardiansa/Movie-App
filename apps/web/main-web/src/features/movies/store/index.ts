import { state } from './state'
import type { MoviesState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import type { Module } from 'vuex'

export const moviesModule: Module<MoviesState, any> = {
  state,
  mutations,
  actions,
  getters,
}
