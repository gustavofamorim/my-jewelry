
import moment from 'moment'
import uuidv4 from 'uuid/v4'

const DEFAULT_FORMAT = 'YYYY-MM-DD'

export default {
  setFilter ({ commit }, filter) {
    commit('filter', filter)
  },
  filterNavActualYear ({ commit }) {
    let filter = { }

    filter.end = moment().format(DEFAULT_FORMAT)
    filter.start = moment().startOf('year').format(DEFAULT_FORMAT)

    commit('filter', filter)
  },
  filterNavPreviousYear ({ commit, state }) {
    let filter = { }

    filter.start = moment(state.filter.start, DEFAULT_FORMAT)
                    .startOf('year')
                    .subtract(1, 'year')
                    .format(DEFAULT_FORMAT)

    filter.end =  moment(filter.start)
                    .endOf('year')
                    .format(DEFAULT_FORMAT)

    commit('filter', filter)
  },
  filterNavPreviousMonth ({ commit, state }) {
    let filter = { }

    filter.start = moment(state.filter.start, DEFAULT_FORMAT)
                    .startOf('month')
                    .subtract(1, 'month')
                    .format(DEFAULT_FORMAT)

    filter.end =  moment(filter.start)
                    .endOf('month')
                    .format(DEFAULT_FORMAT)

    commit('filter', filter)
  },
  resetFilter ({ commit }) {
    let filter = { }

    filter.end = moment().format(DEFAULT_FORMAT)
    filter.start = moment().startOf('month').format(DEFAULT_FORMAT)

    commit('filter', filter)
  }
}
