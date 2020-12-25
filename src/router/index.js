import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCustomer from '../views/AddCustomer'
import Details from '../views/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addcustomer',
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
