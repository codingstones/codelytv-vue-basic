import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)

import { mount, shallow } from 'vue-test-utils'
import { registerGlobalComponents } from './app/GlobalComponentsLoader'

window['keepsSnapshot'] = (component) => {
  const wrapper = shallow(component)
  expect(wrapper.html()).toMatchSnapshot()
}

registerGlobalComponents()
