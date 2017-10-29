import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/
  return () => import(`@/app/pages/${component}.vue`)
}
import Days from '@/app/pages/Days/Days.vue'
import NewGig from '@/app/pages/NewGig/NewGig'
import GigsToday from '@/app/pages/GigsToday/GigsToday'
import GigsTomorrow from '@/app/pages/GigsTomorrow/GigsTomorrow'

export const NEW_GIG_PATH = '/newGig'

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  routes: [
    { path: '/', component: Days, title: 'root' },
    { path: '/all', component: Days, title: 'all' },
    { path: '/today', component: GigsToday, title: 'today' },
    { path: '/tomorrow', component: GigsTomorrow, title: 'tomorrow' },
    { path: '/gig/:id', component: load('GigDetail'), title: 'gig' },
    { path: NEW_GIG_PATH, component: NewGig, title: 'newGig' },
    { path: '*', component: load('Error404') }
  ]
})
