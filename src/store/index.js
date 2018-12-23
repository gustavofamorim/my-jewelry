import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

import sales from '@/store/sales'
import jewels from '@/store/jewels'
import storage from '@/store/storage'
import sellers from '@/store/sellers'
import analytics from '@/store/analytics'
import categories from '@/store/categories'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexPersist = new VuexPersistence({
  key: 'my-jewelry',
  strictMode: debug,
  storage: window.localStorage
})

export default new Vuex.Store({
  strict: debug,
  modules: {
    sales,
    jewels,
    sellers,
    storage,
    analytics,
    categories
  },
  plugins: [
    vuexPersist.plugin
  ],
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION
  }
})
