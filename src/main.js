import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state/store'
import VueCurrencyFilter from 'vue-currency-filter'

import VueMaterial from 'vue-material'
// import { MdButton, MdContent, MdTabs, MdTable, MdTableCell, MdTableHead, MdTableRow } from 'vue-material/dist/components'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(VueMaterial)
Vue.use(VueCurrencyFilter,
  {
    symbol: 'R$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
