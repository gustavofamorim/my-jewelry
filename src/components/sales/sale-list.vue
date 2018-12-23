<template>
  <div class="jewel-list">
    <div v-if="sales.length > 0">
      <sale-card v-for="sale in sales" :key="sale" :id="sale"/>
    </div>
    <p v-else>Você ainda não registrou nenhuma vend :(</p>
  </div>
</template>

<script>

import SaleCard from './sale-card'

export default {
  components: {
    SaleCard
  },
  props: {
    sales: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

.sale-list {
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, min-max(300px, 1fr));
}

</style>
