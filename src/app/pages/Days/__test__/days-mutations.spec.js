
import { fetchDaysError, fetchDaysRequest, fetchDaysSuccess } from '../days-mutations'

describe('Mutations', () => {

  let state
  let OLD_DAYS
  beforeEach(() => {
    OLD_DAYS = 'OLD DAYS'
    state = { days: OLD_DAYS }
  })

  describe('When fetching days', () => {

    it('starts request', () => {
      fetchDaysRequest(state)

      expect(state).toEqual({ loading: true, days: OLD_DAYS, error: '' })
    })

    it('finishes with success', () => {
      const DAYS = 'ANY DAYS'

      fetchDaysSuccess(state, DAYS)

      expect(state).toEqual({ loading: false, days: DAYS, error: '' })
    })

    it('finishes with error', () => {
      fetchDaysError(state, 'Any Error')

      expect(state).toEqual({ loading: false, days: OLD_DAYS, error: 'Any Error' })
    })
  })
})
