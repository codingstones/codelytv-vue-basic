import { numberOfGigsTodayWithReduce, numberOfGigsToday, gigsToday } from './getters'
import { fakeGigsByDay } from '../app/services/__mocks__/gigs-sample'
import { stubNow } from '../../test/helpers'

describe('Vuex Getters', () => {

  const state = { days: fakeGigsByDay }

  it('Counts the Number of Gigs of today', () => {
    stubNow('2017-09-18')
    expect(numberOfGigsTodayWithReduce(state)).toBe(2)
    expect(numberOfGigsToday(state)).toBe(2)
  })

  it('gets list of gigs for today', () => {
    stubNow('2017-09-18')
    const state = { days: fakeGigsByDay }
    expect(gigsToday(state)).toBe(fakeGigsByDay[0])
  })

  it('gets EMPTY list of gigs for today', () => {
    stubNow('2017-09-19')
    const state = { days: fakeGigsByDay }
    expect(gigsToday(state)).toBeUndefined()
  })
})
