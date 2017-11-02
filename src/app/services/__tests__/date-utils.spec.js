import {
  localizedToday, englishToday, isoToday, isoTomorrow, localizedFromIso, localizedTomorrow,
  setLocale
} from '../date-utils'
import { stubNow } from '../../../../test/helpers'

describe('date utils', () => {

  beforeEach(() => stubNow('2017-09-18'))

  it('Prints today in ISO', () => {
    expect(isoToday()).toBe('2017-09-18')
  })

  it('Prints tomorrow in ISO', () => {
    expect(isoTomorrow()).toBe('2017-09-19')
  })

  describe('When locale is english', () => {

    beforeEach(() => setLocale('en'))

    it('Prints todays date', () => {
      expect(localizedToday()).toBe('Monday, 18 Of September')
    })

    it('Prints tomorrows date', () => {
      expect(localizedTomorrow()).toBe('Tuesday, 19 Of September')
    })
  })

  describe('When locale is spanish', () => {

    beforeEach(() => setLocale('es'))

    it('Prints todays date', () => {
      expect(localizedToday()).toBe('Lunes, 18 De Septiembre')
    })

    it('Prints tomorrows date', () => {
      expect(localizedTomorrow()).toBe('Martes, 19 De Septiembre')
    })

    it('translate ISO date', () => {
      expect(localizedFromIso('2017-09-18')).toBe('Lunes, 18 De Septiembre')
      expect(localizedFromIso('2017-11-04')).toBe('Sábado, 04 De Noviembre')
    })
  })
})
