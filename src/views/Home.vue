<template>
  <div>
    <h1>Minhas jóias</h1>
    <jewel-list :jewels="jewels"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import JewelList from '@/components/jewels/jewel-list'

export default {
  components: {
    JewelList
  },
  computed: {
    ...mapGetters('jewels', { jewels: 'filteredIds' })
  }
}
</script>
