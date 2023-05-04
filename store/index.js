/* import { auth } from '~/plugins/firebase'
import { createUserWithEmailAndPassword } from 'firebase/config' */
import data from '~/static/storedata.json'

export const state = () => ({
  user: null,
  snackAlert: {
    show: false,
    type: '',
    heading: '',
    messages: ''
  },
  loading: false,
  notification: 0,
  cart: [],
  allproducts: data
})
export const actions = {
  addToCart ({ commit }, payload) {
    commit('addToCart', payload)
  },
  showsnackalert ({ commit }, data) {
    commit('updatesnackalert', data)
    setTimeout(() => {
      commit('resetSnackAlert')
    }, 3000)
  }
}
export const mutations = {
  addToCart (state, payload) {
    const itemFound = state.cart.find(el => el.id === payload.id)
    console.log(itemFound)
    itemFound ? (itemFound.product_quantity += payload.product_quantity) : state.cart.push(payload)
  },
  deleteProduct (state, payload) {
    const index = state.cart.findIndex(el => el.id === payload.id)
    console.log(index)
    state.cart.splice(index, 1)
  },
  reduceQuantity (state, payload) {
    const itemFound = state.cart.find(el => el.id === payload.id)
    console.log(itemFound)
    itemFound.product_quantity--
  },
  addQuantity (state, payload) {
    const itemFound = state.cart.find(el => el.id === payload.id)
    console.log(itemFound)
    itemFound.product_quantity++
  },
  updatesnackalert (state, data) {
    state.snackAlert.show = data.show
    state.snackAlert.type = data.type
    state.snackAlert.messages = data.messages
    state.snackAlert.heading = data.heading
  },
  resetSnackAlert (state) {
    state.snackAlert.show = false
    state.snackAlert.type = ''
    state.snackAlert.heading = ''
    state.snackAlert.messages = []
  }
}
export const getters = {
  allproducts (state) {
    return state.allproducts
  },
  cart (state) {
    return state.cart
  },
  cartCount (state) {
    if (!state.cart.length) {
      return 0
    }
    return state.cart.reduce((ac, next) => ac + next.product_quantity, 0)
  },
  cartTotal (state) {
    if (!state.cart.length) {
      return 0
    }
    return state.cart.reduce((ac, next) => ac + next.product_quantity * next.price, 0)
  },
  snackdetails (state) {
    return state.snackAlert
  }
}
