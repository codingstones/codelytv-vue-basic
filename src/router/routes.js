
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

import Days from '@/app/pages/Days/Days.vue'
import NewGig from '@/app/pages/NewGig/NewGig'
import GigDetail from '@/app/pages/GigDetail/GigDetail'

function load (component) {
  // '@' is aliased to src/,
  // We will use lady loading when the app needs it
  // for now is not worthy to add code splitting
  return () => import(`@/app/pages/${component}.vue`)
}

export const NEW_GIG_PATH = '/newGig'
export const ALL_GIGS_PATH = '/all'

export const routes2   = [
  {path: '/', component: Days, title: 'root'},
  {path: ALL_GIGS_PATH, component: Days, title: 'all'},
  {path: '/gig/:id', component: GigDetail, title: 'gig'},
  {path: NEW_GIG_PATH, component: NewGig, title: 'newGig'},
  {path: '*', component: load('Error404')}
]


export default routes2
