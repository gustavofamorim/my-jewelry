
import moment from 'moment'

export default {
  filter: (state, getters, rootState) => state.filter,
  filteredSalesIds: (state, getters, rootState) => {
    let endDate = moment(state.filter.end)
    let startDate = moment(state.filter.start)

    let getDate = (str) => {
      return str.split('T')[0]
    }

    if (!state.filter.start && !state.filter.end) {
      return rootState.sales.ids
    }

    if (!state.filter.start && state.filter.end) {
      return rootState.sales.ids.filter(id => {
        return moment(getDate(rootState.sales.sales[id].date)).isSameOrBefore(endDate)
      })
    }

    if (state.filter.start && !state.filter.end) {
      return rootState.sales.ids.filter(id => {
        return moment(getDate(rootState.sales.sales[id].date)).isSameOrAfter(startDate)
      })
    }

    return rootState.sales.ids.filter(id => {
      return moment(getDate(rootState.sales.sales[id].date)).isBetween(startDate, endDate, null, '[]')
    })
  },
  filteredOwnSalesIds: (state, getters, rootState) => {
    return getters.filteredSalesIds.filter(id => !rootState.sales.sales[id].seller)
  },
  salesResume: (state, getters, rootState) => {
    let resume = { }
    let sales = getters.filteredSalesIds.map(id => rootState.sales.sales[id])

    resume.netProfit = sales.reduce((ac, sale) => {
      let commissionPct = (1 - (sale.commission / 100))
      return ac + ((sale.value * commissionPct) - sale.cost)
    }, 0).toFixed(2)

    resume.grossProfit = sales.reduce((ac, sale) => ac + (sale.value - sale.cost), 0)

    resume.quantity = sales.reduce((ac, sale) => ac + sale.quantity, 0)

    resume.sellSum = sales.reduce((ac, sale) => ac + sale.value, 0)
    resume.costSum = sales.reduce((ac, sale) => ac + sale.cost, 0)

    resume.netProfitPct = (resume.netProfit * 100 / resume.costSum).toFixed(2)

    resume.sellersCost = sales.reduce((ac, sale) => {
      return ac + (sale.value * (sale.commission / 100))
    }, 0).toFixed(2)

    return resume
  },
  ownSalesResume: (state, getters, rootState) => {
    let resume = {
      quantity: 0,
      netProfit: 0,
      grossProfit: 0
    }

    getters.filteredOwnSalesIds.forEach(id => {
      let sale = rootState.sales.sales[id]

      resume.quantity += sale.quantity
      resume.netProfit += (sale.value * (1 - (sale.commission / 100))) - sale.cost
      resume.grossProfit += sale.value - sale.cost
    })

    resume.netProfit = resume.netProfit.toFixed(2)

    return resume
  },
  sellersResume: (state, getters, rootState) => {
    let resume = { }

    getters.filteredSalesIds.forEach(id => {
      let sale = rootState.sales.sales[id]

      if (sale.seller) {
        if(!resume[sale.seller]){
            resume[sale.seller] = {
            toPay: 0,
            quantity: 0,
            netProfit: 0,
            grossProfit: 0
          }
        }
        resume[sale.seller].toPay += sale.value * (sale.commission / 100)
        resume[sale.seller].quantity += sale.quantity
        resume[sale.seller].netProfit += (sale.value * (1 - (sale.commission / 100))) - sale.cost
        resume[sale.seller].grossProfit += sale.value - sale.cost
      }
    })

    Object.keys(resume).forEach(id => {
      resume[id].toPay = resume[id].toPay.toFixed(2)
      resume[id].netProfit = resume[id].netProfit.toFixed(2)
    })

    return resume
  }
}
