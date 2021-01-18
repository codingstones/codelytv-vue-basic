import GigDetail from '@/app/pages/GigDetail/GigDetail.vue'
import { renderComponent } from '@test/render-utils'
import { createFakeGig } from '../../../../services/__mocks__/create-fake-gig'

test('renders details from a Gig', async () => {
  const GIG = createFakeGig()
  const retrieveAGigStub = jest.fn(() => Promise.resolve(GIG))
  const router = {currentRoute : {params: {id: GIG.id}}}

  const {screen} = renderComponent(GigDetail, 
    {
      props: {retrieveAGig: retrieveAGigStub},
      router
    } )
  
  expect(await screen.findByText(GIG.title)).toBeInTheDocument()
  expect(await screen.findByText(GIG.place)).toBeInTheDocument()
})

