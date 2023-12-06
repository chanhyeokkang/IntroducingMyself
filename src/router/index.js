import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactMe from '../views/ContactMe.vue'
import Education from '../views/Education.vue'
import HomeView from '../views/HomeView.vue'
import MyProject from '../views/MyProject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/education',
    name: 'Education',
    component: Education 
  },
  {
    path: '/myproject',
    name: 'MyProject',
    component: MyProject 
  },
  {
    path: '/contactme',
    name: 'ContactMe',
    component: ContactMe
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router