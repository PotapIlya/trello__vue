import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

export default new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
