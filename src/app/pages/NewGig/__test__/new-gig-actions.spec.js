import {
  createGigAction
} from '../new-gig-actions'

import { rejectedPromise, resolvedPromise } from '../../../../../test/helpers'
import { CREATE_GIG_ERROR, CREATE_GIG_REQUEST, CREATE_GIG_SUCCESS } from '../new-gig-mutations';

describe('Vuex actions', () => {

  let action
  let commitSpy
  const backendError = Error('Backend Error')

  beforeEach(() => {
    commitSpy = jest.fn()
  })

  describe('Create Gig action', () => {

    it('finishes with success', async () => {
      const DAYS = { result: 'ANY DAYS' }
      const retrieveDays = resolvedPromise(DAYS)

      action = createGigAction(retrieveDays)
      await action.run({ commit: commitSpy })

      expect(commitSpy).toHaveBeenCalledWith(CREATE_GIG_REQUEST)
      expect(commitSpy).toHaveBeenCalledWith(CREATE_GIG_SUCCESS, DAYS.result)
    })

    it('finishes with error', async () => {
      const createGig = rejectedPromise(backendError)
      action = createGigAction(createGig)

      await action.run({ commit: commitSpy })

      expect(commitSpy).toHaveBeenCalledWith(CREATE_GIG_REQUEST)
      expect(commitSpy).toHaveBeenCalledWith(CREATE_GIG_ERROR, backendError)
    })
  })
})
