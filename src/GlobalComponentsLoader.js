import Vue from 'vue'
import LoadSpinner from './components/LoadSpinner'

export function registerGlobalComponents() {
  Vue.component('LoadSpinner', LoadSpinner)
}
