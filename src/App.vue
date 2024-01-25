<template>
  <div class="container">
    <div class="navigation">
      <router-link to="/man">Men's Clothing</router-link>
      <router-link to="/woman">Women's Clothing</router-link>
    </div>
    <router-view></router-view>
 </div>
</template>

<script>
import axios from 'axios';
  export default {
  name: 'App',
  data() {
    return {
      product: null,
      index: 1,
    }
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(`/products/${this.index}`)
        if (response.data.category === 'mens clothing' || response.data.category === 'womens clothing') {
          this.product = response.data
        } else {
          this.fetchProduct()
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchNextProduct() {
      this.index++
      if (this.index > 20) {
        this.index = 1
      }
      await this.fetchProduct()
    },
  },
}
</script>

<style>
</style>
