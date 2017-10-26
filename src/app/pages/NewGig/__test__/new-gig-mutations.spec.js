
import { createGigError, createGigRequest, createGigSuccess } from '../new-gig-mutations'
import { fakeGigsByDay } from '../../../services/__mocks__/gigs-sample'

describe('New gig mutations', () => {

  let state
  let OLD_DAYS
  beforeEach(() => {
    OLD_DAYS = []
    state = { days: OLD_DAYS }
  })

  describe('When creating a new gig', () => {

    it('starts request', () => {
      createGigRequest(state)

      expect(state).toEqual({ loading: true, days: OLD_DAYS, error: '' })
    })

    describe('It finishes with success', () => {

      it('and new day is created', () => {
        // We will improve this test when we work with Vue arrays
        const NEW_GIG = fakeGigsByDay[0].gigs[0]
        createGigSuccess(state, NEW_GIG)

        expect(state.days.length).toBe(1)
        expect(state.days[0].day).toEqual('2017-09-18')
      })

      it('finishes with success', () => {
        // We should improve this test
        const NEW_GIG = fakeGigsByDay[0].gigs[0]
        createGigSuccess(state, NEW_GIG)

        expect(state.days.length).toBe(1)
        expect(state.days[0].day).toEqual('2017-09-18')
      })
    })

    it('finishes with error', () => {
      createGigError(state, 'Any Error')

      expect(state).toEqual({ loading: false, days: OLD_DAYS, error: 'Any Error' })
    })
  })
})
