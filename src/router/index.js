import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../views/Home.vue'
import { auth } from "@/firebase";


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        meta: {requireAuth: true}
      },
      {
        path: '/ingreso',
        name: 'ingreso',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
      } ,
      {
        path: '/people',
        name: 'people',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/People.vue'),
        meta: {requireAuth: true}
      }
  ]
})

router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  if (to.matched.some(record => record.meta.requireAuth)) {
      if (user) {
          next()
      } else {
          next({ name: 'ingreso' })
      }
  } else {
      next() 
  }
})

export default router
