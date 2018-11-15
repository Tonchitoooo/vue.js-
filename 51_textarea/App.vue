<template>
  <div>
    <h2>Form inputs</h2>
    <textarea v-model="textarea"></textarea>
    <p>{{textarea}}</p>

    <p>{{ name }}</p>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        textarea: 'Initial state'
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
