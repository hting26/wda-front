import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import VueGtag from 'vue-gtag'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(VueGtag, {
  config: { id: 'G-QPEM5T3798' }
})

Vue.component('ImgInputer', ImgInputer)
Vue.use(VueSweetalert2)
Vue.mixin(mixin)

Vue.config.productionTip = false

// 換頁時滾動置頂
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
