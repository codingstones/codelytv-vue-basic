import FormButton from '@/app/shared/FormButton.vue'

describe('FormButton.vue', () => {

  it('renders label', () => {

    const SLOT_CONTENT = '<p>Any text</p>'
    const wrapper = mountWithProps(FormButton, {label: 'SAVE'}, {default: SLOT_CONTENT})

    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })

  describe('When clicking', () => {

    let clickSpy = jest.fn()
    beforeEach(() => {
      clickSpy = jest.fn()
    })

    it('calls callback if enabled', () => {
      const wrapper = mountWithProps(FormButton, {onClick: clickSpy})

      wrapper.trigger('click')

      expect(clickSpy).toHaveBeenCalled()
    })

    it('does not call callback if disabled', () => {
      const wrapper = mountWithProps(FormButton, {disabled: true, onClick: clickSpy})

      wrapper.trigger('click')

      expect(wrapper.html()).toContain('disable')
      expect(clickSpy).not.toHaveBeenCalled()
    })
  })
})
