import { mount } from '@vue/test-utils'
import Vue from 'vue'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import TextInput from '@/app/shared-components/TextInput.vue'
import DateTimeInput from '@/app/shared-components/DateTimeInput.vue'

jest.mock('@/app/services/jota-api')

describe('New Gig Form', () => {

  let wrapper
  beforeEach(() => {
    wrapper = mount(NewGig, { sync: false })
  })

  describe('shows validation error', () => {

    it('when title is too short', async () => {
      let input = wrapper.find(TextInput).find('input')

      input.element.value = tooShortName()
      input.trigger('input')
      await wait()

      expect(wrapper.text()).toContain('Minimum 5 characters.')
    })

    it('when datetime is in the past', async () => {
      const PAST_DATETIME = '1900/10/27'
      const datetimeInput = wrapper.find(DateTimeInput)

      datetimeInput.vm.change(PAST_DATETIME)
      await wait()

      expect(wrapper.text()).toContain('You cannot set a gig in a past date :(')
    })
  })
})

function tooShortName() {
  return nameWithLength(3)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}

function wait() {
  return Vue.nextTick()
}
