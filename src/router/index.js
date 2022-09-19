import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatePet from '../views/CreatePet'
import ListPet from '../views/ListPet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pet/index'
  },
  {
    path: '/pet/index',
    name: 'list-pet',
    component: ListPet
  },
  {
    path: '/pet/create',
    name: 'create-pet',
    component: CreatePet
  }
]

const router = new VueRouter({
  routes
})

export default router
