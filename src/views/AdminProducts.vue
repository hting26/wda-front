<template lang="pug">
#AdminProduct
  b-btn.addbtn.my-3(v-b-modal.modal-product variant='accent') 新增商品
  b-table.text-center(:items="products" :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style='height: 50px')
    template(#cell(sell)='data')
      | {{ data.item.sell ? 'v' : '' }}
    template(#cell(action)='data')
      b-btn(@click='editProduct(data.index)') 編輯
  b-modal#modal-product(
    size="lg"
    :title="form._id.length > 0 ? '編輯商品' : '新增商品'"
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
      label='商品名稱'
      label-for='input-name'
      description='必填欄位'
      invalid-feedback='商品名稱必填'
      :state='state.name'
    )
      b-form-input#input-name(
        v-model='form.name'
        type='text'
        required
        placeholder='請輸入商品名稱'
        :state='state.name'
      )
    b-form-group(
      label='商品價格'
      label-for='input-price'
      description='必填欄位'
      invalid-feedback='價格必須是 0 元以上'
      :state='state.price'
    )
      b-form-input#input-price(
        v-model.number='form.price'
        type='number'
        min='0'
        required
        placeholder='請輸入商品價格'
        :state='state.price'
      )
    b-form-group(
      label='商品分類'
      label-for='input-category'
      description='必填欄位'
      invalid-feedback='分類必填'
      :state='state.category'
    )
      b-form-select#input-category(
        v-model='form.category'
        required
        :options="categories"
        placeholder='請輸入商品分類'
        :state='state.category'
      )
    b-form-group(
      label='商品說明'
      label-for='input-description'
      description='必填欄位'
      invalid-feedback='說明必填'
      :state='state.description'
    )
      b-form-textarea#input-description(
        v-model='form.description'
        required
        rows="3"
        max-rows="6"
        placeholder='請輸入商品說明'
      )
    b-form-group(label='上架')
      b-form-radio(v-model='form.sell' :value='true') 上架
      b-form-radio(v-model='form.sell' :value='false') 下架
    img-inputer(
      accept="image/*"
      v-model="form.image"
      theme="light"
      size="small"
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
        { key: 'name', label: '名稱', class: 'td' },
        { key: 'price', label: '價格', class: 'td' },
        { key: 'category', label: '分類', class: 'td' },
        { key: 'description', label: '說明', class: 'td' },
        { key: 'sell', label: '上架', class: 'td' },
        { key: 'action', label: '操作', class: 'td' }
      ],
      products: [],
      modalSubmitting: false,
      categories: [
        { text: '請選擇分類', value: '' },
        '飼料', '玩具', '消耗品'
      ],
      form: {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === null ? null : this.form.price >= 0,
        category: this.form.category.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.price || !this.state.category) {
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
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products[this.form.index] = { ...this.form, image: data.result.image }
          this.$refs.table.refresh()
        }

        this.$bvModal.hide('modal-product')
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
    editProduct (index) {
      this.form = { ...this.products[index], image: null, index }
      this.$bvModal.show('modal-product')
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
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
#AdminProduct {
  // background-color: antiquewhite;
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
