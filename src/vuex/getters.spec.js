import { stubNow } from '../../test/helpers'
import { fakeGigsByDay } from '../app/services/__mocks__/gigs-sample'
import {
  gigsToday,
  gigsTomorrow,
  numberOfGigsToday,
  numberOfGigsTomorrow
} from './getters'

describe('Vuex Getters', () => {

  const state = { days: fakeGigsByDay }

  describe('When Getting things by day', () => {
    it('Counts the Number of Gigs of today', () => {
      stubNow('2017-09-18')
      expect(numberOfGigsToday(state)).toBe(2)
    })

    it('Counts the Number of Gigs of tomorrow', () => {
      stubNow('2017-09-18')
      expect(numberOfGigsTomorrow(state)).toBe(0)
    })

    it('gets list of gigs for today', () => {
      stubNow('2017-09-18')
      const state = {days: fakeGigsByDay}
      expect(gigsToday(state)).toBe(fakeGigsByDay[0])
    })

    it('gets EMPTY list of gigs for today', () => {
      stubNow('2017-09-19')
      const state = {days: fakeGigsByDay}
      expect(gigsToday(state)).toBeUndefined()
    })

    it('gets EMPTY list of gigs for tomorrow', () => {
      stubNow('2017-09-18')
      const state = {days: fakeGigsByDay}
      expect(gigsTomorrow(state)).toBeUndefined()
    })
  })
})
