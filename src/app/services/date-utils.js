const moment = require('moment')
require('moment/locale/es')

export function isoToday() {
  return moment().format('YYYY-MM-DD')
}

export function isoTomorrow() {
  return moment().add(1, 'days').format('YYYY-MM-DD')
}

export function spanishToday() {
  return toSpanish(moment())
}

export function spanishTomorrow() {
  return toSpanish(moment().add(1, 'days'))
}

function toSpanish(date) {
  return date.format('dddd, DD [de] MMMM')
}
