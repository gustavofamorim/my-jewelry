export default {
  ids: (state, getters, rootState) => state.ids,
  all: (state, getters, rootState) => state.jewels,
  set: (state, getters, rootState) => state.ids.map(uuid => state.jewels[uuid]),
  root: (state, getters, rootState) => rootState,
  filter: (state, getters, rootState) => state.filter,
  filteredIds: (state, getters, rootState) => {
    let ids = [ ...getters.ids ]

    if (state.filter.hideOutOfStock) {
      ids = ids.filter(id => getters.all[id].quantity > 0)
    }

    if (state.filter.name) {
      ids = ids.filter(id => {
        let name = getters.all[id].name.toLowerCase()
        return name.includes(state.filter.name.toLowerCase()) || name.similarity(state.filter.name) > 0.85
      })
    }

    if (state.filter.orderBy) {
      ids = ids.sort((a, b) => {
        let jewelA = {}
        let jewelB = {}

        // grants asc and desc order
        if (state.filter.orderByAsc) {
          jewelA = getters.all[a][state.filter.orderBy]
          jewelB = getters.all[b][state.filter.orderBy]
        } else {
          jewelA = getters.all[b][state.filter.orderBy]
          jewelB = getters.all[a][state.filter.orderBy]
        }

        // Compare and return
        if (jewelA > jewelB) {
          return 1
        }

        if (jewelA < jewelB) {
          return -1
        }

        return 0
      })
    }

    return ids
  }
}
