
import Vue from 'vue'

import defaultState from './state'

export default {
  filter (state, filter) {
    state.filter = filter
  },
  reset (state) {
    Object.keys(defaultState).forEach(key => {
      Vue.set(state, key, defaultState[key])
    })
  }
}
