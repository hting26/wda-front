<template lang="pug">
#cart.text-center
  b-container
    h3.pageTitle 物資籃 Donate Cart
    b-table.mt-5(:items='products' :fields='fields' :tbody-tr-class="rowClass" show-empty striped borderless)
      template(#empty)
        div.my-5
          p 物資籃目前沒有商品
          a(href='#/donate') 點我去選購捐贈物資 :)
      template(#cell(image)='data')
        img(v-if='data.item.product.image' :src='data.item.product.image' style='height: 50px')
      template(#cell(name)='data')
        | {{ data.item.product.name }}
      template(#cell(price)='data')
        | NT.{{ data.item.product.price }}
      template(#cell(action)='data')
        b-form-spinbutton(v-model='data.item.quantity' min="1" inline @input='updateCart(data.index, data.item.quantity)')
        | &emsp;
        b-icon.trashbtn.ml-2(icon='trash' variant='danger' @click='updateCart(data.index, 0)')
    #checkOut
      b-col.col(cols='12' md='6')
        h3.text-center.mb-4.text-accent 結帳
        b-form
          b-form-group(label='姓名' label-for='name')
            b-form-input#name(v-model="form.name" required placeholder='請輸入姓名' type='text' )
          b-form-group(label='電話' label-for='phone')
            b-form-input#phone(v-model="form.phone" required placeholder='請輸入電話' type='text')
          b-form-group(label='匯款資料' label-for='info')
            b-form-input#info(v-model="form.info" required placeholder='請輸入匯款資料' type='text')
    h5.text-center 總金額 {{ total }}
    b-btn.checkbtn(size="lg" variant='accent' @click='checkout' :disabled='products.length === 0') 結帳
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        phone: '',
        info: ''
      },
      products: [],
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '名稱' },
        { key: 'price', label: '價格' },
        { key: 'action', label: '數量' }
      ]
    }
  },
  methods: {
    async updateCart (index, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(index, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改物資籃失敗'
        })
      }
    },
    async checkout () {
      try {
        await this.api.post('/orders', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '結帳成功'
        })
        this.$router.push('/member/orders')
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    rowClass (item, type) {
      if (!item || type !== 'row') return
      return !item.product.sell ? 'bg-danger' : ''
    }
  },
  computed: {
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>

<style lang="scss">
#cart {
  min-height: 660px;
  .pageTitle {
    color: $accent;
  }
  a {
    color: $daccent;
    text-decoration: none;
  }
  .table {
    border: none;
  }
  .checkbtn {
    color: #fff;
    margin: 1rem 0;
  }
  .trashbtn {
    cursor: pointer;
    font-size: 1.5rem;
  }
  #checkOut {
    margin: 2rem 0;
    width: 100%;
  }
  .col {
    margin: auto 0;
    background: none;
  }
}
@media (min-width:768px) {
  #checkOut {
  display: flex;
  justify-content: center;
  }
}
</style>
