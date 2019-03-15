import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import CreateTransaction from '@/pages/CreateTransaction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create-transaction',
      name: 'CreateTransaction',
      component: CreateTransaction
    }
  ]
})
