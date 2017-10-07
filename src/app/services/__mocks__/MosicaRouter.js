const navigateToGigMock = jest.fn()
const RouterMock = { navigateToGig: navigateToGigMock }

const MosicaRouter = (history)=> {
  return RouterMock
}
module.exports = {
  MosicaRouter: MosicaRouter
}
