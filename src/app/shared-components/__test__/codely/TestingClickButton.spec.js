import FormButton from '@/app/shared-components/FormButton.vue'
import { mount } from '@vue/test-utils'

describe('FormButton.vue', () => {

  describe('When clicking', () => {

    let clickSpy
    beforeEach(() => {
      clickSpy = jest.fn()
    })

    it('calls callback if enabled', () => {

      const wrapper = mount(FormButton, {
        propsData: {onClick: clickSpy}
      })

      wrapper.trigger('click')

      expect(clickSpy).toHaveBeenCalled()
    })

    it('does not call callback if disabled', () => {
      const wrapper = mount(FormButton, {
        propsData: { onClick: clickSpy, disabled: true }
      })

      wrapper.trigger('click')

      expect(wrapper.html()).toContain('disable')
      expect(clickSpy).not.toHaveBeenCalled()
    })
  })
})
