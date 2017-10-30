import {
  FETCH_DAYS_REQUEST,
  FETCH_DAYS_SUCCESS,
  FETCH_DAYS_ERROR
} from './days-mutations'

import { retrieveDays } from '../../services/mosica-api'

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
// We should add params (payload) in case the query needs it
// Creating a command engine to excute commands (with type and payload) sounds like a
// good idea
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
