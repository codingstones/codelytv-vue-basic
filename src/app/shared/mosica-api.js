import { gigService } from '../services/mosica-instances'

export function retrieveDays() {
  return gigService.retrieveNextGigs()
}

export function createGig(params) {
  return Promise.resolve('success')
}
