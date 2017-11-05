import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
import { jotaRouterMixin } from './app/services/JotaRouter'
import { registerGlobalComponents } from './app/GlobalComponentsLoader'
Vue.use(Vuelidate)
Vue.use(Quasar)
// http://forum.quasar-framework.org/topic/278/turn-off-the-annoying-vue-production-tip/7
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.mixin(jotaRouterMixin)

registerGlobalComponents()
