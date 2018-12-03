import GigRow from '@/app/pages/Days/GigRow.vue'
import { mount } from '@vue/test-utils'

describe('GigRow', () => {

  it('renders gig content', async () => {

    const GIG = {id: 'an id', title: 'a title', place: 'a place'}

    const wrapper = mount(GigRow, { propsData: {gig: GIG} })

    expect(wrapper.text()).toContain('a title')
    expect(wrapper.text()).toContain('a place')
  })
})
