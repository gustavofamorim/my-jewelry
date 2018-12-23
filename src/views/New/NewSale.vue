<template lang="html">
  <sale-form :id="this.$route.params.uuid"/>
</template>

<script>

import SaleForm from '@/components/sales/sale-form'

export default {
  components: {
    SaleForm
  }
}
</script>

<style lang="css">
</style>
