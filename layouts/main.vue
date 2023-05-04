<template>
  <div>
    <navbar-component></navbar-component>
    <nuxt class="inner-pages" />
    <snack-alert></snack-alert>
  </div>
</template>

<script>
import NavbarComponent from '~/components/NavbarComponent.vue'
import SnackAlert from '~/components/SnackAlert.vue'
export default {
  components: { NavbarComponent, SnackAlert }

}
</script>

<style>

</style>
