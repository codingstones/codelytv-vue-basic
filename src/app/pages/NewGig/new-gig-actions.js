import { createGig } from '../../shared/mosica-api'
import { CREATE_GIG_ERROR, CREATE_GIG_REQUEST, CREATE_GIG_SUCCESS } from './new-gig-mutations'

export function buildCreateGigAction() {
  return createGigAction(createGig).run
}

export function createGigAction(createGig) {
  return { run }

  async function run({ commit }) {
    commit(CREATE_GIG_REQUEST)
    try {
      const days = await createGig()
      commit(CREATE_GIG_SUCCESS, days.result)
    }
    catch (error) {
      commit(CREATE_GIG_ERROR, error)
    }
  }
}
