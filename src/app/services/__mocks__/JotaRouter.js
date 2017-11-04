const getParam = () => 'any id'
const navigateToAllGigs = jest.fn()
module.exports = {
  JotaRouter: () => {
    return { getParam, navigateToAllGigs }
  }
}
