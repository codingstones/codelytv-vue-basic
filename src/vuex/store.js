import Vue from 'vue'
import Vuex from 'vuex'
import { buildRetrieveDaysAction } from '../app/pages/NewGig/days-actions'
import { RETRIEVE_DAYS } from '../app/shared/mosica-actions'
Vue.use(Vuex)

const initialState = {
  day: [],
  error: false,
  loading: true
}

export const actions = {
  [RETRIEVE_DAYS]: buildRetrieveDaysAction()
}

export const store = new Vuex.Store({
  state: initialState,
  actions
})
