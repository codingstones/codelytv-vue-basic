export const MosicaRouter = (router) => {
  return { navigateToGig, navigateToCreateGig, navigateToAllGigs }

  function navigateToGig(gigId) {
    router.push('gig/' + gigId)
  }

  function navigateToCreateGig() {
    router.push({path: '/newGig'})
  }

  function navigateToAllGigs() {
    router.push({path: '/all'})
  }
}
