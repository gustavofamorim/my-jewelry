<template lang="html">
  <div class="container">
    <div class="nav">
      <router-link class="jewel" :to="{ name: 'NewJewel' }">
        <fa icon="gem" size="2x" fixed-width/>
      </router-link>
      <router-link class="seller" :to="{ name: 'NewSeller' }">
        <fa icon="people-carry" size="2x" fixed-width/>
      </router-link>
      <router-link class="category" :to="{ name: 'NewCategory' }">
        <fa icon="tags" size="2x" fixed-width/>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted () {
    document.querySelector('body').classList.toggle('padding-top-50px')
  },
  beforeDestroy () {
    document.querySelector('body').classList.toggle('padding-top-50px')
  }
}
</script>

<style scoped lang="scss">
.nav {
  z-index: 1000;
  width: 100%;
  height: 50px;
  background-color: #fde6d8;

  box-shadow: -1px 0px 2px 0 rgba(0,0,0,0.2);

  top: 0px;
  position: fixed;

  display: grid;
  grid-template: "jewel seller category";

  a {
    margin: auto;

    svg path {
      fill: rgb(68, 70, 84);
    }

    &.router-link-exact-active {
      svg path {
        fill: white;
      }
    }

    &:focus {
      outline: none;
    }
  }
}
</style>

<style lang="css">
.padding-top-50px {
  padding-top: 50px;
}
</style>
