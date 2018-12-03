import Days from '@/app/pages/Days/Days.vue'
import { mount } from '@vue/test-utils'
import { FIRST_DAY } from '../../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

describe('Days', () => {

  let wrapper
  beforeEach(async () => {
    wrapper = mount(Days)
  })

  it('renders all gigs titles for the first day of gigs', async() => {
    FIRST_DAY.gigs.map((text) => expect(wrapper.text()).toContain(text.title))
  })
})
