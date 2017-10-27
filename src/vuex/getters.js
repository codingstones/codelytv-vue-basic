const moment = require('moment')
require('moment/locale/es')

function gigsWithDate(today) {
  return (day) => {
    if (!day.gigs) return 0
    const daysOfToday = day.gigs.filter((gig) => gig.day === today)
    return daysOfToday.length
  }
}

export function gigsToday(state) {
  let counter = 0
  state.days.forEach((day) => {
    counter += gigsWithDate('2017-09-18')(day)
  })
  return counter
}

export function gigsTodayWithReduce(state) {
  return state.days.reduce((total, day) => {
    return total + gigsWithDate(moment().format('YYYY-MM-DD'))(day)
  }, 0)
}
