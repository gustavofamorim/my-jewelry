<template lang="html">
  <div class="config">
    <h1>Configurações</h1>
    <google-api/>
    <hr/>
    <icons-meaning/>
    <hr/>
    <app-data-management/>
  </div>
</template>

<script>

import GoogleApi from '@/components/config/google'
import IconsMeaning from '@/components/config/icons-meaning'
import AppDataManagement from '@/components/config/app-data-management'

export default {
  components: {
    GoogleApi,
    IconsMeaning,
    AppDataManagement
  }
}
</script>

<style scoped lang="scss">
.config {
  text-align: left;
  margin: 10px;

  hr {
    margin: 15px 0px 0px 0px;
  }
}
</style>
