
import uuidv4 from 'uuid/v4'

export default {
  create ({ commit }, jewel) {
    jewel.uuid = uuidv4()
    commit('add', jewel)
  },
  update ({ commit }, jewel) {
    commit('add', jewel)
  },
  delete ({ commit }, uuid) {
    commit('delete', uuid)
  },
  reduceQuantity ({ commit }, data) {
    commit('reduceQuantity', data)
  },
  setFilter ({ commit }, filter) {
    commit('filter', filter)
  },
  resetFilter ({ commit }) {
    commit('filter', {
      name: '',
      orderBy: 'name',
      orderByAsc: true,
      hideOutOfStock: true
    })
  }
}
