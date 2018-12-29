<template lang="html">
  <div class="sellers-resume" v-if="sellersResumeIds.length > 0">
    <p><strong>Resumo dos Vendedores</strong></p>
    <div class="card" v-for="id in sellersResumeIds" :key="id">
      <p><strong>{{ sellers[id].name }}</strong></p>
      <p>A pagar: R${{ sellersResume[id].toPay }}</p>
      <p>Lucro Bruto Gerado: R${{ sellersResume[id].grossProfit }}</p>
      <p>Lucro Líquido Gerado: R${{ sellersResume[id].netProfit }}</p>
      <p>Quantidade de Jóias Vendidas: {{ sellersResume[id].quantity }}</p>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('sellers', { sellers: 'all' }),
    ...mapGetters('analytics', { ownSalesResume: 'ownSalesResume', sellersResume: 'sellersResume' }),
    sellersResumeIds () {
      return Object.keys(this.sellersResume)
    }
  }
}
</script>

<style scoped lang="scss">
.sellers-resume {
  margin-top: 15px;

  .card {
    text-align: left;
  }
}

</style>
