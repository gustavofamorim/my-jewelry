
import uuidv4 from 'uuid/v4'

export default {
  create ({ commit }, sale) {
    sale.uuid = uuidv4()

    commit('jewels/reduceQuantity', {
      id: sale.jewel,
      quantity: sale.quantity
    }, { root: true })

    commit('add', sale)
  },
  update ({ commit }, sales) {
    commit('add', sales)
  },
  delete ({ commit }, uuid) {
    commit('delete', uuid)
  },
  processIds ({ commit }, uuid) {
    commit('processIds', uuid)
  }
}
