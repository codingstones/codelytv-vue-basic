import Vuelidate from 'vuelidate'
import Vue from 'vue'
import { jotaRouterMixin } from '@/app/services/JotaRouter'
import 'quasar-extras/animate'
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import { registerGlobalComponents } from '@/app/GlobalComponentsLoader'


export default function init() {
  Vue.use(Vuelidate)
  Vue.mixin(jotaRouterMixin)
  registerGlobalComponents()
}
