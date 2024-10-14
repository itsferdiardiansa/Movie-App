import { state } from './state'
import type { MovieState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import type { Module } from 'vuex'

export const movieModule: Module<MovieState, any> = {
  state,
  mutations,
  actions,
  getters,
}
