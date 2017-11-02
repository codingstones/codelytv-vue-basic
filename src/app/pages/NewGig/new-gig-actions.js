import { createGig } from '../../services/jota-api'
import { CREATE_GIG_ERROR, CREATE_GIG_REQUEST, CREATE_GIG_SUCCESS } from './new-gig-mutations'

export function buildCreateGigAction() {
  return createGigAction(createGig).run
}

export function createGigAction(createGig) {
  return { run }

  async function run({ commit }, payload) {
    commit(CREATE_GIG_REQUEST)
    try {
      await createGig(payload)
      commit(CREATE_GIG_SUCCESS, payload)
      return 'OK'
    }
    catch (error) {
      commit(CREATE_GIG_ERROR, error)
      return error
    }
  }
}
