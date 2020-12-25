import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCustomer from '../views/AddCustomer'
import Details from '../views/Details'
import NotFound from '../components/NotFound'

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
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
