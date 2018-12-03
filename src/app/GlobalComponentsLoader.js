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
  QCardActions,
  QCardSeparator,
  QCardMedia,
  QCardMain,
  QCardTitle,
  QScrollArea,
  QItemSide,
  QItemMain,
  QItemTile,
  QItemSeparator,
  QLayout,
  QSpinner,
  QSpinnerMat
} from 'quasar'
import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import FormButton from '@/app/shared-components/FormButton.vue'
import BackToTopButton from '@/app/shared-components/BackToTopButton.vue'
import SideBar from '@/app/shared-components/SideBar.vue'
import Toolbar from '@/app/shared-components/Toolbar.vue'
import GigRow from '@/app/pages/Days/GigRow.vue'
import Day from '@/app/pages/Days/Day.vue'
import TextInput from '@/app/shared-components/TextInput.vue'
import DateTimeInput from '@/app/shared-components/DateTimeInput.vue'


const components = {
  LoadSpinner,
  Day,
  GigRow,
  QList,
  QListHeader,
  QItem,
  QIcon,
  QBtn,
  QToolbar,
  QToolbarTitle,
  QInput,
  QField,
  QDatetime,
  QCard,
  QCardActions,
  QCardMedia,
  QCardSeparator,
  QCardMain,
  QCardTitle,
  QAjaxBar,
  QScrollArea,
  QItemSide,
  QItemTile,
  QItemMain,
  QItemSeparator,
  QLayout,
  QSpinner,
  QSpinnerMat,
  FormButton,
  BackToTopButton,
  Toolbar,
  SideBar,
  TextInput,
  DateTimeInput
}

export function registerGlobalComponents() {
   Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })
}
