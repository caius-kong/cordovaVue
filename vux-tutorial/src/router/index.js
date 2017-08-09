import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SecondComponent from '@/components/SecondComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/second',
      component: SecondComponent
    }
  ]
})
