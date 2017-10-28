import { spanishDay } from '../app/services/date-utils'

const moment = require('moment')
require('moment/locale/es')

export function numberOfGigsToday(state) {
  let counter = 0
  state.days.forEach((day) => {
    counter += gigsWithDate(moment().format('YYYY-MM-DD'))(day)
  })
  return counter
}

export function numberOfGigsTodayWithReduce(state) {
  return state.days.reduce((total, day) => {
    return total + gigsWithDate(moment().format('YYYY-MM-DD'))(day)
  }, 0)
}

function gigsWithDate(today) {
  return (day) => {
    if (!day.gigs) return 0
    const daysOfToday = day.gigs.filter((gig) => gig.day === today)
    return daysOfToday.length
  }
}

export function gigsToday(state) {
  return state.days.find((day) => day.day.toUpperCase() === spanishDay().toUpperCase())
}
