<template lang="pug">
b-container#adminadoptions
  b-table(:items="adoptions" :fields='fields')
    template(#cell(user)='data')
      | {{ data.item.user.account}}
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
</template>

<script>
export default {
  data () {
    return {
      adoptions: [],
      fields: [
        { key: 'user', label: '申請者' },
        { key: 'dog', label: '領養犬名' },
        { key: 'date', label: '日期' },
        { key: '_id', label: '申請編號' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/adoptions/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.adoptions = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得表單失敗'
      })
    }
  }
}
</script>
