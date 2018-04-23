import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../components/Demo.vue'

Vue.use(Router)
Vue.use(Demo)

export default new Router({
  routes: [
    {
      path: '/',
      component: Demo
    }
  ]
})
