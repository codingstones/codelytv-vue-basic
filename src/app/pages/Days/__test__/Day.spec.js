import Day from '@/app/pages/Days/Day.vue'
import PageObject from '../../../__page_objects__/PageObject'
import { fakeGigsByDay } from '../../../services/__mocks__/gigs-sample'
import { Wrap } from '../../../../../test/helpers'
import DayListPageObject from '../../../__page_objects__/DayPageObject';

const FIRST_DAY = fakeGigsByDay[0]

describe('Day', () => {

  let page, wrapper
  beforeEach(async () => {
    wrapper = Wrap(Day)
      .withProps({ day: FIRST_DAY, isLoading: false, onClick: jest.fn })
      .withRouter(jest.fn())
      .mount()
    page = new DayListPageObject(wrapper)
  })

  // Do we need tests to check onClick works as it is already tested in integration test (Days.spec)?
  // The same applies to isLoading

  it('matches full snapshot', async() => {
    page.matchSnapshot()
  })

  it('renders gig', async() => {
    page.contains(FIRST_DAY.day)
  })


  describe('When clicking buttons', () => {

    let navigateToGigSpy
    beforeEach(async () => {
      navigateToGigSpy = jest.fn()
      page.setRouterSpy({ navigateToGig: navigateToGigSpy })
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
})
