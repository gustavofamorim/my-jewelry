<template>
  <div class="filter">
    <h1>Filtrar Jóias</h1>
    <div class="filter-group">
      <p class="filter-title">Buscar nome</p>
      <input type="text" @input="updateFilter" v-model="nameFilter"/>
    </div>
    <div class="filter-group">
      <p class="filter-title">Ordenar por</p>
      <div class="filter-buttons-group">
        <button value="name"
                class="filter-buttom-item"
                :class="{ 'active': orderBy === 'name'}"
                @click="setOrderBy">
          Nome
          <fa v-if="orderBy === 'name' && orderByAsc" icon="caret-up"/>
          <fa v-if="orderBy === 'name' && !orderByAsc" icon="caret-down"/>
        </button>
        <button value="cost"
                class="filter-buttom-item"
                :class="{ 'active': orderBy === 'cost'}"
                @click="setOrderBy">
          Custo
          <fa v-if="orderBy === 'cost' && orderByAsc" icon="caret-up"/>
          <fa v-if="orderBy === 'cost' && !orderByAsc" icon="caret-down"/>
        </button>
        <button value="value"
                class="filter-buttom-item"
                :class="{ 'active': orderBy === 'value'}"
                @click="setOrderBy">
          Valor
          <fa v-if="orderBy === 'value' && orderByAsc" icon="caret-up"/>
          <fa v-if="orderBy === 'value' && !orderByAsc" icon="caret-down"/>
        </button>
        <button value="quantity"
                class="filter-buttom-item"
                :class="{ 'active': orderBy === 'quantity'}"
                @click="setOrderBy">
          Estoque
          <fa v-if="orderBy === 'quantity' && orderByAsc" icon="caret-up"/>
          <fa v-if="orderBy === 'quantity' && !orderByAsc" icon="caret-down"/>
        </button>
      </div>
    </div>
    <div class="filter-group">
      <p class="filter-title">Outros Filtros</p>
      <div class="filter-checkbox">
        <input type="checkbox" v-model="hideOutOfStock" @change="updateFilter" id="hideOutOfStock">
        <label for="hideOutOfStock">Ocultar itens fora de Estoque</label>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    orderBy: 'name',
    orderByAsc: true,
    nameFilter: '',
    hideOutOfStock: true
  }),
  mounted () {
    this.orderBy = this.filter.orderBy
    this.nameFilter = this.filter.name
    this.orderByAsc = this.filter.orderByAsc
    this.hideOutOfStock = this.filter.hideOutOfStock
  },
  methods: {
    ...mapActions('jewels', { syncFilter: 'setFilter' }),
    setOrderBy (e) {
      if (this.orderBy === e.target.value) {
        this.orderByAsc = !this.orderByAsc
      } else {
        this.orderBy = e.target.value
        this.orderByAsc = true
      }

      this.updateFilter()
    },
    updateFilter () {
      this.syncFilter({
        name: this.nameFilter,
        orderBy: this.orderBy,
        orderByAsc: this.orderByAsc,
        hideOutOfStock: this.hideOutOfStock
      })
    }
  },
  computed: {
    ...mapGetters('jewels', { jewels: 'ids', filter: 'filter' })
  }
}
</script>

<style lang="scss">

.filter {
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;

  .filter-close {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .filter-group {

    .filter-title {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .filter-buttons-group {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;

      .filter-buttom-item {
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 10px;
        background-color: rgb(253, 230, 216);
        margin-right: 5px;

        &.active {
          color: white;
          background-color: rgb(68, 70, 84);
        }

        &:last-child {
          margin-right: 0px;
        }
      }
    }

    .filter-checkbox {
      margin: 5px;
      text-align: left;

      input {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        background-color: #FDE7D5;

        &:checked {
          border: none;
          background-color: #444654;
        }
      }
    }
  }
}

</style>
