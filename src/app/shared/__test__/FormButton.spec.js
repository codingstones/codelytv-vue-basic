import FormButton from '@/app/shared/FormButton.vue'

describe('FormButton.vue', () => {

  it('renders label', () => {
    const wrapper = mountWithProps(FormButton, { label: 'SAVE' })

    expect(wrapper.text()).toContain('SAVE')
  })

  it('renders label', () => {
    const clickMock = jest.fn()
    const wrapper = mountWithProps(FormButton, { onClick: clickMock })

    wrapper.trigger('click')

    expect(clickMock).toHaveBeenCalled()
  })
})
