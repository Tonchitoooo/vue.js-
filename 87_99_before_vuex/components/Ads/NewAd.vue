<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            multi-line
            :rules="[v => !!v || 'Description is required']"
          ></v-text-field>
        </v-form>
        <v-layout row>
          <v-flex xs12 mb-3>
            <v-btn
              class="warning"
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              @click="loader = 'loading3'"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="150px">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Add to promo?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout><v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export  default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad)
        }
      }
    }
  }
</script>
