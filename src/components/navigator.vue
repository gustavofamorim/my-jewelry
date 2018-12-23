<template lang="html">
  <div id="nav">
    <router-link class="home" to="/">
      <fa icon="gem" size="2x" fixed-width/>
    </router-link>
    <router-link class="my-sells" to="/my-sells">
      <fa icon="dollar-sign" size="2x" fixed-width/>
    </router-link>
    <router-link class="new-jewel" :to="{ name: 'NewJewel' }">
      <fa icon="plus" size="2x" fixed-width/>
    </router-link>
    <router-link class="analytics" to="/analytics">
      <fa icon="chart-line" size="2x" fixed-width/>
    </router-link>
    <router-link class="config" to="/config">
      <fa icon="cog" size="2x" fixed-width/>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

#nav {
  height: 50px;
  width: 100vw;
  color: rgb(68, 70, 84);
  background-color: rgb(253, 230, 216);

  box-shadow: 0 -1px 1px 0 rgba(0,0,0,0.2);

  bottom: 0px;
  position: fixed;

  display: grid;
  grid-template: "home new-jewel my-sells analytics about";

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
body {
  margin-bottom: 60px !important;
}
</style>
