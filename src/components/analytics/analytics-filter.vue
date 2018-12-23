<template lang="html">
  <div class="filter-container">
    <p>Filtro de dados</p>
    <div class="filter">
      <input type="date" @change="updateFilter" v-model="start"/>
      <p>Até</p>
      <input type="date" @change="updateFilter" v-model="end"/>
    </div>
    <div class="options">
      <button @click="resetFilter">Este Mês</button>
      <button @click="filterByPreviousMonth">Mês anterior</button>
      <button @click="filterByActualYear">Este Ano</button>
      <button @click="filterByPreviousYear">Ano Anterior</button>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    end: '',
    start: ''
  }),
  watch: {
    filter: {
      deep: true,
      handler: function(val) {
        this.end = val.end
        this.start = val.start
      }
    }
  },
  mounted () {
    if(!this.filter.start && !this.filter.end) {
      this.resetFilter()
    } else {
      this.end = this.filter.end
      this.start = this.filter.start
    }
  },
  computed: {
    ...mapGetters('analytics', { filter: 'filter' })
  },
  methods: {
    ...mapActions('analytics', {
      syncFilter: 'setFilter',
      resetFilter: 'resetFilter',
      filterByActualYear: 'filterNavActualYear',
      filterByPreviousYear: 'filterNavPreviousYear',
      filterByPreviousMonth: 'filterNavPreviousMonth'

    }),
    updateFilter () {
      this.syncFilter({
        end: this.end,
        start: this.start,
      })
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  margin: 0px 5px 0px 5px;

  display: grid;
  align-items: center;
  grid-template-areas: "start text end";
  grid-template-columns: 1fr 35px 1fr;

  input[type="date"] {
    &:first-child {
      grid-area: start;
    }

    &:last-child {
      grid-area: end;
    }
  }

  p {
    grid-area: text;
  }

}

.options {
  margin: 0px 5px 0px 5px;
  display: grid;
  column-gap: 5px;
  grid-template-columns: 1fr 1fr;

  button {
    margin-top: 5px;
  }
}
</style>
