import Quasar from 'quasar-framework'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import { cloneProductionStore } from '../../../test/helpers'

Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)

describe('Vuex test helpers', () => {

  it('cloneProductionStore', async () => {
    let clonedStore = cloneProductionStore()

    expect(clonedStore.state.days).toHaveLength(0)

    clonedStore.state.days = ['ANY DAY']

    clonedStore = cloneProductionStore()

    expect(clonedStore.state.days).toHaveLength(0)
  })
})
