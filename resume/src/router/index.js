import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/ProfileEdit',
      name: 'ProfileEdit',
      component: () => import('../views/ProfileEdit.vue')
    }
  ]
})

export default vueRouter
