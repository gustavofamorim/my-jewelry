export default {
  ids: (state, getters, rootState) => state.ids,
  all: (state, getters, rootState) => state.sellers,
  set: (state, getters, rootState) => state.ids.map(uuid => state.sellers[uuid]),
  root: (state, getters, rootState) => rootState
}
