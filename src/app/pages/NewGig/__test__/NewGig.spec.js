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
  beforeEach(() => {
    wrapper = mount(NewGig)
    page = new NewGigPage(wrapper)
  })

  // it('matches full snapshot', async () => {
  //   page.matchSnapshot()
  // })

  describe('when validating name', () => {

    it('and name is empty', async () => {
      await page.dirtyValidation()
      expect(page.text()).toContain('required')
    })

    it('and name has 4 characters (async)', async() => {
      page.writeNameAsync(nameWithLength(4))
      await page.flushPromises()
      expect(page.text()).toContain('Minimum 5 characters.')
    })

    it('and name has 4 characters', () => {
      page.writeName(nameWithLength(4))
      expect(page.text()).toContain('Minimum 5 characters.')
    })

    it('and name has 21 characters', () => {
      page.writeName(nameWithLength(21))
      expect(page.text()).toContain('Maximum 20 characters.')
    })
  })

  describe('when validating datetime', () => {
    it('and name is empty', async () => {
      await page.dirtyValidation()
      expect(page.text()).toContain('required')
    })
  })
})

function nameWithLength(length) {
  return 'x'.repeat(length)
}
