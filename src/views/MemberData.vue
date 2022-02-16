<template lang="pug">
#Member
  b-container
    b-row
      b-table-simple
        b-tr 帳號
          b-td 帳號
        b-tr 帳號
          b-td 帳號
        b-tr 帳號
          b-td 帳號
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
