<template lang="pug">
b-container#adminadoptions
  b-table.text-center(:items="adoptions" :fields='fields' ref='table' striped borderless )
    template(#cell(user)='data')
      | {{ data.item.user.account}}
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
    template(#cell(action)='data')
      b-btn(@click='moreBtn(data.index)') 查看
      b-icon.trashbtn.ml-4(icon='trash' variant='danger' @click='deleteAdoptionById(data.index)')
  b-modal.modal(
    title="領養申請資料"
    centered
    hide-footer
    :id="'modal' + value._id"
    v-for='value in adoptions'
    body-text-variant="daccent")
    h6 領養犬名 {{ value.dog.name }}
    h6 申請人姓名 {{ value.name }}
    h6 申請帳號 {{ value.user.account }}
    h6 聯絡電話 {{ value.phone }}
    h6 說明 {{ value.description }}
    h6 申請日期 {{ new Date(value.date).toLocaleString('zh-tw') }}
    h6 申請編號 {{ value._id }}
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
        { key: 'date', label: '申請日期', sortable: true, class: 'td' },
        { key: '_id', label: '申請編號', class: 'td' },
        { key: 'action', label: '', class: 'td' }
      ]
    }
  },
  methods: {
    moreBtn (index) {
      const thisId = this.adoptions[index]._id
      this.$bvModal.show('modal' + thisId)
    },
    deleteCheck (index) {
      this.$swal({
        icon: 'warning',
        title: '確認刪除?',
        showCancelButton: true
      })
    },
    async deleteAdoptionById (index) {
      try {
        await this.api.delete('/adoptions/' + this.adoptions[index]._id,
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        this.adoptions.splice(index, 1)
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '刪除失敗'
        })
      }
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
#adminadoptions {
  .td {
    max-width: 200px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .modal-body {
    color: rgb(255, 0, 0);
    padding: 3rem;
  }
  .trashbtn {
    cursor: pointer;
  }
}
  </style>
