import { fakeGigsByDay } from './gigs-sample'

class GigService {
  retrieveNextGigs() {
    return Promise.resolve(fakeGigsByDay)
  }
}

class Matcher {}

module.exports = { GigService, Matcher }
