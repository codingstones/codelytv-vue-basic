import Days from '@/app/pages/Days/Days.vue'
import { renderComponent } from '@test/render-utils'
import { FIRST_DAY } from '../../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

test('renders all gigs titles for the first day of gigs', async() => {
  const {screen} = renderComponent(Days)

  const FIRST_DAY_GIG_TITLES = FIRST_DAY.gigs.map(gig => gig.title)
  FIRST_DAY_GIG_TITLES.forEach(async text => {
    expect(await screen.findByText(text)).toBeInTheDocument()
  })
})