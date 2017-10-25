import { fakeGigsByDay } from '../__mocks__/gigs-sample'

export function retrieveDays() {
  return Promise.resolve(fakeGigsByDay)
}

export function createGig() {
  return Promise.resolve('success')
}
