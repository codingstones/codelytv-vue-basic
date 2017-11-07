import { stubNow } from '../../../../test/helpers'
import { createGigPayload } from '../jota-payloads'

describe('jota payloads', () => {

  beforeEach(() => stubNow('2017-09-18'))

  it('Builds create Gig Payload', () => {
    const payload = createGigPayload('a title', '2017-09-18T19:32')

    expect(payload.title).toBe('a title')
    expect(payload.day).toBe('2017-09-18')
  })
})
