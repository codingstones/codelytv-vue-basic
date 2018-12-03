import GigDetail from '@/app/pages/GigDetail/GigDetail.vue'
import { mount } from '@vue/test-utils'
import { FIRST_GIG } from '../../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

describe('Gig Detail', () => {

  it('renders details from a Gig (WITH async/await)', async () => {
    const wrapper = mount(GigDetail)
    await wait()

    expect(wrapper.text()).toContain(FIRST_GIG.title)
    expect(wrapper.text()).toContain(FIRST_GIG.place)
  })

  it('renders details from a Gig (WITHOUT async/await)', () => {
    const wrapper = mount(GigDetail)
    return wait().then(() => {
      expect(wrapper.text()).toContain(FIRST_GIG.title)
      expect(wrapper.text()).toContain(FIRST_GIG.place)
    })
  })
})

function wait() {
  return new Promise(resolve => setImmediate(resolve))
}
