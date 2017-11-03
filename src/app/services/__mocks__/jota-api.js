import { fakeGigsByDay, FIRST_GIG } from './gigs-sample'

const createGig = jest.fn((payload) => {
  return Promise.resolve(payload)
})

const retrieveAGig = jest.fn((gigId) => {
  return Promise.resolve(FIRST_GIG)
})

const retrieveDays = jest.fn(() => {
  return Promise.resolve(fakeGigsByDay)
})

module.exports = { createGig, retrieveDays, retrieveAGig }
