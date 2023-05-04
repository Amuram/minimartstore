<template>
  <div class="products-page-wrapper md:p-20 bg-white">
    <div class="text-4xl font-semibold">
      <h1>All Products</h1>
    </div>
    <div  class="flex justify-center md:justify-between items-center flex-wrap gap-y-10 mt-10">
      <div v-for="(product,idx) in allproducts" :key="idx" >
        <product-card :product="product"></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: { ProductCard },
  layout: 'main',
  computed: {
    ...mapGetters({
      products: 'products',
      allproducts: 'allproducts'
    })
  },
  data () {
    return {
      show_dropdown: true,
      newProducts: []
    }
  },
  methods: {
    ...mapActions({
      fetchNewProducts: 'fetchNewProducts'
    }),
    async fetchFakeProducts () {
      try {
        const externalData = await this.fetchNewProducts()
        this.newProducts = externalData
        console.log(this.newProducts)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.products-page-wrapper{
    width: 100%;
}
</style>
