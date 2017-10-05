import Vue from 'vue'
import LoadSpinner from './components/LoadSpinner'
import {
  QList,
  QListHeader,
  QItem,
  QBtn,
  QToolbar,
  QToolbarTitle
} from 'quasar-framework'

export function registerGlobalComponents() {
  Vue.component('LoadSpinner', LoadSpinner)
  Vue.component('QList', QList)
  Vue.component('QListHeader', QListHeader)
  Vue.component('QItem', QItem)
  Vue.component('QBtn', QBtn)
  Vue.component('QToolbar', QToolbar)
  Vue.component('QToolbarTitle', QToolbarTitle)
}
