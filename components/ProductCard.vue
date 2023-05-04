<template>
  <div class="product-card-wrapper mt-5">
    <nuxt-link :to="'/products/' + product.id">
        <div class="image-container relative">
            <div class="absolute bg-white px-4 top-2 left-2 rounded-sm text-black">{{ product.starrating }}</div>
            <img class="" :src="'/ProductsImages/'+ product.img" alt="">
        </div>
        <div class="product-details-container bg-lime-100 px-2 ">
            <div class="product-description text-white">
                <p>{{ product.name }}</p>
                <p>${{ product.price }}</p>
            </div>
        </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    sliceString () {
      let newStr = this.product.title.split('') // or newStr = [...str];
      newStr.splice(6, 80)
      newStr = newStr.join('')
      return newStr
    }
  }
}
</script>

<style scoped>
.product-card-wrapper{
  width: 200px;
  height: 300px;
  border-radius: 25px;
  transition: all linear .2s;
}
.product-card-wrapper:hover{
  transform: scale(1.1);
}
.image-container{
  width: 100%;
  height: 300px;
  /* border: 2px solid #a3e635; */
}
img{
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
}
.product-details-container{
  border-radius: 0px 0px 5px 5px;
}
p{
  font-size: 12px;
  color: black;
}
</style>
