import { gigService } from './mosica-instances'

export function retrieveDays() {
  return gigService.retrieveNextGigs()
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function createGig(payload) {
  return delay(1000).then(() => payload)
}
