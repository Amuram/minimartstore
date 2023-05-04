<template>
  <div class="nav-wrapper bg-black md:bg-transparent flex justify-between items-center px-10 md:px-20 shadow-sm">
    <div class="brand text-white md:text-black">
        <h1 class="text-3xl font-bold underline">ADELE'S</h1>
        <span>minimart</span>
    </div>
    <div class="hidden md:block">
      <div class="blob  flex relative justify-between items-center mr-20">
        <div class="font-bold  text-gray-700">
        <nuxt-link to="/cart">Cart</nuxt-link>
      </div>
      <div class="cursor-pointer flex justify-center items-center ml-2">
        <div class="sign absolute text-white">{{ cartCount }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="166.092 119.355 611.743 712.071"><defs><clipPath id="a"><path fill="currentColor" d="M734 633q-80 133-264.5 186.5t-261-133Q132 500 193.5 288t275-157.5Q682 185 748 342.5T734 633Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#000" d="M734 633q-80 133-264.5 186.5t-261-133Q132 500 193.5 288t275-157.5Q682 185 748 342.5T734 633Z"/></g></svg>
      </div>
      </div>
    </div>
    <div @click="toggleDropdown" class="cursor-pointer menu relative">
        <div class="bg-lime-500 md:bg-transparent rounded-full">
          <svg class="svg-icon absolute" style="width: 2em; height: 2em;vertical-align: middle;fill: #000;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 341.333333h768a42.666667 42.666667 0 0 0 0-85.333333H128a42.666667 42.666667 0 0 0 0 85.333333z m768 341.333334H128a42.666667 42.666667 0 0 0 0 85.333333h768a42.666667 42.666667 0 0 0 0-85.333333z m0-213.333334H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z"  /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="166.092 119.355 611.743 712.071"><defs><clipPath id="a"><path fill="currentColor" d="M734 633q-80 133-264.5 186.5t-261-133Q132 500 193.5 288t275-157.5Q682 185 748 342.5T734 633Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" d="M734 633q-80 133-264.5 186.5t-261-133Q132 500 193.5 288t275-157.5Q682 185 748 342.5T734 633Z"/></g></svg>
        </div>
    </div>
    <transition name="slide">
      <ul v-if="show_dropdown"  class="list flex justify-center  items-center px-20 font-semibold bg-lime-500">
        <li v-for="(link,idx) in links" :key="idx">
          <nuxt-link :to="link.links_to">
            {{ link.link_text }}
          </nuxt-link>
        </li>
      </ul>
  </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'products',
      carts: 'cart',
      cartCount: 'cartCount'
    })
  },
  data () {
    return {
      show_dropdown: false,
      links: [
        {
          link_text: 'Home',
          links_to: '/'
        },
        {
          link_text: 'Products',
          links_to: '/products'
        },
        {
          link_text: 'about',
          links_to: '/about'
        },
        {
          link_text: 'login',
          links_to: '/login'
        },
        {
          link_text: 'Register',
          links_to: '/register'
        },
        {
          link_text: 'Cart',
          links_to: '/cart'
        }
      ]
    }
  },
  methods: {
    toggleDropdown () {
      this.show_dropdown = !this.show_dropdown
    }
  }
}
</script>

<style>
.nav-wrapper{
 width: 100%;
 height: 80px;
 position: sticky;
 z-index: 99999;
}
.sign{
 top: 4px;
 left: 50px;
}
.svg-icon{
 top: 10px;
 left: 8px;
}
.list{
  position: fixed;
  left: 0;
  top: 10vh;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;
}
li{
 padding: 10px;
}
.slide-enter, .slide-leave-to{
 transform: scaleY(0);
}
a.nuxt-link-active {
 font-weight: bold;
}
a.nuxt-link-exact-active {
 color: #2563eb;
}
</style>
