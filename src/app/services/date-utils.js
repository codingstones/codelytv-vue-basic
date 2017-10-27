const moment = require('moment')
require('moment/locale/es')

export function spanishDay() {
  return moment().format('dddd, DD [de] MMMM')
}
