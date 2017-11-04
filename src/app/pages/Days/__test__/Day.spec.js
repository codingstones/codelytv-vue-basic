import Day from '@/app/pages/Days/Day.vue'
import { FIRST_DAY } from '../../../services/__mocks__/gigs-sample'
import { Wrap } from '../../../../../test/helpers'
import DayListPageObject from '../../../__page_objects__/DayPageObject'
import { localizedFromIso } from '../../../services/date-utils'

describe('Day', () => {

  let page, wrapper
  beforeEach(async () => {
    wrapper = Wrap(Day)
      .withProps({ day: FIRST_DAY, isLoading: false, onClick: jest.fn })
      .mount()
    page = new DayListPageObject(wrapper)
  })

  it('renders gig date in spanish format', async() => {
    page.contains(localizedFromIso(FIRST_DAY.date))
  })
})
