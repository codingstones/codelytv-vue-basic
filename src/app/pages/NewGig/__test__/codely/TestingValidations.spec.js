import { mount } from '@vue/test-utils'
import Vue from 'vue'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import TextInput from '@/app/shared-components/TextInput.vue'
import DateTimeInput from '@/app/shared-components/DateTimeInput.vue'

jest.mock('@/app/services/jota-api')

describe('New Gig Form', () => {

  let wrapper
  beforeEach(() => {
    wrapper = mount(NewGig)
  })

  describe('shows validation error', () => {

    it('when title is too short', () => {
      let input = wrapper.find(TextInput).find('input')

      input.element.value = tooShortName()
      input.trigger('input')

      expect(wrapper.text()).toContain('Minimum 5 characters.')
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
