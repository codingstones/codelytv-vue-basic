import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar'
import { jotaRouterMixin } from '@/app/services/JotaRouter'
import { registerGlobalComponents } from '@/app/GlobalComponentsLoader'
import { silenceWatchers } from '../test/helpers'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.mixin(jotaRouterMixin)

registerGlobalComponents()

silenceWatchers()
