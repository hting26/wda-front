<template lang="pug">
#app
  b-navbar(toggleable='md' type='light' variant='primary')
    b-navbar-brand(to='/')
      img#logo(src="./assets/logo.png")
    b-navbar-toggle.toggle(target='nav-collapse')
      b-icon(icon='caret-down-fill')
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        b-nav-item.navR.ml-4(v-for='(value, index) in hoverdata' :to='value.to' @mouseover="value.hover = true" @mouseleave="value.hover = false")
          div(v-if="value.hover === false") {{ value.eng }}
          .navCh(v-else) {{ value.ch }}
      b-navbar-nav.ml-auto
        b-nav-item(href='#')
          b-icon(icon='cart-fill')
        b-nav-item(to='/login')
          b-icon(icon='person-fill')
  router-view
  #footer
    div
      |社團法人台灣瑪莉愛狗協會
      |台內團字號第1101363666號
</template>
<script>
export default {
  data () {
    return {
      hoverdata: [
        { eng: 'About', ch: '關於我們', hover: false, to: '/about' },
        { eng: 'Happy Tail', ch: '快樂時光', hover: false, to: '/happytail' },
        { eng: 'Donate', ch: '愛心捐贈', hover: false, to: '/donate' },
        { eng: 'Volunteer', ch: '招募志工', hover: false, to: '/volunteer' },
        { eng: 'Adoption', ch: '我要領養', hover: false, to: '/adoption' }
      ]
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#logo{
  width: 50px;
}
.toggle {
  border: none;
  .b-icon {
    color: $accent;
    }
}
.navR {
  width: 110px;
  // margin-right: 1px;
  // background-color: aqua;
  display: flex;
  justify-content: center;
}
#footer {
  width: 100%;
  height: 90px;
  background-color: $primary;
  bottom: 0;
  position: relative;
  color: $daccent;
  display: flex;
  justify-content: center;
  align-items: center;
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
