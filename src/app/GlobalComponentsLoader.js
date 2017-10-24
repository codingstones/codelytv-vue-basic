import Vue from 'vue'
import {
  QList,
  QListHeader,
  QItem,
  QBtn,
  QToolbar,
  QToolbarTitle,
  QInput,
  QField,
  QDatetime
} from 'quasar-framework'
import LoadSpinner from '@/app/shared/LoadSpinner.vue'
import FormButton from '@/app/shared/FormButton.vue'
import Gig from '@/app/pages/Days/Gig.vue'
import Day from '@/app/pages/Days/Day.vue'

export function registerGlobalComponents() {
  Vue.component('LoadSpinner', LoadSpinner)
  Vue.component('Day', Day)
  Vue.component('Gig', Gig)
  Vue.component('QList', QList)
  Vue.component('QListHeader', QListHeader)
  Vue.component('QItem', QItem)
  Vue.component('QBtn', QBtn)
  Vue.component('QToolbar', QToolbar)
  Vue.component('QToolbarTitle', QToolbarTitle)
  Vue.component('QInput', QInput)
  Vue.component('QField', QField)
  Vue.component('QDatetime', QDatetime)
  Vue.component('FormButton', FormButton)
}
