import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import { render } from '@testing-library/vue'

describe('LoadSpinner.vue', () => {

  it('shows loading', async () => {
    const {queryByText} = render(LoadSpinner, {props: { isLoading: false }})
    
    expect(queryByText(/Loading.../i)).not.toBeInTheDocument()
  })
  
  it('does not show loading', async () => {
    const {findByText} = render(LoadSpinner, {props: { isLoading: true }})
    
    expect(await findByText((/Loading.../i))).toBeInTheDocument()
  })
})
