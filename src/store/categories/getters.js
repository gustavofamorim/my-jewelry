export default {
  ids: (state, getters, rootState) => state.ids,
  all: (state, getters, rootState) => state.categories,
  set: (state, getters, rootState) => state.ids.map(uuid => state.categories[uuid]),
  root: (state, getters, rootState) => rootState
}
