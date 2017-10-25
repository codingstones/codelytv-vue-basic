import {
  FETCH_DAYS_REQUEST,
  FETCH_DAYS_SUCCESS,
  FETCH_DAYS_ERROR
} from './mutations'

import { fakeGigsByDay } from '../app/__mocks__/gigs-sample'

export function buildRetrieveDaysAction() {
  return retrieveDaysAction(retrieveDays).run
}

export function retrieveDaysAction(retrieveDays) {
  return { run }

  async function run({ commit }) {
    commit(FETCH_DAYS_REQUEST)
    try {
      const days = await retrieveDays()
      commit(FETCH_DAYS_SUCCESS, days.result)
    }
    catch (error) {
      commit(FETCH_DAYS_ERROR, error)
    }
  }
}

// This will go inside Api module
function retrieveDays() {
  return Promise.resolve(fakeGigsByDay)
}
