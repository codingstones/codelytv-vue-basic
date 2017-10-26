export const CREATE_GIG_REQUEST = 'createGigRequest'
export const CREATE_GIG_SUCCESS = 'createGigSuccess'
export const CREATE_GIG_ERROR = 'createGigError'

export function createGigRequest(state) {
  state.loading = true
  state.error = ''
}

export function createGigSuccess(state, gig) {
  state.loading = false
  const newGig = { title: gig.title, datetime: gig.day }
  const newDay = {day: gig.day, gigs: [newGig]}
  state.days.push(newDay)
  state.error = ''
}

export function createGigError(state, error) {
  state.loading = false
  state.error = error
}
