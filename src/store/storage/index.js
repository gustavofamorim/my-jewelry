export default {
  namespaced: true,
  state: { },
  getters: {
    persistence: () => {
      return localStorage.getItem('my-jewelry')
    }
  }
}
