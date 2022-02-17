<template lang="pug">
#Admin
  b-container
    b-row
      b-col(cols='12')
      b-col(cols='12')
        b-nav(justified align="center")
          b-nav-item(to='/admin/products' exact exact-active-class='active') 募集商品管理
          b-nav-item(to='/admin/orders' exact exact-active-class='active') 募集訂單管理
          b-nav-item(to='/admin/dogs' exact exact-active-class='active') 領養犬管理
          b-nav-item(to='/admin/adoption' exact exact-active-class='active') 領養申請管理
      b-col(cols='12')
        router-view.router
</template>
<style lang="scss">
.col{
  background-color: rgb(215, 250, 218);
}
#Admin {
  min-height: 67vh;
  .nav-link {
    color: $daccent;
    &.active{
      color: $accent;
      font-weight: bold;
    }
  }
  .nav-item {
  font-size: 20px;
  }
  .router {
    // background-color: aquamarine;
    padding: 2rem 0;
  }
}
</style>
