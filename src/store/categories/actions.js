
import uuidv4 from 'uuid/v4'

export default {
  create ({ commit }, category) {
    category.uuid = uuidv4()
    commit('add', category)
  },
  update ({ commit }, category) {
    commit('add', category)
  },
  delete ({ commit }, uuid) {
    commit('delete', uuid)
  }
}
