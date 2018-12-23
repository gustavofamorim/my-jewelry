
import uuidv4 from 'uuid/v4'

export default {
  create ({ commit }, seller) {
    seller.uuid = uuidv4()
    commit('add', seller)
  },
  update ({ commit }, seller) {
    commit('add', seller)
  },
  delete ({ commit }, uuid) {
    commit('delete', uuid)
  }
}
