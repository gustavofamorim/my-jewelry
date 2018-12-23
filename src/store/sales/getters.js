export default {
  ids: (state, getters, rootState) => state.ids,
  all: (state, getters, rootState) => state.sales,
  set: (state, getters, rootState) => state.ids.map(uuid => state.sales[uuid]),
  root: (state, getters, rootState) => rootState,
  filteredIds: (state, getters, rootState) => getters.ids
}
