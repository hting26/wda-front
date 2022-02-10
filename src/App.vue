<template lang="pug">
#app
  b-navbar(toggleable='md' type='light' variant='primary')
    b-navbar-brand(to='/')
      img#logo(src="./assets/logo.png")
    b-navbar-toggle.toggle(target='nav-collapse')
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        b-nav-item.navR.mx-auto(v-for='(value, index) in hoverData' :to='value.to' @mouseover="value.hover = true" @mouseleave="value.hover = false")
          div(v-if="value.hover === false") {{ value.eng }}
          div(v-else) {{ value.ch }}
      b-navbar-nav.ml-auto
        b-nav-item(to='/cart')|物資籃
          b-icon.ml-1(icon='heart')
        b-nav-item(to='/register' v-if="!user.isLogin")|註冊
          //- b-icon(icon='person-fill' )
        b-nav-item(to='/login' v-if="!user.isLogin")|登入
          //- b-icon(icon='person-fill')
        b-nav-item(v-if="user.isLogin")|登出
  div.fakenav
  router-view
  #footer
    div
      |社團法人台灣瑪莉愛狗協會
      |台內團字號第1101363666號
    div
      |泰山職訓局學員作品
      |僅供學習用途
</template>
<script>
export default {
  data () {
    return {
      hoverData: [
        { eng: 'About', ch: '關於我們', hover: false, to: '/about' },
        { eng: 'Happy Tail', ch: '快樂時光', hover: false, to: '/happytail' },
        { eng: 'Donate', ch: '愛心捐贈', hover: false, to: '/donate' },
        { eng: 'Volunteer', ch: '招募志工', hover: false, to: '/volunteer' },
        { eng: 'Adoption', ch: '我要領養', hover: false, to: '/adoption' }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
  text-align: center;
}
#logo {
  width: 30px;
}
.toggle {
  border: none;
  .b-icon {
    color: $accent;
    }
}
.navR {
  width: 100px;
  // margin-right: 1px;
  // background-color: aqua;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
}
#footer {
  width: 100%;
  min-height: 100px;
  background-color: $primary;
  bottom: 0;
  position: relative;
  color: $daccent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.fakenav{
  height: 59.59px;
  width: 100%;
}
@media (min-width:768px) {
  #logo {
  width: 55px;
  }
  .fakenav{
  height: 83.17px;
  width: 100%;
}
}
@media (min-width:992px) {
  #logo {
  width: 95px;
  }
  .fakenav{
  height: 124.77px;
  width: 100%;
}
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
