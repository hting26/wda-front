<template lang="pug">
b-container#memberAdoptions
  b-table.text-center(:items="adoptions" :fields='fields' striped borderless)
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
</template>

<script>
export default {
  data () {
    return {
      adoptions: [],
      fields: [
        { key: 'dog.name', label: '領養犬名' },
        { key: 'date', label: '申請日期' },
        { key: '_id', label: '申請編號' }
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

<style lang="scss">
#memberAdoptions {
  // min-height: 60vh;
}
</style>
