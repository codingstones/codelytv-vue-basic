import { gigService } from '../services/mosica-instances'
import { Gig } from '../services/MosicaCore'

export function retrieveDays() {
  return gigService.retrieveNextGigs()
}

export function createGig(params) {
  return Promise.resolve(buildGig(params))
}

function buildGig(params) {
  return new Gig({
    title: params.title,
    day: params.day.substring(0, 10),
    description: 'Fake gig created by mosica-api',
    place: 'Fake place'
  })
}
