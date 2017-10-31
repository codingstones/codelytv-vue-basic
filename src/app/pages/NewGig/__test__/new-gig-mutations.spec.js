import { createGigError, createGigRequest, createGigSuccess } from '../new-gig-mutations'
import { fakeGigsByDay } from '../../../services/__mocks__/gigs-sample'
import { stubNow } from '../../../../../test/helpers'
import { Gig } from '../../../services/MosicaCore';

describe('New gig mutations', () => {

  let state
  let OLD_DAYS
  beforeEach(() => {
    OLD_DAYS = fakeGigsByDay
    state = { days: OLD_DAYS }
  })

  describe('When creating a new gig', () => {

    it('starts request', () => {
      createGigRequest(state)

      expect(state).toEqual({ loading: true, days: OLD_DAYS, error: '' })
    })

    describe('It finishes with success', () => {

      it('and new day is created', () => {
        const NEW_GIG = aGig('2017-09-19')

        createGigSuccess(state, NEW_GIG)

        expect(Object.keys(state.days).length).toBe(2)
        expect(state.days['2017-09-19']).toBeDefined()
      })

      it('and there were already gigs that day', () => {
        // We will improve this test when we work with Vue arrays
        const NEW_GIG = aGig('2017-09-19')
        stubNow('2017-09-18')

        createGigSuccess(state, NEW_GIG)

        expect(Object.keys(state.days).length).toBe(2)
        expect(state.days['2017-09-19']).toBeDefined()
      })
    })

    it('finishes with error', () => {
      createGigError(state, 'Any Error')

      expect(state).toEqual({ loading: false, days: OLD_DAYS, error: 'Any Error' })
    })
  })
})

function aGig(date) {
  return new Gig({title: 'Any title', day: date})
}
