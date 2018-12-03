import { mount } from '@vue/test-utils'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import NewGigPage from '@/app/__page_objects__/NewGigPageObject'
import { silenceWatchers } from '../../../../../../test/helpers'

jest.mock('@/app/services/jota-api')

describe('New Gig Form', () => {

  let wrapper, page
  beforeEach(() => {
    silenceWatchers()
    wrapper = mount(NewGig)
    page = new NewGigPage(wrapper)
  })

  describe('shows validation error', () => {

    it('when title is too short', async () => {
      page.writeName(tooShortName())
      await page.wait()
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
