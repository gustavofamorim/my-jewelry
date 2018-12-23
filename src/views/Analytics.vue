<template lang="html">
  <div class="">
    <h1>Analytics</h1>
    <analytics-filter/>
    <div v-if="filteredIds.length > 0" class="resume">
      <analytics-resume/>
      <analytics-own-resume/>
      <analytics-sellers-resume/>
    </div>
    <p v-else class="no-sells">Nenhuma venda registrada no período escolhido :(</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import AnalyticsFilter from '@/components/analytics/analytics-filter'
import AnalyticsResume from '@/components/analytics/analytics-allsels-resume'
import AnalyticsOwnResume from '@/components/analytics/analytics-ownsells-resume'
import AnalyticsSellersResume from '@/components/analytics/analytics-sellers-resume'

export default {
  components: {
    AnalyticsFilter,
    AnalyticsResume,
    AnalyticsOwnResume,
    AnalyticsSellersResume
  },
  computed: {
    ...mapGetters('analytics', { filteredIds: 'filteredSalesIds' })
  }
}
</script>

<style scoped lang="scss">

.resume {
  margin-top: 10px;
}

.no-sells {
  margin-top: 15px;
}

</style>
