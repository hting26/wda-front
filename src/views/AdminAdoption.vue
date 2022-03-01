<template lang="pug">
b-container#adminadoptions
  b-table.text-center(:items="adoptions" :fields='fields' striped borderless )
    template(#cell(user)='data')
      | {{ data.item.user.account}}
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
    template(#cell(action)='data')
      b-btn(@click='moreBtn(data.index)') 查看
  b-modal(
    :id="'modal' + value._id"
    v-for='value in adoptions')
    | {{ value }}
</template>

<script>
export default {
  data () {
    return {
      form: {},
      adoptions: [],
      fields: [
        { key: 'dog.name', label: '領養犬名', sortable: true, class: 'td' },
        { key: 'name', label: '申請人姓名', class: 'td' },
        { key: 'user', label: '申請帳號', class: 'td' },
        { key: 'phone', label: '聯絡電話', class: 'td' },
        { key: 'description', label: '說明', class: 'td pp' },
        { key: 'date', label: '日期', sortable: true, class: 'td' },
        { key: '_id', label: '申請編號', class: 'td' },
        { key: 'action', label: '', class: 'td' }
      ]
    }
  },
  methods: {
    moreBtn (index) {
      const thisId = this.adoptions[index]._id
      this.$bvModal.show('modal' + thisId)
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
<style lang="scss">
  .td {
    max-width: 200px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  </style>
