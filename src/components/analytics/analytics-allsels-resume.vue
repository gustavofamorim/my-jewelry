<template lang="html">
  <div class="card">
    <p><strong>Resumo das vendas no período</strong></p>
    <p>Lucro Bruto: R${{ resume.grossProfit }}</p>
    <p>Lucro Líquido: R${{ resume.netProfit }} ({{ resume.netProfitPct }}%)</p>
    <p>Quantidade de Jóias Vendidas: {{ resume.quantity }}</p>
    <p>Total das Vendas: R${{ resume.sellSum }}</p>
    <p>Total dos Custos: R${{ resume.costSum }}</p>
    <p>Total das Comissões: R${{ resume.sellersCost }}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('analytics', { resume: 'salesResume' })
  }
}
</script>

<style scoped lang="scss">
.card {
  text-align: left;
}
</style>
