export const FETCH_DAYS_REQUEST = 'fetchDaysRequest'
export const FETCH_DAYS_SUCCESS = 'fetchDaysSuccess'
export const FETCH_DAYS_ERROR = 'fetchDaysError'

export function fetchDaysRequest(state) {
  state.loading = true
  state.error = ''
}

export function fetchDaysSuccess(state, days) {
  state.loading = false
  state.days = days
  state.error = ''
}

export function fetchDaysError(state, error) {
  state.loading = false
  state.error = error
}
