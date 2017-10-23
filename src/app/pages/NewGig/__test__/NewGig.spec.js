import { mount } from 'vue-test-utils'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
import NewGigPage from '../../../__page_objects__/NewGigPage'
Vue.use(Vuelidate)
Vue.use(Quasar)

describe('New Gig', () => {

  let page, wrapper
  beforeEach(async () => {
    wrapper = mount(NewGig)
    page = new NewGigPage(wrapper)
  })

  it('matches full snapshot', async () => {
    page.matchSnapshot()
  })

  it('when validating name', async () => {
    console.log(page.text())

    page.writeName('abc')
    expect(page.text()).toContain('Minimum 5 characters.')
  })
})
