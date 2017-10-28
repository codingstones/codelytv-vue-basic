import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)

import { mount, shallow } from 'vue-test-utils'
import { registerGlobalComponents } from './app/GlobalComponentsLoader'

window['flushPromises'] = () => {
  return new Promise(resolve => setImmediate(resolve))
}

window['keepsSnapshot'] = (component) => {
  const wrapper = shallow(component)
  expect(wrapper.html()).toMatchSnapshot()
}

window['mountWithProps'] = (component, props, slots) => {
  return mount(component, { propsData: props, slots })
}

window['shallowWithProps'] = (component, props) => {
  return shallow(component, { propsData: props })
}


registerGlobalComponents()
