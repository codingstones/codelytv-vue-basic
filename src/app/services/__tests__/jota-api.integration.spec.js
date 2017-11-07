import { createGig, retrieveAGig, retrieveDays } from '../jota-api'
import { isoToday } from '../date-utils'
import { createGigPayload } from '../jota-payloads'

describe('jota api', () => {

  it('Returns valid gigs', async () => {
    const days = await retrieveDays()

    expect(days).toBeInstanceOf(Object)
    expect(days[isoToday()].gigs.length).toBeGreaterThan(0)
    // We should also check gig structure has not changed
  })

  it('Returns a gig by id', async () => {
    const gig = await retrieveAGig(1)

    expect(gig).toBeInstanceOf(Object)
    expect(typeof gig.title).toBe('string')
  })

  it('Creates a gig', async () => {
    const gig = await createGig(createGigPayload('a title', '2007-10-12T12:00'))

    expect(gig).toBeInstanceOf(Object)
    expect(typeof gig.title).toBe('string')
    expect(gig.title).toBe('a title')
    expect(gig.day).toBe('2007-10-12')
  })
})
