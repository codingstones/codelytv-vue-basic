import { gigService } from './jota-instances'

let fakeDays = gigService.retrieveNextGigs()

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function retrieveDays() {
  return delay(1500).then(() => fakeDays)
}

export function retrieveAGig(gigId) {
  return delay(1000).then(() => gigService.retrieveAGig(gigId))
}

export function createGig(payload) {
  addGigToFakeSample(payload)
  return delay(1000).then(() => payload)
}

function addGigToFakeSample(gig) {
  if (fakeDays[gig.day]) {
    fakeDays[gig.day].gigs.unshift(gig)
  }
  else {
    fakeDays[gig.day] = { date: gig.day, gigs: [gig] }
  }
}
