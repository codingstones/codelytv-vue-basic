import { sampleGigs } from './gigs-sample'
const mosicaCore = jest.genMockFromModule('mosica-core')
import {SynchronousPromise} from 'synchronous-promise'

class GigService {
  retrieveNextGigs() {
    // return Promise.resolve(sampleGigs)
    //CREO QUE ESTO NO FUNCIONA PERO HABRIA QUE DARLE ALGUN PASE MAS
    return SynchronousPromise.resolve(sampleGigs)
  }
}

mosicaCore.GigService = GigService
module.exports = mosicaCore
