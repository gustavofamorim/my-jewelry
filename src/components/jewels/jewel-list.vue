<template>
  <div class="jewel-list">
    <div class="filter-bar">
      <router-link :to="{ name: 'JewelsFilter' }" tag="button">Filtrar</router-link>
      <button @click="resetFilter">Limpar filtro</button>
    </div>
    <div v-if="jewels.length > 0">
      <router-link v-for="jewel in jewels" :key="jewel" :to="{ name: 'NewSale', params: { uuid: jewel }}" tag="div">
        <jewel-card :id="jewel"/>
      </router-link>
    </div>
    <p v-else>Nenhuma jóia para ser exibida :(</p>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import JewelCard from './jewel-card'

export default {
  components: {
    JewelCard
  },
  props: {
    jewels: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters('jewels', { allJewels: 'all' })
  },
  methods: {
    ...mapActions('jewels', { resetFilter: 'resetFilter' })
  }
}
</script>

<style scoped lang="scss">

.jewel-list {
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(auto-fill, min-max(300px, 1fr));

  .filter-bar {
    margin: 5px;
    display: grid;
    column-gap: 5px;
    grid-template-columns: 1fr 1fr;
  }
}

</style>
