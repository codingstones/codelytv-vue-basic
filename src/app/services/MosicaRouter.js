export const MosicaRouter = (router) => {
  return { navigateToGig, navigateToCreateGig }

  function navigateToGig(gigId) {
    router.push('gig/' + gigId)
  }

  function navigateToCreateGig() {
    router.push({path: '/newGig'})
  }
}
