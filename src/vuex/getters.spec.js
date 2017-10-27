import { gigsTodayWithReduce, gigsToday } from './getters'
import { fakeGigsByDay } from '../app/services/__mocks__/gigs-sample'
import { stubNow } from '../../test/helpers'

describe('Vuex Getters', () => {

  describe('gigsTodayWithReduce', () => {
    const state = { days: fakeGigsByDay }

    it('Counts the Number of Gigs of a given day', () => {
      stubNow('2017-09-18')
      expect(gigsTodayWithReduce(state)).toBe(2)
      expect(gigsToday(state)).toBe(2)
    })
  })
})
