<template>
  <div id="app">
    <router-view/>
    <navigation-bar/>
  </div>
</template>

<script>

import NavigationBar from '@/components/navigator'

export default {
  components: {
    NavigationBar
  },
  data: () => ({
    transitionName: ''
  })
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
