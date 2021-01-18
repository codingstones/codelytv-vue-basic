import Days from '@/app/pages/Days/Days.vue'
import { renderComponent } from '@test/render-utils'
import { FIRST_DAY } from '../../../../services/__mocks__/gigs-sample'
import {screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

jest.mock('@/app/services/jota-api')

describe('Should allow', () => {

  it('navigating to first gig detail', async () => {
    const FIRST_GIG = FIRST_DAY.gigs[0]
    const navigateToGigSpy = jest.fn()
    const screen = await renderDays({navigateToGig: navigateToGigSpy})
    
    await screen.openGig(FIRST_GIG.title)

    expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG.id)
  })

  it('navigating to second gig detail', async () => {
    const SECOND_GIG = FIRST_DAY.gigs[1]
    const navigateToGigSpy = jest.fn()
    const screen = await renderDays({navigateToGig: navigateToGigSpy})
    
    await screen.openGig(SECOND_GIG.title)

    expect(navigateToGigSpy).toHaveBeenCalledWith(SECOND_GIG.id)
  })
})

async function renderDays(jotaRouterInstance) {
  await renderComponent(Days, {
    jotaRouter: ()=> jotaRouterInstance
  })
  const openGig = async title => userEvent.click((await screen.findByText(title)))
  
  return {...screen, openGig}
}