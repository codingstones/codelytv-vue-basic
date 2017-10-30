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
  QDatetime,
  QAjaxBar,
  QIcon,
  QCard,
  QCardSeparator,
  QCardMedia,
  QCardMain,
  QCardTitle,
  QTransition,
  QSideLink,
  QScrollArea,
  QItemSide,
  QItemMain,
  QLayout,
  QSpinnerMat
} from 'quasar-framework'
import LoadSpinner from '@/app/shared/LoadSpinner.vue'
import FormButton from '@/app/shared/FormButton.vue'
import SideBar from '@/app/shared/SideBar.vue'
import Toolbar from '@/app/shared/Toolbar.vue'
import Gig from '@/app/pages/Days/Gig.vue'
import Day from '@/app/pages/Days/Day.vue'

export function registerGlobalComponents() {
  Vue.component('LoadSpinner', LoadSpinner)
  Vue.component('Day', Day)
  Vue.component('Gig', Gig)
  Vue.component('QList', QList)
  Vue.component('QListHeader', QListHeader)
  Vue.component('QItem', QItem)
  Vue.component('QIcon', QIcon)
  Vue.component('QBtn', QBtn)
  Vue.component('QToolbar', QToolbar)
  Vue.component('QToolbarTitle', QToolbarTitle)
  Vue.component('QInput', QInput)
  Vue.component('QField', QField)
  Vue.component('QDatetime', QDatetime)
  Vue.component('QCard', QCard)
  Vue.component('QCardMedia', QCardMedia)
  Vue.component('QCardSeparator', QCardSeparator)
  Vue.component('QCardMain', QCardMain)
  Vue.component('QCardTitle', QCardTitle)
  Vue.component('QAjaxBar', QAjaxBar)
  Vue.component('QTransition', QTransition)
  Vue.component('QSideLink', QSideLink)
  Vue.component('QScrollArea', QScrollArea)
  Vue.component('QItemSide', QItemSide)
  Vue.component('QItemMain', QItemMain)
  Vue.component('QLayout', QLayout)
  Vue.component('QSpinnerMat', QSpinnerMat)
  Vue.component('FormButton', FormButton)
  Vue.component('Toolbar', Toolbar)
  Vue.component('SideBar', SideBar)
}
