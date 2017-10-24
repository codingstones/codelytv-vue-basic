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

  describe('shows validation error', () => {

    describe('when validating name', () => {

      it('and name is cleared', async () => {
        page.dirtyValidation()
        await page.flushPromises()
        expect(page.text()).toContain('Name is required')
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
      it('and datetime is cleared', async () => {
        page.dirtyValidation()
        await page.flushPromises()
        expect(page.text()).toContain('Date and time of gig are required.')
      })

      it('and datetime is in the past', async () => {
        page.writeDatetime('1900/10/27')
        await page.flushPromises()
        expect(page.text()).toContain('You cannot set a gig in a past date :(')
      })
    })

    describe('does not show validation error', () => {
      it('and datetime is in the future', async () => {
        page.writeDatetime('3000/10/27')
        await page.flushPromises()
        expect(page.hasDatetimeError()).toBe(false)
      })

      it('and name has 5 characters', async() => {
        page.writeNameAsync(nameWithLength(5))
        await page.flushPromises()
        expect(page.hasNameError()).toBe(false)
      })
    })
  })
})

function nameWithLength(length) {
  return 'x'.repeat(length)
}
