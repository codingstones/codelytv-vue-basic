import Day from '@/app/pages/Days/Day.vue'
import { FIRST_DAY } from '../../../services/__mocks__/gigs-sample'
import { localizedFromIso } from '../../../services/date-utils'
import { renderComponent } from '@test/render-utils'

describe('Day', () => {

  it('renders gig date in spanish format', async() => {
    const {findByText} = await renderComponent(Day, {
      props: { day: FIRST_DAY, isLoading: false, onClick: jest.fn }
    })

    expect(await findByText(localizedFromIso(FIRST_DAY.date))).toBeInTheDocument()
  })
})
