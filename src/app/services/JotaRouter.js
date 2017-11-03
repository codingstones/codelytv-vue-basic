export const JotaRouter = (router) => {
  return { navigateToGig, navigateToCreateGig, navigateToAllGigs, getParam }

  function navigateToGig(gigId) {
    router.push('gig/' + gigId)
  }

  function navigateToCreateGig() {
    router.push({path: '/newGig'})
  }

  function navigateToAllGigs() {
    router.push({path: '/all'})
  }

  function getParam(id) {
    return router.currentRoute.params[id]
  }
}
