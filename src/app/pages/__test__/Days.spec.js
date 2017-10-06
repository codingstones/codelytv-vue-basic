import { mount } from 'vue-test-utils'
import Days from '@/app/pages/Days/Days.vue'
import { fakeGigsByDay } from '../../__mocks__/gigs-sample'
import { fakeGigsByDay2 } from '../../__mocks__/gigs-sample2'
import DayListPage from '../../__page_objects__/DaysPage'

describe('Days with async load', () => {
  let page, wrapper
  beforeEach(async () => {
    wrapper = mount(Days)
    page = new DayListPage(wrapper)
    await page.updateAsync()
  })

  it('matches full snapshot', async() => {
    page.matchSnapshot()
  })

  it('displays a list of gigs from backend (jest manual mock)', async () => {
    expect(wrapper.html()).toContain('Anarchy in the JS')
  })

  it('shows days', async () => {
    const DAYS = fakeGigsByDay.map((day) => day.day)
    expect(page.dayTexts()).toEqual(DAYS)
  })

  it('displays a list of gigs from backend (explicitly injected mock)', async () => {
    const gigService = {retrieveNextGigs: () => Promise.resolve(fakeGigsByDay2)}
    const wrapper = mount(Days, {propsData: {gigService}})
    page = new DayListPage(wrapper)
    await page.updateAsync()
    expect(wrapper.html()).toContain('rapsus')
  })

  it('shows gigs for each day', async () => {
    //IS THIS TEST WORTHY? Maybe easier to unit-test components
    let expectedGigs
    fakeGigsByDay.map((day, index) => {
      expectedGigs = day.gigs.map((gig) => gig.title + ' - ' + gig.place)
      expect(page.gigRowsFor(index)).toEqual(expectedGigs)
    })
  })
})
