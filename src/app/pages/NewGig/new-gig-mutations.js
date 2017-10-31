export const CREATE_GIG_REQUEST = 'createGigRequest'
export const CREATE_GIG_SUCCESS = 'createGigSuccess'
export const CREATE_GIG_ERROR = 'createGigError'

export function createGigRequest(state) {
  state.loading = true
  state.error = ''
}

export function createGigSuccess(state, gig) {
  state.loading = false
  state.error = ''

  const existingDay = dayOfGigsFor(state, gig)
  if (existingDay) {
    existingDay.gigs.push(gig)
  }
  else {
    const newGig = { title: gig.title, datetime: gig.day }
    const newDay = { gigs: [newGig] }
    state.days[gig.day] = newDay
  }
}

export function createGigError(state, error) {
  state.loading = false
  state.error = error
}

function dayOfGigsFor(state, gig) {
  return state.days[gig.day]
}
