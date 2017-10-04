import { mount } from 'vue-test-utils'
import GigsContainer from '@/components/GigsContainer.vue'

// jest.unmock('mosica-core')
import { fakeGigsByDay } from '../../../__mocks__/gigs-sample'
import { fakeGigsByDay2 } from '../../../__mocks__/gigs-sample2'
import GigsContainerPO from '../__page_objects__/GigsContainerPO'

describe('GigsContainer with async load', () => {
  let container, wrapper
  beforeEach(async () => {
    wrapper = mount(GigsContainer)
    container = new GigsContainerPO(wrapper)
    await container.updateAsync()
  })

  it('displays a list of gigs from backend (jest manual mock)', async () => {
    expect(wrapper.html()).toContain('Anarchy in the JS')
  })

  it('shows days', async () => {
    const DAYS = fakeGigsByDay.map((day) => day.day)
    expect(container.dayTexts()).toEqual(DAYS)
  });

  it('shows gigs for each day', async () => {
    //IS THIS TEST WORTHY? Maybe easier to unit-test components
    let expectedGigs
    fakeGigsByDay.map((day, index) => {
      expectedGigs = day.gigs.map((gig) => gig.title + ' - ' + gig.place)
      expect(container.gigRowsFor(index)).toEqual(expectedGigs)
    })
  })

  it('displays a list of gigs from backend (explicitly injected mock)', async () => {
    const gigService = {retrieveNextGigs: () => Promise.resolve(fakeGigsByDay2)}
    const wrapper = mount(GigsContainer, {propsData: {gigService}})
    container = new GigsContainerPO(wrapper)
    await container.updateAsync()
    expect(wrapper.html()).toContain('rapsus')
  })
})
