import { fakeGigsByDay } from './gigs-sample'
const mosicaCore = jest.genMockFromModule('mosica-core')
import {SynchronousPromise} from 'synchronous-promise'

class GigService {
  retrieveNextGigs() {
    // return Promise.resolve(fakeGigsByDay)
    //CREO QUE ESTO NO FUNCIONA PERO HABRIA QUE DARLE ALGUN PASE MAS
    return SynchronousPromise.resolve(fakeGigsByDay)
  }
}

mosicaCore.GigService = GigService
module.exports = mosicaCore
