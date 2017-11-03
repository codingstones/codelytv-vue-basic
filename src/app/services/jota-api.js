import { gigService } from './jota-instances'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function retrieveDays() {
  return delay(1500).then(() => gigService.retrieveNextGigs())
}

export function retrieveAGig(gigId) {
  return delay(5000).then(() => gigService.retrieveAGig(gigId))
}

export function createGig(payload) {
  return delay(1000).then(() => payload)
}
