import { createRenderer } from 'vue-server-renderer'
import { shallow, mount } from 'vue-test-utils'
import { registerGlobalComponents } from './GlobalComponentsLoader';

window['flushPromises'] = () =>  {
  return new Promise(resolve => setImmediate(resolve))
}

window['keepsSnapshot'] = (component, props) =>  {
  const renderer = createRenderer()
  const wrapper = shallow(component, { propsData: props })
  renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err)
    expect(str).toMatchSnapshot()
  })
}

window['mountWithProps'] = (component, props) => {
  return mount(component, { propsData: props })
}

registerGlobalComponents();
