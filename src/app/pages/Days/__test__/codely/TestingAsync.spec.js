import Days from '@/app/pages/Days/Days.vue'
import { mount } from 'vue-test-utils'
import { FIRST_DAY } from '../../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

xdescribe('Days', () => {
  const FIRST_DAY_GIG_TITLES = FIRST_DAY.gigs.map(gig => gig.title)
  console.log('WOWOWWO', FIRST_DAY_GIG_TITLES)

  let wrapper
  beforeEach(async () => {
    wrapper = mount(Days)
  })

  it('renders all gigs in the first day', async() => {
    FIRST_DAY_GIG_TITLES.map((text) => expect(wrapper.contains(text)).toBeTruthy())
  })
})
