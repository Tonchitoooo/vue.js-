<template>
  <div>
    <h2 v-colored:background="'green'">{{ title }}</h2>
    <h2 v-colored:color="'blue'">{{ title }}</h2>


  </div>
</template>

<script>
export default {
    data() {
      return {
        title: 'Hello I am Vue',
        visible: true
      }
  }
}
</script>

<style scoped>

</style>
