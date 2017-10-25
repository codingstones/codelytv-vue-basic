export const CREATE_GIG_REQUEST = 'createDaysRequest'
export const CREATE_GIG_SUCCESS = 'createDaysSuccess'
export const CREATE_GIG_ERROR = 'createDaysError'

export function createGigRequest(state) {
  state.loading = true
  state.error = ''
}

export function createGigSuccess(state, gig) {
  state.loading = false
  const newGig = { name: gig.title, datetime: gig.day }
  const newDay = {day: gig.day, gigs: [newGig]}
  state.days.push(newDay)
  state.error = ''
}

export function createGigError(state, error) {
  state.loading = false
  state.error = error
}
