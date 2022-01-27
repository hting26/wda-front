<template lang="pug">
#app
  b-navbar(toggleable='lg' type='light' variant='primary')
    b-navbar-brand(href='#')
      img#logo(src="./assets/logo.png")
    b-navbar-toggle.toggle(target='nav-collapse')
      b-icon(icon='caret-down-fill')
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        b-nav-item(href='#') About
        b-nav-item(href='#') Happy Tail
      b-navbar-nav
        b-nav-form
          b-form-input.mr-sm-2(size='sm' placeholder='Search')
          b-button.my-2.my-sm-0(size='sm' type='submit') Search
        b-nav-item-dropdown(text='Lang' right)
          b-dropdown-item(href='#') EN
          b-dropdown-item(href='#') ES
          b-dropdown-item(href='#') RU
          b-dropdown-item(href='#') FA
  router-view
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#logo{
  width: 80px;
}
.toggle{
  border: none;
  .b-icon {
    color: $accent;
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
