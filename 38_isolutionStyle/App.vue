<template>
  <div>
    <app-counter></app-counter>
    <app-car></app-car>
  </div>
</template>

<script>
  import Car from './Car.vue'
  import Counter from './Counter.vue'

export default {
  components:{
    AppCar: Car,
    AppCounter: Counter
  }
}
</script>

<style>

</style>
