<template lang="pug">
#Member
  b-container
    b-row
      b-col(cols='12')
        b-nav(justified align="center")
          b-nav-item(to='/member/data' exact exact-active-class='active') 會員資料
          b-nav-item(to='/member/orders' exact exact-active-class='active') 訂單資料
          b-nav-item(to='/member/adoption' exact exact-active-class='active') 領養資料
      b-col(cols='12')
        router-view.router
</template>
<style lang="scss">
.col{
  background-color: rgb(215, 250, 218);
}
#Member {
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
