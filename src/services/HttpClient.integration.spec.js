import {HttpClient} from './HttpClient'
import fetchJsonp from 'fetch-jsonp'

const GIGS_URL = 'http://www.mosica.es/api/1/gigs'

describe('HttpClient', () => {
  it('returns a list of gigs', async() => {
    const httpClient = new HttpClient(fetchJsonp)

    const gigs = await httpClient.get(GIGS_URL)

    expect(gigs.length).toBeGreaterThan(0)
    expect(gigs[0].day).toBeDefined()
    expect(gigs[0].gigs.length).toBeGreaterThan(0)
  })
})
