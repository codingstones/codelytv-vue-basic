export const MosicaRouter = (router) => {
  return { navigateToGig }

  function navigateToGig(gigId) {
    router.push('gig/' + gigId)
  }
}
