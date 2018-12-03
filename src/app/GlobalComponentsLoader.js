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
  QItemTile,
  QItemSeparator,
  QLayout,
  QSpinner,
  QSpinnerMat,
  QFixedPosition
} from 'quasar-framework'
import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import FormButton from '@/app/shared-components/FormButton.vue'
import BackToTopButton from '@/app/shared-components/BackToTopButton.vue'
import SideBar from '@/app/shared-components/SideBar.vue'
import Toolbar from '@/app/shared-components/Toolbar.vue'
import GigRow from '@/app/pages/Days/GigRow.vue'
import Day from '@/app/pages/Days/Day.vue'
import TextInput from '@/app/shared-components/TextInput.vue'
import DateTimeInput from '@/app/shared-components/DateTimeInput.vue'

export function registerGlobalComponents() {
  Vue.component('LoadSpinner', LoadSpinner)
  Vue.component('Day', Day)
  Vue.component('GigRow', GigRow)
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
  Vue.component('QItemTile', QItemTile)
  Vue.component('QItemMain', QItemMain)
  Vue.component('QItemSeparator', QItemSeparator)
  Vue.component('QLayout', QLayout)
  Vue.component('QSpinner', QSpinner)
  Vue.component('QSpinnerMat', QSpinnerMat)
  Vue.component('QFixedPosition', QFixedPosition)
  Vue.component('FormButton', FormButton)
  Vue.component('BackToTopButton', BackToTopButton)
  Vue.component('Toolbar', Toolbar)
  Vue.component('TextInput', TextInput)
  Vue.component('DateTimeInput', DateTimeInput)
  Vue.component('SideBar', SideBar)
}
