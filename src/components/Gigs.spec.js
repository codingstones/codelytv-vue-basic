import { mount } from 'vue-test-utils'
import Gigs from '@/components/Gigs.vue'
import Vue from 'vue'

// jest.unmock('mosica-core')
import { sampleGigs } from '../../__mocks__/gigs-sample2'

describe('Gigs.vue', () => {
  it('displays a list of gigs from backend (jest manual mock)', async () => {
    const wrapper = mount(Gigs)
    await Vue.nextTick()
    wrapper.update()
    expect(wrapper.html()).toContain('kase-o')
  })

  it('displays a list of gigs from backend (explicitly injected mock)', async () => {
    const gigService = {retrieveNextGigs: () => Promise.resolve(sampleGigs)}
    const wrapper = mount(Gigs, {propsData: {gigService}})
    await Vue.nextTick()
    wrapper.update()
    expect(wrapper.html()).toContain('rapsus')
  })

  it('displays a list of gigs from backend (explicitly injected mock)', async () => {
    const gigService = {retrieveNextGigs: () => Promise.resolve(sampleGigs)}
    const wrapper = mount(Gigs, {propsData: {gigService}})
    await Vue.nextTick()
    wrapper.update()
    expect(wrapper.html()).toContain('rapsus')
  })
})
