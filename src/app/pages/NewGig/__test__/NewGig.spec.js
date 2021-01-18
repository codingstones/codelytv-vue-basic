import NewGig from '@/app/pages/NewGig/NewGig.vue'
import userEvent from '@testing-library/user-event'
import { createGig as createGigSpy } from '../../../services/jota-api'
jest.mock('@/app/services/jota-api')
import { createGigPayload } from '../../../services/jota-payloads'
import { renderComponent, sleep, tomorrow, tomorrowDayOfMonth, yesterdayDayOfMonth } from '@test/render-utils'
import { fireEvent } from '@testing-library/vue'

describe('shows validation error', () => {

  describe('when validating title', () => {

    xit('and title is cleared', async () => {
      const {typeGigName, clearGigName, findByText, findAllByRole, findByTestId} = await renderNewGig()
      typeGigName('a')
      clearGigName()
      sleep(1000)
      // typeGigName({keyCode: '46'})
      const input = (await findAllByRole('textbox'))[0]
      
      console.log('after clear', input)
      console.log('after clear value', input.value)

      // console.log(await (await findByTestId('debug')).innerHTML)

      expect(await findByText('Name is required')).toBeInTheDocument()
    })
    
    it('and title is too short', async() => {
      const {typeGigName, screen} = await renderNewGig()
      
      typeGigName(tooShortName())

      expect(await screen.findByText('Minimum 5 characters.')).toBeInTheDocument()
    })

    it('and title is too long', async () => {
      const {typeGigName, screen} = await renderNewGig()
      
      typeGigName(tooLongName())

      expect(await screen.findByText('Maximum 20 characters.')).toBeInTheDocument()
    })
  })

  describe('when validating datetime', () => {
    it('and datetime is cleared', async () => {
  
      const {screen, setGigDate, clearGigDate} = await renderNewGig()
      
      await setGigDate(tomorrowDayOfMonth())
      
      await clearGigDate()
      
      expect(await screen.findByText('Date and time of gig are required.')).toBeInTheDocument()
    })
    
    it('and datetime is in the past', async () => {
      
      const {screen, setGigDate} = await renderNewGig()
      
      await setGigDate(yesterdayDayOfMonth())
      
      expect(await screen.findByText('You cannot set a gig in a past date :(')).toBeInTheDocument()
    })
  })
})

describe('Create Gig button', () => {
  it('is disabled by default', async () => {
  
    const {findCreateGigButton} = await renderNewGig()

    expect(await findCreateGigButton()).toHaveClass('disabled')
  })
  
  it('is disabled when form not fully filled', async () => {
    const {typeGigName, findCreateGigButton} = await renderNewGig()
    
    typeGigName(nameWithValidLength())
    
    expect(await findCreateGigButton()).toHaveClass('disabled')
  })
  
  it('is disabled when form has errors', async () => {
    const {typeGigName, findCreateGigButton} = await renderNewGig()
    
    typeGigName(tooShortName())
    
    expect(await findCreateGigButton()).toHaveClass('disabled')
  })
  
  it('is enabled when form is fully filled without errors', async () => {
    const {typeGigName, setGigDate,  findCreateGigButton} = await renderNewGig()
    
    typeGigName(nameWithValidLength())
    await setGigDate(tomorrowDayOfMonth())
    
    expect(await findCreateGigButton()).not.toHaveClass('disabled');
  })
})

describe('When clicking create gig button', () => {
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
  
  const clearGigName = () => {
    userEvent.clear(nameInput)
    fireEvent.blur(nameInput)
  }

  const setGigDate = async (dayText) => {
    userEvent.click(await screen.findByText(/Date and time/i))
    userEvent.click(await screen.findByText(dayText))
    userEvent.click(await screen.findByText(/set/i))
    //Wait for date set and rendered 
    // await findByText(/\//i)
    await sleep(100)
  }
  
  const clearGigDate = async ()=> {
    userEvent.click(await screen.findByText(/\//i))
    userEvent.click(await screen.findByText(/clear/i))
  }

  const findCreateGigButton = async ()=> (await screen.findByText(/Create Gig/i)).closest('button')

  return {screen, typeGigName, clearGigName, setGigDate, clearGigDate, findCreateGigButton}
}

function nameWithValidLength() {
  return nameWithLength(5)
}

function tooShortName() {
  return nameWithLength(3)
}

function tooLongName() {
  return nameWithLength(21)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}
