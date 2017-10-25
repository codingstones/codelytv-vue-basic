import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const initialState = {
  day: [],
  error: false,
  loading: true
}

export const store = new Vuex.Store({
  state: initialState
})
