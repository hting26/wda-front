<template lang="pug">
#memberData
  b-container
    b-row
      b-table-simple
        b-tr {{ data }}
          b-td 帳號
        b-tr 帳號
          b-td 帳號
        b-tr 帳號
          b-td 帳號
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.users = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得失敗'
      })
    }
  }
}
</script>
<style lang="scss">
.col{
  background-color: rgb(215, 250, 218);
}
#memberData {
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
