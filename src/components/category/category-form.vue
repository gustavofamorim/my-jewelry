<template lang="html">
  <form @submit="saveCategory">
    <h1 class="form-header">Nova Categoria</h1>
    <div class="form-group">
      <p>Nome:</p>
      <input  type="text"
              v-model="name"
              required
              :class="{ 'is-invalid': $v.name.$invalid && $v.name.$dirty }"
              @input="$v.name.$touch()"/>
    </div>
    <input class="form-submit" :disabled="$v.$invalid" type="submit" value="Salvar">
  </form>
</template>

<script>

import { mapActions } from 'vuex'

import { alphaSpace } from '@/validations'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  props: {
    id: {
      type: String,
      required: false
    }
  },
  data: () => ({
    name: ''
  }),
  validations: {
    name: {
      alphaSpace,
      required,
      minLength: minLength(3)
    }
  },
  methods: {
    ...mapActions('categories', { save: 'create' }),
    saveCategory (e) {
      e.preventDefault()

      if (!this.$v.$invalid) {
        this.save({
          name: this.name
        })
        this.clear()
      }
    },
    clear () {
      this.name = ''
      this.$v.$reset()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
