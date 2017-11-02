import { gigService } from './jota-instances'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function retrieveDays() {
  return delay(2000).then(() => gigService.retrieveNextGigs())
}

export function createGig(payload) {
  return delay(1000).then(() => payload)
}
