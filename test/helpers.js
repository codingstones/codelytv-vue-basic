import { actions, mutations, initialState } from '../src/vuex/store'
import Vuex from 'vuex'

export function spyFor() {
  // Returns an object like {arg0: jest.fn(), ...argN: jest.fn()} for the given args
  return Array.from(arguments).reduce((result, arg) => {
    result[arg] = jest.fn()
    return result
  }, {})
}

export function resolvedPromise(promiseResult) {
  return jest.fn(() => Promise.resolve(promiseResult))
}

export function rejectedPromise(promiseError) {
  return jest.fn(() => Promise.reject(promiseError))
}

export function resolvedStub(methodName, promiseResult) {
  // Returns the methodName method stubbed to return a resolved promise with value promiseResult
  const result = {}
  result[methodName] = resolvedPromise(promiseResult)
  return result
}

export function rejectedStub(methodName, promiseError) {
  // Returns the methodName method stubbed to return a rejected promise with value promiseResult
  const result = {}
  result[methodName] = rejectedPromise(promiseError)
  return result
}

export function cloneProductionStore() {
  return new Vuex.Store({
    state: Object.assign({}, initialState),
    actions,
    mutations
  })
}

export function stubNow(isoDate) {
  Date.now = jest.fn(() => new Date(isoDate).valueOf())
}
