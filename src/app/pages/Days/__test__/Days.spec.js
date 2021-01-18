import Days from '@/app/pages/Days/Days.vue'
import { FIRST_DAY, DAY_LIST } from '../../../services/__mocks__/gigs-sample'
import { localizedFromIso } from '../../../services/date-utils'
import {within} from '@testing-library/vue'
import { renderComponent } from '@test/render-utils'
import userEvent from '@testing-library/user-event'
jest.mock('@/app/services/jota-api')

describe('Days', () => {
  const FIRST_DAY_GIG_TITLES = FIRST_DAY.gigs.map(gig => gig.title)

  it('renders all gigs in the first day', async() => {
    const screen = renderComponent(Days)

    FIRST_DAY_GIG_TITLES.forEach(async text => {
      expect(await screen.findByText(text)).toBeInTheDocument()
    })
  })

  describe('When clicking buttons', () => {

    it('navigates to first gig detail', async () => {
      const FIRST_GIG = FIRST_DAY.gigs[0]
      const navigateToGigSpy = jest.fn()
      const screen = await renderDays({navigateToGig: navigateToGigSpy})
      
      await screen.openGig(FIRST_GIG.title)

      expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG.id)
    })

    it('navigates to second gig detail', async () => {
      const SECOND_GIG = FIRST_DAY.gigs[1]
      const navigateToGigSpy = jest.fn()
      const screen = await renderDays({navigateToGig: navigateToGigSpy})
      
      await screen.openGig(SECOND_GIG.title)
      
      expect(navigateToGigSpy).toHaveBeenCalledWith(SECOND_GIG.id)
    })
  })
  
  // /* Different examples of more accurate tests that need
  // to explicitly run over the DOM structure
  // */
  it('render days in localized format', async () => {
    const screen = await renderDays()
    DAY_LIST.forEach(async (day) => {
      expect(await screen.findByText(localizedFromIso(day.date))).toBeInTheDocument()
    })
  })
  
  it('render gigs for each day', async () => {
    const screen = await renderDays()
    DAY_LIST.forEach(day => {
      const gigTitlesInDay = day.gigs.map((gig) => gig.title + ' ' + gig.place)
      const dayElement = screen.getByText(localizedFromIso(day.date))
      gigTitlesInDay.forEach(async title => {
        expect(
          await within(dayElement).findByText(title)
        ).toBeInTheDocument()
      })
    })
  })
})

async function renderDays(jotaRouterInstance) {
  const screen = await renderComponent(Days, {
    jotaRouter: ()=> jotaRouterInstance
  })
  const openGig = async title => userEvent.click((await screen.findByText(title)))
  
  return {...screen, openGig}
}
