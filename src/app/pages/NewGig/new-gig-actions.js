import { createGig } from '../../services/mosica-api'
import { CREATE_GIG_ERROR, CREATE_GIG_REQUEST, CREATE_GIG_SUCCESS } from './new-gig-mutations'

export function buildCreateGigAction() {
  return createGigAction(createGig).run
}

export function createGigAction(createGig) {
  return { run }

  async function run({ commit }, params) {
    commit(CREATE_GIG_REQUEST)
    try {
      const gig = await createGig(params)
      commit(CREATE_GIG_SUCCESS, gig)
    }
    catch (error) {
      commit(CREATE_GIG_ERROR, error)
    }
  }
}
