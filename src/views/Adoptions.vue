<template lang="pug">
b-container#adoptions
  b-table(:items="adoptions" :fields='fields')
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
    template(#cell(dogs)='data')
      ul
        li(v-for='dog in data.item.dogs' :key='dog._id') {{ dog.dog.name }}
</template>

<script>
export default {
  data () {
    return {
      adoptions: [],
      fields: [
        { key: '_id', label: '申請編號' },
        { key: 'date', label: '日期' },
        { key: 'dogs', label: '' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/adoptions/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.adoptions = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
