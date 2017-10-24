import { mount, shallow } from 'vue-test-utils'
import { registerGlobalComponents } from './app/GlobalComponentsLoader'

window['flushPromises'] = () => {
  return new Promise(resolve => setImmediate(resolve))
}

window['keepsSnapshot'] = (component, props) => {
  const wrapper = shallow(component, { propsData: props })
  expect(wrapper.html()).toMatchSnapshot()
}

window['mountWithProps'] = (component, props) => {
  return mount(component, { propsData: props })
}

window['shallowWithProps'] = (component, props) => {
  return shallow(component, { propsData: props })
}

registerGlobalComponents()
