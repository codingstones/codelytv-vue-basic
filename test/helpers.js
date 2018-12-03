import VueRouter from 'vue-router'
import { mount as _mount, shallow as _shallow } from '@vue/test-utils'

export function resolvedPromise(promiseResult) {
  return jest.fn(() => Promise.resolve(promiseResult))
}

export function rejectedPromise(promiseError) {
  return jest.fn(() => Promise.reject(promiseError))
}

export function stubNow(isoDate) {
  Date.now = jest.fn(() => new Date(isoDate).valueOf())
}

export function stubDate(isoDate) {
  Date.now = jest.fn(() => new Date(isoDate).valueOf())
}

export function Wrap(component) {

  return {mount, shallow, withProps, withSlots, withRouter, withStore, config}

  function withProps(props) {
    this.props = props
    return this
  }

  function withStore(store) {
    this.store = store
    this.router = new VueRouter()
    sync(this.store, this.router)
    return this
  }

  function withRouter(router) {
    this.router = router
    return this
  }

  function withSlots(slots) {
    this.slots = slots
    return this
  }

  function mount() {
    return _mount(component, this.config())
  }

  function shallow() {
    return _shallow(component, this.config())
  }

  function config() {
    return { propsData: this.props, slots: this.slots, router: this.router, store: this.store }
  }
}
