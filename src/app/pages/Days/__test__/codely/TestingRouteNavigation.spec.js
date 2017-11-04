import Days from '@/app/pages/Days/Days.vue'
import { mount } from 'vue-test-utils'
import { FIRST_DAY } from '../../../../services/__mocks__/gigs-sample'
import { JotaRouter } from '../../../../services/JotaRouter'

jest.mock('@/app/services/jota-api')
jest.mock('@/app/services/JotaRouter')

describe('Days', () => {
  const navigateToGigSpy = JotaRouter().navigateToGig
  let wrapper
  beforeEach(async () => {
    wrapper = mount(Days)
  })

  describe('When clicking buttons', () => {

    it('navigates to first gig detail', async () => {
      const FIRST_GIG = FIRST_DAY.gigs[0]
      clickGig(wrapper, 0)
      expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG.id)
    })

    it('navigates to second gig detail', async () => {
      const SECOND_GIG = FIRST_DAY.gigs[1]
      clickGig(wrapper, 1)
      expect(navigateToGigSpy).toHaveBeenCalledWith(SECOND_GIG.id)
    })
  })
})

// Feature Envy （ ´_⊃｀）
function clickGig(wrapper, position) {
  wrapper.findAll('.q-item').at(position).trigger('click')
}
