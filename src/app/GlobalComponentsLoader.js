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

export function registerGlobalComponents(vueInstance = Vue) {
  vueInstance.component('LoadSpinner', LoadSpinner)
  vueInstance.component('Day', Day)
  vueInstance.component('GigRow', GigRow)
  vueInstance.component('QList', QList)
  vueInstance.component('QListHeader', QListHeader)
  vueInstance.component('QItem', QItem)
  vueInstance.component('QIcon', QIcon)
  vueInstance.component('QBtn', QBtn)
  vueInstance.component('QToolbar', QToolbar)
  vueInstance.component('QToolbarTitle', QToolbarTitle)
  vueInstance.component('QInput', QInput)
  vueInstance.component('QField', QField)
  vueInstance.component('QDatetime', QDatetime)
  vueInstance.component('QCard', QCard)
  vueInstance.component('QCardMedia', QCardMedia)
  vueInstance.component('QCardSeparator', QCardSeparator)
  vueInstance.component('QCardMain', QCardMain)
  vueInstance.component('QCardTitle', QCardTitle)
  vueInstance.component('QAjaxBar', QAjaxBar)
  vueInstance.component('QTransition', QTransition)
  vueInstance.component('QSideLink', QSideLink)
  vueInstance.component('QScrollArea', QScrollArea)
  vueInstance.component('QItemSide', QItemSide)
  vueInstance.component('QItemTile', QItemTile)
  vueInstance.component('QItemMain', QItemMain)
  vueInstance.component('QItemSeparator', QItemSeparator)
  vueInstance.component('QLayout', QLayout)
  vueInstance.component('QSpinner', QSpinner)
  vueInstance.component('QSpinnerMat', QSpinnerMat)
  vueInstance.component('QFixedPosition', QFixedPosition)
  vueInstance.component('FormButton', FormButton)
  vueInstance.component('BackToTopButton', BackToTopButton)
  vueInstance.component('Toolbar', Toolbar)
  vueInstance.component('TextInput', TextInput)
  vueInstance.component('DateTimeInput', DateTimeInput)
  vueInstance.component('SideBar', SideBar)
}
