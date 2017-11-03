import { mount } from 'vue-test-utils'
import GigsTomorrow from '@/app/pages/GigsTomorrow/GigsTomorrow.vue'
import { fakeGigsByDay, FIRST_DAY } from '../../../services/__mocks__/gigs-sample'
import PageObject from '../../../__page_objects__/PageObject'
import { cloneProductionStore, stubNow } from '../../../../../test/helpers'

describe('Gigs Tomorrow', () => {
  const FIRST_DAY_GIG_TITLES = FIRST_DAY.gigs.map(gig => gig.title)

  let page

  it('renders all gigs in the first day', async () => {
    stubNow('2017-09-17')
    page = await mountPage()
    FIRST_DAY_GIG_TITLES.map((text) => page.contains(text))
  })

  it('renders all gigs in the first day', async () => {
    stubNow('2017-09-16')
    page = await mountPage()
    page.contains("No gigs for today, why don't you go to the cinema?")
  })
})

async function mountPage() {
  const store = cloneProductionStore()
  store.state.days = fakeGigsByDay
  const wrapper = mount(GigsTomorrow, {store})
  return new PageObject(wrapper)
}
