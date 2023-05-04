<template>
  <div  class="cart-wrapper md:pb-20 pt-20 pb-10 md:px-40 bg-gray-200">
    <div v-if="cartTotal > 0" class="cart-total fixed top-40 md:top-52 right-6 px-4 py-2 bg-purple-200 font-semibold text-2xl ">
    </div>
    <!-- table -->
    <table>
      <!-- <caption>Cart</caption> -->
      <thead  class="bg-green-200">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price X Quantity</th>
          <th scope="col">Remove/Add</th>
          <th scope="col">X</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart,idx) in carts" :key="idx">
          <td data-label="">
            <div class="image-container mb-5 relative">
              <img class="" :src="'/ProductsImages/'+ cart.img" alt="">
            </div>
          </td>
          <td data-label="Product Name">{{ cart.name }}</td>
          <td data-label="Price">${{ cart.price }}</td>
          <td data-label="Quantity">{{ cart.product_quantity }}</td>
          <td data-label="Price X Quantity">${{ cart.price * cart.product_quantity }}</td>
          <td data-label="Remove/Add">
            <div class="quantity">
              <button class="quantity-btn" :disabled="cart.product_quantity === 0" @click="reduceQuantity(cart)">-</button>
              <button class="quantity-btn" @click="addQuantity(cart)">+</button>
            </div>
          </td>
          <td><button class="px-4 py-2 bg-red-500 text-xs rounded text-white" @click="deleteProduct(cart)">Remove Product</button></td>
        </tr>
        <tr class="mt-8 bg-purple-200">
          <td class="bg-purple-200 w-full">
            Cart Total: ${{ cartTotal }}
          </td>
        </tr>
      </tbody>
    </table>
    <button class="w-full text-center font-semibold mt-10 bg-black text-white px-4 py-2">CHECKOUT</button>
    <!-- table end -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  computed: {
    ...mapGetters({
      allproducts: 'allproducts',
      carts: 'cart',
      cartCount: 'cartCount',
      cartTotal: 'cartTotal'
    })
  },
  methods: {
    reduceQuantity (cart) {
      this.$store.commit('reduceQuantity', cart)
    },
    addQuantity (cart) {
      this.$store.commit('addQuantity', cart)
    },
    deleteProduct (cart) {
      this.$store.commit('deleteProduct', cart)
    }
  }
}
</script>

<style scoped>
.cart-wrapper{
  min-height: 90vh;
}
.image-container{
  width: 80px;
  height: 80px;
  /* border: 2px solid #a3e635; */
}
.cart-total{
  z-index: 9999999999999;
}
.quantity-btn {
  background: black;
  border-color: rgb(79, 250, 60);
  border-radius: 5px;
  color: white;
  font-size: 20px;
  width: 45px;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
}
/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>
