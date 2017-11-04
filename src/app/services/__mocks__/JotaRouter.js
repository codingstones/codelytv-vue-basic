const getParam = () => 'any id'
const navigateToAllGigs = jest.fn()
const navigateToGig = jest.fn()
module.exports = {
  JotaRouter: () => {
    return { getParam, navigateToAllGigs, navigateToGig }
  }
}
