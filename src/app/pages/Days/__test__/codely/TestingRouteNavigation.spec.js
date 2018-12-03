import Days from '@/app/pages/Days/Days.vue'
import { mount } from '@vue/test-utils'
import { FIRST_DAY } from '../../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

describe('Days', () => {
  const navigateToGigSpy = jest.fn()
  let wrapper
  beforeEach(async () => {
    wrapper = mount(Days)
    wrapper.vm.jotaRouter.navigateToGig = navigateToGigSpy
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
