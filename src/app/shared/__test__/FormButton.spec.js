import FormButton from '@/app/shared/FormButton.vue'

describe('FormButton.vue', () => {

  it('renders label', () => {

    const SLOT_CONTENT = '<p>Any text</p>'
    const wrapper = mountWithProps(FormButton, { label: 'SAVE' }, {default: SLOT_CONTENT})

    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })

  it('renders label', () => {
    const clickMock = jest.fn()
    const wrapper = mountWithProps(FormButton, { onClick: clickMock })

    wrapper.trigger('click')

    expect(clickMock).toHaveBeenCalled()
  })
})
