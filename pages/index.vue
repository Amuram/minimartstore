<template>
  <div class="home-wrapper flex flex-col md:flex-row justify-center items-center">
    <div class="left-container w-full bg-transparent pt-10 md:pl-20">
      <div class="mt-5 md:mt-20">
        <div class=" font-bold">
          <p class="text-8xl text-center md:text-left">Easy Shop!</p>
          <div class="mt-5 text-center md:text-left">
            <p class="text-3xl">Amazing Deals Happening Now on</p>
            <span class="underline font-semibold">Adele's</span>
            minimart
          </div>
        </div>
        <div class="mt-5 md:mt-40">
          <div class=" flex items-center mt-10">
            <div class="relative mr-8">
              <div class="absolute top-8 left-6"><img src="@/assets/images/svg/inclined-dollar-tag.svg" alt=""></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="166.092 119.355 611.743 712.071"><defs><clipPath id="a"><path fill="currentColor" d="M734 633q-80 133-264.5 186.5t-261-133Q132 500 193.5 288t275-157.5Q682 185 748 342.5T734 633Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#a3e635" d="M734 633q-80 133-264.5 186.5t-261-133Q132 500 193.5 288t275-157.5Q682 185 748 342.5T734 633Z"/></g></svg>
            </div>
            <div><p class="text-4xl">SHOP NOW!</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-container bg-transparent">
      <div class="clipped-rectangle hidden md:block"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  components: { },
  ...mapGetters({
    products: 'products'
  })
}
</script>
<style scoped>
.new-wrapper{
  background-color: aqua;
}
.home-wrapper{
    width: 100vw;
    padding: 20px;
    margin-top: 0px;
}
.left-container{
    width: 50%;
    height: 82vh;
}
.right-container{
    width: 50%;
    height: 82vh;
    position: relative;
}
.clipped-rectangle{
    width: 100%;
    height: 130vh;
    position: absolute;
    top: -315px;
    right: -20px;
    z-index: -20;
    background-color: black;
    background-image: url('./assets/images/lady-glasses.jpg');
    -webkit-clip-path: polygon(38% 8%, 100% 12%, 66% 100%, 0 100%);
    clip-path: polygon(38% 8%, 100% 12%, 66% 100%, 0 100%);
}
::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar:hover {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: none;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgb(132 204 22);
  width: 4px;
  cursor: pointer;
}
/* home wrapper media screen */
/* @media screen and (max-width: 600px) {
  width: 100%;
  height: 82vh;
} */
</style>
