import GigDetail from '@/app/pages/GigDetail/GigDetail.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { mount } from 'vue-test-utils'
import { FIRST_GIG } from '../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')
jest.mock('@/app/services/JotaRouter')

Vue.use(VueRouter)

describe('Days', () => {

  it('renders details from a Gig', async () => {
    const wrapper = mount(GigDetail)
    await wait()
    expect(wrapper.text()).toContain(FIRST_GIG.title)
    expect(wrapper.text()).toContain(FIRST_GIG.place)
  })
})

function wait() {
  return new Promise(resolve => setImmediate(resolve))
}
