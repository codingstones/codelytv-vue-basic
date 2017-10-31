import { isoToday, isoTomorrow } from '../app/services/date-utils'

export function numberOfGigsToday(state) {
  return numberOfGigsFor(isoToday())(state)
}

export function numberOfGigsTomorrow(state) {
  return numberOfGigsFor(isoTomorrow())(state)
}

function numberOfGigsFor(date) {
  return (state) => {
    if (!state.days[date]) return 0
    return state.days[date].gigs.length
  }
}

export function gigsToday(state) {
  return state.days[isoToday()]
}

export function gigsTomorrow(state) {
  return state.days[isoTomorrow()]
}
