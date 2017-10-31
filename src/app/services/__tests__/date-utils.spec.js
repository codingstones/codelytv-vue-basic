import { spanishToday, spanishTomorrow, isoToday, isoTomorrow, spanishFromIso } from '../date-utils'
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
    expect(spanishToday()).toBe('Lunes, 18 de Septiembre')
  })

  it('Prints tomorrows date in spanish', () => {
    expect(spanishTomorrow()).toBe('Martes, 19 de Septiembre')
  })

  it('translate ISO date to Spanish format', () => {
    expect(spanishFromIso('2017-09-18')).toBe('Lunes, 18 de Septiembre')
    expect(spanishFromIso('2017-11-04')).toBe('Sábado, 04 de Noviembre')
  })
})
