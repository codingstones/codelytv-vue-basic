// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
import { jotaRouterMixin } from './app/services/JotaRouter'

require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

// Import all transitions (it will include unused ones KB's)
import 'quasar-extras/animate'

import Vue from 'vue'
import Quasar from 'quasar-framework'
import Vuelidate from 'vuelidate'
import router from './router'

Vue.use(Quasar)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.mixin(jotaRouterMixin)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App').default)
  })
})
