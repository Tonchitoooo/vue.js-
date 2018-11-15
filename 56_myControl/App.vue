<template>
  <div>
    <h2>Form inputs</h2>
    <app-Onoff v-model="switched"></app-Onoff>

    <div>
      <h3 v-if="switched"> Component is enabled</h3>
      <h3 v-else> Component is disabled</h3>
    </div>
  </div>
</template>

<script>
  import Onoff from './Onoff.vue'

  export default {

    data() {
      return{
        switched: false
      }
    },

    components: {
      appOnoff: Onoff
    }
  }

</script>
