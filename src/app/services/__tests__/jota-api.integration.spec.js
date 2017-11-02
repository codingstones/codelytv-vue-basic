import { retrieveDays } from '../jota-api'
import { isoToday } from '../date-utils'

describe('jota api integration', () => {

  it('Returns valid gigs', async () => {
    const days = await retrieveDays()
    expect(days instanceof Object).toBe(true)
    expect(days[isoToday()].gigs.length).toBeGreaterThan(0)
    // We should also check gig structure has not changed
  })
})
