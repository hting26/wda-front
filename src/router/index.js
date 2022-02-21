import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

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
      title: 'Mary’s Doggies | About'
    }
  },
  {
    path: '/happytail',
    name: 'Happytail',
    component: () => import(/* webpackChunkName: "happytail" */ '../views/Happytail.vue'),
    meta: {
      title: 'Mary’s Doggies | Happytail'
    }
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue'),
    meta: {
      title: 'Mary’s Doggies | Donate'
    }
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: () => import(/* webpackChunkName: "volunteer" */ '../views/Volunteer.vue'),
    meta: {
      title: 'Mary’s Doggies | Volunteer'
    }
  },
  {
    path: '/adoption',
    name: 'Adoption',
    component: () => import(/* webpackChunkName: "adoption" */ '../views/Adoption.vue'),
    meta: {
      title: 'Mary’s Doggies | Adoption'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: 'Mary’s Doggies | Register'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'Mary’s Doggies | Login'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: 'Mary’s Doggies | Cart',
      login: true
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    children: [
      {
        path: 'data',
        name: 'MemberData',
        component: () => import(/* webpackChunkName: "member" */ '../views/MemberData.vue'),
        meta: {
          login: true,
          title: 'Mary’s Doggies | Member'
        }
      },
      {
        path: 'orders',
        name: 'MemberOrders',
        component: () => import(/* webpackChunkName: "member" */ '../views/MemberOrders.vue'),
        meta: {
          login: true,
          title: 'Mary’s Doggies | Member'
        }
      },
      {
        path: 'adoptions',
        name: 'MemberAdoption',
        component: () => import(/* webpackChunkName: "member" */ '../views/MemberAdoption.vue'),
        meta: {
          login: true,
          title: 'Mary’s Doggies | Member'
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mary’s Doggies | 募集商品管理'
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mary’s Doggies | 募集訂單管理'
        }
      },
      {
        path: 'dogs',
        name: 'AdminDogs',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminDogs.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mary’s Doggies | 領養犬管理'
        }
      },
      {
        path: 'adoptions',
        name: 'AdminAdoption',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminAdoption.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mary’s Doggies | 領養申請管理'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
