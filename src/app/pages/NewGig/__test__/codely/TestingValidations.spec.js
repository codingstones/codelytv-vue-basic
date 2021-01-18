import NewGig from '@/app/pages/NewGig/NewGig.vue'
import DateTimeInput from '@/app/shared-components/DateTimeInput.vue'
import { renderComponent, yesterdayDayOfMonth } from '@test/render-utils'
import userEvent from '@testing-library/user-event'
import Vue from 'vue'

jest.mock('@/app/services/jota-api')

describe('shows validation error', () => {

  it('when title is too short', async() => {
    const {typeGigName, screen} = await renderNewGig()
    
    typeGigName(tooShortName())

    expect(await screen.findByText('Minimum 5 characters.')).toBeInTheDocument()
  })

  it('when datetime is in the past', async () => {
      
    const {screen, setGigDate} = await renderNewGig()
    
    await setGigDate(yesterdayDayOfMonth())
    
    expect(await screen.findByText('You cannot set a gig in a past date :(')).toBeInTheDocument()
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

function tooShortName() {
  return nameWithLength(3)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}

function wait() {
  return Vue.nextTick()
}
