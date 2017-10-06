import LoadSpinner from '@/app/shared/LoadSpinner.vue'

describe('LoadSpinner.vue', () => {

  it('keeps snapshot when is loading', () => {
    keepsSnapshot(LoadSpinner, { isLoading: true })
  })

  it('keeps snapshot when is NOT loading', () => {
    keepsSnapshot(LoadSpinner, { isLoading: false })
  })

  it('shows loading', () => {
    const wrapper = mountWithProps(LoadSpinner, { isLoading: false })
    expect(wrapper.text()).not.toContain('Loading...')
  })

  it('does not show loading', () => {
    const wrapper = mountWithProps(LoadSpinner, { isLoading: true })
    expect(wrapper.text()).toContain('Loading...')
  })
})
