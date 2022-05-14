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
      path: '/SignInPage',
      name: 'SignInPage',
      component: () => import('../views/SignInPage.vue')
    },
    {
      path: '/SignUpPage',
      name: 'SignUpPage',
      component: () => import('../views/SignUpPage.vue')
    },
    {
      path: '/ComfirmSignIn',
      name: 'ComfirmSignIn',
      component: () => import('../views/ComfirmSignIn.vue')
    },
    {
      path: '/ProfileEdit',
      name: 'ProfileEdit',
      component: () => import('../views/ProfileEdit.vue')
    }
  ]
})

export default vueRouter
