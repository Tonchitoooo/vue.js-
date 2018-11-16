import VueRouter from 'vue-router'
import Home from './pages/Home'
import Carfull from './pages/Carfull'
import ErrorCmp from './pages/ErrorCmp'

const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], ()=> {
    resolve(
      require('./pages/Cars.vue')
    )
  })
}
const Car = resolve => {
  require.ensure(['./pages/Car.vue'], ()=> {
    resolve(
      require('./pages/Car.vue')
    )
  })
}

export default  new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name:'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path:'full',
          component: Carfull,
          name: 'carFull',
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            next()
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: '/cars'
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }

    if(to.hash) {
      return{ selector: to.hash}
    }
    return {
      x: 0,
      y: 0
    }
  }
})
