<template>
  <div>
    <h2>Form inputs</h2>
    <label>
      <input type="radio" value="Instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="radio" value="Vk" v-model="social"> Vk
    </label>

    <label>
      <input type="radio" value="Facebook" v-model="social"> Facebook
    </label>

    <hr>


      <li >{{ social }}</li>
   
  </div>
</template>

<script>


  export default {
    data() {
      return {
        social: ''
      }
    }

  }
</script>

<style scoped>
  textarea {
    width: 300px;
    height: 100px;
  }
  p {
    white-space: pre;
  }
</style>
