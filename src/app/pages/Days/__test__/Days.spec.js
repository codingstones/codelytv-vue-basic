import { mount } from '@vue/test-utils'
import Days from '@/app/pages/Days/Days.vue'
import { FIRST_DAY, DAY_LIST } from '../../../services/__mocks__/gigs-sample'
import DayListPage from '../../../__page_objects__/DaysPageObject'
import { localizedFromIso } from '../../../services/date-utils'
jest.mock('@/app/services/jota-api')

describe('Days', () => {
  const FIRST_DAY_GIG_TITLES = FIRST_DAY.gigs.map(gig => gig.title)

  let page, wrapper
  beforeEach(async () => {
    wrapper = mount(Days)
    page = new DayListPage(wrapper)
  })

  it('matches full snapshot', async() => {
    page.matchSnapshot()
  })

  it('renders all gigs in the first day', async() => {
    FIRST_DAY_GIG_TITLES.map((text) => page.contains(text))
  })

  describe('When clicking buttons', () => {

    let navigateToGigSpy
    beforeEach(() => {
      navigateToGigSpy = jest.fn()
      wrapper.vm.jotaRouter.navigateToGig = navigateToGigSpy
    })

    it('navigates to first gig detail', async () => {
      const FIRST_GIG = FIRST_DAY.gigs[0]
      page.clickFirstGig()
      expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG.id)
    })

    it('navigates to second gig detail', async () => {
      const SECOND_GIG = FIRST_DAY.gigs[1]
      page.clickSecondGig()
      expect(navigateToGigSpy).toHaveBeenCalledWith(SECOND_GIG.id)
    })
  })

  /* Different examples of more accurate tests that need
  to explicitly run over the DOM structure
  */

  it('render days in localized format', async () => {
    const DAYS = DAY_LIST.map((day) => localizedFromIso(day.date))
    expect(page.dayTitles()).toEqual(DAYS)
  })

  it('render gigs for each day', async () => {
    let expectedGigs
    DAY_LIST.map((day, index) => {
      expectedGigs = day.gigs.map((gig) => gig.title + ' ' + gig.place)
      expect(page.gigRowsFor(index)).toEqual(expectedGigs)
    })
  })
})
