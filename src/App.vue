<template lang="pug">
#app
  b-navbar(toggleable='md' type='light' variant='primary')
    b-navbar-brand(to='/')
      img#logo(src="./assets/logo.png")
    b-navbar-toggle.toggle(target='nav-collapse')
      b-icon(icon='caret-down-fill')
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        b-nav-item.navR.ml-4(href='#' @mouseover="hover = true" @mouseleave="hover = false")
          div(v-if="hover === false" ) About
          .navCh(:style="{display: navHover}") 關於我們
        b-nav-item.navR(href='#' @mouseover="hover = true" @mouseleave="hover = false")
          div(v-if="hover === false" ) Happy Tail
          .navCh(:style="{display: navHover}") 快樂時光
        b-nav-item.navR(href='#') Donate
        b-nav-item.navR(href='#') Volunteer
        b-nav-item.navR(href='#') Adoption
      b-navbar-nav.ml-auto
        b-nav-item(href='#')
          b-icon(icon='cart-fill')
        b-nav-item(to='/login')
          b-icon(icon='person-fill')
  #footer
  router-view
</template>
<script>
export default {
  data () {
    return {
      hover: false
    }
  },
  computed: {
    navHover () {
      if (this.hover === true) {
        return 'block'
      } else {
        return 'none'
      }
    }
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
// #footer {
//   width: 100%;
//   height: 100px;
//   background-color: aqua;
//   bottom: 0;
//   position: fixed;
// }

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
