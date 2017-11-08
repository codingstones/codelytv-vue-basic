import GigRow from '@/app/pages/Days/GigRow.vue'
import { Wrap } from '../../../../../../test/helpers'

describe('GigRow', () => {

  it('renders gig content', async () => {

    const GIG = {id: 'an id', title: 'a title', place: 'a place'}

    const wrapper = Wrap(GigRow).withProps({ gig: GIG }).mount()

    expect(wrapper.text()).toContain('a title')
    expect(wrapper.text()).toContain('a place')
  })
})
