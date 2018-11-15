<template>
  <div>
    <h2>Form inputs</h2>
    <label>
      <input type="checkbox" value="Instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="Vk" v-model="social"> Vk
    </label>

    <label>
      <input type="checkbox" value="Facebook" v-model="social"> Facebook
    </label>

    <hr>

    <ul>
      <li v-for="s in social">{{ s }}</li>
    </ul>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        social: []
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
