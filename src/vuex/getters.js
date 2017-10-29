import { isoToday, isoTomorrow, spanishToday, spanishTomorrow } from '../app/services/date-utils'

export function numberOfGigsToday(state) {
  return numberOfGigsForDateWithReduce(isoToday())(state)
}

export function numberOfGigsTomorrow(state) {
  return numberOfGigsForDateWithReduce(isoTomorrow())(state)
}

function numberOfGigsForDateWithReduce(date) {
  return (state) => {
    return state.days.reduce((total, day) => {
      return total + numberOfGigsInADay(date)(day)
    }, 0)
  }
}

function numberOfGigsInADay(date) {
  return (day) => {
    if (!day.gigs) return 0
    const daysOfToday = day.gigs.filter((gig) => gig.day === date)
    return daysOfToday.length
  }
}

export function gigsToday(state) {
  return state.days.find((day) => day.day.toUpperCase() === spanishToday().toUpperCase())
}

export function gigsTomorrow(state) {
  return state.days.find((day) => day.day.toUpperCase() === spanishTomorrow().toUpperCase())
}
