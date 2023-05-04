<template>
  <div class="single-product-wrapper flex flex-col mt-2 md:flex-row justify-center items-center">
    <div class="left-container bg-gray-200 grid place-content-center">
      <!-- <product-card :product="product"></product-card> -->
      <div class="image-container relative">
        <!-- <div class="absolute bg-white px-4 top-2 left-2 rounded-sm text-black">{{ product.starrating }}</div> -->
        <img class="" :src="'/ProductsImages/'+ product.img" alt="">
      </div>
    </div>
    <div class="right-container pt-10 md:px-20 ">
      <div>
        <p class="text-4xl">{{ product.name }}</p>
        <p class="mt-1 font-semibold">Rating: {{ product.starrating }}</p>
        <div>
          <p class="text-4xl font-bold text-purple-700 mt-3" >${{ product.price }}</p>
          <!-- <p>{{ products[this.$route.params.id].product_id }}</p> -->
          <p class="mt-5">{{ product.description }}</p>
        </div>
        <div class="quantity mt-5">
            <button class="quantity-btn" :disabled="quantity === 0" @click="quantity > 0 ? quantity-- : quantity = 0">-</button>
            <input type="number" v-model="quantity" />
            <button class="quantity-btn" @click="quantity++">+</button>
        </div>
        <button @click="addToCard(newProduct)" class="w-full py-2 px-4 bg-black text-white hover:bg-lime-500 hover:text-black transition-all rounded mt-10 font-bold">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
/* import ProductCard from '~/components/ProductCard.vue' */
export default {
  /* components: { ProductCard }, */
  layout: 'main',
  data () {
    return {
      show_dropdown: true,
      quantity: null,
      productId: this.$route.params.id,
      newProduct: {}
    }
  },
  computed: {
    ...mapState(['allproducts']),
    product () {
      return this.allproducts.find(el => el.id === this.productId)
    },
    ...mapGetters({
      products: 'products',
      cart: 'cart',
      cartCount: 'cartCount',
      allproducts: 'allproducts'
    })
    /* product () {
      const newProduct = this.products
      newProduct.filter((item) => {
        return item[this.productId]
      })
      console.log('newproduct:' + newProduct)
      return newProduct
    } */
  },
  methods: {
    ...mapActions({
      fetchSingleProduct: 'fetchSingleProduct',
      showsnackalert: 'showsnackalert'
    }),
    async fetchProduct () {
      try {
        const externalData = await this.fetchSingleProduct(this.productId)
        this.newProduct = externalData
        console.log(this.newProduct)
      } catch (error) {
        console.log(error)
      }
    },
    addToCard (product) {
      const newProduct = this.product
      product = {
        ...newProduct,
        product_quantity: Number(this.quantity)
      }
      console.log('quantity:' + typeof this.quantity)
      console.log('product:' + product)
      this.$store.dispatch('addToCart', product)
      this.$store.dispatch('showsnackalert', {
        show: true,
        type: '',
        heading: '',
        messages: 'Prdouct Added to cart succesfully!'
      })
      this.$router.push({
        path: '/products'
      })
    }
  }
}
</script>

<style scoped>
.single-product-wrapper{
  width: 100vw;
  padding: 20px;
}
.left-container{
  width: 50%;
  height: 82vh;
}
.right-container{
  width: 50%;
  height: 82vh;
}
.image-container{
  width: 100%;
  height: 500px;
  /* border: 2px solid #a3e635; */
}
img{
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
}
input,
select {
  width: 60px;
  font-size: 20px;
  margin: 0 5px;
  padding: 2px 0 2px 12px;
  background-color: rgb(219, 221, 219);
}
.quantity-btn {
  background: black;
  border-color: rgb(79, 250, 60);
  border-radius: 5px;
  color: white;
  font-size: 20px;
  width: 45px;
}
@media screen and (max-width: 600px) {
  .right-container{
    width: 100%;
    height: 82vh;
  }
  .left-container{
  width: 100%;
  height: 82vh;
}
}
</style>
