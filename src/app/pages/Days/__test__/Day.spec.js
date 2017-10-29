import Day from '@/app/pages/Days/Day.vue'
import PageObject from '../../../__page_objects__/PageObject'
import { fakeGigsByDay } from '../../../services/__mocks__/gigs-sample'
import { Wrap } from '../../../../../test/helpers'

const FIRST_DAY = fakeGigsByDay[0]

describe('Day', () => {

  let page, wrapper
  beforeEach(async () => {
    wrapper = Wrap(Day)
      .withProps({ day: FIRST_DAY, isLoading: false, onClick: jest.fn })
      .mount()
    page = new PageObject(wrapper)
    await page.updateAsync()
  })

  // Do we need tests to check onClick works as it is already tested in integration test (Days.spec)?
  // The same applies to isLoading

  it('matches full snapshot', async() => {
    page.matchSnapshot()
  })

  it('renders gig', async() => {
    page.contains(FIRST_DAY.day)
  })
})
