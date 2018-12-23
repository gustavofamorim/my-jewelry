<template lang="html">
  <div>
    <h1>Minhas Vendas</h1>
    <sale-list :sales="sales"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SaleList from '@/components/sales/sale-list'

export default {
  components: {
    SaleList
  },
  computed: {
    ...mapGetters('sales', { sales: 'filteredIds' })
  }
}
</script>

<style lang="css">
</style>
