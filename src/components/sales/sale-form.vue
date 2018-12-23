<template lang="html">
  <form @submit="saveSale">
    <h1 class="form-header">Registrar venda</h1>
    <div class="form-group">
      <p>Jóia:</p>
      <jewel-card :id="id"/>
      <p v-if="jewel.quantity === 0">Atenção: Esta jóia está fora de estoque. Ao registrar uma venda será considerado que a quantidade inserida abaixo estava em estoque.</p>
    </div>
    <div class="form-group">
      <p>Valor da venda:</p>
      <input  type="number"
              v-model="value"
              required
              :class="{ 'is-invalid': $v.value.$invalid && $v.value.$dirty }"
              @input="$v.value.$touch()"/>
    </div>
    <div class="form-group">
      <p>Quantidade:</p>
      <input  type="number"
              v-model="quantity"
              required
              :class="{ 'is-invalid': $v.quantity.$invalid && $v.quantity.$dirty }"
              @input="$v.quantity.$touch()"/>
    </div>
    <div class="form-group">
      <p>Vendedor:</p>
      <select v-model="seller"
              :class="{ 'is-invalid': $v.seller.$invalid && $v.seller.$dirty }"
              @input="$v.seller.$touch()">
        <option :value="''">Venda Própria</option>
        <option v-for="seller in sellers" :key="seller.uuid" :value="seller">{{ seller.name }}</option>
      </select>
    </div>
    <div class="form-group" v-if="seller">
      <p>Comissão: (%)</p>
      <input  type="number"
              v-model="commission"
              required
              :class="{ 'is-invalid': $v.commission.$invalid && $v.commission.$dirty }"
              @input="$v.commission.$touch()"/>
    </div>
    <div class="form-group">
      <p>Data:</p>
      <input  type="datetime-local"
              v-model="date"
              required
              :class="{ 'is-invalid': $v.date.$invalid && $v.date.$dirty }"
              @input="$v.date.$touch()"/>
    </div>
    <input class="form-submit" :disabled="$v.$invalid" type="submit" value="Salvar">
  </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import { required, minValue, decimal, integer, between } from 'vuelidate/lib/validators'

import JewelCard from '@/components/jewels/jewel-card'

export default {
  components: { JewelCard },
  props: {
    id: {
      type: String,
      required: false
    }
  },
  data: () => ({
    value: '',
    quantity: 1,
    seller: '',
    commission: 0,
    date: ''
  }),
  validations () {
    let quantityLimit = minValue(1)

    if (this && this.jewel) {
      if (this.jewel.quantity > 0) {
        quantityLimit = between(1, this.jewel.quantity)
      } else {
        quantityLimit = minValue(1)
      }
    }

    return {
      value: {
        decimal,
        required,
        minValue: minValue(0)
      },
      quantity: {
        integer,
        required,
        between: quantityLimit
      },
      seller: {
      },
      commission: {
        integer,
        required,
        between: between(0, 100)
      },
      date: {
        required
      }
    }
  },
  mounted () {
    this.value = this.jewel.value
  },
  watch: {
    seller (val) {
      if (val) {
        this.commission = val.commission
      } else {
        this.commission = 0
      }
    }
  },
  computed: {
    ...mapGetters('sellers', { sellers: 'all' }),
    ...mapGetters('jewels', { jewels: 'all' }),
    jewel () {
      return this.jewels[this.id]
    }
  },
  methods: {
    ...mapActions('sales', { save: 'create' }),
    saveSale (e) {
      e.preventDefault()
      if (!this.$v.$invalid) {

        if(!this.seller) this.commission = 0

        this.save({
          date: this.date,
          value: this.value,
          cost: this.jewel.cost,
          jewel: this.jewel.uuid,
          seller: this.seller.uuid,
          quantity: this.quantity,
          commission: this.commission,
        })

        this.clear()
      }
    },
    clear () {
      this.seller = ''
      this.quantity = 1
      this.commission = 0
      this.value = this.jewel.value
      this.$v.$reset()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
