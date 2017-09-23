import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const initialState = {
  gigs: ['GIG1', 'GIG2']
}

export const store = new Vuex.Store({
  state: initialState
})
