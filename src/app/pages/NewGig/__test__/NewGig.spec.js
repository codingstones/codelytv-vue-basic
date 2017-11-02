import { mount } from 'vue-test-utils'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import NewGigPage from '../../../__page_objects__/NewGigPageObject'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import Vuex from 'vuex'
// We mock mosica-api module
import { createGig as createGigSpy } from '../../../services/mosica-api'
jest.mock('../../../services/mosica-api')
import { createGigPayload } from '../../../services/mosica-payloads'
import VueRouter from 'vue-router'

describe('New Gig', () => {

  const PAST_DATETIME = '1900/10/27'
  const FUTURE_DATETIME = '3000/10/27'

  let page, wrapper
  beforeEach(() => {
    wrapper = mount(NewGig, { store: cloneProductionStore() })
    page = new NewGigPage(wrapper)
  })

  // it('matches full snapshot', async () => {
  //   page.matchSnapshot()
  // })

  describe('shows validation error', () => {

    describe('when validating title', () => {

      it('and title is cleared', async () => {
        page.dirtyValidation()
        await page.wait()
        expect(page.text()).toContain('Name is required')
      })

      it('and title is too short (async)', async() => {
        page.writeNameAsync(tooShortName())
        await page.wait()
        expect(page.text()).toContain('Minimum 5 characters.')
      })

      it('and title is too short', () => {
        page.writeName(tooShortName())
        expect(page.text()).toContain('Minimum 5 characters.')
      })

      it('and title is too long', () => {
        page.writeName(tooLongName())
        expect(page.text()).toContain('Maximum 20 characters.')
      })
    })

    describe('when validating datetime', () => {
      it('and datetime is cleared', async () => {
        page.dirtyValidation()
        await page.wait()
        expect(page.text()).toContain('Date and time of gig are required.')
      })

      it('and datetime is in the past', async () => {
        page.writeDatetime(PAST_DATETIME)
        await page.wait()
        expect(page.text()).toContain('You cannot set a gig in a past date :(')
      })
    })

    describe('does not show validation error', () => {
      it('and datetime is in the future', async () => {
        page.writeDatetime(FUTURE_DATETIME)
        await page.wait()
        expect(page.hasDatetimeError()).toBe(false)
      })

      it('and title has valid length', async() => {
        page.writeNameAsync(nameWithValidLength())
        await page.wait()
        expect(page.hasNameError()).toBe(false)
      })
    })
  })

  describe('save button', () => {
    it('is disabled by default', async () => {
      expect(page.isSaveButtonDisabled()).toBe(true)
    })

    it('is disabled when form not fully filled', async () => {
      page.writeNameAsync(nameWithValidLength())
      await page.wait()
      expect(page.isSaveButtonDisabled()).toBe(true)
    })

    it('is disabled when form has errors', async () => {
      page.writeNameAsync(tooShortName())
      page.writeDatetime(PAST_DATETIME)
      await page.wait()
      expect(page.isSaveButtonDisabled()).toBe(true)
    })

    it('is enabled when form is fully filled without errors', async () => {
      page.writeNameAsync(nameWithValidLength())
      page.writeDatetime(FUTURE_DATETIME)
      await page.wait()
      expect(page.isSaveButtonDisabled()).toBe(false)
    })
  })

  it('creates a GIG in the store when save button is clicked', async () => {
    let actionSpy = jest.fn()
    let store = new Vuex.Store({
      state: {days: [], loading: false},
      actions: { create_gig: actionSpy }
    })
    wrapper = mount(NewGig, { store, router: new VueRouter() })
    page = new NewGigPage(wrapper, {store})

    page.writeNameAsync(nameWithValidLength())
    page.writeDatetime(FUTURE_DATETIME)
    await page.wait()
    page.clickSaveButton()

    expect(actionSpy).toHaveBeenCalled()
  })

  describe('When clicking save button', async () => {
    let store
    beforeEach(async () => {
      store = cloneProductionStore()
      wrapper = Wrap(NewGig).withStore(store).mount()
      page = new NewGigPage(wrapper)

      expect(store.state.days).toEqual({})

      page.writeNameAsync(nameWithValidLength())
      page.writeDatetime(FUTURE_DATETIME)
      await page.wait()
      page.clickSaveButton()
      await page.wait()
    })
    it('creates a GIG in the store', async () => {
      expect(store.state.days[FUTURE_DATETIME]).toBeDefined()
    })
    it('navigates to all gigs route', async () => {
      page.checkCurrentPath(store, '/all')
    })

    it('calls backend with appropriate command', async () => {
      // This will be also tested in happy path but in this integration tests we can check all strange cases
      // faster and cheaper
      expect(createGigSpy).toHaveBeenCalledWith(createGigPayload(nameWithValidLength(), FUTURE_DATETIME))
    })
  })
})

function nameWithValidLength() {
  return nameWithLength(5)
}

function tooShortName() {
  return nameWithLength(3)
}

function tooLongName() {
  return nameWithLength(21)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}
