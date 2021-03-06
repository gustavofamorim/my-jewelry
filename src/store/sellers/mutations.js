
import Vue from 'vue'

import defaultState from './state'

export default {
  add (state, data) {
    if (data.constructor !== Array) {
      if (state.ids.indexOf(data.uuid) === -1) state.ids.push(data.uuid)
      Vue.set(state.sellers, data.uuid, data)
    } else {
      data.forEach(item => {
        if (state.ids.indexOf(item.uuid) === -1) state.ids.push(item.uuid)
        Vue.set(state.sellers, item.uuid, item)
      })
    }
  },
  clean (state) {
    state.ids = [ ]
    state.jewels = { }
  },
  delete (state, uuid) {
    Vue.delete(state.sellers, uuid)
    let index = state.ids.findIndex(id => id === uuid)
    state.ids.splice(index, 1)
  },
  reset (state) {
    Object.keys(defaultState).forEach(key => {
      Vue.set(state, key, defaultState[key])
    })
  }
}
