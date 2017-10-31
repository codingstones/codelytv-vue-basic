import { retrieveDays } from '../mosica-api'
import { isoToday } from '../date-utils'

describe('mosica api integration', () => {

  it('Returns valid gigs', async () => {
    const days = await retrieveDays()
    // aconsole.log(JSON.stringify(days))
    expect(days instanceof Object).toBe(true)
    expect(days[isoToday()].gigs.length).toBeGreaterThan(0)
    // We should also check gig structure has not changed
  })
})
