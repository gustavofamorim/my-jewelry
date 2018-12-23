<template lang="html">
  <form @submit="saveSeller">
    <h1 class="form-header">Novo Vendedor</h1>
    <div class="form-group">
      <p>Nome:</p>
      <input  type="text"
              v-model="name"
              required
              :class="{ 'is-invalid': $v.name.$invalid && $v.name.$dirty }"
              @input="$v.name.$touch()"/>
    </div>
    <div class="form-group">
      <p>Comissão:</p>
      <input  type="number"
              v-model="commission"
              required
              :class="{ 'is-invalid': $v.commission.$invalid && $v.commission.$dirty }"
              @input="$v.commission.$touch()"/>
    </div>
    <input class="form-submit" :disabled="$v.$invalid" type="submit" value="Salvar">
  </form>
</template>

<script>

import { mapActions } from 'vuex'
import { required, numeric, alpha, minLength, between, integer } from 'vuelidate/lib/validators'

export default {
  props: {
    id: {
      type: String,
      required: false
    }
  },
  data: () => ({
    name: '',
    commission: ''
  }),
  validations: {
    name: {
      alpha,
      required,
      minLength: minLength(3)
    },
    commission: {
      integer,
      numeric,
      required,
      between: between(0, 100)
    }
  },
  methods: {
    ...mapActions('sellers', { save: 'create' }),
    saveSeller (e) {
      e.preventDefault()

      if (!this.$v.$invalid) {
        this.save({
          name: this.name,
          commission: parseInt(this.commission)
        })
        this.clear()
      }
    },
    clear () {
      this.name = ''
      this.commission = ''
      this.$v.$reset()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
