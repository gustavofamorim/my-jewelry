<template lang="html">
  <div class="sale">
    <div class="image" :style="imageStyle"></div>
    <div class="info">
      <h3>{{ jewel.name }}</h3>
      <p><fa icon="hand-holding-usd" fixed-width/> R${{ sale.value }}</p>
      <p><fa icon="dollar-sign" fixed-width/> R${{ sale.value - sale.cost }}</p>
      <p><fa icon="tags" fixed-width/> {{ category.name }}</p>
      <p><fa icon="warehouse" fixed-width/> {{ sale.quantity }}</p>
      <p><fa icon="people-carry" fixed-width/> {{ seller.name }}</p>
      <p><fa icon="calendar" fixed-width/> {{ moment(sale.date,'YYYY-MM-DDTHH:mm:ss').fromNow() }}</p>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('sales', { sales: 'all' }),
    ...mapGetters('jewels', { jewels: 'all' }),
    ...mapGetters('sellers', { sellers: 'all' }),
    ...mapGetters('categories', { categories: 'all' }),
    sale () {
      return this.sales[this.id]
    },
    jewel () {
      return this.jewels[this.sale.jewel]
    },
    seller () {
      if (this.sale.seller) {
        return this.sellers[this.sale.seller]
      } else {
        return { name: 'Venda Própria' }
      }
    },
    category () {
      return this.categories[this.jewel.category]
    },
    imageStyle () {
      return {
        backgroundImage: `url('${this.jewel.img}')`
      }
    }
  }
}
</script>

<style scoped lang="scss">

.sale {

  h3, p {
    text-decoration: none;
    color: inherit;
  }

  height: 215px;
  margin: 0px 5px 10px 5px;

  border: 1px solid;
  border-radius: 10px;
  border-color: rgba(0,0,0,0.2);

  display: grid;
  grid-template: "image info";
  grid-column-gap: 10px;
  grid-template-columns: 150px;

  transition: all 0.3s;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);

  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2);
  }

  &:first-child {
    margin-top: 5px;
  }

  .image {
    object-fit: cover;
    max-width: 165px;
    grid-area: image;
    border-radius: 10px 0px 0px 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .info {
    text-align: left;
    grid-area: info;

    p { margin: 0px 0px 5px 0px; }
    h3 { margin: 10px 0px 10px 0px; }
  }
}

</style>
