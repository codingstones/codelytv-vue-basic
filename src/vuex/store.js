import Vue from 'vue'
import Vuex from 'vuex'
import { CREATE_GIG, RETRIEVE_DAYS } from '../app/shared/mosica-actions'
import { buildRetrieveDaysAction } from '../app/pages/Days/days-actions'
import {
  CREATE_GIG_ERROR,
  CREATE_GIG_REQUEST, CREATE_GIG_SUCCESS, createGigError, createGigRequest,
  createGigSuccess
} from '../app/pages/NewGig/new-gig-mutations'
import {
  FETCH_DAYS_ERROR, FETCH_DAYS_REQUEST, FETCH_DAYS_SUCCESS, fetchDaysError,
  fetchDaysRequest, fetchDaysSuccess
} from '../app/pages/Days/days-mutations'
import { buildCreateGigAction } from '../app/pages/NewGig/new-gig-actions'
import { gigsTodayWithReduce } from './getters'

Vue.use(Vuex)

export const initialState = {
  days: [],
  error: false,
  loading: true
}

export const actions = {
  [RETRIEVE_DAYS]: buildRetrieveDaysAction(),
  [CREATE_GIG]: buildCreateGigAction()
}

export const mutations = {
  [CREATE_GIG_REQUEST]: createGigRequest,
  [CREATE_GIG_SUCCESS]: createGigSuccess,
  [CREATE_GIG_ERROR]: createGigError,
  [FETCH_DAYS_REQUEST]: fetchDaysRequest,
  [FETCH_DAYS_SUCCESS]: fetchDaysSuccess,
  [FETCH_DAYS_ERROR]: fetchDaysError
}

export const getters = {
  gigsToday: gigsTodayWithReduce
}

export const store = new Vuex.Store({
  state: initialState,
  actions,
  mutations,
  getters
})
