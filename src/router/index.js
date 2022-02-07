import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Mary’s Doggies'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'Mary’s Doggies'
    }
  },
  {
    path: '/happytail',
    name: 'Happytail',
    component: () => import(/* webpackChunkName: "happytail" */ '../views/Happytail.vue'),
    meta: {
      title: 'Mary’s Doggies'
    }
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue'),
    meta: {
      title: 'Mary’s Doggies'
    }
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: () => import(/* webpackChunkName: "volunteer" */ '../views/Volunteer.vue'),
    meta: {
      title: 'Mary’s Doggies'
    }
  },
  {
    path: '/adoption',
    name: 'Adoption',
    component: () => import(/* webpackChunkName: "adoption" */ '../views/Adoption.vue'),
    meta: {
      title: 'Mary’s Doggies'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
