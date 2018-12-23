<template lang="html">
  <form v-if="sellers.length > 0" @submit="saveJewel">
    <h1 class="form-header">Nova jóia</h1>
    <div class="form-group">
      <p>Foto:</p>
      <input  v-if="!img"
              type="file"
              @change="onFileChange"
              accept="image/png, image/jpeg"/>
      <div v-else class="image-preview-container">
        <img class="image-preview" :src="img" :alt="name"/>
        <button type="button" class="image-preview-remove" @click="removeFile">
          <fa icon="times"/>
        </button>
      </div>
    </div>
    <div class="form-group">
      <p>Nome:</p>
      <input  type="text"
              v-model="name"
              required
              :class="{ 'is-invalid': $v.name.$invalid && $v.name.$dirty }"
              @input="$v.name.$touch()"/>
    </div>
    <div class="form-group">
      <p>Categoria:</p>
      <select v-model="category"
              required
              :class="{ 'is-invalid': $v.category.$invalid && $v.category.$dirty }"
              @input="$v.category.$touch()">
        <option v-for="category in categories" :key="category.uuid" :value="category">{{ category.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <p>Custo:</p>
      <input  type="number"
              v-model="cost"
              required
              :class="{ 'is-invalid': $v.cost.$invalid && $v.cost.$dirty }"
              @input="$v.cost.$touch()"/>
    </div>
    <div class="form-group">
      <p>Valor de Venda:</p>
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
    <input class="form-submit" :disabled="$v.$invalid" type="submit" value="Salvar">
  </form>
  <div v-else class="info">
    <p><strong>Você precisa cadastrar um vendedor antes.</strong></p>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import { required, decimal, integer, minLength, minValue } from 'vuelidate/lib/validators'

import { alphaSpace } from '@/validations'

export default {
  props: {
    id: {
      type: String,
      required: false
    }
  },
  data: () => ({
    name: '',
    cost: '',
    value: '',
    img: null,
    quantity: '',
    category: ''
  }),
  validations: {
    img: {
      required
    },
    name: {
      required,
      alphaSpace,
      minLength: minLength(3)
    },
    cost: {
      decimal,
      required,
      minValue: minValue(0)
    },
    quantity: {
      integer,
      required,
      minValue: minValue(0)
    },
    value: {
      decimal,
      required,
      minValue: minValue(0)
    },
    category: {
      required
    }
  },
  watch: {
    seller (val) {
      if (val) {
        this.commission = val.commission
      } else {
        this.commission = ''
      }
    },
    cost (val) {
      if (val) {
        this.value = val * 2
      } else {
        this.value = ''
      }
    }
  },
  computed: {
    ...mapGetters('sellers', { sellers: 'set' }),
    ...mapGetters('categories', { categories: 'set' })
  },
  methods: {
    ...mapActions('jewels', { save: 'create' }),
    saveJewel (e) {
      e.preventDefault()
      if (!this.$v.$invalid) {
        this.save({
          img: this.img,
          name: this.name,
          cost: parseFloat(this.cost),
          value: parseFloat(this.value),
          quantity: parseInt(this.quantity),
          category: this.category.uuid
        })
        this.clear()
      }
    },
    clear () {
      this.name = ''
      this.cost = ''
      this.value = ''
      this.img = null
      this.category = ''
      this.quantity = ''
      this.$v.$reset()
    },
    onFileChange (e) {
      let $this = this
      let f = e.target.files[0]
      var reader = new FileReader()

      // Closure to capture the file information.
      reader.onload = ((fileData) => {
        return (e) => {
          $this.img = e.target.result
        }
      })(f)

      // Read in the image file as a data URL.
      reader.readAsDataURL(f)
    },
    removeFile (e) {
      this.img = null
    }
  }
}
</script>

<style scoped lang="scss">

.info {
  margin-top: 15px;
}

.image-preview-container {
  .image-preview {
    height: 100px;
    display: inline-block;
  }

  .image-preview-remove {
    height: 100px;
    width: 30px;
    margin: 0px;
    position: absolute;
    display: inline-block;
  }
}
</style>
