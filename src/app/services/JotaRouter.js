import VueRouter from 'vue-router'

export const JotaRouter = (router) => {
  if (!router) router = new VueRouter()
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
    if (!router) return ''
    return router.currentRoute.params[id]
  }
}

export const jotaRouterMixin = {
  created: function () {
    this.jotaRouter = JotaRouter(this.$router)
  }
}
