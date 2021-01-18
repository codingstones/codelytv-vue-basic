import GigDetail from '@/app/pages/GigDetail/GigDetail.vue'
import { renderComponent } from '@test/render-utils'
import { FIRST_GIG } from '../../../services/__mocks__/gigs-sample'

jest.mock('@/app/services/jota-api')

describe('Gig Detail', () => {

  it('renders details from a Gig', async () => {
    const router = {currentRoute : {params: {id: FIRST_GIG.id}}}

    const {findByText} = await renderComponent(GigDetail, {router})
    
    expect(await findByText(FIRST_GIG.title)).toBeInTheDocument()
    expect(await findByText(FIRST_GIG.place)).toBeInTheDocument()
  })
})
