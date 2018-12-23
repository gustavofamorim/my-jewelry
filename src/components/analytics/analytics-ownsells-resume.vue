<template lang="html">
  <div class="card align-left">
    <p><strong>Resumo das Minhas Vendas</strong></p>
    <p>Lucro Bruto Gerado: R${{ ownSalesResume.grossProfit }}</p>
    <p>Lucro Líquido Gerado: R${{ ownSalesResume.netProfit }}</p>
    <p>Quantidade de Jóias Vendidas: {{ ownSalesResume.quantity }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('analytics', { ownSalesResume: 'ownSalesResume' }),
  }
}
</script>

<style scoped lang="scss">
</style>
