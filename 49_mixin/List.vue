<template>

  <div>
    <h1>list</h1>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
  import ListMixin from './listMixin'
  export default {
    mixins: [ListMixin]
  }
</script>
