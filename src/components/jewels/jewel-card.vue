<template lang="html">
  <div class="jewel" :style="cardStyle">
    <div class="image" :style="imageStyle"></div>
    <div class="info">
      <h3>{{ jewel.name }}</h3>
      <p><fa icon="hand-holding-usd" fixed-width/> R${{ jewel.value }}</p>
      <p><fa icon="file-invoice-dollar" fixed-width/> R${{ jewel.cost }}</p>
      <p><fa icon="tags" fixed-width/> {{ category.name }}</p>
      <p><fa icon="warehouse" fixed-width/> {{ jewel.quantity }}</p>
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
    ...mapGetters('jewels', { jewels: 'all' }),
    ...mapGetters('categories', { categories: 'all' }),
    jewel () {
      return this.jewels[this.id]
    },
    category () {
      return this.categories[this.jewel.category]
    },
    cardStyle () {
      return {
        opacity: this.jewel.quantity > 0 ? 1 : 0.5
      }
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

.jewel {

  h3, p {
    text-decoration: none;
    color: inherit;
  }

  height: 165px;
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
