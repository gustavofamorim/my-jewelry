<template lang="html">
  <div class="app-data">
    <h3>Gerenciamento dos dados da Aplicação</h3>
    <p>Cuidado com o que fizer. Será irreversível!</p>
    <div class="options">
      <button class="danger" @click="deleteAllData">Apagar Tudo</button>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('sales', { salesReset: 'reset' }),
    ...mapMutations('jewels', { jewelsReset: 'reset' }),
    ...mapMutations('sellers', { sellersReset: 'reset' }),
    ...mapMutations('categories', { categoriesReset: 'reset' }),
    deleteAllData () {
      this.salesReset()
      this.jewelsReset()
      this.sellersReset()
      this.categoriesReset()
    }
  }
}
</script>

<style scoped lang="scss">
.app-data {

  h3 {
    margin-bottom: 5px;
  }

  .options {
    display: grid;
    margin-top: 10px;
  }
}
</style>
