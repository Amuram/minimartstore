<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <span class="title">
        Vue tel input
        <span class="green">NUXT</span>
      </span>
    </div>
    <vue-tel-input v-model="phone" class="input" v-validate="required"></vue-tel-input>
    <div style="width: 500px; margin: 20px auto; background: #d9cbf1;">
        <vue-tel-input v-model="vueTel.phone" v-bind="vueTel.props"></vue-tel-input>
    </div>
    <div class="flok-input flex justify-center items-center">
        <div @click="selectCountry" class="img-container flex justify-between">
            <div class="img-inner">
                <img class="flok-image" src="@/assets/images/vector.png" alt="">
            </div>
            <div>
                <ul>
                    <li>
                      <img class="flok-image" src="@/assets/images/vector.png" alt="">
                    </li>
                </ul>
            </div>
            <!-- <img class="flok-image" src="@/assets/images/downarrow.png" alt=""> -->
        </div>
        <input type="" name="Phone number" id="" placeholder="Enter Phonenumber">
    </div>
    <img src="@/assets/images/vector.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      vueTel: {
        phone: '',
        props: {
          preferredCountries: ['US', 'GB'],
          placeholder: 'Enter your phone',
          mode: 'international',
          inputOptions: {
            showDialCode: true,
            styleClasses: 'input-custom'
          },
          disabledFormatting: false,
          wrapperClasses: 'country-phone-input'
        }
      }
    }
  }
}
</script>

<style scoped>
.img-container{
    cursor: pointer;
    width: 40px;
    padding: 8px;
    background: transparent;
}
 .flok-image {
    width: 100%;
    height: 100%;
}
.flok-input{
    width: 40%;
    background: #a985eb;
    border: 2px solid #6370d0;
    border-radius: 4px;
}

.flok-input input {
    width: 95%;
    background: #d9cbf1;
    padding: 8px;
    outline: none;
    color: aliceblue;
}
.flok-input input::focus {
    border: 1px solid red ;
}
.country-phone-input .dropdown:focus {
  outline: none;
  color: grey;
}
.input-custom{
    background: plum;
    border: 1px solid red;
}
.country-phone-input{
    background: plum;
    border: 1px solid red;
    padding-block: 25px;
}
.input{
    display: flex;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 30px;
  margin-bottom: 20px;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
