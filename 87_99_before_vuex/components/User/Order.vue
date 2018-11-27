<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-3 mb-3">Orders</h1>
        <v-list subheader two-line>
          <v-list-tile
            avatar
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                color="success"
                @change="markDone(order)"
                :input.value="order.done"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-action>
              <v-btn
                class="primary"
                :to="'/ad' + order.adId"
              >Open</v-btn>
            </v-list-title-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export  default {
    data () {
      return {
        orders: [
          {
            id: '11',
            name: 'Anton',
            phone: '8(999) 120-45-42',
            adId: '123',
            dane: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>
