import NewGig from '@/app/pages/NewGig/NewGig.vue'
import { createGig as createGigSpy } from '@/app/services/jota-api'
import { createGigPayload } from '@/app/services/jota-payloads'
import { renderComponent, tomorrow, tomorrowDayOfMonth } from '@test/render-utils'
import userEvent from '@testing-library/user-event'
jest.mock('@/app/services/jota-api')

describe('When clicking save button', () => {
  it('calls backend with appropriate command', async () => {

      const {typeGigName, setGigDate,  findCreateGigButton} = await renderNewGig()
        
      typeGigName(nameWithValidLength())
      await setGigDate(tomorrowDayOfMonth())
      
      userEvent.click(await findCreateGigButton())
      expect(createGigSpy).toHaveBeenCalledWith(createGigPayload(nameWithValidLength(), tomorrow().toISOString()))
  })
})

async function renderNewGig() {
  const {screen} = renderComponent(NewGig)
  
  //it would be much better to use a label but for now q-input does not bind label with input
  // (we should modify q-input to force that binding or maybe using aria-label as a workaround)
  const nameInput = (await screen.findAllByRole('textbox'))[0]
  
  const typeGigName = (name)=> {
    userEvent.type(nameInput, name)
  }
  
  const setGigDate = async (dayText) => {
    userEvent.click(await screen.findByText(/Date and time/i))
    userEvent.click(await screen.findByText(dayText))
    userEvent.click(await screen.findByText(/set/i))
    //Wait for date set and rendered 
    await screen.findByText(/\//i)
  }
  
  const findCreateGigButton = async ()=> (await screen.findByText(/Create Gig/i)).closest('button')

  return {screen, typeGigName, setGigDate, findCreateGigButton}
}

function nameWithValidLength() {
  return nameWithLength(5)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}
