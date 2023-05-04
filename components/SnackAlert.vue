<template>
  <div>
    <div v-if="snackdetails.show" class="snackalert-wrapper md:px-10 px-4 py-2 md:py-4 bg-green-500 rounded">
        <p class="text-black">{{ snackdetails.messages }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      snackdetails: 'snackdetails'
    })
  }

}
</script>

<style scoped>
.snackalert-wrapper{
    position: absolute;
    width: 40%;
    bottom: -2%;
    left: 50%;
    transform: translate(-50%, -50%);
}
p{
    font-size: 18px;
}
@media screen and (max-width: 600px) {
  .snackalert-wrapper{
    width: 80%;
    left: 25px;
    transform: translate(0, 0);
  }
}
</style>
