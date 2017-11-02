const navigateToGigMock = jest.fn()
const RouterMock = { navigateToGig: navigateToGigMock }

const JotaRouter = (history)=> {
  return RouterMock
}
module.exports = {
  JotaRouter: JotaRouter
}
