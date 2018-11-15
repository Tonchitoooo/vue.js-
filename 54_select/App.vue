<template>
  <div>
    <h2>Form inputs</h2>

    <select v-model="social">
      <option v-for="s in socialList"> {{ s }}</option>
    </select>

    <hr>
    <p>{{social}}</p>

  </div>
</template>

<script>


  export default {
    data() {
      return {
        dafaultSocial: 'Facebook',
        social: 'Instagram',
        socialList:['Instagram', 'Vk', 'Facebook']
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
