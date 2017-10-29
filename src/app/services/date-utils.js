const moment = require('moment')
require('moment/locale/es')
const ISO_FORMAT = 'YYYY-MM-DD'

export function isoToday() {
  return moment().format(ISO_FORMAT)
}

export function isoTomorrow() {
  return moment().add(1, 'days').format(ISO_FORMAT)
}

export function spanishToday() {
  return toSpanish(moment())
}

export function spanishTomorrow() {
  return toSpanish(moment().add(1, 'days'))
}

export function spanishFromIso(isoDate) {
  return toSpanish(moment(isoDate, ISO_FORMAT))
}

function toSpanish(date) {
  return capitalize(date.format('dddd, DD [de] MMMM')).replace(' De ', ' de ')
}

function capitalize(date) {
  return date.replace(/\b\w/g, l => l.toUpperCase())
}
