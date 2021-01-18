import FormButton from '@/app/shared-components/FormButton.vue'
import { renderComponent } from '@test/render-utils'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'

describe('When clicking', () => {

  it('calls callback if enabled', async () => {
    
    const clickSpy = jest.fn()
    const utils = renderComponent(FormButton, {
      props: {onClick: clickSpy},
      slots: {default: 'Click Me'}
    })
    
    userEvent.click(await utils.findByText(/Click me/i))
    
    expect(clickSpy).toHaveBeenCalled()
  })
  
  it('does not call callback if disabled', async () => {
    
    const clickSpy = jest.fn()
    const utils = renderComponent(FormButton, {
      props: {onClick: clickSpy, disabled: true},
      slots: {default: 'Click Me'}
    })
    
    expect(clickSpy).not.toHaveBeenCalled()
  })
})
