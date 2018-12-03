import { mount } from '@vue/test-utils'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import NewGigPage from '../../../../__page_objects__/NewGigPageObject'

jest.mock('@/app/services/jota-api')

describe('New Gig Form', () => {

  let wrapper, page
  beforeEach(() => {
    wrapper = mount(NewGig)
    page = new NewGigPage(wrapper)
  })

  describe('shows validation error', () => {

    it('when title is too short', () => {
      page.writeName(tooShortName())

      expect(page.text()).toContain('Minimum 5 characters.')
    })
  })
})

function tooShortName() {
  return nameWithLength(3)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}
