
import Vue from 'vue'

import defaultState from './state'

export default {
  add (state, data) {
    if (data.constructor !== Array) {
      if (state.ids.indexOf(data.uuid) === -1) state.ids.push(data.uuid)
      Vue.set(state.jewels, data.uuid, data)
    } else {
      data.forEach(item => {
        if (state.ids.indexOf(item.uuid) === -1) state.ids.push(item.uuid)
        Vue.set(state.jewels, item.uuid, item)
      })
    }
  },
  clean (state) {
    state.ids = [ ]
    state.jewels = { }
  },
  delete (state, uuid) {
    Vue.delete(state.jewels, uuid)
    let index = state.ids.findIndex(id => id === uuid)
    state.ids.splice(index, 1)
  },
  reduceQuantity (state, data) {
    let jewel = state.jewels[data.uuid ? data.uuid : data.id]

    jewel.quantity = jewel.quantity - data.quantity

    if (jewel.quantity < 0) jewel.quantity = 0

    Vue.set(state.jewels, jewel.uuid, jewel)
  },
  filter (state, filter) {
    state.filter = filter
  },
  reset (state) {
    Object.keys(defaultState).forEach(key => {
      Vue.set(state, key, defaultState[key])
    })
  }
}
