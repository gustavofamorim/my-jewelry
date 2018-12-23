import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import Vuelidate from 'vuelidate'

import moment from 'moment'

import './plugins'
import './registerServiceWorker'

import './assets/scss/global.scss'

Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.prototype.moment = moment

Vue.prototype.emoji = (hCode) => {
  if (hCode > 0xffff) {
    hCode -= 0x10000
    return String.fromCharCode(0xd800 + (hCode >> 10), 0xdc00 + (hCode & 0x3ff))
  } else {
    return String.fromCharCode(hCode)
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
