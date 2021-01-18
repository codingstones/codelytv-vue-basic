import FormButton from '@/app/shared-components/FormButton.vue'
import { renderComponent } from '@test/render-utils'

describe('FormButton.vue', () => {
  it('renders label inside slot', async () => {
    
    const utils = renderComponent(FormButton, {
      slots: { default: '<span>CLICK ME</span>' }
    })
    
    expect(await utils.findByText(/click me/i)).toBeInTheDocument()
    
  })
})
