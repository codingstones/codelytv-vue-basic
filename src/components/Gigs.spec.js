import { mount } from 'vue-test-utils'
import Gigs from '@/components/Gigs.vue'
import Vue from 'vue'

//jest.unmock('mosica-core')
import * as mosicaCore from 'mosica-core'
import { sampleGigs } from '../../__mocks__/gigs-sample';

describe('Gigs.vue', () => {
  it('displays a list of gigs from backend', async () => {
    const wrapper = mount(Gigs)
    await Vue.nextTick()
    wrapper.update()
    expect(wrapper.html()).toContain('kase-o')
  })
})
