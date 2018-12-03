import Vue from 'vue'
import { mount } from '@vue/test-utils'
import NewGig from '@/app/pages/NewGig/NewGig.vue'
import TextInput from '@/app/shared-components/TextInput.vue'
import DateTimeInput from '@/app/shared-components/DateTimeInput.vue'
import FormButton from '@/app/shared-components/FormButton.vue'
import { createGig as createGigSpy } from '@/app/services/jota-api'
import { createGigPayload } from '@/app/services/jota-payloads'
jest.mock('@/app/services/jota-api')

describe('New Gig Form', () => {
  const FUTURE_DATETIME = '3000/10/27'

  let wrapper
  beforeEach(() => {
    wrapper = mount(NewGig, { sync: false })
  })

  describe('When clicking save button', async () => {
    beforeEach(async () => {
      // Write valid title
      let input = wrapper.find(TextInput)
      input.vm.change(nameWithValidLength())

      // Select valid datetime
      const datetimeInput = wrapper.find(DateTimeInput)
      datetimeInput.vm.change(FUTURE_DATETIME)

      await wait()

      // Click save button
      wrapper.find(FormButton).trigger('click')

      await wait()
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

function nameWithLength(length) {
  return 'x'.repeat(length)
}

function wait() {
  return new Promise(resolve => setImmediate(resolve))

  // return Vue.nextTick()
}
