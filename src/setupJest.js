import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)
Vue.use(VueRouter)

import { mount, shallow } from 'vue-test-utils'
import { registerGlobalComponents } from './app/GlobalComponentsLoader'

window['keepsSnapshot'] = (component) => {
  const wrapper = shallow(component)
  expect(wrapper.html()).toMatchSnapshot()
}

registerGlobalComponents()
