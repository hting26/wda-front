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
        b-nav-item.navR.mx-auto(v-for='(value, index) in hoverData' :to='value.to' :class='value.class' @mouseover="value.hover = true" @mouseleave="value.hover = false")
          div(v-if="value.hover === false") {{ value.eng }}
          div(v-else) {{ value.ch }}
      b-navbar-nav.ml-auto
        b-nav-item(v-if="user.isLogin && user.isAdmin" to='/admin/products') 管理
        b-nav-item(to='/cart')|物資籃
          b-icon.ml-1(icon='heart')
        b-nav-item(to='/register' v-if="!user.isLogin")|註冊
          //- b-icon(icon='person-fill' )
        b-nav-item(to='/login' v-if="!user.isLogin")|登入
          //- b-icon(icon='person-fill')
        b-nav-item(v-if="user.isLogin" @click="logout")|登出
  div.fakenav
  a.fix(href='#/about')
    .fixText| Donate<br>Today!
      .ch 我要捐款
    img.fixImg(src="./assets/fiximg.png")
  router-view
  #footer
    //- div
    //-   |社團法人台灣瑪莉愛狗協會
    //-   |台內團字號第1101363666號
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
        { eng: 'Donate', ch: '愛心捐贈', hover: false, to: '/donate', class: 'b-dropdown' },
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
::selection{
  background-color: $accent;
  color: white;
}
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
@keyframes jump {
  from {
    transform: translateY(0px)
  }

  50% {
    transform: translateY(-25px)
  }

  to {
    transform: translateY(0px)
  }
}
.fix{
  position: fixed;
  right: -19px;
  bottom: 15%;
  z-index: 9999;
  cursor: pointer;
  transition: .3s;
  &:hover {
    transform: scale(1.2);
  }
  animation: jump 4s ease-in-out infinite;
}
.fixImg{
  width: 100px;
}
.fixText{
  position: fixed;
  bottom: calc(10% - 74px);
  color: $accent;
  font-size: 19px;
  font-weight: 700;
  text-shadow: 0px 0px 8px rgb(255, 255, 255);
  text-align: center;
  line-height: 1.5rem;
  .ch {
    font-weight: normal;
    font-size: 15px;
    color: $daccent;
  }
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
  .navR {
  width: 125px;
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
