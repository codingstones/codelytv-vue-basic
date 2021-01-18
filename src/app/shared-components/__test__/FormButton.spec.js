import FormButton from '@/app/shared-components/FormButton.vue'
import { renderComponent } from '@test/render-utils'
import userEvent from '@testing-library/user-event'

describe('FormButton.vue', () => {

  const SLOT_CONTENT = 'click me'

  it('renders label', async () => {

    const {findByText} = renderComponent(FormButton, {
      props: {isLoading: false, disabled: false}, 
      slots: {default: SLOT_CONTENT}
    })

    expect(await findByText(SLOT_CONTENT)).toBeInTheDocument()
  })

  describe('When clicking', () => {

    it('calls callback if enabled', async () => {
      const clickSpy = jest.fn()
      const {findByText} = renderComponent(FormButton, {
        props: {isLoading: false, disabled: false, onClick: clickSpy}, 
        slots: {default: SLOT_CONTENT}
      })

     userEvent.click(await findByText(SLOT_CONTENT))

      expect(clickSpy).toHaveBeenCalled()
    })

    it('does not call callback if disabled', async () => {
      const clickSpy = jest.fn()
      const {findByText} = renderComponent(FormButton, {
        props: {isLoading: false, disabled: true, onClick: clickSpy}, 
        slots: {default: SLOT_CONTENT}
      })

     userEvent.click(await findByText(SLOT_CONTENT))

      expect(clickSpy).not.toHaveBeenCalled()
    })
  })
})
