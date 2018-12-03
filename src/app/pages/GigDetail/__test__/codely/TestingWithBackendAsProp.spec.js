import GigDetail from '@/app/pages/GigDetail/GigDetail.vue'
import { mount } from '@vue/test-utils'
import { createFakeGig } from '../../../../services/__mocks__/create-fake-gig'

describe('Gig Detail', () => {

  it('renders details from a Gig', async () => {
    const GIG = createFakeGig()
    const retrieveAGigStub = jest.fn(() => Promise.resolve(GIG))

    const wrapper = mount(GigDetail, { propsData: {retrieveAGig: retrieveAGigStub} })
    await wait()

    expect(wrapper.text()).toContain(GIG.title)
    expect(wrapper.text()).toContain(GIG.place)
  })
})

function wait() {
  return new Promise(resolve => setImmediate(resolve))
}
