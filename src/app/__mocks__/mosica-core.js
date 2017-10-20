import { fakeGigsByDay } from './gigs-sample'
const mosicaCore = jest.genMockFromModule('mosica-core')

class GigService {
  retrieveNextGigs() {
    return Promise.resolve(fakeGigsByDay)
  }
}

mosicaCore.GigService = GigService
module.exports = mosicaCore
