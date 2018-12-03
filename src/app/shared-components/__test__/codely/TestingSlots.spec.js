import FormButton from '@/app/shared-components/FormButton.vue'
import { mount } from '@vue/test-utils'

describe('FormButton.vue', () => {

  it('renders label inside slot', () => {

    const SLOT_CONTENT = '<p>Any text</p>'
    const wrapper = mount(FormButton, {
      propsData: { label: 'SAVE' },
      slots: { default: SLOT_CONTENT }
    })

    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })
})
