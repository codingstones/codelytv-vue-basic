import { fakeGigsByDay } from '../services/__mocks__/gigs-sample'

export function retrieveDays() {
  return Promise.resolve(fakeGigsByDay)
}

export function createGig(params) {
  console.log('creating gig with params', params)
  return Promise.resolve('success')
}
