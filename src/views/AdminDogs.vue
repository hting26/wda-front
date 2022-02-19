<template lang="pug">
#AdminDogs
  b-btn.addbtn.my-3(v-b-modal.modal-dog variant='accent') 新增
  b-table.text-center(:items="dogs" :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style='height: 50px')
    template.text-truncate(#cell(description)='data')
      | {{ data.item.description }}
    template(#cell(sell)='data')
      | {{ data.item.sell ? 'v' : '' }}
    template(#cell(action)='data')
      b-btn(@click='editDog(data.index)') 編輯
  b-modal#modal-dog(
    size="lg"
    :title="form._id.length > 0 ? '編輯' : '新增'"
    centered
    ok-variant='success'
    ok-title='送出'
    cancel-variant='danger'
    cancel-title='取消'
    @ok="submitModal"
    @hidden="resetForm"
    :ok-disabled="modalSubmitting"
    :cancel-disabled="modalSubmitting"
  )
    b-form-group(
      label='名字'
      label-for='input-name'
      description='必填欄位'
      invalid-feedback='名字必填'
      :state='state.name'
    )
      b-form-input#input-name(
        v-model='form.name'
        type='text'
        required
        placeholder='請輸入名字'
        :state='state.name'
      )
    b-form-group(
      label='說明'
      label-for='input-description'
      description='必填欄位'
      invalid-feedback='說明必填'
      :state='state.description'
    )
      b-form-textarea#input-description(
        v-model='form.description'
        required
        rows="6"
        placeholder='請輸入說明'
      )
    b-form-group(label='開放領養')
      b-form-radio(v-model='form.sell' :value='true') 開放
      b-form-radio(v-model='form.sell' :value='false') 不開放
    img-inputer(
      accept="image/*"
      v-model="form.image"
      theme="light"
      size="mediun"
      bottom-text="點選或拖曳圖片以修改"
      hover-text="點選或拖曳圖片以修改"
      placeholder="點選或拖曳選擇圖片"
      :max-size="1024"
      exceed-size-text="檔案大小不能超過"
    )
</template>

<script>
export default {
  data () {
    return {
      fields: [
        { key: 'image', label: '圖片', class: 'td' },
        { key: 'name', label: '名字', class: 'td' },
        { key: 'description', label: '說明', class: 'td' },
        { key: 'sell', label: '開放領養', class: 'td' },
        { key: 'action', label: '操作', class: 'td' }
      ],
      dogs: [],
      modalSubmitting: false,
      form: {
        name: '',
        description: '',
        image: null,
        sell: true,
        _id: '',
        index: -1
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        description: this.form.description.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.description) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/dogs', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.dogs.push(data.result)
        } else {
          const { data } = await this.api.patch('/dogs/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.dogs[this.form.index] = { ...this.form, image: data.result.image }
          this.$refs.table.refresh()
        }

        this.$bvModal.hide('modal-dog')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }

      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: 0,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    },
    editDog (index) {
      this.form = { ...this.dogs[index], image: null, index }
      this.$bvModal.show('modal-dog')
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/dogs/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.dogs = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>

<style lang="scss">
#AdminDogs {
  .addbtn {
    color: #fff;
    left: 100%;
    transform: translateX(-100%);
    position: relative;
  }
  .td {
    max-width: 350px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
