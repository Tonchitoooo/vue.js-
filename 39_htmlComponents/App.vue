<template>
  <div>
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="name">Lorem ipsum dolor.</p>
    </app-car>
  </div>
</template>

<script>
  import Car from './Car.vue'


export default {
    data() {
      return {
        carName: 'Ford'
      }
    },
  components:{
    AppCar: Car
  }
}
</script>

<style scoped>
  h2 {
    color: aqua;
  }

</style>
