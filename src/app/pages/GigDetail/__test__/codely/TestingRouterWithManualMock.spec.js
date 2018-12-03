import GigDetail from '@/app/pages/GigDetail/GigDetail.vue'
import { mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { FIRST_GIG } from '../../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

describe('Gig Detail', () => {

  it('renders details from a Gig with router after', async () => {
    const routerSpy = new VueRouter()
    const wrapper = mount(GigDetail, { router: routerSpy })
    await wait()
    expect(wrapper.text()).toContain(FIRST_GIG.title)
    expect(wrapper.text()).toContain(FIRST_GIG.place)
  })
})

function wait() {
  return new Promise(resolve => setImmediate(resolve))
}
