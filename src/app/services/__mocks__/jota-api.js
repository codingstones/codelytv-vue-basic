// function createGig(payload) {
//   return Promise.resolve(payload)
// }

import { fakeGigsByDay } from './gigs-sample'

const createGigStub = jest.fn((payload) => {
  return Promise.resolve(payload)
})

const retrieveDaysStub = jest.fn(() => {
  return Promise.resolve(fakeGigsByDay)
})

module.exports = { createGig: createGigStub, retrieveDays: retrieveDaysStub }
