import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBDGq5o59loVGpkL0BAi463zAiPoiGtlPk',
      authDomain: 'tonchitoooo-test.firebaseapp.com',
      databaseURL: 'https://tonchitoooo-test.firebaseio.com',
      projectId: 'tonchitoooo-test',
      storageBucket: 'tonchitoooo-test.appspot.com',
      messagingSenderId: '183847211759'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
