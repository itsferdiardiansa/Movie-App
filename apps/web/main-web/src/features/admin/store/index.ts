import type { Module } from 'vuex'
import { state, type AdminState } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const adminModule: Module<AdminState, any> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
