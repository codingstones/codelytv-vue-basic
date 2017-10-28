import {
  FETCH_DAYS_REQUEST,
  FETCH_DAYS_SUCCESS,
  FETCH_DAYS_ERROR
} from './days-mutations'

import { retrieveDays } from '../../shared/mosica-api'

export function buildRetrieveDaysAction() {
  return retrieveDaysAction(retrieveDays).run
}

export function retrieveDaysAction(retrieveDays) {
  return { run }

  async function run({ commit }) {
    commit(FETCH_DAYS_REQUEST)
    try {
      const days = await retrieveDays()
      commit(FETCH_DAYS_SUCCESS, days)
    }
    catch (error) {
      commit(FETCH_DAYS_ERROR, error)
    }
  }
}

// Test to check how we can abstract common action patterns
export function retrieveDaysActionUsingQueryAction(retrieveDays) {
  return queryAction(retrieveDays, FETCH_DAYS_REQUEST, FETCH_DAYS_SUCCESS, FETCH_DAYS_ERROR)
}

export function queryAction(command, REQUEST, SUCCESS, ERROR) {
  return { run }

  async function run({ commit }) {
    commit(REQUEST)
    try {
      const result = await command()
      commit(SUCCESS, result)
    }
    catch (error) {
      commit(ERROR, error)
    }
  }
}
