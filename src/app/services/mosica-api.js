import { gigService } from './mosica-instances'

export function retrieveDays() {
  return gigService.retrieveNextGigs()
}

export function createGig(payload) {
  return Promise.resolve(payload)
}

export function createGigPayload(title, dateTime) {
  return {
    title: title,
    day: dateTime.substring(0, 10),
    description: 'Fake gig created by mosica-api',
    place: 'Fake place'
  }
}
