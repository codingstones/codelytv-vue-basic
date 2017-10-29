import { spanishToday, spanishTomorrow, isoToday, isoTomorrow } from '../date-utils'
import { stubNow } from '../../../../test/helpers'

describe('date utils', () => {

  beforeEach(() => stubNow('2017-09-18'))

  it('Prints today in ISO', () => {
    expect(isoToday()).toBe('2017-09-18')
  })

  it('Prints tomorrow in ISO', () => {
    expect(isoTomorrow()).toBe('2017-09-19')
  })

  it('Prints todays date in spanish', () => {
    expect(spanishToday()).toBe('lunes, 18 de septiembre')
  })

  it('Prints tomorrows date in spanish', () => {
    stubNow('2017-09-18')
    expect(spanishTomorrow()).toBe('martes, 19 de septiembre')
  })
})
